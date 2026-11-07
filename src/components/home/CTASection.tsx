"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

/**
 * CTASection — Huge Inc Benchmark
 * Full-width edge-to-edge monumental call-to-action banner,
 * massive typography, zero rounded boxes, pure brutalist energy.
 */
export function CTASection() {
  return (
    <section className="relative py-24 sm:py-36 bg-canvas text-ink-primary overflow-hidden border-b border-white/10">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8">
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyber-magenta font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-magenta" />
            <span>{"[ 05 // INITIALIZE COLLABORATION ]"}</span>
          </div>

          {/* Monumental Headline */}
          <h2 className="text-[10vw] sm:text-[11vw] lg:text-[12vw] font-display font-black tracking-[-0.05em] uppercase text-white leading-[0.8] select-none">
            READY TO <span className="text-stroke-white opacity-40">DOMINATE?</span>
          </h2>

          <div className="pt-6 max-w-2xl">
            <p className="text-base sm:text-xl font-sans text-ink-secondary leading-relaxed">
              Whether you need a bespoke WordPress architecture, a tailored Next.js web application, or a dedicated white-label engineering partner for your digital agency, we build platforms that leave an unmistakable mark.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-8 flex flex-wrap items-center gap-6">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-xs sm:text-sm px-10 py-5 uppercase font-mono tracking-wider font-bold bg-white text-black hover:bg-cyber-magenta hover:text-white border-none shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span>Start A Project Brief</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
            </MagneticButton>

            <Link
              href={`mailto:${siteConfig.email}`}
              className="px-8 py-5 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-bold hover:border-white transition-colors"
            >
              Direct Email ({siteConfig.email})
            </Link>
          </div>

          {/* Telemetry Status Strip */}
          <div className="pt-12 mt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-ink-muted">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyber-emerald animate-ping" />
              <span className="text-white font-semibold">
                CURRENT CAPACITY: 2 NEW COMMISSIONS FOR Q4 / Q1
              </span>
            </div>
            <span className="uppercase text-ink-muted">
              EST. TURNAROUND: 2 TO 4 WEEKS PER PRODUCTION PLATFORM
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
