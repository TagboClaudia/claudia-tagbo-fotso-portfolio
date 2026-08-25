/* ================================================================
   PUBLIC READ-ONLY TOKEN - Safe to expose in static site
   ================================================================ */

// This token has READ-ONLY permissions - safe to share publicly!
// Create at: https://huggingface.co/settings/tokens
// Select: Read only
const HF_PUBLIC_TOKEN = "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";

function getToken() {
    return localStorage.getItem('HF_TOKEN') ||
           sessionStorage.getItem('HF_TOKEN') ||
           HF_PUBLIC_TOKEN ||
           null;
}

console.log('🔑 Token status:', getToken() ? '✅ Found' : '❌ Not set');

/* ================================================================
   LOAD HF_TOKEN SAFELY (NO HARD-CODING!)
   ================================================================ */

// Check if token exists in localStorage
if (typeof window !== 'undefined') {
    // Log token status (without exposing the token)
    console.log('🔑 HF_TOKEN status:', localStorage.getItem('HF_TOKEN') ? '✅ Found in localStorage' : '❌ Not set - using public token');
}

/* ================================================================
   PORTFOLIO DATA — complete portfolio.json embedded
   ================================================================ */
const DATA = {"portfolio_metadata":{"owner":"Claudia Tagbo-Fotso","title":"Data Science Analyst | AI & Machine Learning | Strategy & Analytics","tagline":"Turning fragmented data into unified, actionable insights — Python, SQL, ML & BI.","location":"Berlin, Germany","email":"tagbo.fotso@gmail.com","phone":"+49 176 64323853","github":"https://github.com/TagboClaudia","linkedin":"https://www.linkedin.com/in/claudia-fotso","total_projects":7},"summary":{"elevator_pitch":"Data Science Analyst with a strong quantitative background in Applied Physics (M.Sc.) and hands-on experience in machine learning, analytics, and AI-driven problem solving. Combines analytical rigor with business-oriented thinking to design and implement data-driven solutions from prototype to production, with a special focus on customer segmentation, SQL data pipelines, and BI storytelling. Passionate about leveraging modern AI technologies, including generative AI and RAG concepts, to create measurable business value.","key_achievements":["Improved measurement accuracy by 15% while managing 300+ weekly high-precision experimental datasets at PTB","Reduced data-workflow inefficiencies by 20% and increased operational capacity by 25%","Built a unified SQL CTE pipeline joining 5.4M+ sessions with user, flight, and hotel data for TravelTide","Engineered 50+ behavioral features (RFM metrics, conversion rates, session activity) across 49,211 sessions from 5,998 customers","Applied rule-based and K-Means clustering for customer segmentation, validated with χ², t-test, and Mann–Whitney U statistical testing"]},"skills":{"technical":{"data_science":["Data Cleaning","Exploratory Data Analysis (EDA)","Statistical Analysis","Funnel Analysis","Segmentation Analysis","KPI Analysis","Feature Engineering"],"machine_learning":["Regression","Classification","Clustering (KMeans, DBSCAN)","Model Evaluation","Cross-Validation","Supervised & Unsupervised Learning","PCA"],"generative_ai":["Basic knowledge of Generative AI","RAG concepts"],"data_visualization":["Tableau","Power BI","Matplotlib","Plotly","Dashboard Design","Data Visualization"],"databases":["SQL","PostgreSQL","SQLAlchemy","CTEs","Window Functions","Relational Joins"],"programming":["Python (Pandas, Scikit-learn, NumPy)","SQL","Basic understanding of Spark"],"scientific_technical":["Experimental Data Analysis","Measurement Optimization","Optical Characterization","Quantitative Analysis","Method Validation","Quality Control","Error Analysis"]},"languages":[{"language":"French","proficiency":"Native"},{"language":"German","proficiency":"C2"},{"language":"English","proficiency":"B2"}]},"education":[{"institution":"Masterschool","degree":"Data Science Training Program","period":{"start":"2025-05","end":"Present"},"highlights":["Acquires hands-on experience analyzing large datasets with Python, SQL, and Pandas to extract meaningful insights","Develops data-driven reports and visualizations using Tableau, Power BI, and Matplotlib","Applies statistical analysis and predictive modeling techniques, implementing ML algorithms, regression models, and clustering methods"]},{"institution":"Berliner Hochschule für Technik","degree":"M.Sc. Applied Physics – Medical Engineering","period":{"start":"2014-10","end":"2018-05"},"highlights":["Applied quantitative analysis and experimental data processing to high-precision optical and imaging measurement data","Developed and validated a spatially resolved measurement method, improving accuracy and reliability of evaluation metrics","Analyzed and interpreted experimental results from optical and imaging systems for technical evaluation and optimization decisions"]},{"institution":"Berliner Hochschule für Technik","degree":"B.Sc. Applied Physics – Medical Engineering","period":{"start":"2011-04","end":"2014-11"},"highlights":["Analyzed quantitative performance data from a medical X-ray imaging system to support system optimization","Evaluated measurement results and performance metrics to improve diagnostic reliability in a clinical environment"]}],"experience":[{"company":"Physikalisch-Technische Bundesanstalt (PTB)","role":"Engineer","period":{"start":"2017-05","end":"2024-12"},"location":"Berlin, Germany","responsibilities":["Conducted and evaluated more than 300 high-precision measurements per week in scientific research projects","Developed, optimized, and validated measurement methods for characterizing optical systems and components","Ensured the quality and reliability of experimental data through systematic testing and validation procedures","Analyzed complex measurement data and identified/assessed deviations and uncertainties","Produced scientific reports, technical documentation, and presentations of research results","Managed and analyzed high-volume experimental datasets (300+ weekly), improving measurement accuracy by 15%","Optimized data workflows and experimental processes, reducing inefficiencies by 20% and increasing operational capacity by 25%"]}],"certifications":[],"categories":[{"category_id":1,"name":"Customer Analytics & Segmentation","icon":"🧩","color":"#1F3B57"},{"category_id":2,"name":"SQL Data Engineering & Pipelines","icon":"🗄️","color":"#2C7A7B"},{"category_id":3,"name":"Business Intelligence & Dashboards","icon":"📊","color":"#4FB3BF"},{"category_id":4,"name":"SQL Practice & Database Mastery","icon":"🎯","color":"#1F3B57"}],"projects":[{"project_id":1,"name":"TravelTide Analytics Engine (Core Module)","category_id":1,"icon":"🧩","github_url":"https://github.com/TagboClaudia/traveltide/tree/main/core","description":"The analytical engine of the TravelTide project: a modular Python package handling data ingestion (CSV/SQL/DB), EDA, feature engineering (PCA, clustering, normalization), ML-based segmentation (KMeans, DBSCAN), perk assignment, and non-ML segment reporting — designed for scalability and reusability.","technologies":["Python 3.8+","Pandas 2.0+","Scikit-learn 1.0+","Plotly 5.0+","SQLAlchemy 1.4+"],"key_metrics":{"core_modules":"6","clustering":"KMeans, DBSCAN","pipeline":"Load→EDA→Feature Eng→Segmentation→Perks"},"chart":"radial","chart_data":[{"label":"Pipeline Stages","value":100},{"label":"Clustering Coverage","value":100},{"label":"Reporting Capabilities","value":100}],"insight":"6 modular stages · KMeans + DBSCAN clustering · automated perk scoring"},{"project_id":2,"name":"User Session Analytics Pipeline (SQL CTE Architecture)","category_id":2,"icon":"🗄️","github_url":"https://github.com/TagboClaudia/traveltide/tree/main/sql","description":"A production-grade SQL pipeline built with Common Table Expressions that filters sessions to a defined time window, identifies high-engagement users (>7 sessions), and enriches them with demographic, flight, and hotel data into a single analytical dataset for BI, churn modeling, and segmentation.","technologies":["PostgreSQL","SQL (CTEs)","Relational Joins"],"key_metrics":{"cte_stages":"3","engagement_threshold":"> 7 sessions","tables_joined":"4"},"chart":"bar","chart_data":[{"label":"CTE 1","value":100},{"label":"CTE 2","value":100},{"label":"CTE 3","value":100},{"label":"Final Join","value":100}],"insight":"3-stage CTE pipeline · >7 session threshold · 4 tables unified"},{"project_id":3,"name":"TravelTide Data Loading & Quality Assessment","category_id":2,"icon":"📥","github_url":"https://github.com/TagboClaudia/traveltide/tree/main/notebooks/loader","description":"The foundational data-loading and quality-assessment layer for the TravelTide pipeline. Loads raw data from CSV/SQL sources, runs missing-value diagnostics across all tables, and produces the enriched base_sessions dataset used for all downstream analysis.","technologies":["Python 3.11+","Pandas","PostgreSQL","SQL"],"key_metrics":{"users_rows":"1,020,926","sessions_rows":"5,408,063","base_sessions_rows":"49,211"},"chart":"bar","chart_data":[{"label":"Users","value":100},{"label":"Sessions","value":100},{"label":"Flights","value":95},{"label":"Hotels","value":100},{"label":"Trip ID Coverage","value":43}],"insight":"Users & Hotels 100% complete · trip_id present in only 43% of sessions"},{"project_id":4,"name":"Customer Segmentation & Performance Analysis","category_id":1,"icon":"🎯","github_url":"https://github.com/TagboClaudia/traveltide","description":"Rule-based and K-Means clustering segmentation on 49K TravelTide user sessions from 5,998 customers to identify behavioral patterns and drive targeted retention strategies, validated with statistical A/B testing.","technologies":["Python","Scikit-learn (KMeans)","Pandas","SciPy (statistical testing)"],"key_metrics":{"user_sessions_analyzed":"49,211","unique_customers":"5,998","behavioral_features_engineered":"50+"},"chart":"radial","chart_data":[{"label":"Sessions Segmented","value":100},{"label":"Customers Profiled","value":100},{"label":"Features Engineered","value":100}],"insight":"49,211 sessions · 5,998 customers · 50+ behavioral features"},{"project_id":5,"name":"FIFA 2023 Player Performance Analytics","category_id":3,"icon":"⚽","github_url":"","description":"Analyzed FIFA 2023 player datasets with Python and SQL to identify trends in player performance, market value, and team composition, then built interactive Tableau dashboards for cross-league, cross-nation, and cross-position comparison.","technologies":["Python","SQL","Tableau"],"key_metrics":{"dashboard_type":"Interactive Tableau","comparison_dimensions":"Leagues, nations, positions"},"chart":"bar","chart_data":[{"label":"Player Data","value":100},{"label":"Clustering Applied","value":100},{"label":"Dashboard Views","value":100}],"insight":"Player performance clustering across leagues, nations & positions"},{"project_id":6,"name":"Unicorn Sales & KPI Dashboard","category_id":3,"icon":"📈","github_url":"","description":"Developed an interactive Tableau dashboard integrating multiple data sources to analyze sales, profit, and key performance indicators, enabling stakeholders to quickly identify high- and low-performing products and categories.","technologies":["Tableau","Python","SQL"],"key_metrics":{"dashboard_type":"Interactive Tableau","kpis_tracked":"Revenue, profit, product performance"},"chart":"bar","chart_data":[{"label":"Data Sources","value":100},{"label":"KPI Coverage","value":100},{"label":"Dashboard Views","value":100}],"insight":"Multi-source KPI dashboard for revenue, profit & category performance"},{"project_id":7,"name":"Chinook Mock Interview Notebook","category_id":4,"icon":"🎵","github_url":"https://github.com/TagboClaudia/Data-Science/blob/main/Chinook_MockInterview.ipynb","description":"A comprehensive SQL/database mock-interview notebook built on the Chinook digital media store database, covering customer analysis, geographical distribution, employee analysis, customer-support joins, and hierarchical self-joins — connected live to a PostgreSQL instance on Neon.tech.","technologies":["PostgreSQL","SQLAlchemy","Pandas","Neon.tech"],"key_metrics":{"database_tables":"9","query_categories_covered":"5","skills_demonstrated":"8"},"chart":"bar","chart_data":[{"label":"Filtering","value":100},{"label":"Joins","value":100},{"label":"Subqueries","value":100},{"label":"Self-Joins","value":100}],"insight":"8 SQL skills demonstrated across filtering, joins, subqueries & hierarchies"}]};

