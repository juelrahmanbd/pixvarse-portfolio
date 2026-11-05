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
      icon: <Users className="h-4 w-4 text-[#063F2E]" />,
    },
    {
      title: "End-to-End Solutions",
      icon: <Layers className="h-4 w-4 text-[#063F2E]" />,
    },
    {
      title: "Quality-Focused Development",
      icon: <ShieldCheck className="h-4 w-4 text-[#063F2E]" />,
    },
    {
      title: "Long-Term Support",
      icon: <Headphones className="h-4 w-4 text-[#063F2E]" />,
    },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 bg-[#FFFFFF] text-[#092D23] overflow-hidden border-b border-[#092D23]/10">
      {/* Light Topographic Background Overlay */}
      <TopographicBackground
        opacity={0.035}
        strokeColor="#063F2E"
        className="pointer-events-none"
      />

      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E6F4EC]/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#C7F532]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow Label: FREELANCER-LED • TEAM-POWERED */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 sm:mb-8 bg-[#F8FAF6] border border-[#092D23]/20 rounded-sm shadow-[2px_2px_0px_0px_#063F2E] transition-transform hover:scale-[1.02]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7F532] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#063F2E]" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase text-[#092D23]">
              Freelancer-Led • Team-Powered
            </span>
            <Sparkles className="h-3 w-3 text-[#063F2E]" />
          </div>

          {/* Main Centered Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] leading-[1.06] text-[#092D23]">
            <span className="block">Advanced WordPress &amp;</span>
            <span className="relative inline-block mt-1 sm:mt-2">
              {/* Modern angled highlight treatment with sharp corners */}
              <span
                className="absolute inset-0 bg-[#063F2E] -rotate-1 rounded-sm shadow-[4px_4px_0px_0px_#C7F532] -z-10 transform scale-105"
                aria-hidden="true"
              />
              <span className="relative px-3 sm:px-5 py-0.5 sm:py-1 text-[#C7F532] block">
                Custom Digital Solutions
              </span>
              {/* Elegant underline */}
              <span
                className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 bg-[#C7F532] shadow-[0_1px_3px_rgba(199,245,50,0.5)]"
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
            <p className="text-base sm:text-lg md:text-xl text-[#092D23]/80 leading-relaxed font-sans font-normal">
              I&apos;m{" "}
              <strong className="text-[#092D23] font-bold underline decoration-[#C7F532] decoration-4 underline-offset-4">
                {siteConfig.creatorName}
              </strong>
              , an independent developer and founder of{" "}
              <strong className="text-[#092D23] font-mono font-bold tracking-tight bg-[#E6F4EC] px-1.5 py-0.5 rounded-sm border border-[#092D23]/15">
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
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#092D23]/10 w-full max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {trustIndicators.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono font-semibold text-[#092D23]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-[#E6F4EC] border border-[#063F2E]/20 shrink-0 shadow-[1px_1px_0px_0px_#063F2E]">
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
