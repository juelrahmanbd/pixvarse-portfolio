"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import {
  Globe,
  Layout,
  Code2,
  Server,
  Layers,
  Gauge,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-5 w-5" strokeWidth={1.5} />,
  Layout: <Layout className="h-5 w-5" strokeWidth={1.5} />,
  Code2: <Code2 className="h-5 w-5" strokeWidth={1.5} />,
  Server: <Server className="h-5 w-5" strokeWidth={1.5} />,
  Layers: <Layers className="h-5 w-5" strokeWidth={1.5} />,
  Gauge: <Gauge className="h-5 w-5" strokeWidth={1.5} />,
};

export function ServicesSection() {
  const coreServices = servicesData.slice(0, 6);

  return (
    <section className="py-20 sm:py-28 bg-canvas text-ink-primary relative overflow-hidden border-b border-edge-subtle">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-cyber-emerald/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="CAPABILITIES // CORE SPECIALTIES"
            title="Engineered for Performance."
            highlight="Tailored for Growth."
            description="Comprehensive digital engineering services crafted to give your business a decisive speed and design advantage."
          />

          <Button
            href="/services"
            variant="secondary"
            size="md"
            icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}
          >
            All Services &amp; Deliverables
          </Button>
        </div>

        {/* Bento Grid Services Layout */}
        <BentoGrid>
          {coreServices.map((service, idx) => {
            const icon = iconMap[service.iconName] || <Code2 className="h-5 w-5" strokeWidth={1.5} />;
            // Make item 0 and 3 slightly wider or flagship
            const isWide = idx === 0 || idx === 3;

            return (
              <BentoGridItem
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={icon}
                tags={service.technologies}
                ctaText="View Service Specs"
                ctaHref={`/services#${service.id}`}
                showBeam={idx === 0}
                className={isWide ? "md:col-span-2" : "md:col-span-1"}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