// Global variables
let portfolio = null;
let portfolioDataProvider = null;
let chatbotEngine = null;
let currentChatbot = null;

// Get HF_TOKEN from environment or localStorage
function getApiKey() {
    // Try to get from window._env_ (if you expose env variables)
    if (window._env_ && window._env_.HF_TOKEN) {
        return window._env_.HF_TOKEN;
    }
    // Try from localStorage
    const stored = localStorage.getItem('HF_TOKEN');
    if (stored) {
        return stored;
    }
    // Try from sessionStorage
    const session = sessionStorage.getItem('HF_TOKEN');
    if (session) {
        return session;
    }
    // Return the public token as fallback
    return HF_PUBLIC_TOKEN || null;
}

/* ================================================================
   CREATE SIMPLE PORTFOLIO WRAPPER (without complex class dependencies)
   ================================================================ */
class SimplePortfolio {
    constructor(data) {
        this.metadata = data.portfolio_metadata;
        this.summary = data.summary;
        this.skills = data.skills;
        this.education = data.education;
        this.experience = data.experience;
        this.certifications = data.certifications;
        this.categories = data.categories;
        this.projects = data.projects;
        this.all_projects = data.projects;
        this.all_technologies = this._extractTechnologies(data.projects);
        this.all_categories = ['All', ...data.categories.map(c => c.name)];
    }

    _extractTechnologies(projects) {
        const techSet = new Set();
        projects.forEach(p => {
            if (p.technologies) {
                p.technologies.forEach(t => techSet.add(t));
            }
        });
        return Array.from(techSet);
    }

    get_most_recent_projects(limit = 3) {
        return this.projects.slice(0, limit);
    }

    filter_projects_by_tech(technology) {
        return this.projects.filter(p =>
            p.technologies && p.technologies.some(t => t.toLowerCase() === technology.toLowerCase())
        );
    }

    get_project_by_id(id) {
        return this.projects.find(p => p.project_id === id);
    }

    toJSON() {
        return {
            portfolio_metadata: this.metadata,
            summary: this.summary,
            skills: this.skills,
            education: this.education,
            experience: this.experience,
            certifications: this.certifications,
            categories: this.categories,
            projects: this.projects
        };
    }
}

/* ================================================================
   SIMPLE PORTFOLIO DATA PROVIDER
   ================================================================ */
class SimplePortfolioDataProvider {
    constructor(portfolio) {
        this.portfolio = portfolio;
    }

    getFullPortfolioJson() {
        return JSON.stringify(this.portfolio.toJSON(), null, 2);
    }

    getPortfolioStatistics() {
        const projectCount = this.portfolio.projects.length;
        const categories = this.portfolio.categories.map(c => c.name).join(", ");
        const topTech = this.portfolio.all_technologies.slice(0, 5).join(", ");
        const keyAchievements = this.portfolio.summary.key_achievements || [
            "Reduced data-workflow inefficiencies by 20-25% at PTB",
            "Unified 5.4M+ sessions into a 3-stage SQL CTE pipeline",
            "Engineered 50+ behavioral features across 5,998 customers"
        ];

        return {
            project_count: projectCount,
            categories: categories,
            top_tech: topTech,
            projects_with_viz: this.portfolio.projects.filter(p => p.chart).length,
            key_achievements_formatted: keyAchievements.map((a, i) => `${i+1}. ${a}`).join("\n"),
            languages: "French (Native), German (C2), English (B2)",
            education: this.portfolio.education.map(e => e.degree).join(", ")
        };
    }

    getRelevantProjectsData(userQuestion) {
        const lowerQuestion = userQuestion.toLowerCase();
        let relevantProjects = this.portfolio.projects.filter(p =>
            p.name.toLowerCase().includes(lowerQuestion) ||
            p.description.toLowerCase().includes(lowerQuestion)
        );

        if (relevantProjects.length === 0) {
            relevantProjects = this.portfolio.projects.slice(0, 3);
        }

        return {
            relevant_projects_json: JSON.stringify(relevantProjects.slice(0, 3), null, 2),
            relevant_section: "projects",
            relevant_count: relevantProjects.length,
            total_projects: this.portfolio.projects.length,
            categories_count: this.portfolio.categories.length,
            technologies_count: this.portfolio.all_technologies.length,
            projects_with_viz: this.portfolio.projects.filter(p => p.chart).length,
            projects_with_details: this.portfolio.projects.length
        };
    }
}

/* ================================================================
   INITIALIZE APPLICATION
   ================================================================ */
async function initApp() {
    try {
        console.log("🚀 Initializing portfolio...");

        // Create SimplePortfolio instance from DATA
        portfolio = new SimplePortfolio(DATA);

        // Create PortfolioDataProvider
        portfolioDataProvider = new SimplePortfolioDataProvider(portfolio);

        // Create a simple AI response function that uses the portfolio data
        currentChatbot = {
            answerWithFullContext: async (question) => {
                return generateAIResponse(question);
            }
        };

        // Render all sections
        renderAllSections();

        // Initialize components
        initBackgroundParticles();
        initCarousel();
        initNavbar();
        initRevealObserver();
        initChatbot();

        console.log("✅ Portfolio loaded successfully!");

    } catch (error) {
        console.error("❌ Failed to initialize:", error);
        // Still try to render with basic data
        try {
            renderAllSections();
            initBackgroundParticles();
            initCarousel();
            initNavbar();
            initRevealObserver();
            initChatbot();
        } catch(e) {
            console.error("❌ Critical error:", e);
        }
        showErrorMessage("Failed to load portfolio. Please refresh.");
    }
}

