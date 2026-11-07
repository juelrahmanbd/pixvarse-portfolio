"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { TechSlider } from "./TechSlider";
import {
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Refined Swiss/Apple fade-and-slide entrance
      gsap.from(contentRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      if (mockupRef.current) {
        gsap.from(mockupRef.current, {
          y: 32,
          opacity: 0,
          duration: 0.9,
          delay: 0.2,
          ease: "power2.out",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80 bg-dot-grid"
    >
      {/* Subtle Luminous Radial Mesh Gradient */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Live Status Badge */}
          <div className="mb-6 sm:mb-8">
            <Badge
              variant="emerald"
              dot={true}
              dotColor="emerald"
              size="md"
              className="py-1 px-4 text-xs font-mono font-medium shadow-sm bg-emerald-50 text-emerald-800 border-emerald-200"
            >
              Available for Select Client Projects
            </Badge>
          </div>

          {/* Authoritative Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.08]">
            Architecting High-Performance Websites &amp;{" "}
            <span className="text-blue-600">
              Custom Digital Solutions.
            </span>
          </h1>

          {/* Editorial Introduction */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-slate-600 leading-relaxed font-sans max-w-3xl">
            I&apos;m{" "}
            <strong className="text-slate-900 font-semibold">
              {siteConfig.creatorName}
            </strong>
            , an independent developer and founder of{" "}
            <strong className="text-slate-900 font-semibold">
              {siteConfig.brandName}
            </strong>
            . Alongside a dedicated technical team, I engineer bespoke WordPress systems, tailored web applications, and high-converting platforms with zero bloat and verified Core Web Vitals excellence.
          </p>

          {/* Elegant Dual CTA */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}
            >
              Start Your Project
            </Button>

            <Button
              href="/work"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
            >
              Explore Selected Work ({siteConfig.creatorName ? "06" : "All"})
            </Button>
          </div>

          {/* Key Trust Signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={1.5} />
              <span>100/100 Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={1.5} />
              <span>Bespoke Code • Zero Bloat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={1.5} />
              <span>Confidential White-Label Partner</span>
            </div>
          </div>
        </div>

        {/* Infinite Technology Slider */}
        <div className="w-full mt-12 sm:mt-16">
          <TechSlider />
        </div>

        {/* High-Fidelity Device Mockup & Telemetry Card */}
        <div
          ref={mockupRef}
          className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover transition-shadow duration-300 overflow-hidden"
        >
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-50 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-500 hidden sm:inline-block">
                https://pixvarse.com/architecture
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
                <Gauge className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>100 Performance</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-blue-600 font-medium">
                <Zap className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span>0.8s LCP</span>
              </div>
            </div>
          </div>

          {/* Inner Clean Architecture Overview */}
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-slate-50/50 to-white">
            {/* Left Column: Code Sample */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pb-2 border-b border-slate-200">
                <Terminal className="h-4 w-4 text-blue-600" strokeWidth={1.5} />
                <span>pixvarse-engineering-standard.ts</span>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto shadow-sm">
                <p className="text-slate-400">{"// Professional Engineering Stack"}</p>
                <p>
                  <span className="text-blue-400">export const</span>{" "}
                  <span className="text-white font-semibold">PixvarseArchitecture</span> = {"{"}
                </p>
                <p className="pl-4">
                  founder: <span className="text-emerald-400">&quot;{siteConfig.creatorName}&quot;</span>,
                </p>
                <p className="pl-4">
                  technologies: [<span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;WordPress Core&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Laravel&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Tailwind CSS&quot;</span>],
                </p>
                <p className="pl-4">
                  coreWebVitals: {"{"} performance: <span className="text-emerald-400">100</span>, lcp: <span className="text-emerald-400">&quot;0.8s&quot;</span>, cls: <span className="text-emerald-400">0</span> {"}"},
                </p>
                <p className="pl-4">
                  agencyWhiteLabel: <span className="text-blue-400">true</span>,
                </p>
                <p className="pl-4">
                  codeQuality: <span className="text-emerald-400">&quot;Zero Plugin Bloat&quot;</span>,
                </p>
                <p>{"};"}</p>
              </div>
            </div>

            {/* Right Column: Key Pillars */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider">Speed Index</span>
                  <Zap className="h-3.5 w-3.5 text-blue-600" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900">0.4s</div>
                <div className="text-[11px] font-sans text-slate-500">First Contentful Paint</div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider">SEO Score</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900">100%</div>
                <div className="text-[11px] font-sans text-slate-500">Structured Data Ready</div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider">Engineering</span>
                  <Cpu className="h-3.5 w-3.5 text-blue-600" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Clean</div>
                <div className="text-[11px] font-sans text-slate-500">Zero Fragile Hacks</div>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm space-y-1">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[10px] font-mono uppercase tracking-wider">Turnaround</span>
                  <Layers className="h-3.5 w-3.5 text-emerald-600" strokeWidth={1.5} />
                </div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900">2-4w</div>
                <div className="text-[11px] font-sans text-slate-500">Sprint Delivery Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
