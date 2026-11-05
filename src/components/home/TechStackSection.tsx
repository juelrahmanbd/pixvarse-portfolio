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
    <section className="py-16 sm:py-24 bg-[#F8FAF6] relative overflow-hidden border-b border-[#092D23]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
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
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all duration-150 cursor-pointer select-none border-2 border-[#092D23] ${
                  activeCategory === cat
                    ? "bg-[#063F2E] text-[#C7F532] shadow-[2px_2px_0px_0px_#C7F532]"
                    : "bg-white text-[#092D23] hover:bg-[#E6F4EC] shadow-[2px_2px_0px_0px_#092D23] hover:shadow-[1px_1px_0px_0px_#092D23] hover:translate-x-[1px] hover:translate-y-[1px]"
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
              className="group rounded-sm bg-white border border-[#092D23]/15 p-5 sm:p-6 shadow-[3px_3px_0px_0px_#092D23] hover:shadow-[5px_5px_0px_0px_#C7F532] hover:border-[#092D23] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#092D23]/10 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#063F2E] font-bold">
                    {tech.category}
                  </span>
                  {tech.badge && (
                    <span className="rounded-sm bg-[#C7F532] text-[#092D23] px-2 py-0.5 text-[9px] font-black font-mono uppercase tracking-wider border border-[#092D23]/30">
                      {tech.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#092D23] group-hover:text-[#063F2E] transition-colors">
                  {tech.name}
                </h3>
                <p className="mt-2 text-xs text-[#092D23]/75 leading-relaxed font-sans">
                  {tech.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#092D23]/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#092D23]/60">Proficiency:</span>
                <span className="font-bold text-[#063F2E]">{tech.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
