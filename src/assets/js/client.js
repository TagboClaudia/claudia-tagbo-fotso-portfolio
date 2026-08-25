/**
 * client.js
 * AI Model Client - Handles API communication with DeepSeek via HuggingFace
 * Supports OpenAI-compatible endpoint and streaming
 * JavaScript version matching the Python implementation
 */

// =============================================
// Base Model Client (Abstract Base Class)
// =============================================

class BaseModelClient {
    /**
     * Send chat completion request to model
     * @param {Array} messages - Array of message objects {role, content}
     * @param {Object} options - Additional options
     * @returns {Promise<string>} Response text
     */
    async chatCompletion(messages, options = {}) {
        throw new Error("chatCompletion must be implemented by subclass");
    }

    /**
     * Stream chat completion from model with callback
     * @param {Array} messages - Array of message objects
     * @param {Object} options - Additional options
     * @param {Function} onChunk - Callback for each chunk
     * @returns {Promise<string>} Full response text
     */
    async chatCompletionStream(messages, options = {}, onChunk = null) {
        throw new Error("chatCompletionStream must be implemented by subclass");
    }
}

// =============================================
// DeepSeek OpenAI Client
// =============================================

class DeepSeekOpenAIClient extends BaseModelClient {
    /**
     * @param {Object} config - Configuration object
     * @param {string} config.apiKey - API key (HF_TOKEN)
     * @param {string} config.model - Model name
     * @param {string} config.baseUrl - API base URL
     */
    constructor(config = {}) {
        super();
        this.apiKey = config.apiKey || (typeof process !== 'undefined' ? process?.env?.HF_TOKEN : null) || null;
        this.model = config.model || "deepseek-ai/DeepSeek-V4-Pro:novita";
        this.baseUrl = config.baseUrl || "https://router.huggingface.co/v1";

        // Store for fetch requests
        this.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
        };
    }

    /**
     * Non-streaming chat completion
     * @param {Array} messages - Message objects
     * @param {Object} options - Options (temperature, max_tokens)
     * @returns {Promise<string>}
     */
    async chatCompletion(messages, options = {}) {
        const temperature = options.temperature ?? 0.7;
        const maxTokens = options.max_tokens ?? 1000;

        try {
            const response = await fetch(`${this.baseUrl}/chat/completions`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: temperature,
                    max_tokens: maxTokens,
                    stream: false
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            return data.choices[0]?.message?.content || "";
        } catch (error) {
            console.error("DeepSeek API Error:", error);
            throw new Error(`DeepSeek API Error: ${error.message}`);
        }
    }

    /**
     * Streaming chat completion
     * @param {Array} messages - Message objects
     * @param {Object} options - Options
     * @param {Function} onChunk - Callback for each chunk
     * @returns {Promise<string>}
     */
    async chatCompletionStream(messages, options = {}, onChunk = null) {
        const temperature = options.temperature ?? 0.7;
        const maxTokens = options.max_tokens ?? 1000;
        let fullResponse = "";

        try {
            const response = await fetch(`${this.baseUrl}/chat/completions`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: temperature,
                    max_tokens: maxTokens,
                    stream: true
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorText}`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (trimmed === "" || trimmed === "data: [DONE]") continue;
                    if (trimmed.startsWith("data: ")) {
                        try {
                            const jsonStr = trimmed.substring(6);
                            const data = JSON.parse(jsonStr);
                            const content = data.choices[0]?.delta?.content;
                            if (content) {
                                fullResponse += content;
                                if (onChunk) {
                                    onChunk(content);
                                }
                            }
                        } catch (e) {
                            // Ignore parse errors for incomplete chunks
                        }
                    }
                }
            }

            return fullResponse;
        } catch (error) {
            console.error("DeepSeek API Stream Error:", error);
            throw new Error(`DeepSeek API Error: ${error.message}`);
        }
    }
}

// =============================================
// DeepSeek Simple Client (Synchronous-style)
// =============================================

class DeepSeekSimpleClient {
    /**
     * Simple synchronous-style client
     * @param {Object} config - Configuration
     */
    constructor(config = {}) {
        this.apiKey = config.apiKey || (typeof process !== 'undefined' ? process?.env?.HF_TOKEN : null) || null;
        this.model = config.model || "deepseek-ai/DeepSeek-V4-Pro:novita";
        this.baseUrl = config.baseUrl || "https://router.huggingface.co/v1";
        this.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
        };
    }

    /**
     * Send chat completion request
     * @param {Array} messages - Message objects
     * @param {Object} options - Options
     * @param {boolean} stream - Whether to stream
     * @returns {Promise<string|ReadableStream>}
     */
    async chatCompletion(messages, options = {}, stream = false) {
        const temperature = options.temperature ?? 0.7;
        const maxTokens = options.max_tokens ?? 1000;

        try {
            const response = await fetch(`${this.baseUrl}/chat/completions`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: temperature,
                    max_tokens: maxTokens,
                    stream: stream
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API Error: ${response.status} - ${errorText}`);
            }

            if (stream) {
                return response.body;
            } else {
                const data = await response.json();
                return data.choices[0]?.message?.content || "";
            }
        } catch (error) {
            console.error("DeepSeek API Error:", error);
            throw new Error(`DeepSeek API Error: ${error.message}`);
        }
    }

    /**
     * Simple ask method
     * @param {string} question - User question
     * @param {string} systemPrompt - Optional system prompt
     * @returns {Promise<string>}
     */
    async simpleAsk(question, systemPrompt = null) {
        const messages = [];
        if (systemPrompt) {
            messages.push({ role: "system", content: systemPrompt });
        }
        messages.push({ role: "user", content: question });
        return await this.chatCompletion(messages, {}, false);
    }

    /**
     * Simple ask with streaming
     * @param {string} question - User question
     * @param {string} systemPrompt - Optional system prompt
     * @param {Function} onChunk - Callback for each chunk
     * @returns {Promise<string>}
     */
    async simpleAskStream(question, systemPrompt = null, onChunk = null) {
        const messages = [];
        if (systemPrompt) {
            messages.push({ role: "system", content: systemPrompt });
        }
        messages.push({ role: "user", content: question });

        const temperature = 0.7;
        const maxTokens = 1000;
        let fullResponse = "";

        try {
            const response = await fetch(`${this.baseUrl}/chat/completions`, {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    model: this.model,
                    messages: messages,
                    temperature: temperature,
                    max_tokens: maxTokens,
                    stream: true
                })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (trimmed === "" || trimmed === "data: [DONE]") continue;
                    if (trimmed.startsWith("data: ")) {
                        try {
                            const jsonStr = trimmed.substring(6);
                            const data = JSON.parse(jsonStr);
                            const content = data.choices[0]?.delta?.content;
                            if (content) {
                                fullResponse += content;
                                if (onChunk) {
                                    onChunk(content);
                                }
                            }
                        } catch (e) {
                            // Ignore parse errors
                        }
                    }
                }
            }

            return fullResponse;
        } catch (error) {
            console.error("Stream error:", error);
            throw error;
        }
    }
}

