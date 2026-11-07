"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, CaseStudyData } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-24 sm:py-32 bg-slate-50/60 text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Directory Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="SELECTED CASE STUDIES"
            title="Proven Engineering."
            highlight="Measurable Outcomes."
            description="A curated selection of production web platforms, custom WordPress systems, and high-performance web applications built for international clients."
          />

          <Button
            href="/work"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
          >
            Explore All Work ({projectsData.length})
          </Button>
        </div>

        {/* 2-Column Balanced High-Fidelity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {featured.map((project, idx) => (
            <ExecutiveProjectCard
              key={project.slug}
              project={project}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-display font-bold text-slate-900">
              Need detailed technical specifications?
            </h3>
            <p className="text-sm text-slate-600 font-sans">
              Review full architectural breakdowns, database schemas, and Core Web Vitals reports in our case archive.
            </p>
          </div>

          <Button
            href="/work"
            variant="primary"
            size="md"
            icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
          >
            View Portfolio Directory
          </Button>
        </div>
      </div>
    </section>
  );
}

function ExecutiveProjectCard({
  project,
  index,
}: {
  project: CaseStudyData;
  index: number;
}) {
  const primaryMetric =
    project.finalResult && project.finalResult.length > 0
      ? project.finalResult[0]
      : "100/100 Core Web Vitals Score";

  return (
    <article className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* High-Fidelity Browser Window Frame */}
      <div className="border-b border-slate-200/80 bg-slate-50/80 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
            {project.slug}.pixvarse.com
          </span>
        </div>

        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-medium">
          {project.category}
        </span>
      </div>

      {/* Project Cover Image */}
      <Link
        href={`/work/${project.slug}`}
        className="relative block h-[240px] sm:h-[300px] w-full overflow-hidden bg-slate-100"
      >
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
          className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
        />

        {/* Hover Overlay Button */}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-semibold shadow-md flex items-center gap-1.5">
            <span>Read Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500">
            <span>{project.clientIndustry}</span>
            <span>{project.completionYear}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Verified Result Metric Pill */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80 text-xs font-mono">
            <Zap className="h-3.5 w-3.5 text-emerald-600 shrink-0" strokeWidth={1.5} />
            <span className="font-medium truncate">{primaryMetric}</span>
          </div>
        </div>

        {/* Metadata Tags & Link */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
