/**
 * chatbot_engine.js
 * Chatbot Engine - Orchestrates prompts, data, and model
 * Updated to work with all DeepSeek client types
 * JavaScript version matching the Python implementation
 */

// =============================================
// Chatbot Engine Class
// =============================================

class ChatbotEngine {
    /**
     * Main chatbot engine coordinating all components
     * @param {Object} portfolio - Portfolio instance
     * @param {Object} modelClient - Optional model client instance
     * @param {Object} options - Configuration options
     * @param {string} options.clientType - 'openai', 'simple', 'hybrid'
     * @param {boolean} options.useSync - Whether to use synchronous client
     * @param {Function} options.buildSystemPrompt - Custom system prompt builder
     * @param {Function} options.getFallbackResponse - Custom fallback response function
     */
    constructor(portfolio, modelClient = null, options = {}) {
        this.portfolio = portfolio;
        this.useSync = options.useSync || false;
        this.clientType = options.clientType || "openai";
        this.buildSystemPrompt = options.buildSystemPrompt || null;
        this.getFallbackResponse = options.getFallbackResponse || null;

        // Initialize data provider (assuming PortfolioDataProvider is available)
        if (typeof PortfolioDataProvider !== 'undefined') {
            this.dataProvider = new PortfolioDataProvider(portfolio);
        } else {
            console.warn("PortfolioDataProvider not found, using fallback methods");
            this.dataProvider = this._createFallbackDataProvider();
        }

        // Initialize model client
        if (modelClient) {
            this.modelClient = modelClient;
        } else {
            if (this.useSync && typeof DeepSeekSimpleClient !== 'undefined') {
                this.syncClient = new DeepSeekSimpleClient();
                this.modelClient = null;
            } else if (typeof ModelClientFactory !== 'undefined') {
                this.modelClient = ModelClientFactory.createClient(this.clientType);
            } else {
                console.warn("ModelClientFactory not found, using fallback mode");
                this.useFallback = true;
            }
        }
    }

    /**
     * Create fallback data provider if PortfolioDataProvider is not available
     * @returns {Object} Fallback data provider
     */
    _createFallbackDataProvider() {
        return {
            getFullPortfolioJson: () => {
                return JSON.stringify(this.portfolio.toJSON ? this.portfolio.toJSON() : this.portfolio, null, 2);
            },
            getPortfolioStatistics: () => {
                const projects = this.portfolio.allProjects || [];
                return {
                    project_count: projects.length,
                    categories: (this.portfolio.categories || []).map(c => c.name).join(", "),
                    top_tech: (this.portfolio.allTechnologies || []).slice(0, 5).join(", "),
                    projects_with_viz: (projects.filter(p => p.chart || p.chart_data).length),
                    key_achievements_formatted: "1. $3.7M margin protection\n2. 97.9% R² FX forecasting",
                    languages: "French (Native), German (C1), English (B2)",
                    education: "M.Sc. Applied Mathematics"
                };
            },
            getRelevantProjectsData: (userQuestion) => {
                const projects = this.portfolio.allProjects || [];
                return {
                    relevant_projects_json: JSON.stringify(projects.slice(0, 3), null, 2),
                    relevant_section: "most recent projects",
                    total_projects: projects.length,
                    categories_count: (this.portfolio.categories || []).length,
                    technologies_count: (this.portfolio.allTechnologies || []).length,
                    projects_with_viz: 0,
                    projects_with_details: projects.length,
                    relevant_count: Math.min(3, projects.length)
                };
            }
        };
    }

    /**
     * Build system prompt using available templates
     * @param {string} portfolioJson - Portfolio JSON string
     * @param {Object} stats - Portfolio statistics
     * @returns {string} System prompt
     */
    _buildSystemPrompt(portfolioJson, stats) {
        // Use custom builder if provided
        if (this.buildSystemPrompt) {
            return this.buildSystemPrompt({ portfolio_json: portfolioJson, stats });
        }

        // Try to use SystemPromptTemplates if available
        if (typeof SystemPromptTemplates !== 'undefined' &&
            SystemPromptTemplates.buildCompleteSystemPrompt) {
            return SystemPromptTemplates.buildCompleteSystemPrompt(portfolioJson, stats);
        }

        // Fallback system prompt
        return this._getFallbackSystemPrompt(portfolioJson, stats);
    }

