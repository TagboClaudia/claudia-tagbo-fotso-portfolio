/// =============================================
// Claudia Tagbo-Fotso - Portfolio Model Class
// Object-oriented representation of portfolio data
// Version: 3.0 - Full Enhanced
// =============================================

class BaseModel {
  constructor(data) {
    Object.assign(this, data);
  }
  toJSON() {
    return Object.assign({}, this);
  }
}

class Project extends BaseModel {
  constructor(data) {
    super(data);
    this.business_insights = data.business_insights || [];
    this.technologies = data.technologies || [];
    this.sql_insights = data.sql_insights || [];
    this.ai_insights = data.ai_insights || [];
    this.key_metrics = data.key_metrics || {};
    this.project_statistics = data.project_statistics || {};
    this.suggested_visualizations = data.suggested_visualizations || [];
    this.technical_details_missing = data.technical_details_missing || [];
    this.keywords = data.keywords || [];
  }
  get topMetrics() {
    return Object.entries(this.key_metrics).slice(0, 3)
      .map(([k, v]) => `${k}: ${v}`).join(" | ");
  }
  get techDisplay() {
    return this.technologies.join(", ");
  }
}

class Category extends BaseModel {
  constructor(data) {
    super(data);
    this.projects = (data.projects || []).map(p => new Project(p));
  }
  get projectCount() {
    return this.projects.length;
  }
}

class TechnicalSkills extends BaseModel {
  constructor(data) {
    super(data);
    this.data_science = data.data_science || [];
    this.machine_learning = data.machine_learning || [];
    this.generative_ai = data.generative_ai || [];
    this.data_visualization = data.data_visualization || [];
    this.databases = data.databases || [];
    this.programming = data.programming || [];
    this.scientific_technical = data.scientific_technical || [];
  }
  get allSkills() {
    return [...this.data_science, ...this.machine_learning, ...this.generative_ai,
            ...this.data_visualization, ...this.databases,
            ...this.programming, ...this.scientific_technical];
  }
}

class SkillsContainer extends BaseModel {
  constructor(data) {
    super(data);
    this.technical = data.technical ? new TechnicalSkills(data.technical) : null;
    this.soft = data.soft || [];
    this.languages = (data.languages || []).map(l => new Language(l));
  }
}

class Language extends BaseModel {
  constructor(data) {
    super(data);
  }
  get displayText() {
    return `${this.language} (${this.proficiency})`;
  }
}

class Education extends BaseModel {
  constructor(data) {
    super(data);
    this.highlights = data.highlights || [];
  }
  get periodDisplay() {
    return `${this.period.start} to ${this.period.end}`;
  }
}

class Experience extends BaseModel {
  constructor(data) {
    super(data);
    this.responsibilities = data.responsibilities || [];
  }
  get periodDisplay() {
    return `${this.period.start} to ${this.period.end}`;
  }
}

class Certification extends BaseModel {
  constructor(data) {
    super(data);
  }
}

class SummaryStatistics extends BaseModel {
  constructor(data) {
    super(data);
    this.primary_focus_areas = data.primary_focus_areas || [];
    this.technology_stack = data.technology_stack || [];
    this.key_achievements = data.key_achievements || [];
  }
}

class Portfolio {
  constructor(data) {
    this.metadata = data.portfolio_metadata;
    this.summary = data.summary;
    this.skills = data.skills ? new SkillsContainer(data.skills) : null;
    this.education = (data.education || []).map(e => new Education(e));
    this.experience = (data.experience || []).map(e => new Experience(e));
    this.certifications = (data.certifications || []).map(c => new Certification(c));
    this.summary_stats = data.summary_statistics ? new SummaryStatistics(data.summary_statistics) : null;
    this.keywords = data.keywords || [];
    this.stats = data.stats;

    // Support two JSON layouts:
    // 1. projects nested inside each category object
    // 2. flat root-level "projects" array with a category_id field (our actual JSON)
    const rootProjects = data.projects || [];

    if (rootProjects.length > 0) {
      // Build a lookup: category_id -> [projects]
      const byCategory = {};
      for (const p of rootProjects) {
        const cid = p.category_id;
        if (!byCategory[cid]) byCategory[cid] = [];
        byCategory[cid].push(p);
      }
      // Inject projects into their category before constructing Category objects
      this.categories = (data.categories || []).map(c => {
        return new Category(Object.assign({}, c, { projects: byCategory[c.category_id] || [] }));
      });
    } else {
      // projects are already nested inside each category
      this.categories = (data.categories || []).map(c => new Category(c));
    }

    this.projects = {
      total: this.categories.reduce((sum, cat) => sum + cat.projectCount, 0),
      all: this.categories.flatMap(cat => cat.projects)
    };
  }

  get allProjects() { return this.projects.all; }
  get allTechnologies() {
    const techSet = new Set();
    this.allProjects.forEach(p => p.technologies.forEach(t => techSet.add(t)));
    return Array.from(techSet).sort();
  }
  get allCategories() {
    return ["All", ...this.categories.map(c => c.name)];
  }
  get projectsWithVisualizations() {
    return this.allProjects.filter(p => p.suggested_visualizations?.length > 0);
  }
  getProjectsWithSQL() {
    return this.allProjects.filter(p => p.sql_insights?.length > 0);
  }
  getMostRecentProjects(limit = 3) {
    return [...this.allProjects].sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated)).slice(0, limit);
  }
  filterProjectsByCategory(categoryName) {
    const cat = this.categories.find(c => c.name === categoryName);
    return cat ? cat.projects : [];
  }
  filterProjectsByTech(technology) {
    return this.allProjects.filter(p => p.technologies.includes(technology));
  }
  getProjectById(id) {
    return this.allProjects.find(p => p.project_id === id);
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
      summary_statistics: this.summary_stats,
      keywords: this.keywords,
      stats: this.stats
    };
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Portfolio, Project, Category, SkillsContainer, TechnicalSkills, Language, Education, Experience, Certification, SummaryStatistics };
}