/**
 * portfolio_data_provider.js
 * Portfolio Data Provider - Extracts and formats data from Portfolio class
 * Integrates with existing Portfolio class and system prompt functions
 * Version: 1.0 - Full Integration
 */

// Import or reference the existing Portfolio class
// This assumes Portfolio class is already loaded globally or imported

class PortfolioDataProvider {
    /**
     * @param {Portfolio} portfolio - Portfolio instance from the existing class
     */
    constructor(portfolio) {
        this.portfolio = portfolio;
    }

    /**
     * Get complete portfolio as formatted JSON string
     * @returns {string} Pretty-printed JSON
     */
    getFullPortfolioJson() {
        return JSON.stringify(this.portfolio.toJSON(), null, 2);
    }

    /**
     * Extract key statistics from portfolio
     * @returns {Object} Portfolio statistics
     */
    getPortfolioStatistics() {
        // Basic counts
        const projectCount = this.portfolio.allProjects?.length || 0;
        const categories = this.portfolio.allCategories?.filter(c => c !== "All").join(", ") || "";
        const topTech = (this.portfolio.allTechnologies || []).slice(0, 5).join(", ");
        const projectsWithViz = this.portfolio.projectsWithVisualizations?.length || 0;

        // Key achievements - try multiple sources
        let keyAchievements = [];
        if (this.portfolio.summary_stats?.key_achievements) {
            keyAchievements = this.portfolio.summary_stats.key_achievements;
        } else if (this.portfolio.summary?.key_achievements) {
            keyAchievements = this.portfolio.summary.key_achievements;
        } else {
            keyAchievements = [
                "$3.7M annual margin protection",
                "97.9% R² FX forecasting",
                "13,436 villages geocoded",
                "$2.3M inventory savings",
                "95% unit test coverage"
            ];
        }

        const keyAchievementsFormatted = keyAchievements.map((a, i) => `${i + 1}. ${a}`).join("\n");

        // Languages
        let languages = "";
        if (this.portfolio.skills?.languages) {
            languages = this.portfolio.skills.languages
                .map(l => l.displayText || `${l.language} (${l.proficiency})`)
                .join(", ");
        } else {
            languages = "French (Native), German (C1), English (B2)";
        }

        // Education
        let education = "";
        if (this.portfolio.education && this.portfolio.education.length) {
            education = this.portfolio.education
                .filter(e => e.degree)
                .map(e => e.degree)
                .join(", ");
        } else {
            education = "M.Sc. Applied Mathematics, B.Sc. Applied Mathematics";
        }

        // Most recent projects
        const topProjects = this.portfolio.getMostRecentProjects(3);
        const projectNames = topProjects.map(p => p.name || `Project ${p.project_id}`).join(", ");

        // Business impacts
        const businessImpacts = this._extractBusinessImpacts();

        return {
            project_count: projectCount,
            categories: categories,
            top_tech: topTech,
            projects_with_viz: projectsWithViz,
            project_names: projectNames,
            business_impacts: businessImpacts.join(", "),
            key_achievements_formatted: keyAchievementsFormatted,
            languages: languages,
            education: education,
            categories_count: this.portfolio.categories?.length || 0,
            technologies_count: this.portfolio.allTechnologies?.length || 0
        };
    }

    /**
     * Extract business impact statements from projects
     * @returns {string[]} List of impact statements
     */
    _extractBusinessImpacts() {
        const impacts = new Set();
        const impactKeywords = ['save', 'reduce', 'increase', 'improve', 'cost', 'revenue', 'margin', 'profit', 'efficiency', 'protect'];

        for (const project of this.portfolio.allProjects) {
            // Check business_insights array
            if (project.business_insights && project.business_insights.length) {
                for (const insight of project.business_insights) {
                    const lowerInsight = insight.toLowerCase();
                    if (impactKeywords.some(keyword => lowerInsight.includes(keyword))) {
                        impacts.add(insight.length > 60 ? insight.substring(0, 57) + "..." : insight);
                    }
                }
            }

            // Check key_metrics for impact values
            if (project.key_metrics) {
                for (const [key, value] of Object.entries(project.key_metrics)) {
                    if (impactKeywords.some(k => key.toLowerCase().includes(k))) {
                        const impactText = `${key}: ${value}`;
                        impacts.add(impactText.length > 60 ? impactText.substring(0, 57) + "..." : impactText);
                    }
                }
            }

            // Check insight property
            if (project.insight && typeof project.insight === 'string') {
                if (impactKeywords.some(k => project.insight.toLowerCase().includes(k))) {
                    impacts.add(project.insight.length > 60 ? project.insight.substring(0, 57) + "..." : project.insight);
                }
            }
        }

        const impactList = Array.from(impacts);
        return impactList.length ? impactList.slice(0, 5) : ["Cost reduction", "Revenue increase", "Efficiency improvement"];
    }

