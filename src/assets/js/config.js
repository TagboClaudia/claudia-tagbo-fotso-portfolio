// =============================================
// ChatbotConfig — Portfolio Configuration
// =============================================

class ChatbotConfig {
    constructor(options = {}) {
        this.model = {
            modelName: options.model?.modelName || "deepseek-ai/DeepSeek-V4-Pro",
            temperature: options.model?.temperature ?? 0.7,
            maxTokens: options.model?.maxTokens ?? 1000,
            apiKey: options.model?.apiKey || null
        };
        this.streamingEnabled = options.streamingEnabled ?? true;
        this.debug = options.debug ?? false;
    }

    getApiKey() {
        return this.model.apiKey;
    }

    getEffectiveModelName() {
        return this.model.modelName;
    }
}

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ChatbotConfig };
}

if (typeof window !== 'undefined') {
    window.ChatbotConfig = ChatbotConfig;
}

window.HF_TOKEN="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";
