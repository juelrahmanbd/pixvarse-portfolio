"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudyData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all duration-150 cursor-pointer select-none border-2 border-[#092D23] ${
                isActive
                  ? "bg-[#063F2E] text-[#C7F532] shadow-[3px_3px_0px_0px_#C7F532] translate-x-[1px] translate-y-[1px]"
                  : "bg-white text-[#092D23] hover:bg-[#E6F4EC] shadow-[3px_3px_0px_0px_#092D23] hover:shadow-[1px_1px_0px_0px_#092D23] hover:translate-x-[2px] hover:translate-y-[2px]"
              }`}
            >
              {cat} {cat === "All" ? `(${initialProjects.length})` : ""}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {filtered.map((project, idx) => (
          <article
            key={project.slug}
            className="group relative rounded-sm bg-white border border-[#092D23]/15 overflow-hidden shadow-[4px_4px_0px_0px_#092D23] hover:shadow-[6px_6px_0px_0px_#C7F532] hover:border-[#092D23] transition-all duration-200 flex flex-col justify-between"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#092D23] border-b border-[#092D23]/15">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092D23]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge variant="lime" size="sm">
                  {project.category}
                </Badge>
                <span className="rounded-sm bg-[#092D23]/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-white border border-white/20">
                  {project.completionYear}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#063F2E] px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#C7F532] border border-[#C7F532]/40 shadow-[2px_2px_0px_0px_#092D23]">
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#063F2E] mb-2 font-semibold">
                  <span>Role: {project.role}</span>
                  <span>{project.clientIndustry}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#092D23] group-hover:text-[#063F2E] transition-colors">
                  <Link href={`/work/${project.slug}`} className="focus:outline-none">
                    {project.title}
                  </Link>
                </h3>

                <p className="mt-3 text-sm text-[#092D23]/75 leading-relaxed font-sans">
                  {project.summary}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-5 border-t border-[#092D23]/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm bg-[#E6F4EC] px-2 py-0.5 text-[11px] font-mono text-[#092D23] font-semibold border border-[#092D23]/15"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-sm bg-[#F8FAF6] border border-[#092D23]/15 px-1.5 py-0.5 text-[10px] font-mono text-[#092D23]/60 font-semibold">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider text-[#063F2E] hover:text-[#092D23] group-hover:underline"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#063F2E]" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