// =============================================
// DeepSeek Hybrid Client (Fallback Support)
// =============================================

class DeepSeekHybridClient extends BaseModelClient {
    /**
     * Hybrid client with fallback between OpenAI and HuggingFace backends
     * @param {Object} config - Configuration
     * @param {string} prefer - Preferred backend ('openai' or 'huggingface')
     */
    constructor(config = {}, prefer = "openai") {
        super();
        this.prefer = prefer;
        this.openaiClient = null;
        this.hfClient = null;

        try {
            this.openaiClient = new DeepSeekOpenAIClient(config);
        } catch (e) {
            console.warn("OpenAI client initialization failed:", e);
        }

        try {
            // For HuggingFace client, use same implementation with different base URL
            this.hfClient = new DeepSeekOpenAIClient({
                ...config,
                baseUrl: "https://api-inference.huggingface.co/v1"
            });
        } catch (e) {
            console.warn("HuggingFace client initialization failed:", e);
        }
    }

    async chatCompletion(messages, options = {}) {
        if (this.prefer === "openai" && this.openaiClient) {
            try {
                return await this.openaiClient.chatCompletion(messages, options);
            } catch (e) {
                console.warn("OpenAI client failed:", e.message);
                if (this.hfClient) {
                    return await this.hfClient.chatCompletion(messages, options);
                }
                throw e;
            }
        } else if (this.prefer === "huggingface" && this.hfClient) {
            try {
                return await this.hfClient.chatCompletion(messages, options);
            } catch (e) {
                console.warn("HuggingFace client failed:", e.message);
                if (this.openaiClient) {
                    return await this.openaiClient.chatCompletion(messages, options);
                }
                throw e;
            }
        }
        throw new Error("No working client available");
    }