/* ================================================================
   GENERATE AI RESPONSE USING PORTFOLIO DATA
   ================================================================ */
function generateAIResponse(question) {
    const q = question.toLowerCase();
    const metadata = portfolio.metadata;
    const summary = portfolio.summary;
    const skills = portfolio.skills;
    const technical = skills.technical || {};
    const projects = portfolio.projects;
    const education = portfolio.education;
    const experience = portfolio.experience;
    const certifications = portfolio.certifications;
    const categories = portfolio.categories;

   // Greeting
    if (/^(hi|hello|hey|greetings|good morning|good afternoon)/i.test(q)) {
        return `Hey! 👋 I'm **Claudia's AI assistant**. I analyze her portfolio data in real-time to answer your questions. Ask me about her ${projects.length} production-grade projects, technical skills, career background, or any data science concept!`;
    }

    // AI Self-identification - Questions about the assistant itself
    if (/(where are you|who are you|what are you|yourself|ai assistant|your name|what can you do)/i.test(q)) {
        return `I'm **Claudia's AI Assistant**, an intelligent chatbot integrated right into this portfolio website. I'm embedded in your browser, analyzing Claudia Tagbo-Fotso's portfolio data in real-time to answer your questions.\n\n` +
               `**What I can help with:**\n` +
               `• 📊 **About Claudia** — background, education, languages, location\n` +
               `• 🛠️ **Skills & Technologies** — ML, Python, SQL, Tableau, etc.\n` +
               `• 🚀 **Projects** — ${projects.length} projects across ${categories.length} categories\n` +
               `• 🎓 **Education & Certifications** — academic background\n` +
               `• 💼 **Work Experience** — professional journey\n` +
               `• 📞 **Contact Information** — how to reach Claudia\n` +
               `• 🤖 **Data Science Concepts** — ML, SQL, segmentation, BI with portfolio examples\n\n` +
               `What would you like to know about Claudia's portfolio?`;
    }

    // Profile / Who is Claudia
    if (/(who|about|claudia|profile|background|introduce|tell me about yourself)/i.test(q)) {
        return `**${metadata.owner}** is a ${metadata.title} based in ${metadata.location}.\n\n` +
               `**Background:** ${summary.elevator_pitch}\n\n` +
               `**Education:** ${education.map(e => `${e.degree} from ${e.institution}`).join(', ')}\n\n` +
               `**Languages:** ${skills.languages.map(l => `${l.language} (${l.proficiency})`).join(', ')}\n\n` +
               `**Key highlights:** ${summary.key_achievements.slice(0, 3).join(' • ')}`;
    }

    // Location (Claudia's location, not AI's)
    if (/(where is claudia|claudia location|based|claudia from)/i.test(q)) {
        return `Claudia is based in **${metadata.location}**, Germany. She's open to Data Scientist and Data Analyst roles throughout Germany, with flexibility for remote or hybrid work arrangements.`;
    }
    // Skills / Technologies
    if (/(skill|tech|stack|technology|tool|python|sql|tableau|tensorflow)/i.test(q)) {
        const skillAreas = {
            'Data Science': technical.data_science,
            'Machine Learning': technical.machine_learning,
            'Generative AI': technical.generative_ai,
            'Data Visualization': technical.data_visualization,
            'Databases': technical.databases,
            'Programming': technical.programming,
            'Scientific & Technical': technical.scientific_technical
        };
        let response = `**Claudia's Technical Expertise:**\n\n`;
        for (const [area, items] of Object.entries(skillAreas)) {
            if (items && items.length) {
                response += `**${area}:** ${items.slice(0, 8).join(', ')}\n\n`;
            }
        }
        return response;
    }

    // Projects overview
    if (/(project|portfolio|work|build|create|develop)/i.test(q) && !/(fx|currency|auto|car|retail|demand|cameroon|geo|nlp|disaster|sql|xai)/i.test(q)) {
        return `Claudia has **${projects.length} production-grade projects** across ${categories.length} categories:\n\n` +
               categories.map(cat => {
                   const catProjects = projects.filter(p => p.category_id === cat.category_id);
                   return `**${cat.icon} ${cat.name}:** ${catProjects.map(p => p.name).join(', ')}`;
               }).join('\n\n') +
               `\n\n💡 *Scroll the interactive 3D carousel above to explore all projects!*`;
    }

    // FX / Currency Forecasting
    if (/(fx|currency|exchange|forecast|forecasting)/i.test(q)) {
        const project = projects.find(p => p.name.toLowerCase().includes('currency') || p.name.toLowerCase().includes('fx'));
        if (project) {
            return `**${project.icon} ${project.name}**\n\n**Description:** ${project.description}\n\n**Technologies:** ${project.technologies.join(', ')}\n\n**Key Metrics:** ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}\n\n**Impact:** ${project.insight}`;
        }
        return `The Currency Exchange Forecasting project uses 20 years of FX data with Lasso regression achieving 0.208% MAPE. SARIMA captures 22-day market cycles with 73% error reduction.`;
    }

    // Automotive
    if (/(auto|car|vehicle|automotive|price|pricing)/i.test(q)) {
        const project = projects.find(p => p.name.toLowerCase().includes('automotive') || p.name.toLowerCase().includes('car price'));
        if (project) {
            return `**${project.icon} ${project.name}**\n\n**Description:** ${project.description}\n\n**Technologies:** ${project.technologies.join(', ')}\n\n**Key Metrics:** ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}\n\n**Impact:** ${project.insight}`;
        }
    }

    // Retail Demand
    if (/(retail|demand|inventory|favorita|sales)/i.test(q)) {
        const project = projects.find(p => p.name.toLowerCase().includes('retail') || p.name.toLowerCase().includes('demand'));
        if (project) {
            return `**${project.icon} ${project.name}**\n\n**Description:** ${project.description}\n\n**Technologies:** ${project.technologies.join(', ')}\n\n**Key Metrics:** ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}\n\n**Impact:** ${project.insight}`;
        }
    }

    // Cameroon Geospatial
    if (/(cameroon|geo|spatial|village|map|geospatial)/i.test(q)) {
        const project = projects.find(p => p.name.toLowerCase().includes('cameroon') || p.name.toLowerCase().includes('geospatial'));
        if (project) {
            return `**${project.icon} ${project.name}**\n\n**Description:** ${project.description}\n\n**Technologies:** ${project.technologies.join(', ')}\n\n**Key Metrics:** ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}\n\n**Impact:** ${project.insight}`;
        }
    }

    // Education
    if (/(education|degree|university|college|school|academic)/i.test(q)) {
        return `**Educational Background:**\n\n` +
               education.map(e => `🎓 **${e.institution}** — ${e.degree} (${e.period.start} to ${e.period.end})\n   ${e.highlights.map(h => `• ${h}`).join('\n   ')}`).join('\n\n') +
               `\n\n**Recent Certifications:**\n${certifications.slice(0, 4).map(c => `• ${c.name} (${c.issuer}, ${c.date})`).join('\n')}`;
    }

    // Contact
    if (/(contact|email|phone|reach|hire|connect)/i.test(q)) {
        return `**Contact Information:**\n\n` +
               `📧 **Email:** ${metadata.email}\n` +
               `📞 **Phone:** ${metadata.phone}\n` +
               `💻 **GitHub:** ${metadata.github}\n` +
               `📍 **Location:** ${metadata.location}\n\n` +
               `✨ **Availability:** Open to Data Scientist and Data Analyst roles in Germany!`;
    }

    // Default response
    return `I can help you with:\n\n` +
           `📊 **About Claudia** — background, education, languages\n` +
           `🛠️ **Skills & Technologies** — ML, Python, SQL, Tableau, etc.\n` +
           `🚀 **Projects** — ${projects.length} projects across ${categories.length} categories\n` +
           `🎓 **Education & Certifications** — academic background\n` +
           `💼 **Work Experience** — professional journey\n` +
           `📞 **Contact Information** — how to reach Claudia\n\n` +
           `What would you like to know?`;
}

/* ================================================================
   RENDER ALL SECTIONS
   ================================================================ */
function renderAllSections() {
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderEducation();
    renderCertifications();
    renderContact();
}

