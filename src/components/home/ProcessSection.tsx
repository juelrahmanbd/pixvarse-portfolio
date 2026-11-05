import React from "react";
import { processSteps } from "@/data/process";
import { SectionHeading } from "../ui/SectionHeading";
import { Check, Compass, FileSpreadsheet, Code2, ShieldCheck, Rocket } from "lucide-react";

const stepIcons = [
  <Compass key="1" className="h-4 w-4" />,
  <FileSpreadsheet key="2" className="h-4 w-4" />,
  <Code2 key="3" className="h-4 w-4" />,
  <ShieldCheck key="4" className="h-4 w-4" />,
  <Rocket key="5" className="h-4 w-4" />,
];

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#092D23] text-white relative overflow-hidden border-b border-white/10">
      {/* Subtle radial glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-[#063F2E] rounded-full blur-[140px] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="METHODOLOGY // HOW WE DELIVER"
            title="From First Idea to"
            highlight="Final Launch."
            description="A disciplined, transparent five-phase engineering process designed to eliminate guesswork, respect timelines, and guarantee quality."
            theme="dark"
          />
        </div>

        {/* 5 Editorial Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group relative rounded-sm bg-[#063F2E]/70 border border-white/10 p-6 flex flex-col justify-between hover:border-[#C7F532]/60 hover:bg-[#063F2E] transition-all duration-200 shadow-[3px_3px_0px_0px_#032118] hover:shadow-[4px_4px_0px_0px_#C7F532] hover:-translate-y-0.5"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C7F532]">
                    {step.step} &#47;&#47; PHASE
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#092D23] text-[#C7F532] border border-[#C7F532]/30 group-hover:bg-[#C7F532] group-hover:text-[#092D23] transition-colors">
                    {stepIcons[idx]}
                  </div>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#C7F532] transition-colors">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-emerald-300/80 font-semibold">
                  {step.tagline}
                </p>

                <p className="mt-4 text-xs text-white/75 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Phase Deliverable Output */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-wider font-mono text-white/50 block mb-1">
                  Phase Output:
                </span>
                <span className="text-xs font-bold text-white group-hover:text-[#C7F532] transition-colors flex items-center gap-1.5 font-mono">
                  <Check className="h-3 w-3 text-[#C7F532] shrink-0" />
                  <span>{step.output}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
