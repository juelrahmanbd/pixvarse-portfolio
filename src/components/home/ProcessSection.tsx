"use client";

import React from "react";
import { processSteps } from "@/data/process";

/**
 * ProcessSection — Huge Inc Benchmark
 * Razor-sharp architectural columns, massive JetBrains Mono counters,
 * no rounded containers, pure high-contrast typography.
 */
export function ProcessSection() {
  return (
    <section className="relative bg-canvas text-ink-primary overflow-hidden border-b border-white/10">
      {/* Section Header */}
      <div className="pt-20 sm:pt-28 pb-10 px-4 sm:px-8 max-w-[1560px] mx-auto border-b border-white/10">
        <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-cyber-magenta font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-cyber-magenta" />
          <span>{"[ 04 // ENGINEERING LIFECYCLE ]"}</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-[-0.05em] uppercase text-white leading-[0.85]">
          PRECISION <span className="text-stroke-white opacity-40">DELIVERY</span>
        </h2>
      </div>

      {/* 5 Column Brutalist Process Grid */}
      <div className="max-w-[1560px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
        {processSteps.map((step) => (
          <div
            key={step.step}
            className="group p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
          >
            <div className="space-y-6">
              {/* Massive Counter in JetBrains Mono */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-5xl font-black text-white/20 group-hover:text-cyber-magenta transition-colors duration-300 leading-none select-none">
                  {step.step}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-emerald font-semibold">
                  PHASE
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-1">
                <h3 className="text-xl font-display font-black uppercase text-white tracking-tight group-hover:text-cyber-emerald transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-mono text-ink-muted">
                  {step.tagline}
                </p>
              </div>

              <p className="text-xs text-ink-secondary leading-relaxed font-sans font-normal">
                {step.description}
              </p>
            </div>

            {/* Deliverable Tag */}
            <div className="mt-8 pt-4 border-t border-white/10 text-[11px] font-mono">
              <span className="text-ink-muted uppercase block text-[10px] tracking-wider mb-1">
                Deliverable
              </span>
              <span className="text-white font-medium">
                {step.output}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
