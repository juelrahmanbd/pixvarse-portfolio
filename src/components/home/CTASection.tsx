"use client";

import React from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { Badge } from "../ui/Badge";
import { BorderBeam } from "../ui/BorderBeam";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 bg-canvas text-ink-primary overflow-hidden border-b border-edge-subtle">
      {/* Ambient Radial Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyber-emerald/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white/[0.03] border border-white/[0.1] backdrop-blur-2xl p-8 sm:p-14 lg:p-16 text-center overflow-hidden shadow-2xl">
          <BorderBeam size={300} duration={12} colorFrom="#00F5A0" colorTo="#00D9F5" />

          {/* Eyebrow */}
          <div className="mb-6 flex justify-center">
            <Badge variant="emerald" dot={true} dotColor="emerald" size="md">
              DIRECT ENGAGEMENT
            </Badge>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-[-0.04em] uppercase leading-[0.9] text-ink-headline">
            READY FOR <span className="text-stroke-white">DIGITAL</span> DOMINANCE?{" "}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald via-[#5CFFB0] to-cyber-cyan drop-shadow-[0_0_35px_rgba(0,245,160,0.4)]">
              LET&apos;S ENGINEER IT.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-ink-secondary leading-relaxed max-w-2xl mx-auto font-sans font-normal">
            Whether you need a bespoke WordPress architecture, a tailored web application, or a reliable white-label engineering partner for your digital agency, let&apos;s talk.
          </p>

          {/* Magnetic Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <MagneticButton href="/contact" variant="primary" className="text-sm px-8 py-4">
              <span>Start Your Project</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2]" strokeWidth={1.5} />
            </MagneticButton>

            <MagneticButton
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              className="text-sm px-8 py-4"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              <span>Direct Email</span>
            </MagneticButton>
          </div>

          {/* Availability Status */}
          <div className="mt-10 pt-8 border-t border-white/[0.06] flex items-center justify-center gap-3 text-xs font-mono text-ink-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
            </span>
            <span>24-Hour Response Guarantee • Direct Founder Assessment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
