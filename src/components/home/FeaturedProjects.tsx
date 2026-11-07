"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { BorderBeam } from "../ui/BorderBeam";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-canvas relative overflow-hidden border-b border-edge-subtle">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-emerald/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="SELECTED ARCHIVE // RECENT CASES"
            title="Real-World Engineering."
            highlight="Measurable Impact."
            description="A curated catalog of enterprise WordPress platforms, custom web applications, and high-performance digital architectures."
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

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {featured.map((project, idx) => {
            // Flagship layout: first card spans 2 columns, others span 1 column
            const isFlagship = idx === 0;

            return (
              <BentoCaseCard
                key={project.slug}
                project={project}
                isFlagship={isFlagship}
                priority={idx < 2}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BentoCaseCard({
  project,
  isFlagship,
  priority,
}: {
  project: (typeof projectsData)[0];
  isFlagship: boolean;
  priority: boolean;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col justify-between",
        "hover:border-white/[0.18] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/70",
        isFlagship ? "lg:col-span-2 min-h-[480px]" : "lg:col-span-1 min-h-[420px]"
      )}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 160, 0.08), transparent 80%)`,
        }}
      />

      {/* Flagship moving border beam */}
      {isFlagship && isHovered && (
        <BorderBeam size={280} duration={10} colorFrom="#00F5A0" colorTo="#00D9F5" />
      )}

      {/* Image Preview Container */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-canvas-secondary border-b border-white/[0.08]",
          isFlagship ? "aspect-[16/9] sm:aspect-[21/10]" : "aspect-[16/10]"
        )}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes={isFlagship ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          priority={priority}
        />

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300" />

        {/* Top Floating Metadata Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <Badge variant="emerald" size="sm">
            {project.category}
          </Badge>
          <span className="rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono font-medium text-ink-headline border border-white/[0.1]">
            {project.completionYear}
          </span>
        </div>

        {/* Hover Quick Action Pill */}
        <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyber-emerald px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-canvas shadow-glow-emerald">
            <span>Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" strokeWidth={1.5} />
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-2 font-medium">
            <span>Role: {project.role}</span>
            <span>{project.clientIndustry}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-display font-bold tracking-tight text-ink-headline group-hover:text-cyber-emerald transition-colors duration-200">
            <Link href={`/work/${project.slug}`} className="focus:outline-none">
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm text-ink-secondary leading-relaxed line-clamp-2 font-sans font-normal">
            {project.summary}
          </p>
        </div>

        {/* Tech Badges & Exploration Trigger */}
        <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, isFlagship ? 5 : 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] font-mono text-ink-secondary border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isFlagship ? 5 : 3) && (
              <span className="rounded-md bg-white/[0.02] border border-white/[0.06] px-1.5 py-0.5 text-[10px] font-mono text-ink-muted">
                +{project.technologies.length - (isFlagship ? 5 : 3)}
              </span>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-cyber-emerald hover:text-white transition-colors"
          >
            <span>Read Study</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