    /**
     * Get fallback system prompt
     * @param {string} portfolioJson - Portfolio JSON
     * @param {Object} stats - Statistics
     * @returns {string}
     */
    _getFallbackSystemPrompt(portfolioJson, stats) {
        return `You are Claudia Tagbo-Fotso's professional AI assistant.

=== PORTFOLIO OWNER PROFILE ===
Name: Claudia Tagbo-Fotso
Title: Data Science Analyst | AI & Machine Learning | Strategy & Analytics
Location: Berlin, Germany
Projects: ${stats.project_count} production-grade projects
Categories: ${stats.categories}
Technologies: ${stats.top_tech}

=== KEY ACHIEVEMENTS ===
${stats.key_achievements_formatted}

=== RESPONSE RULES ===
1. For portfolio questions → use ONLY verified data from the portfolio
2. For technical questions → define concept and connect to portfolio examples
3. Keep responses concise (under 200 words)
4. Maintain professional, friendly tone

Portfolio Data: ${portfolioJson.substring(0, 2000)}...

Now answer the user's question.`;
    }

    /**
     * Build contextual system prompt for filtered responses
     * @param {string} relevantProjectsJson - JSON of relevant projects
     * @param {Object} context - Context information
     * @returns {string}
     */
    _buildContextualSystemPrompt(relevantProjectsJson, context) {
        if (typeof SystemPromptTemplates !== 'undefined' &&
            SystemPromptTemplates.buildContextualSystemPrompt) {
            return SystemPromptTemplates.buildContextualSystemPrompt(relevantProjectsJson, context);
        }

        return `You are Claudia Tagbo-Fotso's AI assistant. Focus on these relevant projects:
${relevantProjectsJson}

Context: ${context.relevant_section}
Total projects: ${context.total_projects}
Relevant count: ${context.relevant_count}

Answer based on the provided project data. Be concise and professional.`;
    }

    /**
     * Answer using full portfolio context
     * @param {string} userQuestion - User's question
     * @param {Function} streamCallback - Callback for streaming chunks
     * @returns {Promise<string>}
     */
    async answerWithFullContext(userQuestion, streamCallback = null) {
        // Get full portfolio data
        const portfolioJson = this.dataProvider.getFullPortfolioJson();
        const stats = this.dataProvider.getPortfolioStatistics();

        // Build system prompt
        const systemPrompt = this._buildSystemPrompt(portfolioJson, stats);

        // Prepare messages
        const messages = [
            { role: "system", content: systemPrompt },
            { role: "user", content: userQuestion }
        ];

        // Get response from model
        try {
            if (this.useSync && this.syncClient) {
                // Synchronous call
                return this.syncClient.chatCompletion(messages, {}, false);
            } else if (this.modelClient) {
                if (streamCallback) {
                    const response = await this.modelClient.chatCompletionStream(messages, {}, streamCallback);
                    return response;
                } else {
                    return await this.modelClient.chatCompletion(messages, {});
                }
            } else if (this.getFallbackResponse) {
                return this.getFallbackResponse(userQuestion);
            } else {
                return this._getLocalResponse(userQuestion);
            }
        } catch (error) {
            console.error("API Error:", error);
            if (this.getFallbackResponse) {
                return this.getFallbackResponse(userQuestion);
            }
            return "I'm having trouble connecting to my knowledge base. Please try again in a moment.";
        }
    }

    /**
     * Answer using contextual filtering (for large portfolios)
     * @param {string} userQuestion - User's question
     * @param {Function} streamCallback - Callback for streaming chunks
     * @returns {Promise<string>}
     */
    async answerWithContextualFiltering(userQuestion, streamCallback = null) {
        // Get relevant data based on question
        const relevantData = this.dataProvider.getRelevantProjectsData(userQuestion);

        // Build contextual system prompt
        const context = {
            user_question: userQuestion,
            relevant_section: relevantData.relevant_section,
            total_projects: relevantData.total_projects,
            categories_count: relevantData.categories_count,
            technologies_count: relevantData.technologies_count,
            projects_with_viz: relevantData.projects_with_viz,
            projects_with_details: relevantData.projects_with_details,
            relevant_count: relevantData.relevant_count
        };

        const systemPrompt = this._buildContextualSystemPrompt(
            relevantData.relevant_projects_json,
            context
        );

        // Prepare messages
        const messages = [
            { role: "system", content: systemPrompt },
            { role: "user", content: userQuestion }
        ];

        // Get response from model
        try {
            if (this.useSync && this.syncClient) {
                return this.syncClient.chatCompletion(messages, {}, false);
            } else if (this.modelClient) {
                if (streamCallback) {
                    const response = await this.modelClient.chatCompletionStream(messages, {}, streamCallback);
                    return response;
                } else {
                    return await this.modelClient.chatCompletion(messages, {});
                }
            } else if (this.getFallbackResponse) {
                return this.getFallbackResponse(userQuestion);
            } else {
                return this._getLocalResponse(userQuestion);
            }
        } catch (error) {
            console.error("API Error:", error);
            if (this.getFallbackResponse) {
                return this.getFallbackResponse(userQuestion);
            }
            return "Error connecting to AI service.";
        }
    }

