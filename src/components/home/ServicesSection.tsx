"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import {
  Globe,
  Layout,
  Code2,
  Server,
  Layers,
  Gauge,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Layout: <Layout className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Code2: <Code2 className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Server: <Server className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Layers: <Layers className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Gauge: <Gauge className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
};

export function ServicesSection() {
  const coreServices = servicesData.slice(0, 6);

  return (
    <section className="py-24 sm:py-32 bg-slate-50/50 text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="CORE CAPABILITIES"
            title="Engineered for Reliability."
            highlight="Tailored for Growth."
            description="Comprehensive full-stack engineering capabilities designed to give your digital platform a decisive speed and architectural advantage."
          />

          <Button
            href="/services"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="h-4 w-4" strokeWidth={1.5} />}
          >
            All Services &amp; Deliverables
          </Button>
        </div>

        {/* 3-Column Structured Executive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreServices.map((service, idx) => {
            const icon = iconMap[service.iconName] || <Code2 className="h-5 w-5 text-blue-600" strokeWidth={1.5} />;

            return (
              <div
                key={service.id}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                      {icon}
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    <Link href={`/services#${service.id}`}>
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors pt-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
