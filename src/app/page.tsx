import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ExpertiseStrip } from "@/components/home/ExpertiseStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export const metadata = {
  title: "Pixvarse — Independent Digital Development Studio | Juel Rahman",
  description:
    "Pixvarse is an independent web development studio founded by Juel Rahman. Building high-performance WordPress platforms, custom web applications, and scalable digital solutions.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ExpertiseStrip />
      <AboutPreview />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
