# Pixvarse — Personal Portfolio & Digital Agency

[![Next.js](https://img.shields.io/badge/Next.js-14%2B-070709?style=for-the-badge&logo=next.js&logoColor=00F5A0)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-0B0C10?style=for-the-badge&logo=typescript&logoColor=00F5A0)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4-070709?style=for-the-badge&logo=tailwindcss&logoColor=00F5A0)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-0B0C10?style=for-the-badge&logo=greensock&logoColor=00F5A0)](https://greensock.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-070709?style=for-the-badge&logoColor=00F5A0)](https://lenis.darkroom.engineering/)
[![Deployment](https://img.shields.io/badge/Hostinger-Node.js_Ready-00F5A0?style=for-the-badge&logo=node.js&logoColor=070709)](https://www.hostinger.com/)

A modern, production-grade personal portfolio and web development agency website for **Juel Rahman**, under the digital studio brand **Pixvarse**.

Combining two identities:
1. **Personal Portfolio**: Showcasing Juel Rahman as an independent full-stack web developer and creative technologist.
2. **Digital Agency Platform**: Presenting Pixvarse as a specialized studio serving international clients with custom WordPress, Divi, Elementor, Laravel, and React web engineering.

---

## 🎨 Creative Art Direction & Luxury Design System

The visual identity is crafted to Awwwards / FWA creative excellence standards:
- **Obsidian Dark Canvas** (`#070709` & `#0B0C10`): Deep, immersive luxury surface with subtle 2.5% procedural grain texture overlay.
- **Electric Cyber Emerald** (`#00F5A0`) & **Cyan** (`#00D9F5`): High-voltage editorial highlights & interactive focus states.
- **Warm Amber Glow** (`#FF6B4A`): Accent warmth for high-impact visual anchors.
- **Glassmorphic Obsidian Surfaces**: Micro-borders (`rgba(255, 255, 255, 0.08)`) and translucid fills (`rgba(255, 255, 255, 0.04)`) with backdrop blur.
- **Typography Matrix**: `Syne` for sculptural display headlines, `Inter` for crisp body prose, and `JetBrains Mono` for metadata and technical indicators.
- **Motion Architecture**: Global `Lenis` smooth scroll integrated seamlessly with `gsap` ticker and `ScrollTrigger`, interactive cursor magnetic physics, and Aceternity UI Bento Grid with dynamic border beams.

---

## 🏛️ Website Architecture & Pages

- **Homepage (`/`)**:
  - Interactive sticky navigation with Pixvarse geometric logo mark & status indicator.
  - Editorial hero with live browser mockup, interactive code snippet, and Core Web Vitals tabs.
  - Infinite marquee expertise strip (*WordPress | Divi | Elementor | Laravel | React | TypeScript | Inertia.js*).
  - About preview: *"One Developer. Multiple Possibilities."*
  - 6 Core Capabilities cards with numbers, key deliverables, and deep-dive links.
  - Curated featured projects grid with technology tags and case study routes.
  - 5-step methodology timeline (*Discover, Plan, Design & Build, Test & Refine, Launch & Support*).
  - Visual categorized tech stack matrix (Frontend, Backend, CMS, Tools).
  - Transparent client partnership philosophy (zero fabricated reviews).
  - High-impact final CTA banner & rich footer.
- **About Page (`/about`)**:
  - Bio and origin story of Juel Rahman & Pixvarse.
  - 4 core development philosophies (Code Clarity, Pixel Fidelity, Real Performance, Direct Partnership).
  - Engagement models (White-Label Agency Partner, Direct Client Builds, Modernization).
- **Services Page (`/services`)**:
  - In-depth breakdowns of 8 capabilities (WordPress, Divi, Elementor, Custom Web, Laravel/SaaS, React Frontends, Maintenance, Speed Optimization).
  - Checklists of deliverables and commercial project benefits.
  - Transparent collaboration models (Fixed-Scope, Agency Partner, Monthly Retainers).
- **Portfolio & Case Studies (`/work` & `/work/[slug]`)**:
  - Filterable project grid (All, WordPress, Business Websites, E-commerce, Custom Development, Web Applications).
  - Deep-dive case studies with background, client requirements, technical obstacles, strategic approach, design execution, tech specs, and verified business outcomes.
  - Fully pre-rendered statically (`generateStaticParams`).
- **Contact Page (`/contact`)**:
  - Interactive conversion form with client-side validation.
  - Zero-dependency mailto fallback preventing lost leads.
  - Direct email, WhatsApp, GitHub, and LinkedIn channels.
  - Client FAQ answering common turnaround and onboarding questions.
- **404 Custom Page (`/not-found`)**:
  - Branded editorial 404 with quick return routes.
- **SEO & Search Indexing**:
  - Dynamic `sitemap.ts` and `robots.ts`.
  - Open Graph, Twitter cards, and structured metadata.

---

## 🚀 Local Development

### Prerequisites
- Node.js `18.18.0` or higher (`v20+` recommended)
- npm `9.0.0` or higher

### Getting Started

```bash
# 1. Clone repository
git clone https://github.com/juelrahmanbd/pixvarse-portfolio.git
cd pixvarse-portfolio

# 2. Install dependencies
npm install

# 3. Copy environment configuration
cp .env.example .env.local

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Production Build & Hostinger Deployment

This application is built for **Hostinger Web App (Node.js application deployment)**.

### Build Verification
Before deploying, verify the production build locally:

```bash
# Build the production bundle
npm run build

# Start the production server
npm run start
```

### Deploying to Hostinger via GitHub (Continuous Deployment)

1. **Log in to Hostinger hPanel**:
   - Go to your Hosting Dashboard → **Websites** or **Node.js Apps**.
2. **Create / Configure Node.js Application**:
   - **Node.js Version**: Select `Node.js 20.x` or `Node.js 22.x`.
   - **Application Root**: `/` (repository root).
   - **Application Startup File**: `node_modules/next/dist/bin/next` or standard npm script `start`.
3. **Connect GitHub Repository**:
   - Go to **Git** in your Hostinger control panel.
   - Connect repository: `https://github.com/juelrahmanbd/pixvarse-portfolio`
   - Select branch: `main`
   - Enable **Auto-Deployment** on push.
4. **Build & Start Commands on Hostinger**:
   ```bash
   # Build Command
   npm install && npm run build

   # Start Command
   npm run start -- -p $PORT
   ```
5. **Environment Variables on Hostinger**:
   - Add `NEXT_PUBLIC_SITE_URL` set to your live custom domain (e.g. `https://pixvarse.com`).
   - Add `NODE_ENV=production`.

Every commit pushed to the `main` branch will automatically trigger a clean build and zero-downtime deployment on Hostinger.

---

## 📂 Project Structure

```
pixvarse-portfolio/
├── public/                 # Static assets & icons
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout with fonts, SEO & navigation
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Tailwind v4 styles, colors & animations
│   │   ├── not-found.tsx   # Custom 404 page
│   │   ├── robots.ts       # Dynamic robots.txt
│   │   ├── sitemap.ts      # Dynamic sitemap.xml
│   │   ├── about/          # /about route
│   │   ├── services/       # /services route
│   │   ├── work/           # /work portfolio & filter
│   │   │   └── [slug]/     # Dynamic case study route
│   │   └── contact/        # /contact route & inquiry portal
│   ├── components/
│   │   ├── ui/             # Reusable UI (Logo, Button, Badge, Heading, TopoBg)
│   │   ├── layout/         # Navbar, MobileMenu, Footer
│   │   ├── home/           # Homepage sections (Hero, Services, Tech, Process...)
│   │   ├── portfolio/      # Filterable work client view & project cards
│   │   └── contact/        # Interactive contact form with validation
│   └── data/               # Centralized content files
│       ├── siteConfig.ts   # Brand name, personal bio, links, SEO defaults
│       ├── services.ts     # Detailed service specifications & deliverables
│       ├── projects.ts     # Real-world project case studies data
│       ├── technologies.ts # Categorized technology competencies
│       ├── process.ts      # 5-step development methodology
│       └── testimonials.ts # Verified client endorsements & principles
├── .env.example            # Environment variables blueprint
├── package.json            # Scripts, dependencies & engine specifications
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

## 📄 License & Attribution

Designed and developed by **Juel Rahman** for **Pixvarse**.
All rights reserved © 2024–2026.
