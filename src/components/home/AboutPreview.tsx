import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Code,
  Layers,
  Sparkles,
  Users,
  ArrowRight,
} from "lucide-react";

export function AboutPreview() {
  const pillars = [
    {
      icon: <Code className="h-5 w-5 text-[#738B46]" />,
      title: "Technical Development",
      description:
        "Clean, maintainable code architectures across modern stacks. From custom WordPress themes to Laravel backends and React frontends.",
    },
    {
      icon: <Layers className="h-5 w-5 text-[#738B46]" />,
      title: "Design Implementation",
      description:
        "Fidelity to Figma & design files. Pixel-accurate layouts, responsive fluid typography, and seamless micro-interactions.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-[#738B46]" />,
      title: "Performance & Problem Solving",
      description:
        "Eliminating bloat, optimizing Core Web Vitals, and debugging complex edge cases so your applications load and execute quickly.",
    },
    {
      icon: <Users className="h-5 w-5 text-[#738B46]" />,
      title: "Client Collaboration",
      description:
        "Direct communication, transparent sprint updates, zero agency jargon, and reliable project delivery on agreed timelines.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F9FA] relative overflow-hidden border-b border-[#2C4058]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="ABOUT // THE DEVELOPER"
              title="One Developer."
              highlight="Multiple Possibilities."
              description="A unique bridge between rigorous software engineering, modern visual design, and direct client partnership."
            />

            <div className="space-y-4 text-base text-[#2C4058]/85 leading-relaxed font-sans font-normal">
              <p>
                I&apos;m <strong className="text-[#2C4058] font-bold">{siteConfig.creatorName}</strong>, the developer behind Pixvarse. Over the years, I&apos;ve dedicated myself to mastering the craft of modern web creation — bridging the traditional divide between technical backend stability and creative frontend expression.
              </p>
              <p>
                Whether partnering with digital marketing agencies needing white-label development, or collaborating directly with business owners building their flagship platforms, I treat every project with absolute technical integrity.
              </p>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                More About Me
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative rounded-sm bg-white p-6 sm:p-7 border border-[#2C4058]/15 shadow-[3px_3px_0px_0px_#2C4058] hover:shadow-[5px_5px_0px_0px_#738B46] hover:border-[#2C4058] transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-[#EEF3E6] border border-[#738B46]/30 shadow-[2px_2px_0px_0px_#738B46] transition-transform group-hover:scale-105">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#2C4058] group-hover:text-[#738B46] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-[#2C4058]/75 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
