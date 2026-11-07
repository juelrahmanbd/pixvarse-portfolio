"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudyData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkClientViewProps {
  initialProjects: CaseStudyData[];
}

export function WorkClientView({ initialProjects }: WorkClientViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "WordPress",
    "Business Websites",
    "E-commerce",
    "Custom Development",
    "Web Applications",
  ];

  const filtered =
    activeCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer select-none",
                isActive
                  ? "bg-slate-900 text-white font-semibold shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              {cat} {cat === "All" ? `(${initialProjects.length})` : ""}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {filtered.map((project, idx) => (
          <WorkProjectCard key={project.slug} project={project} priority={idx < 2} />
        ))}
      </div>
    </div>
  );
}

function WorkProjectCard({
  project,
  priority,
}: {
  project: CaseStudyData;
  priority: boolean;
}) {
  const primaryMetric =
    project.finalResult && project.finalResult.length > 0
      ? project.finalResult[0]
      : "100/100 Core Web Vitals";

  return (
    <article className="group relative rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Browser Bar */}
      <div className="border-b border-slate-200/80 bg-slate-50/80 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="ml-3 text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
            {project.slug}.pixvarse.com
          </span>
        </div>

        <Badge variant="cyan" size="sm">
          {project.category}
        </Badge>
      </div>

      {/* Thumbnail */}
      <Link
        href={`/work/${project.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 block"
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          priority={priority}
        />
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-semibold shadow-md flex items-center gap-1.5">
            <span>Read Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </div>
      </Link>

      {/* Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Role: {project.role}</span>
            <span>{project.completionYear}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Metric Pill */}
        <div className="pt-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono">
            <Zap className="h-3 w-3 text-emerald-600 shrink-0" strokeWidth={1.5} />
            <span className="font-medium truncate">{primaryMetric}</span>
          </div>
        </div>

        {/* Technologies & Link */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-mono text-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Explore Case</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