    /**
     * Get portfolio data formatted for the system prompt
     * This returns the exact structure expected by buildSystemPrompt()
     * @returns {Object} Portfolio data object
     */
    getPortfolioDataForPrompt() {
        const categories = this.portfolio.categories || [];
        const projects = this.portfolio.allProjects || [];

        // Build the portfolio data structure expected by buildSystemPrompt
        return {
            projects: projects.map(p => ({
                project_id: p.project_id,
                name: p.name,
                icon: p.icon || '📊',
                description: p.description || '',
                technologies: p.technologies || [],
                key_metrics: p.key_metrics || {},
                insight: p.insight || '',
                category_id: p.category_id,
                business_insights: p.business_insights || []
            })),
            categories: categories.map(c => ({
                category_id: c.category_id,
                name: c.name,
                icon: c.icon
            })),
            summary: this.portfolio.summary || {
                key_achievements: [
                    "Reduced data-workflow inefficiencies by 20-25% at PTB",
                    "Unified 5.4M+ sessions into a 3-stage SQL CTE pipeline",
                    "Engineered 50+ behavioral features across 5,998 customers"
                ]
            },
            portfolio_metadata: this.portfolio.metadata || {
                owner: "Claudia Tagbo-Fotso",
                title: "Data Science Analyst | AI & Machine Learning | Strategy & Analytics",
                location: "Berlin, Germany",
                email: "tagbo.fotso@gmail.com",
                github: "https://github.com/TagboClaudia"
            },
            skills: this._getSkillsOverview()
        };
    }

    /**
     * Get skills overview for the prompt
     * @returns {Object} Skills data
     */
    _getSkillsOverview() {
        if (this.portfolio.skills?.technical) {
            const tech = this.portfolio.skills.technical;
            return {
                machine_learning: tech.machine_learning || [],
                generative_ai: tech.generative_ai || [],
                data_science: tech.data_science || [],
                data_visualization: tech.data_visualization || [],
                databases: tech.databases || [],
                programming: tech.programming || [],
                scientific_technical: tech.scientific_technical || []
            };
        }
        return {
            machine_learning: ["Regression", "Classification", "Clustering (KMeans, DBSCAN)", "PCA"],
            generative_ai: ["Basic knowledge of Generative AI", "RAG concepts"],
            data_visualization: ["Tableau", "Power BI", "Plotly"],
            databases: ["SQL", "PostgreSQL", "SQLAlchemy"],
            scientific_technical: ["Experimental Data Analysis", "Quality Control"]
        };
    }

    /**
     * Generate the system prompt using the existing buildSystemPrompt function
     * @returns {string} System prompt string
     */
    generateSystemPrompt() {
        // This assumes buildSystemPrompt is available globally or passed in
        if (typeof buildSystemPrompt !== 'undefined') {
            const portfolioData = this.getPortfolioDataForPrompt();
            return buildSystemPrompt(portfolioData);
        }

        // Fallback: return a basic prompt
        return this._getFallbackSystemPrompt();
    }

    /**
     * Fallback system prompt if buildSystemPrompt is not available
     * @returns {string}
     */
    _getFallbackSystemPrompt() {
        const stats = this.getPortfolioStatistics();
        return `You are Claudia Tagbo-Fotso's professional AI assistant.

Portfolio: ${stats.project_count} projects, ${stats.categories_count} categories.
Owner: Data Science Analyst based in Germany.
Skills: Python, SQL, ML, Tableau, Power BI.

Answer portfolio questions using ONLY verified data. For technical questions, explain concepts and connect to portfolio examples. Be professional and concise.`;
    }

    /**
     * Get fallback response using the existing getFallbackResponse function
     * @param {string} question - User's question
     * @returns {string}
     */
    getFallbackResponse(question) {
        if (typeof getFallbackResponse !== 'undefined') {
            return getFallbackResponse(question);
        }
        return this._getBasicFallbackResponse(question);
    }

