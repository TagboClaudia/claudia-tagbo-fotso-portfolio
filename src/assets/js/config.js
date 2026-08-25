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
        // Priority: 1. Provided token, 2. User token, 3. PUBLIC token
        return this.model.apiKey ||
               localStorage.getItem('HF_TOKEN') ||
               sessionStorage.getItem('HF_TOKEN') ||
               window.HF_PUBLIC_TOKEN ||
               null;
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

    // 🔑 PUBLIC READ-ONLY TOKEN - Safe to expose!
    window.HF_PUBLIC_TOKEN = "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";

    console.log('✅ ChatbotConfig loaded');
    console.log('🔑 Public token set');
}