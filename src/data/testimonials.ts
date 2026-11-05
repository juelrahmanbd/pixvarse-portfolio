export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  location?: string;
  projectType: string;
  verified: boolean;
}

/**
 * CLIENT ENDORSEMENTS & TESTIMONIAL CONFIGURATION
 *
 * To add client testimonials:
 * 1. Add verified feedback objects to the `testimonialsData` array below.
 * 2. Set `verified: true` for authentic client feedback.
 * 3. Never insert fabricated testimonials or fake personas.
 *
 * If `testimonialsData` is empty, the site gracefully renders the
 * "Client Partnership Philosophy" section instead of an empty grid.
 */
export const testimonialsData: TestimonialItem[] = [
  // When you have verified client feedback, uncomment and populate below:
  /*
  {
    id: "testimonial-1",
    quote:
      "Juel is a dependable developer who translates complex designs into flawless WordPress builds with speed and precision. Communication throughout the project was transparent and prompt.",
    clientName: "Agency Director",
    role: "Founder & Creative Lead",
    company: "Digital Studio",
    location: "United Kingdom",
    projectType: "Custom WordPress Theme",
    verified: true,
  },
  */
];

export const clientPartnershipPillars = [
  {
    title: "Direct Engineering Access",
    description: "You work directly with the developer building your site. No account manager layers, no lost requirements.",
  },
  {
    title: "Transparent Milestones",
    description: "Clear sprint roadmaps with live staging demos at every phase so you can test early and launch with confidence.",
  },
  {
    title: "Code Ownership & Autonomy",
    description: "100% full intellectual property transfer upon project completion. Clean, well-documented code your team truly owns.",
  },
  {
    title: "Post-Launch Warranty",
    description: "Every build comes with 30-day post-launch technical support to address any edge cases or tuning questions immediately.",
  },
];

