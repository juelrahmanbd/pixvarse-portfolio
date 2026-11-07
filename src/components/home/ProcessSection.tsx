"use client";

import React from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { Compass, FileSpreadsheet, Code2, ShieldCheck, Rocket } from "lucide-react";

const stepIcons = [
  <Compass key="1" className="h-4 w-4" strokeWidth={1.5} />,
  <FileSpreadsheet key="2" className="h-4 w-4" strokeWidth={1.5} />,
  <Code2 key="3" className="h-4 w-4" strokeWidth={1.5} />,
  <ShieldCheck key="4" className="h-4 w-4" strokeWidth={1.5} />,
  <Rocket key="5" className="h-4 w-4" strokeWidth={1.5} />,
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-canvas-secondary text-ink-primary relative overflow-hidden border-b border-edge-subtle">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-cyber-emerald/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="METHODOLOGY // PRECISION DELIVERY"
            title="From Initial Blueprint to"
            highlight="Flawless Launch."
            description="A disciplined, five-phase engineering lifecycle designed to eliminate guesswork, respect timelines, and guarantee architectural excellence."
          />
        </div>

        {/* 5 Editorial Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 flex flex-col justify-between hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyber-emerald">
                    {`${step.step} // PHASE`}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-cyber-emerald border border-white/[0.08] group-hover:scale-105 group-hover:border-cyber-emerald/40 transition-all">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="text-lg font-display font-bold tracking-tight text-ink-headline group-hover:text-cyber-emerald transition-colors">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-cyber-cyan/90 font-medium">
                  {step.tagline}
                </p>

                <p className="mt-3.5 text-xs text-ink-secondary leading-relaxed font-sans font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Micro-Tag */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block mb-1">
                  Deliverable
                </span>
                <span className="text-xs font-sans text-ink-primary font-medium">
                  {step.output}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
