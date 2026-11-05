export interface NavItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}

export interface SiteConfig {
  brandName: string;
  creatorName: string;
  creatorRole: string;
  title: string;
  tagline: string;
  positioning: string;
  eyebrowText: string;
  shortDescription: string;
  longDescription: string;
  siteUrl: string;
  email: string;
  whatsapp: string;
  whatsappDisplay: string;
  github: string;
  repoUrl: string;
  linkedin: string;
  twitter: string;
  status: {
    availableForHire: boolean;
    badgeText: string;
    timeline: string;
  };
  navigation: NavItem[];
  socials: Record<string, SocialLink>;
  coreCapabilities: string[];
}

export const siteConfig: SiteConfig = {
  brandName: "Pixvarse",
  creatorName: "Juel Rahman",
  creatorRole: "Independent Developer & Founder",
  title: "Pixvarse — Advanced WordPress & Custom Digital Solutions | Juel Rahman",
  tagline: "Freelancer-Led • Team-Powered Web Development Studio.",
  positioning: "Independent Developer. Creative Technologist. Digital Partner.",
  eyebrowText: "Freelancer-Led • Team-Powered",
  shortDescription:
    "Pixvarse is an independent digital development studio founded by Juel Rahman, collaborating with a skilled team to build advanced WordPress platforms, custom web applications, and modern digital experiences.",
  longDescription:
    "Founded by web developer Juel Rahman, Pixvarse collaborates with ambitious businesses and international digital agencies to build fast, robust, and beautifully engineered web solutions across WordPress, Divi, Elementor, Laravel, React, and modern web architectures.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pixvarse.com",
  email: "juelrahman09@gmail.com",
  whatsapp: "https://wa.me/8801700000000",
  whatsappDisplay: "+880 1700-000000",
  github: "https://github.com/juelrahmanbd",
  repoUrl: "https://github.com/juelrahmanbd/pixvarse-portfolio",
  linkedin: "https://linkedin.com/in/juelrahman",
  twitter: "https://x.com/pixvarse",
  status: {
    availableForHire: true,
    badgeText: "Available for New Projects",
    timeline: "Accepting select client projects & agency partnerships",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ],
  socials: {
    github: {
      name: "GitHub",
      url: "https://github.com/juelrahmanbd",
      handle: "@juelrahmanbd",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/juelrahman",
      handle: "juelrahman",
    },
    twitter: {
      name: "Twitter",
      url: "https://x.com/pixvarse",
      handle: "@pixvarse",
    },
  },
  coreCapabilities: [
    "Advanced WordPress & ACF",
    "Divi & Elementor Theme Dev",
    "Custom Plugin Engineering",
    "Full-Stack Web Applications",
    "Laravel & RESTful APIs",
    "React & Next.js Frontends",
    "Modern AI-Powered Solutions",
    "Performance & Speed Optimization",
  ],
};
