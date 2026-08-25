<div align="center">

# Claudia Tagbo-Fotso — Data Science Analyst Portfolio

### An Interactive 3D Portfolio Website with DeepSeek AI-Powered Chatbot

[![Python](https://img.shields.io/badge/Python-3.12+-blue)](https://python.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![DeepSeek](https://img.shields.io/badge/DeepSeek-AI-4A6FA5?logo=deepseek&logoColor=white)](https://deepseek.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-TagboClaudia-181717?logo=github)](https://github.com/TagboClaudia)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Claudia%20Tagbo--Fotso-0077B5?logo=linkedin)](https://www.linkedin.com/in/claudia-fotso)

**An immersive, single-page portfolio website showcasing 7 production-grade data science, SQL, and BI projects, featuring a 3D interactive carousel, bidirectional scroll animations, and a DeepSeek AI-powered intelligent assistant.**

</div>

---

## 📖 Table of Contents

- [Project Demo](#-project-demo)
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Portfolio Highlights](#-portfolio-highlights)
- [Getting Started](#-getting-started)
- [AI Chatbot Integration](#-ai-chatbot-integration)
- [Environment Configuration](#-environment-configuration)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)
- [License](#-license)

---

## 🎥 Project Demo

<div align="center">

<video width="720" autoplay muted loop playsinline>
  <source src="videos/portfolio_demo.mp4" type="video/mp4">
</video>


*Auto-playing demonstration of the interactive 3D carousel, AI chatbot, and scroll-triggered animations.*

</div>

---

## 📋 Overview

This portfolio is a fully interactive, single-page web application built to represent **Claudia Tagbo-Fotso**, a Data Science Analyst based in Berlin, Germany. It goes beyond a traditional resume by embedding 7 real production-grade projects into a visually stunning 3D carousel.

The website integrates a local AI-powered chatbot (using DeepSeek models via HuggingFace) that can intelligently answer questions about the portfolio's content, explain technical concepts, and provide personalized responses based on the embedded JSON data.

**Highlights Represented in Projects:**
- **5.4M+ sessions** unified into a 3-stage SQL CTE pipeline (TravelTide)
- **49,211 sessions / 5,998 customers** segmented with rule-based + K-Means clustering
- **50+ behavioral features** engineered (RFM metrics, conversion rates, session activity)
- **15%** measurement accuracy improvement across 300+ weekly datasets at PTB
- **20-25%** workflow efficiency gains through pipeline optimization

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **3D Interactive Carousel** | Projects are displayed on a 3D rotating wheel with smooth transitions, scale, and blur effects. |
| **DeepSeek AI Chatbot** | An intelligent assistant embedded in the page that answers portfolio and technical questions using semantic analysis. |
| **Bidirectional Scroll Animations** | Elements fade and slide based on scroll direction (up/down) for a polished UX. |
| **Dynamic Particle Background** | An animated WebGL canvas with connecting particles and gradients. |
| **Responsive Glassmorphism UI** | Modern glass-card design with backdrop blur, neon accents, and adaptive layouts. |
| **Category Filtering** | Filter the 7 projects by categories like Segmentation, SQL Pipelines, and BI Dashboards. |
| **Fullscreen Chat Mode** | Expand the chatbot to fullscreen for deeper conversations. |
| **Client-Side API Integration** | Direct secure calls to HuggingFace/DeepSeek without a backend proxy. |

---

## 🛠️ Technology Stack

### Frontend
- **HTML5** & **CSS3** (Glassmorphism, CSS Grid, Flexbox)
- **JavaScript (ES6+)** (Vanilla, no frameworks)
- **Canvas API** (for particle background)
- **CSS 3D Transforms** (for carousel perspective)

### AI & Chatbot
- **DeepSeek Models** (`deepseek-ai/DeepSeek-V3`) via HuggingFace Inference API
- **Custom System Prompt Engineering** (Semantic JSON analysis)
- **Streaming & Non-streaming** API support

### Styling & Animation
- **Google Fonts** (Syne, DM Sans)
- **Custom Keyframe Animations** (pulse, shimmer, typing)
- **Intersection Observer API** (scroll-triggered reveals)

### Data
- **Embedded `portfolio.json`** (7 projects, skills, experience, education)
- **Zero backend** — Fully static, client-rendered

---

## 📁 Project Structure

```
claudia-tagbo-fotso-portfolio/
├── LICENSE
├── README.md
├── videos/
│   └── portfolio_demo.mp4
└── src/
    ├── index.html
    └── assets/
        ├── css/
        │   └── styles.css
        ├── images/
        │   └── chloe_aicha.png
        ├── js/
        │   ├── chatbot_engine.js      # Core AI orchestration
        │   ├── client.js              # DeepSeek API client
        │   ├── config.js              # API keys & config
        │   ├── main.js                # App initialization & rendering
        │   ├── portfolio.js           # Portfolio data model
        │   ├── portfolio_data_provider.js  # Data extraction layer
        │   └── system_prompt.js       # AI prompt engineering
        └── json/
            └── portfolio.json          # Complete portfolio dataset
```

---

## 🚀 Portfolio Highlights

### 1. TravelTide Analytics Engine (Core Module)
- **Tech**: Python, Pandas, Scikit-learn, Plotly, SQLAlchemy
- **Scope**: 6-module pipeline covering data ingestion, EDA, feature engineering, KMeans/DBSCAN segmentation, and perk assignment

### 2. User Session Analytics Pipeline (SQL CTE Architecture)
- **Tech**: PostgreSQL, SQL (CTEs)
- **Scope**: 3-stage CTE pipeline unifying 5.4M+ sessions with user, flight, and hotel data

### 3. TravelTide Data Loading & Quality Assessment
- **Tech**: Python, Pandas, PostgreSQL
- **Metric**: 1,020,926 users, 5,408,063 sessions profiled; base_sessions dataset of 49,211 enriched rows

### 4. Customer Segmentation & Performance Analysis
- **Tech**: Scikit-learn (K-Means), SciPy statistical testing
- **Metric**: 50+ behavioral features across 5,998 customers, validated with χ², t-test, Mann–Whitney U

### 5. FIFA 2023 Player Performance Analytics
- **Tech**: Python, SQL, Tableau
- **Scope**: Player clustering and segmentation across leagues, nations, and positions

*...and 2 more projects (Unicorn Sales & KPI Dashboard, Chinook Mock Interview Notebook).*

---

## 🧪 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari)
- (Optional) HuggingFace API key for AI features

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TagboClaudia/claudia-tagbo-fotso-portfolio.git
   cd claudia-tagbo-fotso-portfolio
   ```

2. **Navigate to the source directory**
   ```bash
   cd src
   ```

3. **Run a local server** (recommended to avoid CORS issues with some APIs)
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js
   npx serve .
   ```

4. **Open your browser**
   ```
   http://localhost:8000
   ```

5. **Optional: Add API Key**
   - Open `src/assets/js/config.js`
   - Replace `hf_YOUR_TOKEN_HERE` with your actual HuggingFace token
   - Or set in localStorage: `localStorage.setItem('HF_TOKEN', 'your_token')`

---

## 🤖 AI Chatbot Integration

The portfolio includes a fully functional AI assistant that operates entirely client-side.

### How It Works

1. **System Prompt Engineering** (`system_prompt.js`)
   - A 200+ line professional prompt that guides the LLM to act as Claudia's assistant.
   - Defines portfolio owner profile, all 7 projects, skills, and response rules.

2. **Semantic JSON Analysis**
   - The assistant performs a "JSON-first" reasoning: it analyzes the user's question and searches the embedded `portfolio.json` before answering.

3. **API Client** (`client.js`)
   - Supports DeepSeek models via HuggingFace's OpenAI-compatible endpoint.
   - Handles streaming and non-streaming responses.

4. **Fallback Mode**
   - If no API key is provided, the chatbot falls back to a local response generator that still answers intelligently using the portfolio data.

### Example Questions to Ask the Chatbot

- "Who is Claudia Tagbo-Fotso?"
- "Explain the SQL CTE pipeline project."
- "What SQL skills does she have?"
- "How does the customer segmentation project work?"
- "Show me the Tableau dashboard projects."
- "Contact details and availability."

---

## 🔧 Environment Configuration

The portfolio uses a HuggingFace token to access DeepSeek models. Configure it in `src/assets/js/config.js`:

```javascript
window.HF_TOKEN = "hf_YOUR_TOKEN_HERE";
```

**Security Note:** This is a client-side token. For production, consider:
- Adding an API proxy layer
- Rate limiting
- Token rotation
- Environment variable injection at build time

---

## 🌐 Deployment

The portfolio is fully static and can be deployed to any hosting service:

### Vercel (Recommended)
```bash
vercel --prod
```

### Netlify
```bash
netlify deploy --dir=src --prod
```

### GitHub Pages
```bash
# Push the src folder to the gh-pages branch
git subtree push --prefix src origin gh-pages
```

**Live Demo:** [https://tagboclaudia.github.io](https://tagboclaudia.github.io) *(replace with actual URL)*

---

## 🔮 Future Enhancements

- [ ] **Speech-to-text input** for the chatbot
- [ ] **PDF export** of portfolio as resume
- [ ] **Dark/Light theme** toggle
- [ ] **More 3D visualizations** (3D model of project architecture)
- [ ] **Project detail modal** with full documentation
- [ ] **Analytics dashboard** (page views, chat interactions)
- [ ] **PWA support** (offline mode)

---

## 👩‍💻 Author

<div align="center">

**Claudia Tagbo-Fotso**
*Data Science Analyst | AI & Machine Learning | Strategy & Analytics*

[![GitHub](https://img.shields.io/badge/GitHub-TagboClaudia-181717?logo=github&style=for-the-badge)](https://github.com/TagboClaudia)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin&style=for-the-badge)](https://www.linkedin.com/in/claudia-fotso)
[![Email](https://img.shields.io/badge/Email-tagbo.fotso%40gmail.com-D14836?logo=gmail&style=for-the-badge)](mailto:tagbo.fotso@gmail.com)

📍 Berlin, Germany

</div>

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with HTML, CSS, JavaScript & DeepSeek AI**
*© 2026 Claudia Tagbo-Fotso*

</div>