    async chatCompletionStream(messages, options = {}, onChunk = null) {
        if (this.prefer === "openai" && this.openaiClient) {
            try {
                return await this.openaiClient.chatCompletionStream(messages, options, onChunk);
            } catch (e) {
                console.warn("OpenAI streaming failed:", e.message);
                if (this.hfClient) {
                    return await this.hfClient.chatCompletionStream(messages, options, onChunk);
                }
                throw e;
            }
        } else if (this.prefer === "huggingface" && this.hfClient) {
            try {
                return await this.hfClient.chatCompletionStream(messages, options, onChunk);
            } catch (e) {
                console.warn("HuggingFace streaming failed:", e.message);
                if (this.openaiClient) {
                    return await this.openaiClient.chatCompletionStream(messages, options, onChunk);
                }
                throw e;
            }
        }
        throw new Error("No working client available");
    }
}

// =============================================
// Model Client Factory
// =============================================

class ModelClientFactory {
    /**
     * Create a model client instance
     * @param {string} clientType - 'openai', 'simple', 'hybrid'
     * @param {Object} config - Configuration options
     * @returns {BaseModelClient}
     */
    static createClient(clientType = "openai", config = {}) {
        switch (clientType) {
            case "openai":
                return new DeepSeekOpenAIClient(config);
            case "simple":
                return new DeepSeekSimpleClient(config);
            case "hybrid":
                return new DeepSeekHybridClient(config);
            default:
                throw new Error(`Unknown client type: ${clientType}`);
        }
    }

    /**
     * Create simple synchronous-style client
     * @param {Object} config - Configuration
     * @returns {DeepSeekSimpleClient}
     */
    static createSimpleClient(config = {}) {
        return new DeepSeekSimpleClient(config);
    }
}

// =============================================
// Quick Test Function
// =============================================

async function quickTest() {
    console.log("Testing DeepSeek API connection...");

    // Check if API key is available
    const apiKey = (typeof process !== 'undefined' ? process?.env?.HF_TOKEN : null) || null;
    if (!apiKey) {
        console.warn("No HF_TOKEN found in environment. Please set HF_TOKEN to test API.");
        console.log("Skipping API test. Using fallback mode.");
        return;
    }

    const client = new DeepSeekSimpleClient({ apiKey });

    console.log("\n1. Testing non-streaming:");
    try {
        const response = await client.simpleAsk("What is the capital of France?");
        console.log(`Response: ${response}`);
    } catch (e) {
        console.error("Non-streaming test failed:", e.message);
    }

    console.log("\n2. Testing streaming:");
    try {
        console.log("Streaming response: ");
        await client.simpleAskStream("Say 'Hello, world!' in French", null, (chunk) => {
            (typeof process !== 'undefined' && process?.stdout?.write(chunk));
        });
        console.log("\n");
    } catch (e) {
        console.error("Streaming test failed:", e.message);
    }

    console.log("✓ API test complete!");
}

// =============================================
// Exports
// =============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BaseModelClient,
        DeepSeekOpenAIClient,
        DeepSeekSimpleClient,
        DeepSeekHybridClient,
        ModelClientFactory,
        quickTest
    };
}

if (typeof window !== 'undefined') {
    window.BaseModelClient = BaseModelClient;
    window.DeepSeekOpenAIClient = DeepSeekOpenAIClient;
    window.DeepSeekSimpleClient = DeepSeekSimpleClient;
    window.DeepSeekHybridClient = DeepSeekHybridClient;
    window.ModelClientFactory = ModelClientFactory;
    window.quickTest = quickTest;
}