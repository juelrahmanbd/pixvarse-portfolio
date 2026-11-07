"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { ScrubText } from "../ui/ScrubText";
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
      num: "01",
      icon: <Code className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
      title: "Technical Architecture",
      description:
        "Clean, maintainable code architectures across modern stacks. Custom lightweight WordPress themes, Laravel backends, and Next.js App Router frontends with zero plugin clutter.",
    },
    {
      num: "02",
      icon: <Layers className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
      title: "Design Implementation",
      description:
        "Fidelity to Figma & design files. Pixel-accurate layouts, responsive fluid typography, and seamless micro-interactions without fragile CSS hacks.",
    },
    {
      num: "03",
      icon: <Sparkles className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
      title: "Performance & Web Vitals",
      description:
        "Eliminating bloat, optimizing Core Web Vitals, and debugging complex edge cases so your web platforms load sub-second and achieve 100/100 Lighthouse scores.",
    },
    {
      num: "04",
      icon: <Users className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
      title: "Direct Engineering Partnership",
      description:
        "Direct communication with the engineer building your platform. Transparent sprint updates, zero account executive friction, and total milestone ownership.",
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-canvas-secondary relative overflow-hidden border-b border-edge-subtle">
      {/* Subtle ambient flare */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyber-emerald/[0.03] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Section Title */}
        <div className="pb-12 sm:pb-16 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-cyber-emerald font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-pulse" />
            <span>03 // THE STUDIO PHILOSOPHY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-[-0.04em] uppercase text-ink-headline leading-[0.88]">
            ONE DEVELOPER. <br />
            <span className="text-stroke-white">UNCOMPROMISING</span> VELOCITY.
          </h2>
        </div>

        {/* Narrative Scrub Block & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12 sm:pt-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-cyan font-bold block">
                {"// FOUNDER STATEMENT"}
              </span>
              <ScrubText
                as="p"
                text={`I'm ${siteConfig.creatorName}, the founder and lead engineer behind Pixvarse. Over the years, I've bridged backend stability and brutalist frontend expression — working alongside digital marketing agencies as their white-label technical muscle, and launching high-converting platforms for ambitious businesses.`}
                className="text-lg sm:text-xl font-display font-medium text-ink-primary leading-relaxed"
                start="top 85%"
                end="bottom 50%"
              />
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-mono text-ink-secondary">
                <CheckCircle2 className="h-4 w-4 text-cyber-emerald shrink-0" strokeWidth={1.5} />
                <span>Confidential White-Label Agency Partner</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono text-ink-secondary">
                <CheckCircle2 className="h-4 w-4 text-cyber-emerald shrink-0" strokeWidth={1.5} />
                <span>Zero Outsourcing • Direct Code Access</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono text-ink-secondary">
                <CheckCircle2 className="h-4 w-4 text-cyber-emerald shrink-0" strokeWidth={1.5} />
                <span>Fixed Scopes or Flexible Monthly Retainers</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="/about"
                variant="primary"
                size="md"
                className="font-mono text-xs uppercase tracking-wider"
                icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
              >
                Learn More About Juel &amp; Pixvarse
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Pillars Brutalist Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {pillars.map((item) => (
              <Card
                key={item.num}
                variant="glass"
                className="p-6 sm:p-8 space-y-4 hover:border-white/[0.2] relative overflow-hidden group shadow-2xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="font-mono text-xs font-black text-cyber-emerald tracking-widest">
                    {`[ ${item.num} // PILLAR ]`}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-xl font-display font-black text-ink-headline tracking-tight group-hover:text-cyber-emerald transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
