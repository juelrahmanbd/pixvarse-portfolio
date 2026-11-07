"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
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
      icon: <Code className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
      title: "Technical Architecture",
      description:
        "Clean, maintainable code architectures across modern stacks. From custom WordPress themes to Laravel backends and React frontends.",
    },
    {
      icon: <Layers className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
      title: "Design Implementation",
      description:
        "Fidelity to Figma & design files. Pixel-accurate layouts, responsive fluid typography, and seamless micro-interactions.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
      title: "Performance & Web Vitals",
      description:
        "Eliminating bloat, optimizing Core Web Vitals, and debugging complex edge cases so your applications load and execute quickly.",
    },
    {
      icon: <Users className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
      title: "Direct Engineering Partnership",
      description:
        "Direct communication, transparent sprint updates, zero agency jargon, and reliable project delivery on agreed timelines.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-canvas-secondary relative overflow-hidden border-b border-edge-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="ABOUT // THE ARCHITECT"
              title="One Developer."
              highlight="Multiple Possibilities."
              description="A unique bridge between rigorous software engineering, modern visual design, and direct client partnership."
            />

            <div className="space-y-4 text-base text-ink-secondary leading-relaxed font-sans font-normal">
              <p>
                I&apos;m <strong className="text-ink-headline font-semibold">{siteConfig.creatorName}</strong>, the developer behind Pixvarse. Over the years, I&apos;ve dedicated myself to mastering the craft of modern web creation — bridging technical backend stability and creative frontend expression.
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
                icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
              >
                Learn More About Juel &amp; Pixvarse
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Pillars Obsidian Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {pillars.map((item, idx) => (
              <Card
                key={idx}
                variant="glass"
                className="p-6 sm:p-7 space-y-3.5 hover:border-white/[0.2]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-ink-headline tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
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
