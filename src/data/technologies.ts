export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "CMS & Builders" | "Tools & Workflow";
  description: string;
  level: "Expert" | "Advanced" | "Proficient";
  iconName: string;
  badge?: string;
}

export const techStackData: TechItem[] = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    description: "Component-driven user interfaces, state management, and modern hook architectures.",
    level: "Expert",
    iconName: "Atom",
    badge: "Core",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Server-side rendering, App Router, static site generation, and hybrid web apps.",
    level: "Advanced",
    iconName: "Zap",
    badge: "Modern Stack",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe JavaScript for scalable, maintainable, and bug-resistant enterprise code.",
    level: "Advanced",
    iconName: "FileCode",
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    description: "Deep vanilla DOM mastery, asynchronous programming, Web APIs, and modern tooling.",
    level: "Expert",
    iconName: "Code",
    badge: "Core",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first design tokens, responsive breakpoints, custom theme configurations.",
    level: "Expert",
    iconName: "Palette",
    badge: "Design System",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "Frontend",
    description: "Accessible, SEO-structured documents adhering to W3C standards and ARIA rules.",
    level: "Expert",
    iconName: "Layout",
  },
  {
    name: "Modern CSS3",
    category: "Frontend",
    description: "CSS Grid, Flexbox, custom animations, variables, and responsive layout systems.",
    level: "Expert",
    iconName: "Sparkles",
  },

  // Backend
  {
    name: "PHP",
    category: "Backend",
    description: "Object-oriented backend programming, custom themes, plugins, and server logic.",
    level: "Expert",
    iconName: "Server",
    badge: "Core",
  },
  {
    name: "Laravel",
    category: "Backend",
    description: "MVC architecture, Eloquent ORM, authentication, queues, and clean API design.",
    level: "Advanced",
    iconName: "Box",
    badge: "Full-Stack",
  },
  {
    name: "Inertia.js",
    category: "Backend",
    description: "The modern monolith: seamless integration of Laravel backends with React frontends.",
    level: "Advanced",
    iconName: "Layers",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript runtimes, build scripts, microservices, and API endpoints.",
    level: "Proficient",
    iconName: "Terminal",
  },
  {
    name: "REST APIs",
    category: "Backend",
    description: "RESTful architecture, secure endpoint design, JSON schemas, and webhooks.",
    level: "Advanced",
    iconName: "Network",
  },
  {
    name: "MySQL & Relational DBs",
    category: "Backend",
    description: "Schema design, migrations, indexing, query optimization, and data modeling.",
    level: "Advanced",
    iconName: "Database",
  },

  // CMS & Builders
  {
    name: "WordPress",
    category: "CMS & Builders",
    description: "Custom themes, ACF Pro, Gutenberg blocks, hooks, filters, and headless endpoints.",
    level: "Expert",
    iconName: "Globe",
    badge: "Specialist",
  },
  {
    name: "Divi Builder",
    category: "CMS & Builders",
    description: "Pixel-perfect visual design, custom child themes, performance tuning, and agency workflows.",
    level: "Expert",
    iconName: "LayoutTemplate",
    badge: "Specialist",
  },
  {
    name: "Elementor & Elementor Pro",
    category: "CMS & Builders",
    description: "Theme builder templates, loop grids, dynamic content integration, and responsive setups.",
    level: "Expert",
    iconName: "Cpu",
    badge: "Specialist",
  },
  {
    name: "WooCommerce",
    category: "CMS & Builders",
    description: "Store setups, checkout customization, product data structures, and payment gateways.",
    level: "Advanced",
    iconName: "ShoppingBag",
  },

  // Tools & Workflow
  {
    name: "Git & Version Control",
    category: "Tools & Workflow",
    description: "Branching strategies, clean commit histories, rebase workflows, and collaborative PRs.",
    level: "Expert",
    iconName: "GitBranch",
  },
  {
    name: "GitHub & CI/CD",
    category: "Tools & Workflow",
    description: "Automated deployment pipelines, issue tracking, and repository management.",
    level: "Advanced",
    iconName: "GitCommit",
  },
  {
    name: "Playwright",
    category: "Tools & Workflow",
    description: "End-to-end browser testing, automated UI regression verification, and QA.",
    level: "Advanced",
    iconName: "CheckCircle",
  },
  {
    name: "Hostinger & Cloud Deploy",
    category: "Tools & Workflow",
    description: "Production Node.js deployment, PHP/MySQL hosting, DNS, SSL, and caching setup.",
    level: "Advanced",
    iconName: "Cloud",
    badge: "Production Ready",
  },
];

