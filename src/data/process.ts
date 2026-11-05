export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  output: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    number: "Step 01",
    title: "Discover",
    tagline: "Uncover goals, technical requirements & target audience.",
    description:
      "Every project begins with active listening. We analyze your commercial objectives, brand positioning, audience expectations, and technical dependencies to establish clear targets.",
    activities: [
      "Initial stakeholder consultation & project scope audit",
      "Competitive digital landscape & audience review",
      "Technical architecture assessment (CMS vs. custom framework)",
      "Timeline, milestone, and deliverable definition",
    ],
    output: "Project Scope & Technical Roadmap",
  },
  {
    step: "02",
    number: "Step 02",
    title: "Plan",
    tagline: "Define structure, user journeys & development strategy.",
    description:
      "Careful planning eliminates costly revisions later. We define site architecture, data schemas, interactive components, and responsive layout guidelines before writing production code.",
    activities: [
      "Information architecture & content structure mapping",
      "Database schema and custom post type modeling",
      "Design token and typography systemization",
      "Git branch strategy & staging environment provisioning",
    ],
    output: "Architecture Blueprint & Design Tokens",
  },
  {
    step: "03",
    number: "Step 03",
    title: "Design & Build",
    tagline: "Pixel-perfect implementation & clean code engineering.",
    description:
      "Turning visual concepts into high-performance web realities. Whether building with custom WordPress blocks, Divi/Elementor, Laravel, or React, every line of code is structured for maintainability and speed.",
    activities: [
      "Modular component creation with clean markup & CSS",
      "Custom functionality, API hooks, and database queries",
      "Responsive layout engineering across 360px to 1920px+",
      "Regular milestone previews in a private staging sandbox",
    ],
    output: "Production-Ready Codebase & Staging Build",
  },
  {
    step: "04",
    number: "Step 04",
    title: "Test & Refine",
    tagline: "Rigorous cross-browser, responsive & performance verification.",
    description:
      "No launch happens without exhaustive verification. We audit across Chrome, Safari, Firefox, Edge, and iOS/Android viewports to guarantee stability, security, and Core Web Vitals excellence.",
    activities: [
      "Cross-device and multi-browser rendering audits",
      "Core Web Vitals tuning (LCP, INP, CLS optimization)",
      "Form validation, mail delivery, and error edge-case tests",
      "Accessibility (a11y) checks and semantic validation",
    ],
    output: "Quality Assurance Sign-Off & Performance Report",
  },
  {
    step: "05",
    number: "Step 05",
    title: "Launch & Support",
    tagline: "Flawless deployment, client handover & ongoing care.",
    description:
      "We orchestrate smooth, zero-downtime production deployment, configure DNS and SSL, establish automated cloud backups, and provide dedicated documentation so you feel completely confident.",
    activities: [
      "Production deployment to Hostinger or client server",
      "DNS configuration, SSL certificate validation & caching rules",
      "Google Search Console & sitemap submission",
      "Loom video walkthrough & post-launch warranty support",
    ],
    output: "Live Website & Client Handover Package",
  },
];
