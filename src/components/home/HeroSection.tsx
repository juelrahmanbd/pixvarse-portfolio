"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/data/siteConfig";
import { TechSlider } from "./TechSlider";
import { Spotlight } from "../ui/Spotlight";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import { MagneticButton } from "../ui/MagneticButton";
import { KineticMarquee } from "../ui/KineticMarquee";
import { ScrubText } from "../ui/ScrubText";
import {
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Cpu,
  Zap,
  Globe,
  Gauge,
  ShieldCheck,
} from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current || !mockupRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Cinematic Zoom & Scale transition on hero interactive frame
      gsap.fromTo(
        mockupRef.current,
        {
          scale: 0.92,
          y: 20,
          rotateX: 4,
          boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
        },
        {
          scale: 1.03,
          y: -40,
          rotateX: 0,
          boxShadow: "0 35px 90px rgba(0, 245, 160, 0.18)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom 30%",
            scrub: 1.2,
          },
        }
      );

      // Subtle parallax separation on monumental headline
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: -60,
          opacity: 0.85,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 sm:pt-40 md:pt-44 pb-24 sm:pb-36 bg-canvas text-ink-primary overflow-hidden border-b border-edge-subtle flex flex-col justify-between"
    >
      {/* High-Voltage Atmospheric Spotlights */}
      <Spotlight
        className="-top-40 left-1/2 -translate-x-1/2 md:-top-28"
        fill="#00F5A0"
      />

      {/* Cyber Grid & Radiant Background Beams */}
      <BackgroundBeams />

      {/* Hollow / Stroke Kinetic Marquee layered in background */}
      <div className="absolute top-28 sm:top-36 left-0 right-0 z-0 opacity-40 pointer-events-none">
        <KineticMarquee
          words={[
            "PIXVARSE STUDIO",
            "PORSCHE-GRADE PRECISION",
            "NEXT.JS & WORDPRESS",
            "HIGH VELOCITY",
            "BRUTALIST LUXURY",
            "CATEGORY DOMINANCE",
          ]}
          direction="left"
          speed={32}
          strokeOnly={true}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Telemetry Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-white/[0.08] text-[11px] font-mono tracking-widest text-ink-muted uppercase">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
            </span>
            <span className="text-cyber-emerald font-semibold">
              STATUS: ACCEPTING CLIENT ENGAGEMENTS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <span>[ SYSTEM: NEXT.JS 15 + GSAP CORE ]</span>
            <span>[ RUNTIME: NODE 18 PRODUCTION ]</span>
            <span>[ LAT 23.8° N // LNG 90.4° E ]</span>
          </div>

          <div className="text-ink-secondary">
            <span>PIXVARSE // JUEL RAHMAN</span>
          </div>
        </div>

        {/* ====================================================================
            MONUMENTAL KINETIC HEADLINE (Porsche Racing / Brutalist Luxury Scale)
            ==================================================================== */}
        <div ref={headlineRef} className="pt-10 sm:pt-14 pb-8 sm:pb-12 text-left">
          <div className="space-y-[-0.08em] sm:space-y-[-0.07em]">
            {/* Row 1: Solid High-White Viewport Typography */}
            <div className="overflow-hidden">
              <h1 className="text-[12vw] sm:text-[13vw] lg:text-[14.5vw] font-display font-black uppercase tracking-[-0.05em] leading-[0.82] text-ink-headline select-none">
                ENGINEERING
              </h1>
            </div>

            {/* Row 2: Hollow Stroke & Radiant Emerald Highlight */}
            <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-8 overflow-hidden">
              <span className="text-[12vw] sm:text-[13vw] lg:text-[14.5vw] font-display font-black uppercase tracking-[-0.05em] leading-[0.82] text-stroke-white select-none">
                DIGITAL
              </span>
              <span className="text-[12vw] sm:text-[13vw] lg:text-[14.5vw] font-display font-black uppercase tracking-[-0.05em] leading-[0.82] text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald via-[#5CFFB0] to-cyber-cyan drop-shadow-[0_0_50px_rgba(0,245,160,0.4)] select-none">
                LUXURY
              </span>
            </div>

            {/* Row 3: Kinetic Sub-Headline Banner */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 sm:pt-6">
              <span className="text-xs sm:text-sm md:text-base font-mono uppercase tracking-widest text-cyber-emerald font-semibold flex items-center gap-2">
                <span className="inline-block w-8 sm:w-12 h-[1px] bg-cyber-emerald" />
                HIGH-VELOCITY WEB PLATFORMS &amp; WHITE-LABEL ARCHITECTURE
              </span>

              <p className="text-xs sm:text-sm font-mono text-ink-muted uppercase tracking-wider max-w-md">
                [ ZERO TEMPLATES ] • [ 100% BESPOKE CODING ] • [ DIRECT DEVELOPER COLLABORATION ]
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Scrub Typography (Porsche Racing standard) */}
        <div className="py-8 sm:py-12 border-t border-b border-white/[0.08] max-w-5xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-cyan font-bold block mb-3">
            {"// MANIFESTO & POSITIONING"}
          </span>
          <ScrubText
            as="h2"
            text="Pixvarse is an independent digital development studio founded by Juel Rahman. We combine brutalist design fidelity, sub-second performance, and enterprise engineering across WordPress, Laravel, and Next.js for brands that refuse to look like anyone else."
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold tracking-tight text-ink-headline"
            start="top 90%"
            end="bottom 50%"
          />
        </div>

        {/* CTAs with Magnetic Physics */}
        <div className="py-8 sm:py-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <MagneticButton
            href="/contact"
            variant="primary"
            className="text-sm px-8 py-4 uppercase font-mono tracking-wider font-bold shadow-[0_0_35px_rgba(0,245,160,0.3)] hover:shadow-[0_0_50px_rgba(0,245,160,0.5)]"
          >
            <span>Initialize Project Inquiry</span>
            <ArrowUpRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
          </MagneticButton>

          <MagneticButton
            href="/work"
            variant="secondary"
            className="text-sm px-8 py-4 uppercase font-mono tracking-wider font-semibold border-white/[0.15] hover:border-white/[0.3]"
          >
            <span>Review Selected Work (06)</span>
            <ArrowRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
          </MagneticButton>
        </div>

        {/* Infinite Tech Stack Ticker */}
        <div className="w-full pt-2 pb-6">
          <TechSlider />
        </div>

        {/* ====================================================================
            CENTERPIECE CINEMATIC FRAME WITH GSAP PIN / SCALE DYNAMICS
            ==================================================================== */}
        <div className="mt-6 sm:mt-12 perspective-1000">
          <div
            ref={mockupRef}
            className="group relative rounded-2xl sm:rounded-3xl bg-surface-elevated/70 border border-white/[0.12] backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500"
          >
            {/* Top Browser / Telemetry Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-black/60 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-3 text-[11px] font-mono text-ink-muted hidden sm:inline-block">
                  pixvarse.internal // runtime-telemetry.sys
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-cyber-emerald">
                  <Gauge className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>100/100 CWV</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-cyber-cyan">
                  <Zap className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span>0.8s LCP</span>
                </div>
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-white/[0.02] to-transparent">
              {/* Left Column: Code Editor Telemetry */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-ink-muted pb-2 border-b border-white/[0.06]">
                  <Terminal className="h-4 w-4 text-cyber-emerald" strokeWidth={1.5} />
                  <span>src/architecture/pixvarse-core.ts</span>
                </div>

                <div className="bg-[#030305] p-5 rounded-xl border border-white/[0.06] font-mono text-xs text-ink-secondary leading-relaxed overflow-x-auto shadow-inner">
                  <p className="text-white/40">{"// Enterprise Next.js 15 + Motion Engine"}</p>
                  <p>
                    <span className="text-cyber-cyan">export const</span>{" "}
                    <span className="text-white font-bold">PixvarseEngine</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    founder: <span className="text-cyber-emerald">&quot;{siteConfig.creatorName}&quot;</span>,
                  </p>
                  <p className="pl-4">
                    architecture: <span className="text-yellow-300">&quot;Brutalist Luxury / Kinetic Editorial&quot;</span>,
                  </p>
                  <p className="pl-4">
                    stack: [<span className="text-cyber-emerald">&quot;Next.js 15&quot;</span>,{" "}
                    <span className="text-cyber-emerald">&quot;GSAP ScrollTrigger&quot;</span>,{" "}
                    <span className="text-cyber-emerald">&quot;Lenis Smooth&quot;</span>,{" "}
                    <span className="text-cyber-emerald">&quot;WordPress Core&quot;</span>],
                  </p>
                  <p className="pl-4">
                    coreWebVitals: {"{"} performance: <span className="text-cyber-emerald">100</span>, lcp: <span className="text-cyber-emerald">&quot;0.8s&quot;</span>, fid: <span className="text-cyber-emerald">&quot;0ms&quot;</span> {"}"},
                  </p>
                  <p className="pl-4">
                    agencyWhiteLabel: <span className="text-cyber-cyan">true</span>,
                  </p>
                  <p>{"};"}</p>
                </div>
              </div>

              {/* Right Column: Key Performance Gauges */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="text-[10px] font-mono uppercase tracking-wider">Speed Index</span>
                    <Zap className="h-3.5 w-3.5 text-cyber-emerald" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-ink-headline">0.4s</div>
                  <div className="text-[10px] font-mono text-cyber-emerald">Instant First Paint</div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="text-[10px] font-mono uppercase tracking-wider">SEO Structure</span>
                    <Globe className="h-3.5 w-3.5 text-cyber-cyan" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-ink-headline">100%</div>
                  <div className="text-[10px] font-mono text-cyber-cyan">Semantic &amp; Schema</div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="text-[10px] font-mono uppercase tracking-wider">Security SLA</span>
                    <ShieldCheck className="h-3.5 w-3.5 text-cyber-emerald" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-ink-headline">A+</div>
                  <div className="text-[10px] font-mono text-cyber-emerald">Hardened Headers</div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-1">
                  <div className="flex items-center justify-between text-ink-muted">
                    <span className="text-[10px] font-mono uppercase tracking-wider">Code Integrity</span>
                    <Cpu className="h-3.5 w-3.5 text-cyber-cyan" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-ink-headline">Zero</div>
                  <div className="text-[10px] font-mono text-cyber-cyan">Plugin Bloat / Debt</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brutalist Indicators Strip */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="text-cyber-emerald font-bold">[01]</span>
            <span className="uppercase tracking-wider text-ink-secondary">Bespoke Code Only</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyber-emerald font-bold">[02]</span>
            <span className="uppercase tracking-wider text-ink-secondary">White-Label Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyber-emerald font-bold">[03]</span>
            <span className="uppercase tracking-wider text-ink-secondary">Sub-Second Load</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyber-emerald font-bold">[04]</span>
            <span className="uppercase tracking-wider text-ink-secondary">Direct Direct Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}