    /**
     * Intelligently choose strategy based on portfolio size
     * @param {string} userQuestion - User's question
     * @param {number} threshold - Size threshold for switching strategies
     * @param {Function} streamCallback - Callback for streaming chunks
     * @returns {Promise<string>}
     */
    async smartAnswer(userQuestion, threshold = 50000, streamCallback = null) {
        const portfolioJson = this.dataProvider.getFullPortfolioJson();
        const portfolioSize = portfolioJson.length;

        if (portfolioSize > threshold) {
            return await this.answerWithContextualFiltering(userQuestion, streamCallback);
        } else {
            return await this.answerWithFullContext(userQuestion, streamCallback);
        }
    }

    /**
     * Synchronous answer method using simple client
     * @param {string} userQuestion - User's question
     * @param {boolean} stream - Whether to stream
     * @returns {string|Object} Response or stream object
     */
    syncAnswer(userQuestion, stream = false) {
        if (!this.syncClient && typeof DeepSeekSimpleClient !== 'undefined') {
            this.syncClient = new DeepSeekSimpleClient();
        }

        if (!this.syncClient) {
            return this._getLocalResponse(userQuestion);
        }

        // Get portfolio context
        const portfolioJson = this.dataProvider.getFullPortfolioJson();
        const stats = this.dataProvider.getPortfolioStatistics();
        const systemPrompt = this._buildSystemPrompt(portfolioJson, stats);

        const messages = [
            { role: "system", content: systemPrompt },
            { role: "user", content: userQuestion }
        ];

        if (stream) {
            return this.syncClient.chatCompletion(messages, {}, true);
        } else {
            return this.syncClient.chatCompletion(messages, {}, false);
        }
    }

    /**
     * Ultra-simple ask method for quick testing
     * @param {string} question - User's question
     * @param {string} systemPrompt - Optional system prompt
     * @returns {Promise<string>}
     */
    async simpleAsk(question, systemPrompt = null) {
        if (!this.syncClient && typeof DeepSeekSimpleClient !== 'undefined') {
            this.syncClient = new DeepSeekSimpleClient();
        }

        if (this.syncClient) {
            return await this.syncClient.simpleAsk(question, systemPrompt);
        }

        return this._getLocalResponse(question);
    }

    /**
     * Local fallback response when no API is available
     * @param {string} question - User's question
     * @returns {string}
     */
    _getLocalResponse(question) {
        const q = question.toLowerCase();
        const stats = this.dataProvider.getPortfolioStatistics();

        if (q.match(/hi|hello|hey|start/)) {
            return `Hi! 👋 I'm Claudia's AI assistant. Ask me about her ${stats.project_count} projects, data skills, or any data science concept!`;
        }
        if (q.match(/who|about|claudia|profile/)) {
            return `Claudia Tagbo-Fotso is a Data Science Analyst based in Berlin, Germany. With an M.Sc. in Applied Physics – Medical Engineering from Berliner Hochschule für Technik, she combines scientific rigor with production-grade data analytics.`;
        }
        if (q.match(/skill|tech|stack|python/)) {
            return `Claudia's core stack: Python, SQL, Pandas, Scikit-learn, Tableau, Power BI, PostgreSQL, SQLAlchemy. She specializes in customer segmentation, SQL data pipelines, and BI dashboarding.`;
        }
        if (q.match(/project|portfolio/)) {
            return `Claudia has ${stats.project_count} featured projects across categories: Customer Analytics & Segmentation, SQL Data Engineering & Pipelines, Business Intelligence & Dashboards, SQL Practice & Database Mastery. Scroll the carousel to explore!`;
        }
        if (q.match(/sql|database/)) {
            return `Claudia's SQL skills include CTEs, window functions, and multi-table joins — demonstrated in her TravelTide session pipeline unifying 5.4M+ sessions with user, flight, and hotel data.`;
        }
        if (q.match(/contact|email|hire/)) {
            return `Reach Claudia at: 📧 tagbo.fotso@gmail.com | 📞 +49 176 64323853 | 💻 github.com/TagboClaudia | 📍 Berlin, Germany. She's open to Data Scientist and Data Analyst roles!`;
        }

        return `I can help with questions about Claudia's ${stats.project_count} projects, technical skills (Python, SQL, ML, Tableau, Power BI), career background, or data science topics. What would you like to explore?`;
    }
}

// =============================================
// System Prompt Templates (if not already available)
// =============================================

