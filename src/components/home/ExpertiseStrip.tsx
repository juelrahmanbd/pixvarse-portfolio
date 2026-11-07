"use client";

import React from "react";

const expertiseList = [
  "WordPress Core Architecture",
  "Custom Plugin Engineering",
  "Laravel Backends",
  "React & Next.js",
  "Tailwind CSS",
  "TypeScript",
  "WooCommerce Systems",
  "REST & GraphQL APIs",
  "High-Performance Headless",
  "Interactive Micro-Motions",
];

export function ExpertiseStrip() {
  return (
    <div className="relative border-y border-slate-200/80 bg-slate-50 py-3.5 overflow-hidden select-none">
      <div className="flex items-center space-x-8 whitespace-nowrap animate-marquee">
        {[...expertiseList, ...expertiseList].map((tech, idx) => (
          <div key={idx} className="inline-flex items-center space-x-6">
            <span className="text-xs font-mono font-medium tracking-wider text-slate-600 uppercase hover:text-blue-600 transition-colors">
              {tech}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          </div>
        ))}
      </div>
    </div>
  );
}
