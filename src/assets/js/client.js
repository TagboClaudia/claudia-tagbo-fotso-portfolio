/**
 * client.js
 * AI Model Client - Handles API communication with DeepSeek via HuggingFace
 */

// =============================================
// Base Model Client
// =============================================

class BaseModelClient {
    async chatCompletion(messages, options = {}) {
        throw new Error("chatCompletion must be implemented by subclass");
    }

    async chatCompletionStream(messages, options = {}, onChunk = null) {
        throw new Error("chatCompletionStream must be implemented by subclass");
    }
}

// =============================================
// DeepSeek OpenAI Client
// =============================================

class DeepSeekOpenAIClient extends BaseModelClient {
    constructor(config = {}) {
        super();
        // Get token from config, localStorage, or sessionStorage
        this.apiKey = config.apiKey ||
                      (typeof window !== 'undefined' ? localStorage.getItem('HF_TOKEN') : null) ||
                      (typeof window !== 'undefined' ? sessionStorage.getItem('HF_TOKEN') : null) ||
                      null;
        this.model = config.model || "deepseek-ai/DeepSeek-V4-Pro";
        this.baseUrl = config.baseUrl || "https://router.huggingface.co/v1";

        this.headers = this.apiKey ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
        } : {
            "Content-Type": "application/json"
        };
    }

    async chatCompletion(messages, options = {}) {
        const temperature = options.temperature ?? 0.7;
        const maxTokens = options.max_tokens ?? 1000;

        if (!this.apiKey) {
            console.warn('⚠️ No API key found! Using fallback.');
            return null;
        }

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
            return null;
        }
    }

    async chatCompletionStream(messages, options = {}, onChunk = null) {
        const temperature = options.temperature ?? 0.7;
        const maxTokens = options.max_tokens ?? 1000;
        let fullResponse = "";

        if (!this.apiKey) {
            console.warn('⚠️ No API key found! Using fallback.');
            return null;
        }

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
                            // Ignore parse errors
                        }
                    }
                }
            }

            return fullResponse;
        } catch (error) {
            console.error("DeepSeek API Stream Error:", error);
            return null;
        }
    }
}

// =============================================
// DeepSeek Simple Client
// =============================================

class DeepSeekSimpleClient {
    constructor(config = {}) {
        this.apiKey = config.apiKey ||
                      (typeof window !== 'undefined' ? localStorage.getItem('HF_TOKEN') : null) ||
                      (typeof window !== 'undefined' ? sessionStorage.getItem('HF_TOKEN') : null) ||
                      null;
        this.model = config.model || "deepseek-ai/DeepSeek-V4-Pro";
        this.baseUrl = config.baseUrl || "https://router.huggingface.co/v1";

        this.headers = this.apiKey ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
        } : {
            "Content-Type": "application/json"
        };
    }

    async chatCompletion(messages, options = {}, stream = false) {
        const temperature = options.temperature ?? 0.7;
        const maxTokens = options.max_tokens ?? 1000;

        if (!this.apiKey) {
            console.warn('⚠️ No API key found!');
            return null;
        }

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
            return null;
        }
    }

    async simpleAsk(question, systemPrompt = null) {
        const messages = [];
        if (systemPrompt) {
            messages.push({ role: "system", content: systemPrompt });
        }
        messages.push({ role: "user", content: question });
        return await this.chatCompletion(messages, {}, false);
    }
}

// =============================================
// Model Client Factory
// =============================================

class ModelClientFactory {
    static createClient(clientType = "openai", config = {}) {
        switch (clientType) {
            case "openai":
                return new DeepSeekOpenAIClient(config);
            case "simple":
                return new DeepSeekSimpleClient(config);
            default:
                throw new Error(`Unknown client type: ${clientType}`);
        }
    }

    static createSimpleClient(config = {}) {
        return new DeepSeekSimpleClient(config);
    }
}

// =============================================
// Exports
// =============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BaseModelClient,
        DeepSeekOpenAIClient,
        DeepSeekSimpleClient,
        ModelClientFactory
    };
}

if (typeof window !== 'undefined') {
    window.BaseModelClient = BaseModelClient;
    window.DeepSeekOpenAIClient = DeepSeekOpenAIClient;
    window.DeepSeekSimpleClient = DeepSeekSimpleClient;
    window.ModelClientFactory = ModelClientFactory;
}