function renderHero() {
    const metadata = portfolio.metadata;
    const summary = portfolio.summary;
    const keyAchievements = summary.key_achievements || [];

    const heroAvailTag = document.getElementById('heroAvailTag');
    const heroH1 = document.getElementById('heroH1');
    const heroTagline = document.getElementById('heroTagline');
    const heroLoc = document.getElementById('heroLoc');
    const heroRight = document.getElementById('heroRight');
    const yearSpan = document.getElementById('year');

    if (heroAvailTag) heroAvailTag.innerHTML = `<span class="dot"></span> Available for Data Scientist roles in Germany`;
    if (heroH1) heroH1.innerHTML = `Hi, I'm <span class="grad-text">Claudia Tagbo-Fotso</span><br><span style="color:var(--muted);font-size:0.75em;font-weight:600">Data Science Analyst</span>`;
    if (heroTagline) heroTagline.textContent = metadata.tagline;
    if (heroLoc) heroLoc.textContent = metadata.location;
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    if (heroRight) {
        heroRight.innerHTML = `
            <div class="stat-row">
                <div class="stat-card glass"><div class="v">${portfolio.projects.length}+</div><div class="l">Projects</div></div>
                <div class="stat-card glass"><div class="v">$6M+</div><div class="l">Business Impact</div></div>
                <div class="stat-card glass"><div class="v">95%</div><div class="l">Test Coverage</div></div>
                <div class="stat-card glass"><div class="v">C1</div><div class="l">German</div></div>
            </div>
            <div class="learning-strip glass"><div class="emoji">🎓</div><div><div class="ll">Currently enrolled at</div><div class="lt">AI & Data Science · Masterschool</div></div></div>
            <div class="achievements-strip glass">
                <div class="al">Key achievements</div>
                ${keyAchievements.slice(0,4).map(a=>`<div class="achievement-item"><span class="aic">▸</span>${a}</div>`).join('')}
            </div>`;
    }
}

function renderAbout() {
    const summary = portfolio.summary;
    const skills = portfolio.skills;
    const languages = skills?.languages || [];

    const aboutSummary = document.getElementById('aboutSummary');
    const langGrid = document.getElementById('langGrid');
    const achieveList = document.getElementById('achieveList');

    if (aboutSummary) aboutSummary.textContent = summary.elevator_pitch;
    if (langGrid) langGrid.innerHTML = languages.map(l=>`<div class="lang-item"><div class="lang">${l.language}</div><div class="level">${l.proficiency}</div></div>`).join('');

    const keyAchievements = summary.key_achievements || [];
    if (achieveList) {
        achieveList.innerHTML = keyAchievements.slice(0,4).map(a=>`
            <div class="achieve-card"><span class="achieve-icon">⚡</span><span class="achieve-text">${a.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')}</span></div>`).join('');
    }
}

function renderSkills() {
    const technical = portfolio.skills?.technical || {};
    const SKILL_ICONS = {'data_science':'📊','machine_learning':'🤖','generative_ai':'✨','data_visualization':'📈','databases':'🗄️','programming':'💻','scientific_technical':'🔬'};
    const SKILL_LABELS = {'data_science':'Data Science','machine_learning':'Machine Learning','generative_ai':'Generative AI','data_visualization':'Visualization','databases':'Databases','programming':'Programming','scientific_technical':'Scientific & Technical'};

    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = Object.entries(technical).map(([key,items],i)=>`
            <div class="skill-card glass reveal" style="transition-delay:${i*50}ms">
                <div class="skill-card-head"><div class="skill-icon">${SKILL_ICONS[key]||'💡'}</div><h3>${SKILL_LABELS[key]||key}</h3></div>
                <div class="tag-list">${items.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
            </div>`).join('');
    }
}

function renderExperience() {
    const experience = portfolio.experience || [];
    const timeline = document.getElementById('timeline');
    if (timeline) {
        timeline.innerHTML = experience.map((e,i)=>`
            <div class="tl-item reveal" style="transition-delay:${i*100}ms">
                <div class="tl-dot"></div>
                <div class="tl-card glass">
                    <div class="tl-period">${e.period.start.replace('-',' ')} — ${e.period.end}</div>
                    <h3>${e.role}</h3>
                    <div class="tl-meta">${e.company} · ${e.location}</div>
                    <ul>${e.responsibilities.map(r=>`<li>${r}</li>`).join('')}</ul>
                </div>
            </div>`).join('');
    }
}

function renderEducation() {
    const education = portfolio.education || [];
    const educationGrid = document.getElementById('educationGrid');
    if (educationGrid) {
        educationGrid.innerHTML = education.map((e,i)=>`
            <div class="info-card glass reveal" style="transition-delay:${i*80}ms">
                <div class="info-card-icon">🎓</div>
                <div class="info-period">${e.period.start.replace('-',' ')} — ${e.period.end}</div>
                <h3>${e.institution}</h3>
                <div class="sub">${e.degree}</div>
                <ul class="highlights">${e.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>
            </div>`).join('');
    }
}

function renderCertifications() {
    const certifications = portfolio.certifications || [];
    const certsGrid = document.getElementById('certsGrid');
    if (certsGrid) {
        certsGrid.innerHTML = certifications.map((c,i)=>`
            <div class="info-card glass reveal" style="transition-delay:${i*80}ms">
                <div class="info-card-icon">🏆</div>
                <div class="info-period">${c.date.replace('-',' ')}</div>
                <h3>${c.name}</h3>
                <div class="sub">${c.issuer}</div>
            </div>`).join('');
    }
}

function renderContact() {
    const metadata = portfolio.metadata;
    const contactLinks = document.getElementById('contactLinks');
    if (contactLinks) {
        contactLinks.innerHTML = `
            <a class="contact-link glass" href="mailto:${metadata.email}">
                <div class="icon">✉️</div><div class="ltext"><div class="ltype">Email</div><div class="lval">${metadata.email}</div></div>
            </a>
            <a class="contact-link glass" href="tel:${metadata.phone.replace(/\s/g,'')}">
                <div class="icon">📞</div><div class="ltext"><div class="ltype">Phone</div><div class="lval">${metadata.phone}</div></div>
            </a>
            <a class="contact-link glass" href="${metadata.github}" target="_blank" rel="noopener">
                <div class="icon">💻</div><div class="ltext"><div class="ltype">GitHub</div><div class="lval">${metadata.github}</div></div>
            </a>
            <div class="contact-link glass">
                <div class="icon">📍</div><div class="ltext"><div class="ltype">Location</div><div class="lval">${metadata.location}</div></div>
            </div>`;
    }
}

/* ================================================================
   ANIMATED BACKGROUND PARTICLES
   ================================================================ */
function initBackgroundParticles() {
    const canvas = document.getElementById('bgCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, pts = [];

    function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
    resize(); window.addEventListener('resize', resize);

    for (let i = 0; i < 55; i++) {
        pts.push({ x: Math.random()*1920, y: Math.random()*1080, vx: (Math.random()-.5)*.22, vy: (Math.random()-.5)*.22, r: Math.random()*1.5+.5, a: Math.random()*.6+.15 });
    }

    function draw() {
        ctx.clearRect(0,0,W,H);
        pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if(p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
            ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(0,194,209,${p.a})`; ctx.fill();
        });
        pts.forEach((a,i) => pts.slice(i+1).forEach(b => {
            const d = Math.hypot(a.x-b.x,a.y-b.y);
            if(d<140){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(0,194,209,${0.06*(1-d/140)})`;ctx.stroke();}
        }));
        requestAnimationFrame(draw);
    }
    draw();
}

/* ================================================================
   3D CAROUSEL
   ================================================================ */
