"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { TechSlider } from "./TechSlider";
import { Spotlight } from "../ui/Spotlight";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import { MagneticButton } from "../ui/MagneticButton";
import { Badge } from "../ui/Badge";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  Layers,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export function HeroSection() {
  const trustIndicators = [
    {
      title: "Freelancer + Expert Team",
      icon: <Users className="h-4 w-4 text-cyber-emerald" strokeWidth={1.5} />,
    },
    {
      title: "End-to-End Solutions",
      icon: <Layers className="h-4 w-4 text-cyber-cyan" strokeWidth={1.5} />,
    },
    {
      title: "Quality-Focused Architecture",
      icon: <ShieldCheck className="h-4 w-4 text-cyber-emerald" strokeWidth={1.5} />,
    },
    {
      title: "Long-Term Dedicated Care",
      icon: <Headphones className="h-4 w-4 text-cyber-cyan" strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="relative pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 bg-canvas text-ink-primary overflow-hidden border-b border-edge-subtle">
      {/* Aceternity Atmospheric Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#00F5A0"
      />

      {/* Cyber Grid & Radiant Background Beams */}
      <BackgroundBeams />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow Beacon Badge */}
          <div className="mb-6 sm:mb-8">
            <Badge
              variant="emerald"
              dot={true}
              dotColor="emerald"
              size="md"
              className="py-1 px-4 text-xs font-mono font-medium tracking-widest"
            >
              Freelancer-Led • Team-Powered Studio
            </Badge>
          </div>

          {/* Main Editorial Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-[-0.035em] leading-[1.05] text-ink-headline">
            <span className="block text-ink-headline">Advanced WordPress &amp;</span>
            <span className="relative inline-block mt-1 sm:mt-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald via-[#00F5A0] to-cyber-cyan drop-shadow-[0_0_35px_rgba(0,245,160,0.3)]">
                Custom Digital Solutions
              </span>
              {/* High-tech accent underline glow */}
              <span
                className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-emerald to-transparent opacity-80"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Infinite Technology Marquee Slider */}
          <div className="w-full mt-8 sm:mt-12">
            <TechSlider />
          </div>

          {/* Personal Introduction Paragraph */}
          <div className="mt-4 sm:mt-6 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-ink-secondary leading-relaxed font-sans font-normal">
              I&apos;m{" "}
              <strong className="text-ink-headline font-semibold underline decoration-cyber-emerald decoration-2 underline-offset-4">
                {siteConfig.creatorName}
              </strong>
              , an independent developer and founder of{" "}
              <strong className="text-ink-headline font-mono font-semibold bg-white/[0.05] px-2 py-0.5 rounded-md border border-white/[0.1] text-sm">
                {siteConfig.brandName}
              </strong>
              , collaborating with a dedicated professional team to deliver high-performance WordPress systems, bespoke plugins, web apps, and modern AI-powered digital products.
            </p>
          </div>

          {/* Action CTAs with Magnetic Physics */}
          <div className="mt-8 sm:mt-11 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-sm px-7 py-3.5"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
            </MagneticButton>

            <MagneticButton
              href="/work"
              variant="secondary"
              className="text-sm px-7 py-3.5"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
            </MagneticButton>
          </div>

          {/* Precision Trust Indicators Row */}
          <div className="mt-14 sm:mt-20 pt-8 border-t border-edge-subtle w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {trustIndicators.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs font-mono font-medium text-ink-secondary hover:border-white/[0.15] hover:text-ink-headline transition-all"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.08] shrink-0">
                    {item.icon}
                  </div>
                  <span className="whitespace-nowrap tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