class SystemPromptTemplates {
    /**
     * Build complete system prompt with full portfolio context
     * @param {string} portfolioJson - Portfolio JSON string
     * @param {Object} stats - Portfolio statistics
     * @returns {string}
     */
    static buildCompleteSystemPrompt(portfolioJson, stats) {
        return `You are Claudia Tagbo-Fotso's professional AI assistant.

=== PORTFOLIO OWNER PROFILE ===
Name: Claudia Tagbo-Fotso
Title: Data Science Analyst | AI & Machine Learning | Strategy & Analytics
Location: Berlin, Germany
Email: tagbo.fotso@gmail.com
GitHub: https://github.com/TagboClaudia
Background: M.Sc. Applied Physics – Medical Engineering (Berliner Hochschule für Technik), currently at Masterschool Data Science
Languages: ${stats.languages}

=== KEY ACHIEVEMENTS ===
${stats.key_achievements_formatted}

=== SKILLS OVERVIEW ===
• Machine Learning: Regression, Classification, Clustering (KMeans, DBSCAN), Model Evaluation, PCA
• Generative AI: Basic knowledge of Generative AI, RAG concepts
• Visualization: Tableau, Power BI, Matplotlib, Plotly
• Databases: SQL, PostgreSQL, SQLAlchemy
• Scientific & Technical: Experimental Data Analysis, Quality Control, Error Analysis

=== PROJECTS SUMMARY ===
${stats.project_count} total projects across ${stats.categories_count || 0} categories
Technologies: ${stats.top_tech}

=== RESPONSE RULES ===
1. PORTFOLIO QUESTIONS: Use ONLY verified data from above. Never invent metrics.
2. TECHNICAL QUESTIONS: Define concept → Explain characteristics → Connect to portfolio example.
3. PROJECT ANSWER FORMAT: Problem → Technologies → Methodology → Results/Impact.
4. Keep responses concise (under 200 words unless details requested).
5. Maintain professional, friendly, recruiter-friendly tone.
6. Guide users to portfolio sections (project carousel, skills, contact) when relevant.

Now answer the user's question based on the portfolio data above.`;
    }

    /**
     * Build contextual system prompt for filtered responses
     * @param {string} relevantProjectsJson - JSON of relevant projects
     * @param {Object} context - Context information
     * @returns {string}
     */
    static buildContextualSystemPrompt(relevantProjectsJson, context) {
        return `You are Claudia Tagbo-Fotso's AI assistant with access to relevant portfolio data.

=== RELEVANT PROJECTS ===
${relevantProjectsJson}

=== CONTEXT ===
User asked about: ${context.user_question}
Relevant section: ${context.relevant_section}
Total portfolio: ${context.total_projects} projects, ${context.categories_count} categories
Showing ${context.relevant_count} relevant project(s)

=== RESPONSE RULES ===
1. Answer using ONLY the relevant projects provided above
2. Structure answers as: Problem → Technologies → Methodology → Results
3. Be concise and professional
4. If the user asks about something not in these projects, politely suggest exploring other sections

Now answer based on the relevant projects.`;
    }
}

// =============================================
// Chatbot Engine Factory
// =============================================

class ChatbotEngineFactory {
    /**
     * Create a chatbot engine with default configuration
     * @param {Object} portfolio - Portfolio instance
     * @param {Object} options - Configuration options
     * @returns {ChatbotEngine}
     */
    static createDefault(portfolio, options = {}) {
        return new ChatbotEngine(portfolio, null, {
            clientType: options.clientType || "simple",
            useSync: options.useSync ?? true,
            buildSystemPrompt: options.buildSystemPrompt,
            getFallbackResponse: options.getFallbackResponse
        });
    }

    /**
     * Create a streaming-enabled chatbot engine
     * @param {Object} portfolio - Portfolio instance
     * @param {Object} options - Configuration options
     * @returns {ChatbotEngine}
     */
    static createStreamingEngine(portfolio, options = {}) {
        return new ChatbotEngine(portfolio, null, {
            clientType: options.clientType || "openai",
            useSync: false,
            buildSystemPrompt: options.buildSystemPrompt,
            getFallbackResponse: options.getFallbackResponse
        });
    }

    /**
     * Create a hybrid engine with fallback support
     * @param {Object} portfolio - Portfolio instance
     * @param {Object} options - Configuration options
     * @returns {ChatbotEngine}
     */
    static createHybridEngine(portfolio, options = {}) {
        return new ChatbotEngine(portfolio, null, {
            clientType: "hybrid",
            useSync: options.useSync ?? false,
            buildSystemPrompt: options.buildSystemPrompt,
            getFallbackResponse: options.getFallbackResponse
        });
    }
}

// =============================================
// Exports
// =============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ChatbotEngine,
        SystemPromptTemplates,
        ChatbotEngineFactory
    };
}

if (typeof window !== 'undefined') {
    window.ChatbotEngine = ChatbotEngine;
    window.SystemPromptTemplates = SystemPromptTemplates;
    window.ChatbotEngineFactory = ChatbotEngineFactory;
}