    /**
     * Basic fallback if getFallbackResponse is not available
     * @param {string} question - User's question
     * @returns {string}
     */
    _getBasicFallbackResponse(question) {
        const q = question.toLowerCase();
        const stats = this.getPortfolioStatistics();

        if (q.match(/hi|hello|hey|start/)) {
            return `Hi! 👋 I'm Claudia's AI assistant. Ask me about her ${stats.project_count} projects, ML skills, or any data science concept!`;
        }
        if (q.match(/who|about|claudia/)) {
            return `Claudia Tagbo-Fotso is a Data Science Analyst based in Germany with an M.Sc. in Applied Physics – Medical Engineering.`;
        }
        if (q.match(/skill|tech|stack/)) {
            return `Claudia's core stack: Python, SQL, Pandas, Scikit-learn, Tableau, Power BI, PostgreSQL, SQLAlchemy.`;
        }
        if (q.match(/project/)) {
            return `Claudia has ${stats.project_count} featured projects. Scroll the 3D carousel to explore them!`;
        }
        if (q.match(/sql|database/)) {
            return `Claudia's SQL skills include CTEs, window functions, and multi-table joins. Check her TravelTide SQL pipeline projects!`;
        }
        if (q.match(/contact|email|hire/)) {
            return `Reach Claudia at: 📧 ${this.portfolio.metadata?.email || "tagbo.fotso@gmail.com"} | 📍 Berlin, Germany.`;
        }

        return `I can help with questions about Claudia's ${stats.project_count} projects, technical skills, or data science topics. What would you like to explore?`;
    }

    /**
     * Find projects relevant to a user question
     * @param {string} userQuestion - User's question text
     * @returns {Project[]} Relevant projects
     */
    findRelevantProjects(userQuestion) {
        const lowerQuestion = userQuestion.toLowerCase();
        const relevantProjects = new Map();

        const addProject = (project) => {
            const id = project.project_id || Symbol();
            if (!relevantProjects.has(id)) {
                relevantProjects.set(id, project);
            }
        };

        // Check project names and descriptions
        for (const project of this.portfolio.allProjects) {
            const projectName = (project.name || "").toLowerCase();
            const projectDesc = (project.description || "").toLowerCase();

            if (projectName && (projectName.includes(lowerQuestion) ||
                projectName.split(' ').slice(0, 2).join(' ').includes(lowerQuestion))) {
                addProject(project);
            }

            if (projectDesc && projectDesc.includes(lowerQuestion)) {
                addProject(project);
            }

            // Check keywords
            if (project.keywords && project.keywords.length) {
                for (const keyword of project.keywords) {
                    if (lowerQuestion.includes(keyword.toLowerCase())) {
                        addProject(project);
                        break;
                    }
                }
            }
        }

        // Check categories
        for (const category of this.portfolio.categories || []) {
            const categoryName = (category.name || "").toLowerCase();
            if (categoryName && lowerQuestion.includes(categoryName)) {
                for (const project of category.projects || []) {
                    addProject(project);
                }
            }
        }

        // Check technologies
        for (const tech of this.portfolio.allTechnologies || []) {
            if (lowerQuestion.includes(tech.toLowerCase())) {
                const techProjects = this.portfolio.filterProjectsByTech(tech);
                techProjects.forEach(addProject);
            }
        }

        // If no matches, return most recent
        if (relevantProjects.size === 0) {
            return this.portfolio.getMostRecentProjects(3);
        }

        return Array.from(relevantProjects.values());
    }

    /**
     * Get relevant projects data based on user question
     * @param {string} userQuestion - User's question text
     * @returns {Object} Relevant projects and metadata
     */
    getRelevantProjectsData(userQuestion) {
        const relevantProjects = this.findRelevantProjects(userQuestion);

        const projectsData = relevantProjects.map(p => ({
            project_id: p.project_id,
            name: p.name || 'Unknown',
            description: p.description || '',
            technologies: p.technologies || [],
            key_metrics: p.key_metrics || {},
            business_insights: (p.business_insights || []).slice(0, 2),
            insight: p.insight || '',
            category: this._getCategoryName(p.category_id),
            icon: p.icon || '📊'
        }));

        const stats = this.getPortfolioStatistics();

        return {
            relevant_projects_json: JSON.stringify(projectsData, null, 2),
            relevant_count: relevantProjects.length,
            total_projects: stats.project_count,
            categories_count: stats.categories_count,
            technologies_count: stats.technologies_count,
            projects_with_viz: stats.projects_with_viz,
            user_question: userQuestion,
            relevant_projects: projectsData
        };
    }

    /**
     * Get category name by ID
     * @param {number|string} categoryId - Category ID
     * @returns {string} Category name
     */
    _getCategoryName(categoryId) {
        const category = this.portfolio.categories?.find(c => c.category_id === categoryId);
        return category?.name || "General";
    }

    /**
     * Convert provider to JSON
     * @returns {Object}
     */
    toJSON() {
        return {
            statistics: this.getPortfolioStatistics(),
            portfolio: this.portfolio.toJSON()
        };
    }
}

// Export for use in different environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioDataProvider };
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.PortfolioDataProvider = PortfolioDataProvider;
}