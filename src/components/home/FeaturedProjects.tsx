import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF6] relative overflow-hidden border-b border-[#092D23]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="PORTFOLIO // FEATURED WORK"
            title="Real-World Projects."
            highlight="Measurable Impact."
            description="A curated selection of custom WordPress builds, web applications, and digital platforms delivered for discerning clients."
          />

          <Button
            href="/work"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Explore All Work ({projectsData.length})
          </Button>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {featured.map((project, idx) => (
            <article
              key={project.slug}
              className="group relative rounded-sm bg-white border border-[#092D23]/15 overflow-hidden shadow-[4px_4px_0px_0px_#092D23] hover:shadow-[6px_6px_0px_0px_#C7F532] hover:border-[#092D23] transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#092D23] border-b border-[#092D23]/15">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority={idx === 0}
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#092D23]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category & Year Floating Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge variant="lime" size="sm">
                    {project.category}
                  </Badge>
                  <span className="rounded-sm bg-[#092D23]/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono text-white border border-white/20">
                    {project.completionYear}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                  <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#063F2E] px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#C7F532] border border-[#C7F532]/40 shadow-[2px_2px_0px_0px_#092D23]">
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </span>
                </div>
              </div>

              {/* Content Box */}
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

                  <p className="mt-3 text-sm text-[#092D23]/75 leading-relaxed line-clamp-2 font-sans">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Badges & CTA Link */}
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
                    <span>Read Study</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#063F2E]" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