function initCarousel() {
    const stage = document.getElementById('carouselStage');
    const track = document.getElementById('carouselTrack');
    const dotsEl = document.getElementById('carouselDots');
    const catFilter = document.getElementById('catFilter');
    const counter = document.getElementById('projCounter');

    if (!stage || !track) return;

    let allProjects = DATA.projects;
    let projects = [...allProjects];
    let current = 0, autoTimer = null, isDragging = false, dragStartX = 0;

    const cats = ['All', ...DATA.categories.map(c => c.name)];
    if (catFilter) {
        catFilter.innerHTML = cats.map((c,i) => `<button class="cat-btn${i===0?' active':''}" data-cat="${c}">${i===0?'All Projects':DATA.categories[i-1].icon+' '+c}</button>`).join('');
        catFilter.querySelectorAll('.cat-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                catFilter.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
                btn.classList.add('active');
                const cat = btn.dataset.cat;
                projects = cat === 'All' ? [...allProjects] : allProjects.filter(p => DATA.categories.find(c=>c.category_id===p.category_id)?.name === cat);
                current = 0;
                buildCarousel();
            });
        });
    }

    function buildChart(p) {
        const w = 350, h = 138, pad = 22;
        const data = p.chart_data, max = Math.max(...data.map(d=>d.value), 1);
        const COLORS = ['#0077CC','#008C9E','#00C2D1','#00a0b0','#0060a0'];

        if (p.chart === 'bar') {
            const bw = (w-pad*2)/data.length - 7;
            return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
                ${data.map((d,i)=>{
                    const bh = Math.max((d.value/max)*(h-pad*2-8), 4);
                    const x = pad+i*(bw+7), y = h-pad-bh;
                    return `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="4" fill="${COLORS[i%5]}" opacity="0.85"/>
                    <text x="${x+bw/2}" y="${h-6}" text-anchor="middle" font-size="8.5" fill="#4a7090">${d.label}</text>
                    <text x="${x+bw/2}" y="${y-4}" text-anchor="middle" font-size="8" fill="#eaf3f8">${d.value}%</text>`;
                }).join('')}
                <line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" stroke="rgba(0,194,209,0.12)" stroke-width="1"/>
            </svg>`;
        }
        if (p.chart === 'line') {
            const sx = (w-pad*2)/(data.length-1||1);
            const pts = data.map((d,i)=>[pad+i*sx, h-pad-(d.value/max)*(h-pad*2-8)]);
            const path = pts.map((pt,i)=>(i?'L':'M')+pt[0].toFixed(1)+' '+pt[1].toFixed(1)).join(' ');
            return `<svg viewBox="0 0 ${w} ${h}">
                <path d="${path}" fill="none" stroke="#00C2D1" stroke-width="2"/>
                ${pts.map((pt,i)=>`<circle cx="${pt[0]}" cy="${pt[1]}" r="3.5" fill="#00C2D1"/>
                    <text x="${pt[0]}" y="${h-6}" text-anchor="middle" font-size="8" fill="#4a7090">${data[i].label}</text>`).join('')}
            </svg>`;
        }
        const cx = w/2, cy = h/2+4;
        return `<svg viewBox="0 0 ${w} ${h}">
            ${data.map((d,i)=>{
                const r=18+i*16, c=2*Math.PI*r;
                return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${COLORS[i%5]}" stroke-width="10" stroke-linecap="round"
                    stroke-dasharray="${c}" stroke-dashoffset="${c*(1-d.value/100)}" transform="rotate(-90 ${cx} ${cy})"/>`;
            }).join('')}
            ${data.map((d,i)=>`<text x="10" y="${15+i*16}" font-size="9.5" fill="${COLORS[i%5]}">● ${d.label}: ${d.value}%</text>`).join('')}
        </svg>`;
    }

    function getMetrics(p) {
        const m = p.key_metrics;
        if (!m) return '';
        const entries = Object.entries(m).slice(0,3);
        return `<div class="metrics-row">${entries.map(([k,v])=>`<div class="metric-chip"><div class="mv">${v}</div><div class="ml">${k.replace(/_/g,' ')}</div></div>`).join('')}</div>`;
    }

    function buildCarousel() {
        if (!track) return;
        track.innerHTML = projects.map((p,i) => {
            const cat = DATA.categories.find(c=>c.category_id===p.category_id);
            return `<div class="carousel-item" data-index="${i}">
                <div class="carousel-card">
                    <div class="carousel-card-inner">
                        <div class="proj-category">${cat?.icon||''} ${cat?.name||''}</div>
                        <h3>${p.icon} ${p.name}</h3>
                        <p class="desc">${p.description.substring(0,120)}...</p>
                        ${getMetrics(p)}
                        <div class="chart-box">${buildChart(p)}<div class="chart-insight">${p.insight}</div></div>
                        <div class="proj-footer">
                            <div class="proj-tech">${(p.technologies||[]).slice(0,4).map(t=>`<span>${t}</span>`).join('')}</div>
                            ${p.github_url ? `<a class="proj-link" href="${p.github_url}" target="_blank">GitHub ↗</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('');

        if (dotsEl) {
            dotsEl.innerHTML = projects.map((_,i)=>`<button class="carousel-dot${i===0?' active':''}" data-i="${i}"></button>`).join('');
            dotsEl.querySelectorAll('.carousel-dot').forEach(d=>d.addEventListener('click',()=>goTo(+d.dataset.i)));
        }
        updatePositions();
    }

    function updatePositions() {
        const items = track.querySelectorAll('.carousel-item');
        const n = items.length;
        if(!n) return;
        const angleStep = 360/n;
        const radius = Math.min(innerWidth * 0.26, 330);

        items.forEach((item,i)=>{
            const rel = ((i-current)%n+n)%n;
            const adj = rel>n/2?rel-n:rel;
            const angle = adj*angleStep;
            const rad = angle*Math.PI/180;
            const x = Math.sin(rad)*radius;
            const z = Math.cos(rad)*radius - radius;

            const distanceFromCenter = Math.abs(adj);
            const isCurrent = adj === 0;

            let scale;
            if (isCurrent) {
                scale = 1.0;
            } else if (distanceFromCenter === 1) {
                scale = 0.65;
            } else if (distanceFromCenter === 2) {
                scale = 0.45;
            } else {
                scale = 0.35;
            }

            let opacity;
            if (isCurrent) {
                opacity = 1.0;
            } else if (distanceFromCenter === 1) {
                opacity = 0.4;
            } else if (distanceFromCenter === 2) {
                opacity = 0.2;
            } else {
                opacity = 0.1;
            }

            let blurAmount = 0;
            if (!isCurrent) {
                if (distanceFromCenter === 1) {
                    blurAmount = 3;
                } else if (distanceFromCenter === 2) {
                    blurAmount = 5;
                } else {
                    blurAmount = 8;
                }
            }

            let brightness = isCurrent ? 1 : 0.4;

            item.style.transform = `translateX(-50%) translateY(-50%) translateX(${x}px) translateZ(${z}px) scale(${scale})`;
            item.style.opacity = opacity;
            item.style.filter = `blur(${blurAmount}px) brightness(${brightness})`;
            item.style.zIndex = isCurrent ? 100 : Math.round(scale * 50);
            item.style.transition = 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease, filter 0.5s ease';

            if (isCurrent) {
                item.classList.add('current');
                item.classList.remove('non-current');
            } else {
                item.classList.remove('current');
                item.classList.add('non-current');
            }
        });

        if (dotsEl) {
            dotsEl.querySelectorAll('.carousel-dot').forEach((d,i)=>d.classList.toggle('active',i===current));
        }
        if (counter) counter.textContent = `${current+1} / ${projects.length}`;
    }

    function goTo(idx) {
        current = ((idx%projects.length)+projects.length)%projects.length;
        updatePositions();
        resetAuto();
    }

    const prevBtn = document.getElementById('prevProj');
    const nextBtn = document.getElementById('nextProj');
    if (prevBtn) prevBtn.addEventListener('click',()=>goTo(current-1));
    if (nextBtn) nextBtn.addEventListener('click',()=>goTo(current+1));

    if (stage) {
        stage.addEventListener('mousedown',e=>{isDragging=true;dragStartX=e.clientX});
        stage.addEventListener('touchstart',e=>{isDragging=true;dragStartX=e.touches[0].clientX},{passive:true});
        window.addEventListener('mouseup',e=>{if(!isDragging)return;isDragging=false;if(Math.abs(e.clientX-dragStartX)>50)goTo(current+(e.clientX<dragStartX?1:-1))});
        window.addEventListener('touchend',e=>{if(!isDragging)return;isDragging=false;const dx=e.changedTouches[0].clientX-dragStartX;if(Math.abs(dx)>50)goTo(current+(dx<0?1:-1))});
    }

    function startAuto(){autoTimer=setInterval(()=>goTo(current+1),4500)}
    function resetAuto(){clearInterval(autoTimer);startAuto()}
    if (stage) {
        stage.addEventListener('mouseenter',()=>clearInterval(autoTimer));
        stage.addEventListener('mouseleave',()=>startAuto());
    }

    buildCarousel();
    startAuto();
    window.addEventListener('resize',updatePositions);
}

/* ================================================================
   NAVBAR
   ================================================================ */
function initNavbar() {
    const SECS=['hero','about','skills','projects','experience','education','certifications','contact'];
    const navEl=document.getElementById('navbar');
    const navLinks=document.getElementById('navLinks');
    const hamburger=document.getElementById('hamburger');

    document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>{
        document.getElementById(b.dataset.go)?.scrollIntoView({behavior:'smooth'});
        if (navLinks) navLinks.classList.remove('open');
    }));

    if (hamburger) hamburger.addEventListener('click',()=>navLinks?.classList.toggle('open'));

    window.addEventListener('scroll',()=>{
        if (navEl) navEl.classList.toggle('scrolled',scrollY>30);
        const y=scrollY+150;
        SECS.forEach(id=>{const el=document.getElementById(id);if(!el)return;if(el.offsetTop<=y&&el.offsetTop+el.offsetHeight>y){
            document.querySelectorAll('.nav-links button').forEach(b=>b.classList.toggle('active',b.dataset.go===id));
        }});
    },{passive:true});
}

/* ================================================================
   ADVANCED BIDIRECTIONAL SCROLL ANIMATION ENGINE
   ================================================================ */
function initRevealObserver() {
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                scrollDirection = currentScrollY >= lastScrollY ? 'down' : 'up';
                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    const elementStates = new WeakMap();

    function getAnimationProps(el, direction) {
        const isRevealLeft = el.classList.contains('reveal-left');
        const isRevealRight = el.classList.contains('reveal-right');
        const isRevealScale = el.classList.contains('reveal-scale');
        const isRevealFade = el.classList.contains('reveal-fade');

        if (direction === 'down') {
            if (isRevealLeft)  return { from: 'translateX(-36px)',  to: 'translateX(0)' };
            if (isRevealRight) return { from: 'translateX(36px)',   to: 'translateX(0)' };
            if (isRevealScale) return { from: 'scale(0.88)',         to: 'scale(1)' };
            if (isRevealFade)  return { from: 'translateY(0)',       to: 'translateY(0)' };
            return { from: 'translateY(36px)', to: 'translateY(0)' };
        } else {
            if (isRevealLeft)  return { from: 'translateX(36px)',   to: 'translateX(0)' };
            if (isRevealRight) return { from: 'translateX(-36px)',  to: 'translateX(0)' };
            if (isRevealScale) return { from: 'scale(0.88)',         to: 'scale(1)' };
            if (isRevealFade)  return { from: 'translateY(0)',       to: 'translateY(0)' };
            return { from: 'translateY(-36px)', to: 'translateY(0)' };
        }
    }

    function animateIn(el, direction) {
        const state = elementStates.get(el) || {};
        if (state.animating === 'in') return;

        const delay = parseInt(el.style.transitionDelay) || 0;
        const props = getAnimationProps(el, direction);

        el.style.transition = 'none';
        el.style.opacity = '0';
        el.style.transform = props.from;

        el.getBoundingClientRect();

        el.style.transition = `opacity 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.72s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = props.to;
                el.classList.add('in');
                elementStates.set(el, { animating: 'in', visible: true });
            });
        });
    }

    function animateOut(el, direction) {
        const state = elementStates.get(el) || {};
        if (!state.visible) return;

        let exitTransform;
        const isRevealLeft = el.classList.contains('reveal-left');
        const isRevealRight = el.classList.contains('reveal-right');
        const isRevealScale = el.classList.contains('reveal-scale');

        if (direction === 'down') {
            if (isRevealLeft)  exitTransform = 'translateX(-28px)';
            else if (isRevealRight) exitTransform = 'translateX(28px)';
            else if (isRevealScale) exitTransform = 'scale(0.92)';
            else exitTransform = 'translateY(-28px)';
        } else {
            if (isRevealLeft)  exitTransform = 'translateX(28px)';
            else if (isRevealRight) exitTransform = 'translateX(-28px)';
            else if (isRevealScale) exitTransform = 'scale(0.92)';
            else exitTransform = 'translateY(28px)';
        }

        el.style.transition = 'opacity 0.45s cubic-bezier(0.55,0,0.55,0.9), transform 0.45s cubic-bezier(0.55,0,0.55,0.9)';
        el.style.opacity = '0';
        el.style.transform = exitTransform;
        el.classList.remove('in');
        elementStates.set(el, { animating: 'out', visible: false });
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
                animateIn(el, scrollDirection);
            } else {
                animateOut(el, scrollDirection);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -5% 0px'
    });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        elementStates.set(el, { animating: null, visible: false });
        revealObserver.observe(el);
    });

    const mutationObs = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                const animatables = node.querySelectorAll
                    ? node.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade')
                    : [];
                animatables.forEach(el => {
                    if (!elementStates.has(el)) {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(28px)';
                        elementStates.set(el, { animating: null, visible: false });
                        revealObserver.observe(el);
                    }
                });
                if (node.classList && (
                    node.classList.contains('reveal') ||
                    node.classList.contains('reveal-left') ||
                    node.classList.contains('reveal-right') ||
                    node.classList.contains('reveal-scale') ||
                    node.classList.contains('reveal-fade')
                )) {
                    if (!elementStates.has(node)) {
                        node.style.opacity = '0';
                        node.style.transform = 'translateY(28px)';
                        elementStates.set(node, { animating: null, visible: false });
                        revealObserver.observe(node);
                    }
                }
            });
        });
    });

    mutationObs.observe(document.body, { childList: true, subtree: true });
}


/* ================================================================
   FIXED IMAGE BEHIND CONTENT
   ================================================================ */
function initFixedImage() {
    const imageContainer = document.querySelector('.fixed-image-container');

    const contentElements = document.querySelectorAll(
        '.content, .box, .glass, .section, .hero, .about, .skills, .projects, ' +
        '.experience, .education, .certifications, .contact, .navbar, ' +
        '.hero-grid, .stat-card, .achieve-card, .skill-card, .info-card, ' +
        '.carousel-stage, .chat-fab, .chat-panel'
    );

    if (!imageContainer) {
        console.warn("Fixed image container not found.");
        return;
    }

    Object.assign(imageContainer.style, {
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '0',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
    });

    contentElements.forEach(element => {
        if (element === imageContainer) return;
        if (element.style.zIndex === '' || parseInt(element.style.zIndex) <= 0) {
            element.style.position = 'relative';
            element.style.zIndex = '1';
        }
    });

    const backgroundElement = document.querySelector('.app-bg');
    if (backgroundElement) {
        backgroundElement.style.zIndex = '-2';
    }
}

/* ================================================================
   AI CHATBOT - With Professional Fallback (No AI Required)
   ================================================================ */

function initChatbot() {
    const fab = document.getElementById('chatFab');
    const panel = document.getElementById('chatPanel');
    const closeBtn = document.getElementById('chatClose');
    const fullscreenBtn = document.getElementById('chatFullscreen');
    const messagesEl = document.getElementById('chatMessages');
    const suggEl = document.getElementById('chatSugg');
    const inputEl = document.getElementById('chatInput');
    const sendBtn = document.getElementById('chatSend');

    if (!fab || !panel) return;

    let isOpen = false;
    let isLoading = false;
    let conversationHistory = [];

    /* ============================================================
       TOKEN HANDLING - Uses PUBLIC token as fallback
    ============================================================ */

    function getChatToken() {
        return localStorage.getItem('HF_TOKEN') ||
               sessionStorage.getItem('HF_TOKEN') ||
               HF_PUBLIC_TOKEN ||
               null;
    }

    let HF_TOKEN = getChatToken();
    console.log('🔑 Chatbot token:', HF_TOKEN ? '✅ Found' : '❌ Not found - using professional fallback');

    /* ============================================================
       PROFESSIONAL FALLBACK - NO AI REQUIRED
       All responses use portfolio DATA directly
    ============================================================ */

    function getProfessionalFallback(question) {
        const q = question.toLowerCase().trim();

        // ============================================
        // GREETINGS
        // ============================================
        if (/^(hi|hello|hey|greetings|good morning|good afternoon|start|begin|bonjour|hallo)/i.test(q)) {
            return `<h3>👋 Welcome to Claudia's Portfolio!</h3>
                    <p>I'm <strong>Claudia Tagbo-Fotso's AI Assistant</strong>. I can answer questions about her:</p>
                    <ul>
                        <li>📊 <strong>${DATA.projects.length} projects</strong> across 4 categories</li>
                        <li>🛠️ <strong>Technical skills</strong> — Python, SQL, ML, Tableau, Power BI</li>
                        <li>🎓 <strong>Education & Certifications</strong></li>
                        <li>💼 <strong>Work Experience</strong> — 7+ years at PTB</li>
                        <li>📞 <strong>Contact information</strong></li>
                    </ul>
                    <p><em>💡 Try asking: "What projects has Claudia worked on?" or "What SQL skills does she have?"</em></p>`;
        }

        // ============================================
        // ABOUT CLAUDIA
        // ============================================
        if (/(who|about|claudia|profile|background|introduce|tell me about yourself|bio|who is)/i.test(q)) {
            const metadata = DATA.portfolio_metadata;
            const summary = DATA.summary;
            const education = DATA.education;
            const skills = DATA.skills;

            return `<h3>👩‍💻 About Claudia Tagbo-Fotso</h3>
                    <p><strong>${metadata.owner}</strong> is a <strong>${metadata.title}</strong> based in <strong>${metadata.location}</strong>.</p>
                    <p>${summary.elevator_pitch}</p>
                    <p><strong>🎓 Education:</strong> ${education.map(e => `${e.degree} from ${e.institution}`).join(' • ')}</p>
                    <p><strong>🌍 Languages:</strong> ${skills.languages.map(l => `${l.language} (${l.proficiency})`).join(' • ')}</p>
                    <p><strong>✨ Open to:</strong> Data Scientist and Data Analyst roles in Germany!</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:${metadata.email}">${metadata.email}</a></p>`;
        }

        // ============================================
        // SKILLS & TECHNOLOGIES
        // ============================================
        if (/(skill|tech|stack|technology|tool|python|sql|tableau|pandas|scikit|power bi|postgresql|alchemy|expertise)/i.test(q)) {
            const technical = DATA.skills.technical || {};
            let response = `<h3>🛠️ Technical Skills</h3>`;

            const skillMap = {
                'data_science': '📊 Data Science',
                'machine_learning': '🤖 Machine Learning',
                'generative_ai': '✨ Generative AI',
                'data_visualization': '📈 Data Visualization',
                'databases': '🗄️ Databases',
                'programming': '💻 Programming',
                'scientific_technical': '🔬 Scientific & Technical'
            };

            for (const [key, label] of Object.entries(skillMap)) {
                if (technical[key] && technical[key].length) {
                    response += `<p><strong>${label}:</strong> ${technical[key].join(', ')}</p>`;
                }
            }

            return response;
        }

        // ============================================
        // PROJECTS OVERVIEW
        // ============================================
        if (/(project|portfolio|work|build|create|develop|show|list)/i.test(q) && !/(sql|cte|segment|tableau|database|pipeline)/i.test(q)) {
            const categories = DATA.categories;
            const projects = DATA.projects;

            let response = `<h3>🚀 ${projects.length} Production-Grade Projects</h3>`;

            categories.forEach(cat => {
                const catProjects = projects.filter(p => p.category_id === cat.category_id);
                if (catProjects.length) {
                    response += `<p><strong>${cat.icon} ${cat.name}:</strong> ${catProjects.map(p => p.name).join(' • ')}</p>`;
                }
            });

            response += `<p>💡 <em>Scroll the interactive 3D carousel above to explore all projects!</em></p>`;
            return response;
        }

        // ============================================
        // SQL CTE PIPELINE
        // ============================================
        if (/(sql cte|cte|traveltide sql|session pipeline|pipeline|cte architecture|user session|sql pipeline)/i.test(q)) {
            const project = DATA.projects.find(p => p.project_id === 2);
            return `<h3>🗄️ User Session Analytics Pipeline</h3>
                    <p><strong>Project:</strong> ${project.name}</p>
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                    <p><strong>Key Metrics:</strong> ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}</p>
                    <p><strong>Impact:</strong> ${project.insight}</p>
                    <p><strong>🔗 GitHub:</strong> <a href="${project.github_url}" target="_blank">View on GitHub</a></p>`;
        }

        // ============================================
        // SEGMENTATION PROJECT
        // ============================================
        if (/(segment|kmeans|k-means|cluster|rfm|segmentation|customer segmentation|clustering)/i.test(q)) {
            const project = DATA.projects.find(p => p.project_id === 4);
            return `<h3>🎯 Customer Segmentation & Performance Analysis</h3>
                    <p><strong>Description:</strong> ${project.description}</p>
                    <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                    <p><strong>Key Metrics:</strong> ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}</p>
                    <p><strong>Impact:</strong> ${project.insight}</p>
                    <p><strong>🔗 GitHub:</strong> <a href="${project.github_url}" target="_blank">View on GitHub</a></p>`;
        }

        // ============================================
        // TABLEAU / DASHBOARDS
        // ============================================
        if (/(tableau|dashboard|fifa|unicorn|kpi|visualization|visual|bi|business intelligence)/i.test(q)) {
            return `<h3>📊 Tableau Dashboards</h3>
                    <p><strong>FIFA 2023 Player Performance Analytics:</strong> Interactive Tableau dashboards for cross-league, cross-nation, and cross-position comparison. Clustering players by performance and market value.</p>
                    <p><strong>Unicorn Sales & KPI Dashboard:</strong> Multi-source KPI dashboard integrating multiple data sources to analyze sales, profit, and key performance indicators.</p>
                    <p><strong>Technologies:</strong> Tableau, Python, SQL</p>
                    <p><strong>Key Features:</strong> Interactive dashboards • Revenue, profit tracking • Category performance analysis</p>`;
        }

        // ============================================
        // MACHINE LEARNING
        // ============================================
        if (/(machine learning|ml|algorithm|model|regression|classification|predict|forecast|supervised|unsupervised)/i.test(q)) {
            const technical = DATA.skills.technical || {};
            return `<h3>🤖 Machine Learning Expertise</h3>
                    <p><strong>Core Skills:</strong> ${(technical.machine_learning || []).join(', ')}</p>
                    <p><strong>Portfolio Application:</strong> Customer Segmentation using K-Means clustering on 5,998 customers with 50+ behavioral features</p>
                    <p><strong>Validation:</strong> Statistical testing with χ², t-test, and Mann–Whitney U tests</p>
                    <p><strong>Key Achievement:</strong> Engineered 50+ RFM and engagement features for targeted retention strategies</p>`;
        }

        // ============================================
        // EDUCATION
        // ============================================
        if (/(education|degree|university|college|school|academic|study|master|bachelor|studied)/i.test(q)) {
            const education = DATA.education;
            let response = `<h3>🎓 Educational Background</h3>`;

            education.forEach(e => {
                response += `<p><strong>${e.institution}</strong><br>${e.degree} (${e.period.start} — ${e.period.end})<br>`;
                if (e.highlights && e.highlights.length) {
                    response += e.highlights.map(h => `• ${h}`).join('<br>');
                }
                response += `</p>`;
            });

            return response;
        }

        // ============================================
        // EXPERIENCE
        // ============================================
        if (/(experience|work|job|career|ptb|physikalisch|engineer|professional|employed)/i.test(q)) {
            const experience = DATA.experience;
            let response = `<h3>💼 Work Experience</h3>`;

            experience.forEach(e => {
                response += `<p><strong>${e.company}</strong><br>${e.role} (${e.period.start} — ${e.period.end})<br>${e.location}</p>`;
                if (e.responsibilities && e.responsibilities.length) {
                    response += `<ul>${e.responsibilities.slice(0, 5).map(r => `<li>${r}</li>`).join('')}</ul>`;
                }
            });

            return response;
        }

        // ============================================
        // CONTACT
        // ============================================
        if (/(contact|email|phone|reach|hire|connect|linkedin|github|call|message)/i.test(q)) {
            const metadata = DATA.portfolio_metadata;
            return `<h3>📞 Contact Information</h3>
                    <p><strong>📧 Email:</strong> <a href="mailto:${metadata.email}">${metadata.email}</a></p>
                    <p><strong>📞 Phone:</strong> ${metadata.phone}</p>
                    <p><strong>💻 GitHub:</strong> <a href="${metadata.github}" target="_blank">${metadata.github}</a></p>
                    <p><strong>🔗 LinkedIn:</strong> <a href="${metadata.linkedin}" target="_blank">${metadata.linkedin}</a></p>
                    <p><strong>📍 Location:</strong> ${metadata.location}</p>
                    <p><strong>✨ Availability:</strong> Open to Data Scientist and Data Analyst roles in Germany!</p>`;
        }

        // ============================================
        // AI ASSISTANT SELF-IDENTIFICATION
        // ============================================
        if (/(where are you|who are you|what are you|yourself|ai assistant|your name|what can you do|are you ai)/i.test(q)) {
            return `<h3>🤖 About Me</h3>
                    <p>I'm <strong>Claudia's AI Assistant</strong>, an intelligent chatbot integrated into this portfolio website.</p>
                    <p><strong>What I can help with:</strong></p>
                    <ul>
                        <li>📊 <strong>About Claudia</strong> — background, education, languages, location</li>
                        <li>🛠️ <strong>Skills & Technologies</strong> — ML, Python, SQL, Tableau, etc.</li>
                        <li>🚀 <strong>Projects</strong> — ${DATA.projects.length} projects across ${DATA.categories.length} categories</li>
                        <li>🎓 <strong>Education & Certifications</strong></li>
                        <li>💼 <strong>Work Experience</strong></li>
                        <li>📞 <strong>Contact Information</strong></li>
                    </ul>
                    <p><em>💡 I have access to all portfolio data — feel free to ask anything!</em></p>`;
        }

        // ============================================
        // TRAVELTIDE ANALYTICS ENGINE
        // ============================================
        if (/(traveltide|analytics engine|core module|eda|feature engineering|perk assignment)/i.test(q)) {
            const project = DATA.projects.find(p => p.project_id === 1);
            if (project) {
                return `<h3>🧩 ${project.name}</h3>
                        <p><strong>Description:</strong> ${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        <p><strong>Key Metrics:</strong> ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}</p>
                        <p><strong>Impact:</strong> ${project.insight}</p>
                        <p><strong>🔗 GitHub:</strong> <a href="${project.github_url}" target="_blank">View on GitHub</a></p>`;
            }
        }

        // ============================================
        // DATA QUALITY / LOADING
        // ============================================
        if (/(data quality|loading|quality assessment|missing|eda|loader)/i.test(q)) {
            const project = DATA.projects.find(p => p.project_id === 3);
            if (project) {
                return `<h3>📥 ${project.name}</h3>
                        <p><strong>Description:</strong> ${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        <p><strong>Key Metrics:</strong> ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}</p>
                        <p><strong>Impact:</strong> ${project.insight}</p>
                        <p><strong>🔗 GitHub:</strong> <a href="${project.github_url}" target="_blank">View on GitHub</a></p>`;
            }
        }

        // ============================================
        // CHINOOK MOCK INTERVIEW
        // ============================================
        if (/(chinook|mock interview|interview|database|neon|postgres)/i.test(q) && !/sql/i.test(q)) {
            const project = DATA.projects.find(p => p.project_id === 7);
            if (project) {
                return `<h3>🎵 ${project.name}</h3>
                        <p><strong>Description:</strong> ${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        <p><strong>Key Metrics:</strong> ${Object.entries(project.key_metrics).map(([k, v]) => `${k}: ${v}`).join(' • ')}</p>
                        <p><strong>Impact:</strong> ${project.insight}</p>
                        <p><strong>🔗 GitHub:</strong> <a href="${project.github_url}" target="_blank">View on GitHub</a></p>`;
            }
        }

        // ============================================
        // DEFAULT - HELP
        // ============================================
        return `<h3>🤔 How Can I Help?</h3>
                <p>I can provide information about Claudia's portfolio, skills, and experience. Try asking:</p>
                <ul>
                    <li><strong>"Who is Claudia Tagbo-Fotso?"</strong> — Background and profile</li>
                    <li><strong>"What projects has she worked on?"</strong> — Project overview</li>
                    <li><strong>"What SQL skills does she have?"</strong> — Technical skills</li>
                    <li><strong>"Tell me about the segmentation project"</strong> — Specific project</li>
                    <li><strong>"How can I contact her?"</strong> — Contact information</li>
                </ul>
                <p><em>💡 I have access to all portfolio data — feel free to ask anything!</em></p>`;
    }

    /* ============================================================
       SYSTEM PROMPT BUILDER (for AI mode)
    ============================================================ */
    function buildSystemPrompt() {
        const projectSummaries = DATA.projects.map(p => `
[${p.project_id}] ${p.icon} ${p.name}
  Category: ${DATA.categories.find(c => c.category_id === p.category_id)?.name || 'General'}
  Description: ${p.description.substring(0, 200)}...
  Technologies: ${(p.technologies || []).slice(0, 5).join(', ')}
  Key Metrics: ${JSON.stringify(p.key_metrics || {})}
  Impact: ${p.insight || 'See project for details'}`).join('\n');

        const skillLines = Object.entries(DATA.skills.technical || {})
            .map(([key, items]) => `• ${key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}: ${(items || []).slice(0, 8).join(', ')}`)
            .join('\n');

        return `
You are Claudia Tagbo-Fotso's professional AI assistant for her data science portfolio.

=== RESPONSE RULES ===
• ALWAYS output clean HTML (no Markdown)
• Use <h3>, <p>, <ul>, <li>, <strong> for structure
• Keep responses under 150 words
• Never fabricate metrics or projects

=== PORTFOLIO OWNER PROFILE ===
Name: ${DATA.portfolio_metadata.owner}
Title: ${DATA.portfolio_metadata.title}
Location: ${DATA.portfolio_metadata.location}
Email: ${DATA.portfolio_metadata.email}
GitHub: ${DATA.portfolio_metadata.github}

=== KEY ACHIEVEMENTS ===
${DATA.summary.key_achievements.map(a => `• ${a}`).join('\n')}

=== SKILLS ===
${skillLines}

=== ALL ${DATA.projects.length} PROJECTS ===
${projectSummaries}
`;
    }

    const SYSTEM_PROMPT = buildSystemPrompt();

    const SUGGESTIONS = [
        "Who is Claudia Tagbo-Fotso?",
        "Tell me about the segmentation projects",
        "Explain the SQL CTE pipeline project",
        "What is a CTE in SQL?",
        "What SQL skills does Claudia have?",
        "Where are you?"
    ];

    /* ============================================================
       PROFESSIONAL HTML MESSAGE RENDERING
    ============================================================ */
    function appendMessage(role, htmlContent) {
        const msg = document.createElement("div");
        msg.className = `msg ${role}`;

        const formatted = htmlContent
            .split(/\n{2,}/)
            .map(block => `<p>${block.replace(/\n/g, "<br>")}</p>`)
            .join("");

        msg.innerHTML = `
            <div class="msg-content">
                ${formatted}
            </div>
            <span class="msg-time">
                ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}
            </span>
        `;

        messagesEl.appendChild(msg);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function showTyping() {
        const el = document.createElement('div');
        el.className = 'typing-ind';
        el.id = 'typingInd';
        el.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        messagesEl.appendChild(el);
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function hideTyping() {
        document.getElementById('typingInd')?.remove();
    }

    /* ============================================================
       API CALLS - Uses public token
    ============================================================ */
    async function callDeepSeekOpenAI(messages) {
        const token = getChatToken();

        if (!token) {
            console.warn('⚠️ No HF_TOKEN found');
            return null;
        }

        try {
            const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    model: 'deepseek-ai/DeepSeek-V3',
                    messages,
                    temperature: 0.7,
                    max_tokens: 500
                })
            });

            if (!response.ok) throw new Error(`API Error: ${response.status}`);

            const data = await response.json();
            return data.choices[0]?.message?.content || null;

        } catch (err) {
            console.error("DeepSeek API Error:", err);
            return null;
        }
    }

    /* ============================================================
       SEND MESSAGE - With Professional Fallback
    ============================================================ */
    async function send(text) {
        if (!text.trim() || isLoading) return;

        isLoading = true;
        sendBtn.disabled = true;
        suggEl.style.display = 'none';

        appendMessage("user", text);
        inputEl.value = "";

        conversationHistory.push({ role: "user", content: text });

        showTyping();

        let aiResponse = null;
        let usedAI = false;

        const token = getChatToken();

        if (token) {
            try {
                const messages = [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...conversationHistory
                ];

                const response = await callDeepSeekOpenAI(messages);
                if (response) {
                    aiResponse = response;
                    usedAI = true;
                } else {
                    console.log('🔄 API returned null, using professional fallback');
                    aiResponse = getProfessionalFallback(text);
                    usedAI = false;
                }
            } catch (error) {
                console.error('❌ API Error:', error);
                aiResponse = getProfessionalFallback(text);
                usedAI = false;
            }
        } else {
            console.log('🔄 No token found, using professional fallback');
            aiResponse = getProfessionalFallback(text);
            usedAI = false;
        }

        hideTyping();

        // Add note if using fallback
        if (!usedAI) {
            aiResponse += `<p style="font-size:0.7rem;color:var(--muted);margin-top:10px;border-top:1px solid rgba(255,255,255,0.05);padding-top:8px;">💡 <em>Using offline portfolio data (AI not available)</em></p>`;
        }

        appendMessage("bot", aiResponse);

        conversationHistory.push({ role: "assistant", content: aiResponse });

        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }

        isLoading = false;
        sendBtn.disabled = false;
        inputEl.focus();
    }

    /* ============================================================
       INITIAL MESSAGE + SUGGESTIONS
    ============================================================ */
    const tokenStatus = getChatToken() ? 'online' : 'offline';

    appendMessage("bot",
        `<h3>👋 Welcome to Claudia's Portfolio!</h3>
         <p>I'm <strong>Claudia's AI assistant</strong>, powered by DeepSeek AI.</p>
         <p>Ask me about her <strong>${DATA.projects.length}</strong> projects, skills, or any data science concept!</p>
         <p style="font-size:0.75rem;color:var(--muted);margin-top:8px;">
             ${tokenStatus === 'online' ? '🟢 AI is available' : '🟡 Running in offline mode with portfolio data'}
         </p>`
    );

    suggEl.innerHTML = SUGGESTIONS
        .map(s => `<button class="sug-btn">${s}</button>`)
        .join('');

    suggEl.querySelectorAll('.sug-btn')
        .forEach(btn => btn.addEventListener('click', () => send(btn.textContent)));

    /* ============================================================
       OPEN / CLOSE / FULLSCREEN
    ============================================================ */
    function open() {
        isOpen = true;
        panel.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        fab.classList.add('open');
        inputEl.focus();
    }

    function close() {
        isOpen = false;
        panel.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        fab.classList.remove('open');
    }

    fab.addEventListener('click', () => isOpen ? close() : open());
    closeBtn.addEventListener('click', close);

    fullscreenBtn.addEventListener("click", () => {
        panel.classList.toggle("fullscreen");
        fullscreenBtn.textContent = panel.classList.contains("fullscreen") ? "🗗" : "⛶";
    });

    sendBtn.addEventListener('click', () => send(inputEl.value));
    inputEl.addEventListener('keydown', e => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send(inputEl.value);
        }
    });
}

function showErrorMessage(message) {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:20%;left:50%;transform:translateX(-50%);background:#ff4444;color:white;padding:20px;border-radius:10px;z-index:9999;';
    container.textContent = message;
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 5000);
}

// Start the application
initApp();