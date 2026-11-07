import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
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
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80 bg-dot-grid">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-blue-600 hover:text-blue-800 mb-8 group transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
            <span>Back to All Projects</span>
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="cyan" size="sm">
                {project.category}
              </Badge>
              <span className="rounded-full bg-slate-100 px-3 py-0.5 text-xs font-mono font-medium text-slate-600 border border-slate-200/80">
                Delivered in {project.completionYear}
              </span>
              <span className="text-xs font-mono text-slate-500">
                Sector: {project.clientIndustry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 leading-[1.1]">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Quick Meta Grid */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono">
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">Role</span>
              <span className="text-slate-900 font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">Category</span>
              <span className="text-slate-900 font-semibold">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">Client Industry</span>
              <span className="text-slate-900 font-semibold">{project.clientIndustry}</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-1 uppercase tracking-wider">Core Technology</span>
              <span className="text-blue-600 font-semibold">{project.technologies[0]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="relative -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-elevated">
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
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* 01: Project Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                  <span>01 // BACKGROUND &amp; SCOPE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                  Project Overview
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                  {project.summary}
                </p>
              </div>

              {/* 02: Client Requirements */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                  <span>02 // REQUIREMENTS</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                  Client Objectives &amp; Requirements
                </h2>
                <div className="space-y-3 pt-2">
                  {project.clientRequirements.map((req, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-slate-50/70 p-4 sm:p-5 border border-slate-200/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm text-slate-800 font-sans leading-relaxed">
                        {req}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 03: Technical Challenges */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-amber-600">
                  <span>03 // OBSTACLES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                  Key Engineering Challenges
                </h2>
                <div className="space-y-3 pt-2">
                  {project.challenges.map((ch, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-amber-50/50 p-4 sm:p-5 border border-amber-200/80 flex items-start gap-3"
                    >
                      <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-sm text-slate-800 font-sans leading-relaxed">
                        {ch}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 04: The Strategic Approach */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                  <span>04 // METHODOLOGY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                  Strategic Approach
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {project.approach.map((app, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white p-5 sm:p-6 border border-slate-200/90 shadow-card"
                    >
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-blue-600">
                        <Compass className="h-4 w-4" strokeWidth={1.5} />
                        <span>Strategy 0{i + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {app}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 05: Design & Development */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue-600">
                  <span>05 // EXECUTION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                  Design &amp; Development Execution
                </h2>
                <ul className="space-y-3 pt-2">
                  {project.designAndDevelopment.map((step, i) => (
                    <li
                      key={i}
                      className="rounded-xl bg-slate-50/70 p-4 sm:p-5 border border-slate-200/80 flex items-start gap-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span className="text-sm text-slate-800 font-sans leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 06: Final Results */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  <span>06 // OUTCOMES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
                  Final Result &amp; Measurable Impact
                </h2>
                <div className="rounded-2xl bg-emerald-50/60 p-6 sm:p-8 border border-emerald-200/90 space-y-4 shadow-sm">
                  {project.finalResult.map((res, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                      <p className="text-sm sm:text-base text-slate-800 font-sans leading-relaxed font-medium">
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
              <Card variant="white" className="p-6 sm:p-7 space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold pb-3 border-b border-slate-100">
                  Technical Specifications
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                      Full Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-slate-100 text-slate-700 px-2.5 py-1 text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600 font-sans">
                      {project.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}
                  >
                    Start a Similar Project
                  </Button>
                </div>
              </Card>

              {/* Direct Inquiry Card */}
              <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200/80 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 block font-bold">
                  HAVE ARCHITECTURAL QUESTIONS?
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  Curious about custom Gutenberg blocks, headless architectures, or sprint timelines? Let&apos;s schedule a 15-minute consultation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors pt-1"
                >
                  <span>Inquire with Juel Rahman</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-display font-bold text-slate-900 tracking-tight">
                Related Case Studies
              </h3>
              <Link
                href="/work"
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
              >
                <span>View all work</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="group rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 p-6 sm:p-7 transition-all duration-300 block"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2 font-medium">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                      {rel.category}
                    </span>
                    <span>{rel.completionYear}</span>
                  </div>
                  <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 font-sans font-normal">
                    {rel.summary}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>Read Study</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
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
