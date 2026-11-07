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
    <div className="relative border-y border-white/[0.08] bg-canvas-secondary/80 backdrop-blur-md py-4 overflow-hidden select-none">
      <div className="flex items-center space-x-8 whitespace-nowrap animate-marquee">
        {[...expertiseList, ...expertiseList].map((tech, idx) => (
          <div key={idx} className="inline-flex items-center space-x-6">
            <span className="text-xs sm:text-sm font-mono font-medium tracking-widest text-ink-secondary uppercase hover:text-cyber-emerald transition-colors">
              {tech}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald shadow-glow-emerald" />
          </div>
        ))}
      </div>
    </div>
  );
}
