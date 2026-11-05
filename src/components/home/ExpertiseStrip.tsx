"use client";

import React from "react";

const expertiseList = [
  "WordPress",
  "Divi Builder",
  "Elementor Pro",
  "Laravel",
  "React",
  "JavaScript (ES6+)",
  "TypeScript",
  "Inertia.js",
  "Next.js",
  "Tailwind CSS",
  "WooCommerce",
  "REST APIs",
];

export function ExpertiseStrip() {
  return (
    <div className="relative border-y border-[#063F2E]/20 bg-[#F8FAF6] py-5 overflow-hidden select-none">
      <div className="flex items-center space-x-8 whitespace-nowrap animate-marquee">
        {/* Double the list for infinite-like smooth continuous ticker */}
        {[...expertiseList, ...expertiseList].map((tech, idx) => (
          <div key={idx} className="inline-flex items-center space-x-6">
            <span className="text-sm sm:text-base font-black font-mono tracking-tight text-[#063F2E] uppercase hover:text-[#C7F532] transition-colors">
              {tech}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#C7F532] border border-[#063F2E]" />
          </div>
        ))}
      </div>
    </div>
  );
}

