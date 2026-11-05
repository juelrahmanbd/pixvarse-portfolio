import React from "react";
import { projectsData } from "@/data/projects";
import { PageHeader } from "@/components/ui/LayoutPrimitives";
import { WorkClientView } from "@/components/portfolio/WorkClientView";

export const metadata = {
  title: "Work & Case Studies — Digital Agency Portfolio by Pixvarse",
  description:
    "Explore case studies and featured web development projects by Juel Rahman under Pixvarse: custom WordPress architectures, Laravel platforms, React dashboards, and e-commerce websites.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="SELECTED WORKS // ARCHIVED CASE STUDIES"
        title="Crafted With Purpose."
        highlight="Delivered With Care."
        description="A curated catalog of real web engineering projects. Filter by platform and explore detailed technical case studies examining requirements, architectural choices, and delivered outcomes."
      />

      {/* Main Filterable Projects Section */}
      <section className="py-16 sm:py-24 bg-[#F8FAF6] border-b border-[#092D23]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkClientView initialProjects={projectsData} />
        </div>
      </section>
    </div>
  );
}
