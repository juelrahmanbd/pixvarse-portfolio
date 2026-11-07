"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, CaseStudyData } from "@/data/projects";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * FeaturedProjects — Huge Inc Benchmark
 * Full-width edge-to-edge project imagery (no nested rounded containers),
 * massive category counters (01, 02, 03) in JetBrains Mono,
 * pure white typography on #050505 canvas with Electric Magenta / Cyber Emerald active anchors.
 */
export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="relative bg-canvas text-ink-primary overflow-hidden border-b border-white/10">
      {/* Section Header */}
      <div className="pt-20 sm:pt-28 pb-10 px-4 sm:px-8 max-w-[1560px] mx-auto border-b border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-cyber-magenta font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyber-magenta" />
              <span>{"[ 02 // SELECTED DOSSIER ]"}</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-[-0.05em] uppercase text-white leading-[0.85]">
              FLAGSHIP <span className="text-stroke-white opacity-40">WORK</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs">
            <span className="text-ink-muted hidden md:inline-block">
              [ 04 SELECTED DEPLOYMENTS // 06 TOTAL IN ARCHIVE ]
            </span>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white hover:text-cyber-emerald uppercase tracking-wider font-bold transition-colors"
            >
              <span>View Full Directory</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* ====================================================================
          FULL-WIDTH EDGE-TO-EDGE PROJECT SHOWCASE (Huge Inc Standard)
          No nested rounded containers. Massive JetBrains Mono counters.
          ==================================================================== */}
      <div className="divide-y divide-white/10">
        {featured.map((project, idx) => (
          <HugeProjectRow
            key={project.slug}
            project={project}
            index={idx}
          />
        ))}
      </div>

      {/* Directory Invitation Strip */}
      <div className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1560px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-mono uppercase tracking-widest text-cyber-emerald font-semibold">
            {"[ COMPLETE TECHNICAL ARCHIVE ]"}
          </span>
          <h3 className="text-2xl sm:text-4xl font-display font-black uppercase text-white leading-tight">
            Need custom architecture specifications?
          </h3>
          <p className="text-sm font-sans text-ink-secondary">
            Review detailed case dossiers including database schema designs, custom Gutenberg block catalogs, and API integration benchmarks.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-cyber-emerald transition-colors"
          >
            Explore All 06 Cases
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border border-white/20 text-white font-mono text-xs uppercase tracking-wider font-bold hover:border-white transition-colors"
          >
            Initiate Project Scope
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * HugeProjectRow
 * Edge-to-edge visual expanse with massive JetBrains Mono counter
 */
function HugeProjectRow({
  project,
  index,
}: {
  project: CaseStudyData;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const counterNumber = `0${index + 1}`;

  const primaryMetric =
    project.finalResult && project.finalResult.length > 0
      ? project.finalResult[0]
      : "100/100 Core Web Vitals";

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full overflow-hidden transition-colors"
    >
      {/* Meta Bar Above Image */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 py-8 sm:py-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="flex items-start gap-6 sm:gap-10">
          {/* Massive Category Counter in JetBrains Mono */}
          <span className="font-mono text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white/20 group-hover:text-cyber-magenta transition-colors duration-300 leading-none select-none">
            {counterNumber}
          </span>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-ink-muted">
              <span className="text-cyber-emerald font-bold">
                {`[ ${project.category.toUpperCase()} ]`}
              </span>
              <span>•</span>
              <span>{project.clientIndustry}</span>
              <span>•</span>
              <span>{project.completionYear}</span>
            </div>

            <h3 className="text-3xl sm:text-5xl md:text-6xl font-display font-black uppercase text-white tracking-tight leading-[0.9] group-hover:text-cyber-emerald transition-colors duration-300">
              <Link href={`/work/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
          </div>
        </div>

        {/* Impact Metric & Quick Action */}
        <div className="flex flex-wrap items-center gap-4 lg:self-end">
          <div className="px-3.5 py-1.5 border border-white/10 bg-white/[0.02] text-xs font-mono text-ink-secondary">
            <span className="text-cyber-emerald font-semibold">{primaryMetric}</span>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="flex h-11 w-11 items-center justify-center border border-white/20 text-white group-hover:border-cyber-magenta group-hover:bg-cyber-magenta group-hover:text-black transition-all"
            aria-label={`Open case study for ${project.title}`}
          >
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* ====================================================================
          FULL-WIDTH EDGE-TO-EDGE HERO IMAGERY (No rounded containers)
          ==================================================================== */}
      <Link
        href={`/work/${project.slug}`}
        className="block relative w-full h-[360px] sm:h-[500px] md:h-[620px] lg:h-[700px] overflow-hidden bg-black select-none"
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="100vw"
          priority={index === 0}
          className={cn(
            "object-cover object-center transition-transform duration-700 ease-out",
            isHovered ? "scale-105 opacity-100" : "scale-100 opacity-80"
          )}
        />

        {/* Subtle cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

        {/* Floating Brutalist Corner HUD */}
        <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 flex flex-wrap items-center gap-2">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Right Corner Indicator */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 hidden sm:flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono uppercase text-white tracking-wider group-hover:border-cyber-emerald group-hover:text-cyber-emerald transition-colors">
          <span>Explore Architecture &amp; Case Study</span>
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </div>
      </Link>
    </article>
  );
}
