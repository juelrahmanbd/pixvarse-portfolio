"use client";

import React from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { Compass, FileSpreadsheet, Code2, ShieldCheck, Rocket } from "lucide-react";

const stepIcons = [
  <Compass key="1" className="h-4 w-4 text-blue-600" strokeWidth={1.5} />,
  <FileSpreadsheet key="2" className="h-4 w-4 text-blue-600" strokeWidth={1.5} />,
  <Code2 key="3" className="h-4 w-4 text-blue-600" strokeWidth={1.5} />,
  <ShieldCheck key="4" className="h-4 w-4 text-blue-600" strokeWidth={1.5} />,
  <Rocket key="5" className="h-4 w-4 text-blue-600" strokeWidth={1.5} />,
];

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="METHODOLOGY // PRECISION DELIVERY"
            title="Disciplined Engineering."
            highlight="Predictable Timelines."
            description="A transparent, five-phase delivery lifecycle designed to eliminate guesswork, respect sprint timelines, and guarantee architectural excellence."
          />
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-mono text-xs font-bold text-blue-600">
                    Phase {step.step}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 border border-blue-100">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono">
                <span className="text-slate-400 block uppercase text-[10px] tracking-wider mb-0.5">
                  Deliverable
                </span>
                <span className="text-slate-800 font-medium">
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
