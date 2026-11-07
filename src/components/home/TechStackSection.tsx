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
    <section className="py-24 sm:py-32 bg-slate-50/50 text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="TOOLCHAIN &amp; STACK"
            title="Battle-Tested"
            highlight="Engineering Stacks."
            description="A focused, modern technology toolchain strictly backed by production deployments and enterprise standards."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer select-none",
                  activeCategory === cat
                    ? "bg-slate-900 text-white font-semibold shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-50"
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
              className="group rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {tech.category}
                  </span>
                  {tech.badge && (
                    <span className="rounded-full bg-blue-50 text-blue-700 px-2 py-0.5 text-[10px] font-mono font-medium border border-blue-200/80">
                      {tech.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Proficiency</span>
                <span className="text-blue-600 font-semibold">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
