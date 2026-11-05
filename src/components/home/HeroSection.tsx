"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { TechSlider } from "./TechSlider";
import { TopographicBackground } from "../ui/TopographicBackground";
import { Button } from "../ui/Button";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  Layers,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export function HeroSection() {
  const trustIndicators = [
    {
      title: "Freelancer + Expert Team",
      icon: <Users className="h-4 w-4 text-[#738B46]" />,
    },
    {
      title: "End-to-End Solutions",
      icon: <Layers className="h-4 w-4 text-[#738B46]" />,
    },
    {
      title: "Quality-Focused Development",
      icon: <ShieldCheck className="h-4 w-4 text-[#738B46]" />,
    },
    {
      title: "Long-Term Support",
      icon: <Headphones className="h-4 w-4 text-[#738B46]" />,
    },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 bg-[#FFFFFF] text-[#2C4058] overflow-hidden border-b border-[#2C4058]/10">
      {/* Light Topographic Background Overlay */}
      <TopographicBackground
        opacity={0.04}
        strokeColor="#2C4058"
        className="pointer-events-none"
      />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#EEF3E6]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#738B46]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow Label: FREELANCER-LED • TEAM-POWERED */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 sm:mb-8 bg-[#FFFFFF] border border-[#2C4058]/20 rounded-sm shadow-[2px_2px_0px_0px_#738B46] transition-transform hover:scale-[1.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#738B46] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#738B46]" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-[#2C4058]">
              Freelancer-Led • Team-Powered
            </span>
            <Sparkles className="h-3 w-3 text-[#738B46]" />
          </div>

          {/* Main Centered Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.06] text-[#2C4058]">
            <span className="block">Advanced WordPress &amp;</span>
            <span className="relative inline-block mt-1 sm:mt-2">
              {/* Modern angled highlight treatment with sharp corners */}
              <span
                className="absolute inset-0 bg-[#2C4058] -rotate-1 rounded-sm shadow-[4px_4px_0px_0px_#738B46] -z-10 transform scale-105"
                aria-hidden="true"
              />
              <span className="relative px-3 sm:px-5 py-0.5 sm:py-1 text-[#738B46] block">
                Custom Digital Solutions
              </span>
              {/* Elegant underline */}
              <span
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 bg-[#738B46] shadow-[0_1px_3px_rgba(115,139,70,0.5)]"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Advanced Infinite Technology Slider */}
          <div className="w-full mt-8 sm:mt-12">
            <TechSlider />
          </div>

          {/* Personal Introduction Paragraph */}
          <div className="mt-4 sm:mt-6 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-[#2C4058]/85 leading-relaxed font-sans font-normal">
              I&apos;m{" "}
              <strong className="text-[#2C4058] font-bold underline decoration-[#738B46] decoration-4 underline-offset-4">
                {siteConfig.creatorName}
              </strong>
              , an independent developer and founder of{" "}
              <strong className="text-[#2C4058] font-mono font-bold tracking-tight bg-[#EEF3E6] px-1.5 py-0.5 rounded-sm border border-[#738B46]/30">
                {siteConfig.brandName}
              </strong>
              , collaborating with a skilled professional team to deliver advanced WordPress solutions, custom websites, plugins, web applications, mobile apps, and modern AI-powered digital experiences.
            </p>
          </div>

          {/* Call-To-Action Buttons using Global Button Component */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Primary CTA */}
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="h-5 w-5 stroke-[2.5]" />}
            >
              Start Your Project
            </Button>

            {/* Secondary CTA */}
            <Button
              href="/work"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="h-5 w-5 stroke-[2.5]" />}
            >
              Explore My Work
            </Button>
          </div>

          {/* Professional Trust Indicators Row */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#2C4058]/10 w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {trustIndicators.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#2C4058]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#EEF3E6] border border-[#738B46]/30 shrink-0 shadow-[1px_1px_0px_0px_#738B46]">
                    {item.icon}
                  </div>
                  <span className="whitespace-nowrap tracking-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
