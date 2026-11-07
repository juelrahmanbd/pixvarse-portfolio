"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/**
 * ServicesSection — Huge Inc Benchmark
 * Architectural list with massive JetBrains Mono counters,
 * razor-thin borders, zero rounded boxes, pure typography.
 */
export function ServicesSection() {
  const coreServices = servicesData.slice(0, 6);

  return (
    <section className="relative bg-canvas text-ink-primary overflow-hidden border-b border-white/10">
      {/* Section Header */}
      <div className="pt-20 sm:pt-28 pb-10 px-4 sm:px-8 max-w-[1560px] mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-cyber-magenta font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyber-magenta" />
              <span>{"[ 03 // CORE CAPABILITIES ]"}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-[-0.05em] uppercase text-white leading-[0.85]">
              TECHNICAL <span className="text-stroke-white opacity-40">MASTERY</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white hover:text-cyber-emerald uppercase tracking-wider font-bold transition-colors"
            >
              <span>Full Service Matrix</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Brutalist Architectural Capabilities Rows */}
      <div className="divide-y divide-white/10">
        {coreServices.map((service, idx) => (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            className="group block w-full hover:bg-white/[0.02] transition-colors"
          >
            <div className="max-w-[1560px] mx-auto px-4 sm:px-8 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Massive JetBrains Mono Counter */}
              <div className="md:col-span-2">
                <span className="font-mono text-5xl sm:text-6xl md:text-7xl font-black text-white/20 group-hover:text-cyber-magenta transition-colors duration-300 leading-none select-none">
                  0{idx + 1}
                </span>
              </div>

              {/* Service Title & Scope */}
              <div className="md:col-span-6 space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase text-white tracking-tight group-hover:text-cyber-emerald transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm font-sans text-ink-secondary leading-relaxed max-w-xl">
                  {service.shortDescription}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {service.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 border border-white/10 text-[11px] font-mono uppercase tracking-wider text-ink-muted group-hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex justify-end">
                <div className="flex h-11 w-11 items-center justify-center border border-white/15 text-white group-hover:border-cyber-magenta group-hover:bg-cyber-magenta group-hover:text-black transition-all">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
