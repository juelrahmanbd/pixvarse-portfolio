import React from "react";
import { projectsData } from "@/data/projects";
import { TopographicBackground } from "@/components/ui/TopographicBackground";
import { Badge } from "@/components/ui/Badge";
import { WorkClientView } from "@/components/portfolio/WorkClientView";

export const metadata = {
  title: "Work & Case Studies — Digital Agency Portfolio by Pixvarse",
  description:
    "Explore case studies and featured web development projects by Juel Rahman under Pixvarse: custom WordPress architectures, Laravel platforms, React dashboards, and e-commerce websites.",
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-[#092D23] text-white overflow-hidden">
        <TopographicBackground opacity={0.08} strokeColor="#C7F532" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <Badge variant="forest" dot={true} className="border-[#C7F532]/30 text-[#C7F532]">
              SELECTED WORKS // ARCHIVED CASE STUDIES
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Crafted With Purpose.{" "}
              <span className="relative inline-block text-[#C7F532] bg-[#063F2E] px-3 py-1 rounded-lg border border-[#C7F532]/30 shadow-[3px_3px_0px_0px_#C7F532] -rotate-1">
                Delivered With Care.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              A curated catalog of real web engineering projects. Filter by platform and explore detailed technical case studies examining requirements, architectural choices, and delivered outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filterable Projects Section */}
      <section className="py-20 bg-[#F8FAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkClientView initialProjects={projectsData} />
        </div>
      </section>
    </div>
  );
}
