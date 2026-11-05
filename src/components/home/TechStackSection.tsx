"use client";

import React, { useState } from "react";
import { techStackData } from "@/data/technologies";
import { SectionHeading } from "../ui/SectionHeading";

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Frontend", "Backend", "CMS & Builders", "Tools & Workflow"];

  const filteredTech =
    activeCategory === "All"
      ? techStackData
      : techStackData.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 bg-[#F8FAF6] relative overflow-hidden border-b border-[#063F2E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="TOOLCHAIN // CORE EXPERTISE"
            title="Modern Stacks."
            highlight="Battle-Tested"
            description="A focused, modern technology stack strictly backed by real-world development and production deployment experience."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#063F2E] text-[#C7F532] shadow-sm"
                    : "bg-white text-[#171A18]/70 hover:bg-[#E6F4EC] hover:text-[#063F2E] border border-[#063F2E]/15"
                }`}
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
              className="group rounded-xl bg-white border border-[#063F2E]/15 p-5 shadow-[3px_3px_0px_0px_#063F2E] hover:shadow-[5px_5px_0px_0px_#C7F532] hover:border-[#063F2E] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#063F2E]/10 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#063F2E]/60">
                    {tech.category}
                  </span>
                  {tech.badge && (
                    <span className="rounded bg-[#C7F532] text-[#092D23] px-2 py-0.5 text-[9px] font-bold font-mono">
                      {tech.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#171A18] group-hover:text-[#063F2E] transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-2 text-xs text-[#171A18]/70 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#063F2E]/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#063F2E]/50">Proficiency:</span>
                <span className="font-bold text-[#063F2E]">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
