"use client";

import React, { useState } from "react";
import { techStackData } from "@/data/technologies";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "@/lib/utils";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "CMS & Builders", "Tools & Workflow"];

  const filteredTech =
    activeCategory === "All"
      ? techStackData
      : techStackData.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 sm:py-28 bg-canvas relative overflow-hidden border-b border-edge-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="TOOLCHAIN // CORE PROFICIENCY"
            title="Battle-Tested"
            highlight="Engineering Stacks."
            description="A focused, modern technology stack strictly backed by commercial development and high-traffic production deployments."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono font-medium uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer select-none",
                  activeCategory === cat
                    ? "bg-cyber-emerald text-canvas font-bold shadow-glow-emerald border border-cyber-emerald"
                    : "bg-white/[0.03] text-ink-secondary border border-white/[0.08] hover:text-ink-headline hover:bg-white/[0.06]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">
                    {tech.category}
                  </span>
                  {tech.badge && (
                    <span className="rounded-full bg-cyber-emerald/15 text-cyber-emerald px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider border border-cyber-emerald/30">
                      {tech.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-display font-bold text-ink-headline group-hover:text-cyber-emerald transition-colors">
                  {tech.name}
                </h3>

                <p className="mt-2 text-xs text-ink-secondary leading-relaxed font-sans font-normal">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-ink-muted flex items-center justify-between">
                <span>{tech.category}</span>
                <span className="text-cyber-emerald font-semibold">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
