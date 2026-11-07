"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudyData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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
                "px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer select-none",
                isActive
                  ? "bg-cyber-emerald text-canvas font-bold shadow-glow-emerald border border-cyber-emerald"
                  : "bg-white/[0.03] text-ink-secondary border border-white/[0.08] hover:text-ink-headline hover:bg-white/[0.07] hover:border-white/[0.18]"
              )}
            >
              {cat} {cat === "All" ? `(${initialProjects.length})` : ""}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:border-white/[0.2] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/70"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 160, 0.08), transparent 80%)`,
        }}
      />

      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-secondary border-b border-white/[0.08]">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <Badge variant="emerald" size="sm">
            {project.category}
          </Badge>
          <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-ink-headline border border-white/[0.1]">
            {project.completionYear}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyber-emerald px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-canvas shadow-glow-emerald">
            <span>View Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-2 font-medium">
            <span>Role: {project.role}</span>
            <span>{project.clientIndustry}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-ink-headline group-hover:text-cyber-emerald transition-colors">
            <Link href={`/work/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm text-ink-secondary leading-relaxed font-sans line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] font-mono text-ink-secondary border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="rounded-md bg-white/[0.02] border border-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono text-ink-muted">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyber-emerald hover:text-white transition-colors"
          >
            <span>Explore Case Study</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
