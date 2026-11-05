export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  benefits: string[];
  highlight: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: "wordpress-development",
    number: "01",
    title: "WordPress Development",
    shortDescription:
      "Custom WordPress websites, bespoke theme architecture, custom Gutenberg & ACF blocks, and high-performance engineering.",
    fullDescription:
      "Transforming complex designs into secure, scalable, and easy-to-manage WordPress platforms. We focus on lightweight code without plugin bloat, custom post types, structured fields with Advanced Custom Fields (ACF), and full Gutenberg editing autonomy for your marketing team.",
    iconName: "Globe",
    deliverables: [
      "Custom WordPress theme development from scratch",
      "Advanced Custom Fields (ACF Pro) integration",
      "Custom Gutenberg blocks tailored to brand design",
      "WooCommerce setup & payment gateway configuration",
      "Headless WordPress API endpoints if needed",
      "Database & code-level security hardening",
    ],
    technologies: ["WordPress", "PHP", "ACF Pro", "Gutenberg", "MySQL", "REST API"],
    benefits: [
      "Zero reliance on fragile bloated third-party themes",
      "Intuitive back-office that anyone on your team can edit",
      "Lightning-fast page load times and strict Core Web Vitals compliance",
      "Long-term stability and effortless future updates",
    ],
    highlight: true,
  },
  {
    id: "divi-elementor-development",
    number: "02",
    title: "Divi & Elementor Development",
    shortDescription:
      "Pixel-perfect, fluidly responsive websites crafted with Divi and Elementor Pro, enhanced with custom CSS and speed optimizations.",
    fullDescription:
      "For businesses requiring rapid deployment and visual page builder agility, we build robust sites using Divi and Elementor. We bypass the common pitfalls of page builders by writing clean custom CSS, preventing DOM bloating, and optimizing asset delivery so your site looks bespoke and loads swiftly.",
    iconName: "Layout",
    deliverables: [
      "Pixel-perfect Figma or Adobe XD to Divi/Elementor conversions",
      "Custom CSS/JS overrides for unique interactive effects",
      "Global typography and color token system architecture",
      "Mobile-first responsive optimization across all breakpoints",
      "Performance tuning and asset minimization",
      "Comprehensive client video handover and training",
    ],
    technologies: ["Elementor Pro", "Divi Builder", "Custom CSS3", "JavaScript", "WordPress"],
    benefits: [
      "Effortless visual drag-and-drop editing for your marketing team",
      "Fast turnaround time from initial concept to launch",
      "Custom animations without heavy plugin overhead",
      "Clean visual hierarchy matching your exact design specs",
    ],
    highlight: true,
  },
  {
    id: "custom-web-development",
    number: "03",
    title: "Custom Web Development",
    shortDescription:
      "Modern web applications, custom business functionality, and scalable digital solutions tailored to specific business logic.",
    fullDescription:
      "When off-the-shelf software falls short, custom web engineering provides the competitive edge. We architect bespoke web solutions designed around your unique operational workflows, customer portals, or data processing pipelines using modern programming standards.",
    iconName: "Code2",
    deliverables: [
      "Full-stack custom application architecture",
      "Robust RESTful API design and documentation",
      "Third-party integrations (Stripe, CRMs, ERPs, Webhooks)",
      "Role-based access control and secure authentication",
      "Responsive, cross-browser tested UI components",
      "Structured databases with automated backups",
    ],
    technologies: ["JavaScript", "TypeScript", "Node.js", "PHP", "Tailwind CSS", "REST APIs"],
    benefits: [
      "Exact alignment with your proprietary business processes",
      "No recurrent licensing fees for rigid SaaS tools",
      "Scalable architecture ready for traffic surges",
      "Complete code ownership and intellectual property retention",
    ],
    highlight: true,
  },
  {
    id: "laravel-development",
    number: "04",
    title: "Laravel & SaaS Development",
    shortDescription:
      "Robust backend systems, SaaS applications, custom APIs, administrative portals, and business management engines.",
    fullDescription:
      "Leveraging the elegance and strength of Laravel to engineer maintainable backend architectures. From multi-tenant SaaS platforms to complex inventory engines and customer management portals, we write testable, expressive, and secure PHP/Laravel applications.",
    iconName: "Server",
    deliverables: [
      "Custom Laravel web applications and portal development",
      "Inertia.js + React modern monolith architectures",
      "Subscription billing and Stripe webhook processing",
      "Relational database design (MySQL, PostgreSQL)",
      "Automated queue workers, notifications, and scheduled tasks",
      "API endpoints for mobile apps and external consumers",
    ],
    technologies: ["Laravel", "PHP", "Inertia.js", "MySQL", "Redis", "REST APIs"],
    benefits: [
      "Rock-solid security against common web vulnerabilities (CSRF, SQLi, XSS)",
      "Rapid development lifecycle thanks to Laravel's rich ecosystem",
      "Clean, scalable code following MVC and Clean Architecture guidelines",
      "Easy maintenance and onboarding for future engineers",
    ],
    highlight: true,
  },
  {
    id: "react-frontend-development",
    number: "05",
    title: "React & Frontend Development",
    shortDescription:
      "Modern interfaces, interactive digital experiences, stateful frontend applications, and responsive component design.",
    fullDescription:
      "Crafting high-fidelity, interactive user interfaces with React, Next.js, and TypeScript. We prioritize component modularity, fluid micro-interactions, accessibility (a11y), and zero layout shift so users experience instant, app-like speed and tactile responsiveness.",
    iconName: "Layers",
    deliverables: [
      "Component-driven frontend architecture with React & Next.js",
      "Tailwind CSS styling and design system tokens",
      "State management and real-time UI synchronization",
      "Accessible markup (ARIA) and keyboard navigation",
      "Smooth micro-interactions with Framer Motion",
      "Complete cross-browser and mobile device verification",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    benefits: [
      "Silky-smooth, app-like transitions that captivate users",
      "Reusable component library for consistent brand standards",
      "Exceptional SEO indexing with server-side rendering (SSR/SSG)",
      "Maintainable codebase typed cleanly with TypeScript",
    ],
    highlight: true,
  },
  {
    id: "website-maintenance-optimization",
    number: "06",
    title: "Website Maintenance & Optimization",
    shortDescription:
      "Proactive performance enhancement, Core Web Vitals optimization, regular updates, bug fixes, and continuous technical support.",
    fullDescription:
      "A website is a living asset. We protect your digital investment through scheduled updates, continuous security monitoring, proactive database pruning, and rigorous performance tuning that keeps your site green across Google's Core Web Vitals metrics.",
    iconName: "Gauge",
    deliverables: [
      "Core Web Vitals auditing and remediation (LCP, INP, CLS)",
      "Scheduled core, theme, and plugin update testing in staging",
      "Cloud backup automation and disaster recovery protocols",
      "Malware scanning, uptime tracking, and SSL enforcement",
      "Ongoing bug triage, layout adjustments, and content updates",
      "Monthly health reports with actionable performance metrics",
    ],
    technologies: ["Chrome DevTools", "Lighthouse", "Cloudflare", "PHP", "MySQL", "Hostinger"],
    benefits: [
      "Peace of mind knowing a dedicated technologist monitors your site",
      "Higher Google organic search rankings due to superior performance",
      "Reduced bounce rates and elevated conversion rates",
      "Zero unexpected downtime or plugin collision breakdowns",
    ],
    highlight: true,
  },
  {
    id: "divi-development",
    number: "07",
    title: "Dedicated Divi Development",
    shortDescription:
      "Specialized Divi theme architecture, custom child themes, and layout systemization for creative agencies.",
    fullDescription:
      "Extensive experience building within Elegant Themes' Divi framework. We build modular Divi child themes with hardened styles, custom code snippets, and structured layout packs that allow content teams to build landing pages with total visual consistency.",
    iconName: "Palette",
    deliverables: [
      "Divi child theme development with custom hooks",
      "Custom CSS styling surpassing native Divi module limits",
      "Responsive breakpoint tuning for mobile tablets and phones",
      "Optimization of Divi CSS/JS assets to eliminate render blocking",
      "Migration of legacy websites to clean Divi structures",
    ],
    technologies: ["Divi", "WordPress", "Custom CSS3", "PHP", "jQuery / Vanilla JS"],
    benefits: [
      "Empowered non-technical staff to launch pages in minutes",
      "Strict brand consistency maintained through preset styles",
      "Significantly faster load speeds than standard default Divi builds",
      "Dedicated agency-partner workflow for ongoing white-label builds",
    ],
    highlight: false,
  },
  {
    id: "elementor-development",
    number: "08",
    title: "Dedicated Elementor Development",
    shortDescription:
      "Custom Elementor Pro templates, loop builders, dynamic content hooks, and advanced visual design.",
    fullDescription:
      "Maximizing the power of Elementor Pro by pairing it with custom post types, dynamic tags, and Elementor's theme builder. We create flexible layouts, custom popups, and advanced filtering systems that load quickly and convert visitors.",
    iconName: "Cpu",
    deliverables: [
      "Elementor Theme Builder setups (Header, Footer, Single, Archive)",
      "Elementor Loop Grid & dynamic template customization",
      "Integration with ACF Pro for dynamic data injection",
      "Lightweight custom animations and scroll effects",
      "Performance auditing with asset unloading on unnecessary pages",
    ],
    technologies: ["Elementor Pro", "WordPress", "ACF Pro", "Custom CSS", "JavaScript"],
    benefits: [
      "Highly dynamic content-driven templates that scale automatically",
      "Elimination of excessive plugins through native Elementor features",
      "Smooth mobile layout adaptation without broken typography",
      "Fast launch schedules for time-critical marketing campaigns",
    ],
    highlight: false,
  },
];

