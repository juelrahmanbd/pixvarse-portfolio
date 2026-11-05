import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TopographicBackground } from "@/components/ui/TopographicBackground";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Compass,
  Sparkles,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — Case Study by Pixvarse`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects (exclude current)
  const relatedProjects = projectsData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#092D23] text-white overflow-hidden">
        <TopographicBackground opacity={0.08} strokeColor="#C7F532" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C7F532] hover:underline mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="lime" size="sm">
                {project.category}
              </Badge>
              <span className="rounded-full bg-[#063F2E] px-3 py-1 text-xs font-mono text-[#C7F532] border border-[#C7F532]/30">
                Delivered in {project.completionYear}
              </span>
              <span className="text-xs font-mono text-slate-300">
                Industry: {project.clientIndustry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-white/40 block mb-1 uppercase tracking-wider">Role</span>
              <span className="text-white font-bold">{project.role}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1 uppercase tracking-wider">Category</span>
              <span className="text-white font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1 uppercase tracking-wider">Client Sector</span>
              <span className="text-white font-bold">{project.clientIndustry}</span>
            </div>
            <div>
              <span className="text-white/40 block mb-1 uppercase tracking-wider">Core Tech</span>
              <span className="text-[#C7F532] font-bold">{project.technologies[0]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="relative -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-[#092D23] border border-[#063F2E]/30 shadow-[8px_8px_0px_0px_#063F2E]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Case Study Deep Dive Content */}
      <section className="py-20 bg-[#F8FAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-16">
              {/* 01: Project Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#063F2E]">
                  <span>01 // BACKGROUND</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#171A18]">
                  Project Overview
                </h2>
                <p className="text-base sm:text-lg text-[#171A18]/80 leading-relaxed font-sans">
                  {project.summary}
                </p>
              </div>

              {/* 02: Client Requirements */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#063F2E]">
                  <span>02 // REQUIREMENTS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#171A18]">
                  Client Requirements &amp; Scope
                </h2>
                <div className="space-y-3 pt-2">
                  {project.clientRequirements.map((req, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white p-4 border border-[#063F2E]/15 shadow-sm flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#063F2E] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#171A18]/85 font-sans leading-relaxed">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03: Technical Challenges */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#063F2E]">
                  <span>03 // OBSTACLES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#171A18]">
                  Key Engineering Challenges
                </h2>
                <div className="space-y-3 pt-2">
                  {project.challenges.map((ch, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-amber-50/60 p-4 border border-amber-900/15 shadow-sm flex items-start gap-3"
                    >
                      <AlertCircle className="h-5 w-5 text-amber-800 shrink-0 mt-0.5" />
                      <span className="text-sm text-amber-950 font-sans leading-relaxed">
                        {ch}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04: The Strategic Approach */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#063F2E]">
                  <span>04 // METHODOLOGY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#171A18]">
                  Strategic Approach
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {project.approach.map((app, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white p-5 border border-[#063F2E]/15 shadow-[2px_2px_0px_0px_#063F2E]"
                    >
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#063F2E]">
                        <Compass className="h-4 w-4" />
                        <span>Strategy 0{i + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#171A18]/80 leading-relaxed font-sans">
                        {app}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05: Design & Development */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#063F2E]">
                  <span>05 // EXECUTION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#171A18]">
                  Design &amp; Development Execution
                </h2>
                <ul className="space-y-3 pt-2">
                  {project.designAndDevelopment.map((step, i) => (
                    <li
                      key={i}
                      className="rounded-xl bg-white p-4 border border-[#063F2E]/15 shadow-sm flex items-start gap-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#063F2E] shrink-0 mt-2" />
                      <span className="text-sm text-[#171A18]/85 font-sans leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 06: Final Results */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#063F2E]">
                  <span>06 // OUTCOMES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#171A18]">
                  Final Result &amp; Business Impact
                </h2>
                <div className="rounded-2xl bg-[#063F2E] text-white p-6 sm:p-8 border border-[#C7F532]/30 shadow-[4px_4px_0px_0px_#032118] space-y-4">
                  {project.finalResult.map((res, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-[#C7F532] shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-slate-100 font-sans leading-relaxed">
                        {res}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar: Technologies & Specifications */}
            <div className="lg:col-span-4 space-y-8 sticky top-28">
              {/* Tech Spec Card */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#063F2E]/15 shadow-[4px_4px_0px_0px_#063F2E] space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#063F2E] font-bold pb-3 border-b border-[#063F2E]/10">
                  Technical Specifications
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#063F2E]/60 block mb-2">
                      Full Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-[#E6F4EC] text-[#063F2E] px-2.5 py-1 text-xs font-mono font-medium border border-[#063F2E]/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#063F2E]/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#063F2E]/60 block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-[#171A18]/85 font-sans">
                      {project.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#063F2E] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#063F2E]/10">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon={<ArrowRight className="h-4 w-4" />}
                  >
                    Start a Similar Project
                  </Button>
                </div>
              </div>

              {/* Direct Inquiry Card */}
              <div className="rounded-2xl bg-[#092D23] text-white p-6 border border-[#C7F532]/30 shadow-[4px_4px_0px_0px_#032118] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7F532] block font-bold">
                  HAVE QUESTIONS ABOUT THIS BUILD?
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Curious about the technical architecture, custom blocks, or timeline? Let&apos;s schedule a 15-minute introductory technical consultation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C7F532] hover:underline pt-1"
                >
                  <span>Inquire with Juel Rahman</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white border-t border-[#063F2E]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-[#171A18] tracking-tight">
                Related Case Studies
              </h3>
              <Link
                href="/work"
                className="text-xs font-mono font-bold text-[#063F2E] hover:underline flex items-center gap-1"
              >
                <span>View all projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="group rounded-2xl bg-[#F8FAF6] border border-[#063F2E]/15 p-6 hover:border-[#063F2E] hover:shadow-[5px_5px_0px_0px_#C7F532] transition-all duration-300"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#063F2E]/70 mb-2">
                    <span className="bg-[#E6F4EC] px-2 py-0.5 rounded font-bold">
                      {rel.category}
                    </span>
                    <span>{rel.completionYear}</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#171A18] group-hover:text-[#063F2E] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#171A18]/70 line-clamp-2">
                    {rel.summary}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[#063F2E]/10 flex items-center justify-between text-xs font-bold text-[#063F2E]">
                    <span>Read Study</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
