export interface SiteConfig {
  brandName: string;
  creatorName: string;
  title: string;
  tagline: string;
  positioning: string;
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
  navigation: {
    name: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  brandName: "Pixvarse",
  creatorName: "Juel Rahman",
  title: "Pixvarse — Independent Digital Development Studio by Juel Rahman",
  tagline: "Building Digital Experiences That Move Businesses Forward.",
  positioning: "Independent Developer. Creative Technologist. Digital Partner.",
  shortDescription:
    "Pixvarse is an independent digital development studio focused on building modern websites, powerful web applications, and scalable digital experiences.",
  longDescription:
    "Founded by web developer and creative technologist Juel Rahman, Pixvarse collaborates with ambitious businesses and international digital agencies to build fast, robust, and beautifully engineered web solutions across WordPress, Laravel, React, and modern web architectures.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pixvarse.com",
  email: "juelrahman09@gmail.com",
  whatsapp: "https://wa.me/8801700000000", // Update with Juel Rahman's international WhatsApp number
  whatsappDisplay: "+880 1700-000000",
  github: "https://github.com/juelrahmanbd",
  repoUrl: "https://github.com/juelrahmanbd/pixvarse-portfolio",
  linkedin: "https://linkedin.com/in/juelrahman",
  twitter: "https://x.com/pixvarse",
  status: {
    availableForHire: true,
    badgeText: "Available for Q1 / Q2 Projects",
    timeline: "Accepting select client projects & agency partnerships",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ],
};

