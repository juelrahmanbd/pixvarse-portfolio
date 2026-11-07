"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "../ui/MagneticButton";
import { ScrubText } from "../ui/ScrubText";
import { KineticMarquee } from "../ui/KineticMarquee";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/**
 * HeroSection — Huge Inc Benchmark
 * Viewport-filling monumental typography (14-16vw),
 * subtle scale-down and character separation on scroll,
 * unapologetic #050505 obsidian canvas with Electric Magenta / Cyber Emerald active anchors.
 */
export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current || !titleBlockRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Huge Inc scroll separation: typography subtly scales and separates on scroll
      gsap.to(titleBlockRef.current, {
        scale: 0.94,
        y: 40,
        opacity: 0.65,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 20%",
          scrub: 1.2,
        },
      });

      // Parallax separation on secondary lines
      gsap.to(".hero-meta-row", {
        y: -30,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom 50%",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 bg-canvas text-ink-primary overflow-hidden border-b border-white/10 flex flex-col justify-between"
    >
      {/* Background Kinetic Marquee Strip */}
      <div className="absolute top-24 left-0 right-0 z-0 opacity-20 pointer-events-none select-none">
        <KineticMarquee
          words={[
            "PIXVARSE",
            "HUGE IMPACT",
            "NEXT.JS 15",
            "WORDPRESS CORE",
            "ZERO TEMPLATES",
            "EDITORIAL BRUTALISM",
          ]}
          speed={40}
          strokeOnly={true}
        />
      </div>

      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-8 w-full flex flex-col justify-between flex-1">
        {/* Top Telemetry Header Bar */}
        <div className="hero-meta-row flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-mono uppercase tracking-widest text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
            </span>
            <span className="text-white font-semibold tracking-wider">
              PIXVARSE // JUEL RAHMAN
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[11px] text-ink-secondary">
            <span>[ DIGITAL DEVELOPMENT STUDIO ]</span>
            <span>[ SYSTEM: NEXT.JS 15 + GSAP ENGINE ]</span>
            <span>[ LAT 23.8° N // LNG 90.4° E ]</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-magenta" />
            <span className="text-cyber-magenta font-bold">
              {"ACCEPTING SELECT COMMISSIONS"}
            </span>
          </div>
        </div>

        {/* ====================================================================
            MONUMENTAL VIEWPORT-FILLING TYPOGRAPHY (Huge Inc Aesthetic)
            ==================================================================== */}
        <div ref={titleBlockRef} className="py-12 sm:py-16 md:py-20 select-none will-change-transform">
          <div className="space-y-[-0.06em] sm:space-y-[-0.07em]">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <h1 className="text-[13vw] sm:text-[14.5vw] lg:text-[15.5vw] font-display font-black uppercase tracking-[-0.06em] leading-[0.8] text-white">
                MAKE DIGITAL
              </h1>
            </div>

            {/* Line 2 with High-Voltage Accent */}
            <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-8 overflow-hidden">
              <span className="text-[13vw] sm:text-[14.5vw] lg:text-[15.5vw] font-display font-black uppercase tracking-[-0.06em] leading-[0.8] text-white">
                IMPACT
              </span>
              <span className="text-[13vw] sm:text-[14.5vw] lg:text-[15.5vw] font-display font-black uppercase tracking-[-0.06em] leading-[0.8] text-stroke-white opacity-40">
                LOUD.
              </span>
            </div>
          </div>

          {/* Sub-bar with Mono Coordinates */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <span className="text-cyber-emerald font-semibold flex items-center gap-2">
              <span className="inline-block w-6 h-[1px] bg-cyber-emerald" />
              HIGH-PERFORMANCE WORDPRESS &amp; BESPOKE REACT ARCHITECTURES
            </span>
            <span>
              [ ZERO CMS BLOAT // 100/100 CWV // WHITE-LABEL AGENCY PARTNER ]
            </span>
          </div>
        </div>

        {/* ====================================================================
            NARRATIVE SPLIT-WORD SCRUB (Huge Inc Scroll Standard)
            ==================================================================== */}
        <div className="py-8 sm:py-12 border-t border-b border-white/10 max-w-6xl">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-magenta font-bold block mb-4">
            {"[ 01 // MANIFESTO ]"}
          </span>
          <ScrubText
            as="h2"
            text="Pixvarse rejects templated mediocrity. Founded by Juel Rahman, we engineer bespoke web platforms for ambitious global brands and design agencies that demand uncompromising speed, architectural integrity, and category dominance."
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight uppercase"
            start="top 90%"
            end="bottom 45%"
          />
        </div>

        {/* Action Row & Brutalist Touchpoints */}
        <div className="pt-8 sm:pt-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-xs sm:text-sm px-8 py-4 uppercase font-mono tracking-wider font-bold bg-white text-black hover:bg-cyber-emerald hover:text-black border-none shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span>Initialize Project</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
            </MagneticButton>

            <MagneticButton
              href="/work"
              variant="secondary"
              className="text-xs sm:text-sm px-8 py-4 uppercase font-mono tracking-wider font-semibold border-white/20 hover:border-white text-white"
            >
              <span>Explore Selected Dossier (06)</span>
              <ArrowRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
            </MagneticButton>
          </div>

          <div className="flex items-center gap-8 font-mono text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <span className="text-cyber-emerald font-bold">100%</span>
              <span className="uppercase">Core Web Vitals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber-magenta font-bold">&lt; 1.0s</span>
              <span className="uppercase">Global Latency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
