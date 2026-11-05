export interface CaseStudyData {
  slug: string;
  title: string;
  tagline: string;
  category: "WordPress" | "Business Websites" | "E-commerce" | "Custom Development" | "Web Applications";
  clientIndustry: string;
  completionYear: string;
  role: string;
  featured: boolean;
  heroImage: string;
  thumbnail: string;
  summary: string;
  technologies: string[];
  deliverables: string[];
  clientRequirements: string[];
  challenges: string[];
  approach: string[];
  designAndDevelopment: string[];
  finalResult: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: CaseStudyData[] = [
  {
    slug: "corporate-consulting-platform",
    title: "Corporate Advisory & Consulting Portal",
    tagline: "High-performance WordPress enterprise platform with bespoke custom blocks.",
    category: "WordPress",
    clientIndustry: "Management & Strategic Consulting",
    completionYear: "2024",
    role: "Full-Stack WordPress Developer",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    summary:
      "A complete bespoke WordPress platform designed for an international management consulting firm. Engineered with a custom lightweight theme, modular ACF blocks, multi-language structure, and strict speed optimization.",
    technologies: ["WordPress", "PHP", "ACF Pro", "Tailwind CSS", "JavaScript", "MySQL"],
    deliverables: [
      "Custom WordPress theme from ground up",
      "Over 18 reusable ACF flexible content blocks",
      "Case study archive with multi-attribute filtering",
      "Careers portal with resume upload handling",
      "Automated server-side caching & image optimization",
    ],
    clientRequirements: [
      "Migrate away from a bloated commercial theme that was causing slow load times.",
      "Give the marketing team complete autonomy to build new landing pages using custom on-brand blocks.",
      "Support bilingual content delivery without plugin bloat.",
      "Achieve high Core Web Vitals scores to support global organic search efforts.",
    ],
    challenges: [
      "The client's existing website had over 120 pages of legacy content with disorganized shortcodes.",
      "Heavy reliance on outdated third-party slider plugins that blocked mobile rendering.",
      "Need for complex filterable resource libraries without page reloads.",
    ],
    approach: [
      "Conducted a complete content inventory and designed clean data schemas using Advanced Custom Fields.",
      "Engineered an ultra-clean custom theme avoiding all generic bloated frameworks.",
      "Developed an asynchronous REST API-based filter for publications, whitepapers, and case studies.",
      "Implemented server-level caching rules and WebP picture elements.",
    ],
    designAndDevelopment: [
      "Implemented a rigid typographic system adhering to strict corporate brand guidelines.",
      "Built custom block controls within WordPress Gutenberg editor so editors can toggle colors and alignments safely.",
      "Secured administrative forms and endpoints with nonces and honeypot validation.",
    ],
    finalResult: [
      "Clean, maintainable codebase that loads under 1.2 seconds across global test locations.",
      "Zero layout shift (CLS score of 0.01) and rapid Largest Contentful Paint.",
      "Internal marketing team now publishes new case studies in minutes without developer intervention.",
    ],
  },
  {
    slug: "modern-saas-analytics-interface",
    title: "B2B SaaS Metrics & Insights Dashboard",
    tagline: "Responsive React frontend with interactive data visualization and custom controls.",
    category: "Web Applications",
    clientIndustry: "Cloud Software & Fintech",
    completionYear: "2024",
    role: "Frontend Engineer (React / TypeScript)",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    summary:
      "Interactive analytics portal interface built for a growing B2B SaaS startup. Features clean data widgets, dark/light theme switching, filterable transaction tables, and responsive mobile adaptation.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Lucide Icons", "REST APIs"],
    deliverables: [
      "Modular dashboard layout with collapsible navigation",
      "Interactive data cards and KPI trend metrics",
      "Multi-column searchable and sortable data tables",
      "Exportable CSV and PDF summary report modules",
      "Client-side caching with optimistic UI state updates",
    ],
    clientRequirements: [
      "Replace an aging static interface with a modern, snappy single-page experience.",
      "Strict TypeScript typing to facilitate multi-developer feature expansions.",
      "Smooth responsive support so C-level executives can review metrics on mobile devices.",
      "Modular components reusable across both customer portal and internal admin views.",
    ],
    challenges: [
      "Handling dynamic datasets with multiple time-range aggregations without UI lag.",
      "Ensuring crisp readability of dense financial and subscription data on smaller screens.",
      "Coordinating state between active global filters and independent widget views.",
    ],
    approach: [
      "Architected clean React component trees organized by domain and UI primitives.",
      "Implemented efficient memoization and lightweight rendering cycles for complex tables.",
      "Designed mobile-friendly card alternatives for wide table views on viewports under 768px.",
    ],
    designAndDevelopment: [
      "Created consistent dark/light tokens with Tailwind CSS.",
      "Included accessible keyboard shortcuts for navigating between metric views.",
      "Built resilient error boundaries and subtle skeleton loading states.",
    ],
    finalResult: [
      "Delivered a fluid, responsive application interface that loads instantaneously.",
      "Reduced user friction during daily reporting workflows.",
      "Clean component library ready for ongoing feature sprints.",
    ],
  },
  {
    slug: "creative-agency-portfolio-platform",
    title: "Digital Design Studio Showpiece",
    tagline: "Editorial agency website with custom Elementor Pro styling and fluid motion.",
    category: "Business Websites",
    clientIndustry: "Creative Design & Branding Agency",
    completionYear: "2024",
    role: "WordPress & Elementor Specialist",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1400&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    summary:
      "A high-impact, editorial web presence created for a creative studio. Built using Elementor Pro combined with extensive custom CSS and vanilla JavaScript micro-interactions to achieve an artistic boutique aesthetic.",
    technologies: ["Elementor Pro", "WordPress", "Custom CSS", "JavaScript", "PHP"],
    deliverables: [
      "Full custom Elementor Pro theme builder integration",
      "Interactive project grid with hover previews",
      "Fluid typography system responsive across ultra-wide and mobile screens",
      "Dynamic team member and awards custom post types",
      "Custom contact and project inquiry modal flow",
    ],
    clientRequirements: [
      "Achieve an avant-garde editorial agency look without breaking standard CMS usability.",
      "Give the agency design team direct control over future project uploads.",
      "Ensure fast load times despite high-resolution photography assets.",
    ],
    challenges: [
      "Standard Elementor widgets lacked the bespoke layout asymmetries required by the designer.",
      "Heavy high-resolution imagery risked slow mobile page loads if unoptimized.",
    ],
    approach: [
      "Created custom CSS grid overlays on top of Elementor containers to achieve precise editorial offsets.",
      "Configured automated server-side image compression and responsive `srcset` generation.",
      "Wrote custom lightweight JavaScript for cursor hover interactions and smooth anchor jumps.",
    ],
    designAndDevelopment: [
      "Engineered bespoke typographic headers with subtle highlighted accent text.",
      "Built sticky navigation with blur backdrop filter that gracefully condenses on scroll.",
      "Verified rendering precision across Chrome, Safari, Firefox, and mobile WebKit.",
    ],
    finalResult: [
      "A distinctive visual showcase that stands out from standard corporate templates.",
      "Agency team successfully manages and uploads weekly client case studies independently.",
      "Fast page transitions with zero cumulative layout shift.",
    ],
  },
  {
    slug: "logistics-fleet-management-system",
    title: "Logistics Dispatch & Operations System",
    tagline: "Scalable Laravel & Inertia.js platform managing real-time vehicle dispatch workflows.",
    category: "Custom Development",
    clientIndustry: "Transportation & Freight Operations",
    completionYear: "2023",
    role: "Backend & Full-Stack Developer",
    featured: true,
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1400&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    summary:
      "Custom operations management platform engineered with Laravel and Inertia.js. Replaces legacy spreadsheets with an integrated web platform for tracking drivers, vehicle assignments, maintenance logs, and delivery manifests.",
    technologies: ["Laravel", "Inertia.js", "React", "MySQL", "Tailwind CSS", "REST API"],
    deliverables: [
      "Multi-role user authentication (Admins, Dispatchers, Fleet Managers)",
      "Real-time dispatch board with status tracking",
      "Vehicle maintenance scheduling and reminder alert engine",
      "Automated PDF manifest generator for route drivers",
      "Audit logging for every assignment change and status update",
    ],
    clientRequirements: [
      "Consolidate fragmented manual spreadsheets into a single source of operational truth.",
      "Provide instantaneous search across thousands of active and archived delivery records.",
      "Enforce strict role-based access permissions to protect sensitive commercial pricing.",
    ],
    challenges: [
      "Complex relational database queries involving vehicle availability, driver licensing, and route schedules.",
      "Need for instantaneous UI reactivity without building a detached, complex SPA architecture.",
    ],
    approach: [
      "Utilized Laravel with Inertia.js and React to achieve modern SPA responsiveness with the simplicity and security of server-side routing.",
      "Designed normalized MySQL schemas with indexed foreign keys for sub-second query execution.",
      "Created automated queue workers for generating bulk PDF manifests and sending operational email alerts.",
    ],
    designAndDevelopment: [
      "Built intuitive multi-step forms with server-side validation and immediate client feedback.",
      "Designed high-contrast, functional interfaces suited for busy dispatch office environments.",
      "Implemented comprehensive database seeders and automated unit tests for core scheduling logic.",
    ],
    finalResult: [
      "Eliminated double-bookings and dispatch scheduling conflicts.",
      "Accelerated daily manifest preparation from hours to minutes.",
      "Established a secure, reliable foundation that scales seamlessly with company fleet growth.",
    ],
  },
  {
    slug: "lifestyle-apparel-ecommerce-storefront",
    title: "Lifestyle Apparel & Goods Storefront",
    tagline: "Custom WooCommerce build with streamlined checkout and tailored brand aesthetics.",
    category: "E-commerce",
    clientIndustry: "Fashion & Retail",
    completionYear: "2024",
    role: "WooCommerce & Frontend Developer",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    summary:
      "A tailored WooCommerce storefront engineered for a boutique fashion and lifestyle brand. Featuring a distraction-free two-step checkout, custom size-guide modals, and intelligent inventory categorization.",
    technologies: ["WordPress", "WooCommerce", "PHP", "Tailwind CSS", "JavaScript", "Stripe API"],
    deliverables: [
      "Custom WooCommerce theme with zero template bloat",
      "Two-step frictionless mobile checkout flow",
      "Custom product attribute selectors with visual swatch previews",
      "Stripe and digital wallet (Apple Pay/Google Pay) integration",
      "Automated transactional emails with custom branding",
    ],
    clientRequirements: [
      "Elevate the online shopping experience to mirror the high quality of physical products.",
      "Reduce checkout abandonment caused by cluttered default forms.",
      "Maintain flawless performance during seasonal promotions and product drops.",
    ],
    challenges: [
      "Default WooCommerce checkout included unnecessary fields that frustrated mobile shoppers.",
      "Managing variable product stock across multiple colorways and sizes seamlessly.",
    ],
    approach: [
      "Completely recoded the checkout experience into a clean two-step accordion layout.",
      "Integrated AJAX add-to-cart with a sliding drawer cart for uninterrupted browsing.",
      "Optimized database queries and implemented persistent object caching.",
    ],
    designAndDevelopment: [
      "Minimalist typography and generous whitespace emphasizing product photography.",
      "Custom quick-view popups and dynamic size recommendation calculators.",
      "Robust client-side input validation on checkout forms.",
    ],
    finalResult: [
      "Significant reduction in checkout friction on mobile smartphones.",
      "Fast page loads across all collection catalog archives.",
      "Effortless order fulfillment workflow for the warehouse staff.",
    ],
  },
  {
    slug: "real-estate-properties-showcase",
    title: "Prime Property Portfolio & Directory",
    tagline: "Custom WordPress site built with Divi Builder, custom post types, and interactive maps.",
    category: "Business Websites",
    clientIndustry: "Commercial & Residential Real Estate",
    completionYear: "2023",
    role: "Divi & WordPress Developer",
    featured: false,
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    summary:
      "Real estate property showcase website developed using a customized Divi framework. Features advanced property categorization, floor plan downloads, and direct agent inquiry routing.",
    technologies: ["Divi", "WordPress", "Custom Post Types", "PHP", "Custom CSS", "Google Maps API"],
    deliverables: [
      "Custom property listing post types with granular property specs",
      "Interactive map integration with custom map pins",
      "High-resolution floor plan and brochure download handlers",
      "Agent contact capture form with lead assignment logic",
      "Mobile-optimized photo galleries and virtual tour embeds",
    ],
    clientRequirements: [
      "Showcase high-value residential properties with premium visual presentation.",
      "Allow real estate agents to easily upload new listings without technical assistance.",
      "Enable prospective buyers to filter by price, bedrooms, and location.",
    ],
    challenges: [
      "Divi's standard blog modules were insufficient for multi-attribute property filtering.",
      "Maintaining high speed while displaying large photo galleries.",
    ],
    approach: [
      "Built custom PHP template overrides to render filterable property grids within the Divi ecosystem.",
      "Implemented asynchronous AJAX filtering without page refresh.",
      "Configured lazy-loading and responsive image sizes for all gallery assets.",
    ],
    designAndDevelopment: [
      "High-end luxury aesthetic with dark forest tones and elegant typography.",
      "Custom inquiry drawer that tracks the exact property being viewed.",
      "Responsive layout tested thoroughly on iPhones and Android devices.",
    ],
    finalResult: [
      "Seamless property browsing experience praised by both buyers and sales agents.",
      "Reduced listing update time for the client's administrative team.",
      "Reliable lead capture with zero missed buyer inquiries.",
    ],
  },
];
