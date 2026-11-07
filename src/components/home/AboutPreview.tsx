"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import {
  Code,
  Layers,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function AboutPreview() {
  const pillars = [
    {
      icon: <Code className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
      title: "Technical Architecture",
      description:
        "Clean, maintainable code structures across modern stacks. Custom lightweight WordPress themes, Laravel backends, and Next.js frontends with zero plugin bloat.",
    },
    {
      icon: <Layers className="h-5 w-5 text-emerald-600" strokeWidth={1.5} />,
      title: "Design Implementation",
      description:
        "Fidelity to Figma & design files. Pixel-accurate layouts, responsive fluid typography, and seamless micro-interactions without fragile CSS hacks.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
      title: "Performance & Web Vitals",
      description:
        "Eliminating code bloat, optimizing Core Web Vitals, and debugging edge cases so your web platforms load sub-second and achieve 100/100 Lighthouse scores.",
    },
    {
      icon: <Users className="h-5 w-5 text-emerald-600" strokeWidth={1.5} />,
      title: "Direct Engineering Partnership",
      description:
        "Direct communication with the engineer building your platform. Transparent sprint updates, zero account manager friction, and total milestone ownership.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="ABOUT // THE ARCHITECT"
              title="One Senior Engineer."
              highlight="Dedicated Team Muscle."
              description="A unique bridge between rigorous software engineering, modern visual design, and direct client partnership."
            />

            <div className="space-y-4 text-base text-slate-600 leading-relaxed font-sans">
              <p>
                I&apos;m <strong className="text-slate-900 font-semibold">{siteConfig.creatorName}</strong>, the developer and founder behind Pixvarse. Over the years, I&apos;ve dedicated myself to mastering the craft of modern web engineering — bridging backend stability and clean frontend expression.
              </p>
              <p>
                Whether partnering with digital marketing agencies as their trusted white-label technical partner, or collaborating directly with growing businesses building flagship platforms, I treat every project with total technical integrity.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <span>White-Label Agency Partner for Global Studios</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <span>Zero Outsourcing • Direct Code Access</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <span>Fixed Scopes or Flexible Monthly Retainers</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="primary"
                size="md"
                icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
              >
                Learn More About Juel &amp; Pixvarse
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 space-y-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/80">
                  {item.icon}
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
