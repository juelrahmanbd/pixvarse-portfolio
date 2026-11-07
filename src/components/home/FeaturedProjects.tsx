"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData, CaseStudyData } from "@/data/projects";
import { Button } from "../ui/Button";
import { BorderBeam } from "../ui/BorderBeam";
import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !trackRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop & Tablet: Pinned Horizontal Scroll Gallery (Porsche Racing / Crav Burgers Standard)
      mm.add("(min-width: 768px)", () => {
        if (!trackRef.current || !sectionRef.current) return;

        const scrollAmount = trackRef.current.scrollWidth - window.innerWidth + 160;

        const pinTween = gsap.to(trackRef.current, {
          x: -scrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: "top top",
            end: () => `+=${scrollAmount + 400}`,
            scrub: 1.2,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${self.progress * 100}%`;
              }
            },
          },
        });

        return () => {
          pinTween.kill();
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-canvas text-ink-primary overflow-hidden border-b border-edge-subtle"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-cyber-emerald/[0.04] blur-[180px] rounded-full pointer-events-none" />

      {/* Persistent Horizontal Gallery Header */}
      <div className="pt-16 sm:pt-20 pb-6 px-4 sm:px-8 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08]">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-cyber-emerald font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-pulse" />
            <span>02 // SELECTED ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-ink-headline uppercase leading-[0.9]">
            FLAGSHIP <span className="text-stroke-white">CASE STUDIES</span>
          </h2>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-ink-muted">
            <span>[ SCROLL VERTICALLY TO SCRUB HORIZONTALLY ]</span>
            <span className="text-cyber-emerald font-bold">&rarr;</span>
          </div>

          <Button
            href="/work"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
          >
            All Work ({projectsData.length})
          </Button>
        </div>
      </div>

      {/* Progress Track Indicator */}
      <div className="hidden md:block w-full h-[2px] bg-white/[0.06] relative">
        <div
          ref={progressBarRef}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyber-emerald to-cyber-cyan w-0 transition-all duration-75"
        />
      </div>

      {/* ====================================================================
          HORIZONTAL TRACK (PINNED ON DESKTOP, FLUID SCROLL ON MOBILE)
          ==================================================================== */}
      <div className="py-12 sm:py-20 md:py-24">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row items-stretch md:items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8 md:px-16 w-full md:w-max"
        >
          {featured.map((project, idx) => (
            <KineticProjectCard
              key={project.slug}
              project={project}
              index={idx}
            />
          ))}

          {/* End Callout Card: Full Archive Exploration */}
          <div className="w-full md:w-[480px] shrink-0 rounded-2xl sm:rounded-3xl bg-surface-elevated/70 border border-white/[0.12] p-8 sm:p-12 flex flex-col justify-between backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyber-emerald/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyber-emerald/20 transition-all duration-700" />
            
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-emerald font-semibold block">
                [ COMPLETE DOSSIER // ARCHIVE ]
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-black text-ink-headline uppercase leading-tight">
                Explore All 06 Enterprise Deployments
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                Review verified technical case studies featuring custom ACF systems, WooCommerce checkout optimization, and Laravel application backends.
              </p>
            </div>

            <div className="pt-8 space-y-4">
              <Button
                href="/work"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
              >
                Open Portfolio Directory
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="md"
                className="w-full justify-center text-xs font-mono uppercase tracking-wider"
              >
                Inquire for White-Label Specs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * KineticProjectCard
 * Overlapping depth, giant numbering, 3D mouse tilt & spotlight, and negative z-index typography
 */
function KineticProjectCard({
  project,
  index,
}: {
  project: CaseStudyData;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;

    // Subtle 3D tilt calculation
    const rx = ((y - yc) / yc) * -4;
    const ry = ((x - xc) / xc) * 5;

    setTilt({ rx, ry, x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0, x: 0, y: 0 });
  };

  const primaryMetric =
    project.finalResult && project.finalResult.length > 0
      ? project.finalResult[0]
      : "100/100 Core Web Vitals & Sub-Second Latency";

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
      }}
      className={cn(
        "group relative w-full md:w-[75vw] lg:w-[68vw] max-w-[960px] shrink-0 rounded-2xl sm:rounded-3xl",
        "bg-surface-elevated/70 border border-white/[0.12] backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col justify-between"
      )}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-3xl z-30"
        style={{
          background: `radial-gradient(600px circle at ${tilt.x}px ${tilt.y}px, rgba(0, 245, 160, 0.12), transparent 75%)`,
        }}
      />

      {/* Flagship Highlight Beam */}
      {index === 0 && <BorderBeam size={320} duration={12} colorFrom="#00F5A0" colorTo="#00D9F5" />}

      {/* Top Metadata Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-7 border-b border-white/[0.08] bg-black/40 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="text-cyber-emerald font-black text-sm">
            {`[ 0${index + 1} // ${project.category.toUpperCase()} ]`}
          </span>
          <span className="text-ink-muted hidden sm:inline-block">
            {project.completionYear} • {project.clientIndustry}
          </span>
        </div>

        <div className="flex items-center gap-2 text-ink-secondary text-[11px]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
          <span>{project.role}</span>
        </div>
      </div>

      {/* Monumental Giant Number Overlaid Behind Image */}
      <div className="relative overflow-hidden">
        <span
          className="absolute -top-12 -left-6 sm:-top-16 sm:-left-8 text-[22vw] sm:text-[18vw] font-display font-black text-stroke-white opacity-20 pointer-events-none select-none -z-10 leading-none"
          aria-hidden="true"
        >
          0{index + 1}
        </span>

        {/* Project Cover Visual Frame */}
        <div className="relative h-[260px] sm:h-[360px] md:h-[420px] w-full overflow-hidden bg-black/80">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            priority={index < 2}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />

          {/* Cinematic Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/30 to-transparent" />

          {/* Floating High-Contrast Impact Metric Pill */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 max-w-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/80 border border-cyber-emerald/40 backdrop-blur-md shadow-2xl text-xs font-mono text-ink-headline">
              <Zap className="h-3.5 w-3.5 text-cyber-emerald shrink-0" strokeWidth={1.5} />
              <span className="font-semibold text-cyber-emerald truncate">
                {primaryMetric}
              </span>
            </div>
          </div>

          {/* Floating Direct Case Study Icon Pill */}
          <Link
            href={`/work/${project.slug}`}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/80 text-white border border-white/20 backdrop-blur-md group-hover:scale-110 group-hover:border-cyber-emerald group-hover:text-cyber-emerald transition-all shadow-2xl"
            aria-label={`Open case study for ${project.title}`}
          >
            <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* Bottom Content & Brutalist Case Study Link */}
      <div className="p-6 sm:p-8 space-y-4 bg-gradient-to-b from-transparent to-black/40">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-black text-ink-headline tracking-tight group-hover:text-cyber-emerald transition-colors">
            <Link href={`/work/${project.slug}`} className="hover:underline decoration-cyber-emerald decoration-2 underline-offset-4">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Technology Pills Matrix */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.technologies.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-ink-secondary font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[10px] font-mono text-ink-muted">
              +{project.technologies.length - 5} MORE
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyber-emerald font-bold hover:text-cyber-cyan transition-colors"
          >
            <span>[ REVIEW ARCHITECTURE &amp; RESULTS ]</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>

          <span className="text-[11px] font-mono text-ink-muted uppercase">
            FLAGSHIP DOSSIER
          </span>
        </div>
      </div>
    </article>
  );
}
