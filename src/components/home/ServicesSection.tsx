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
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Layout: <Layout className="h-6 w-6" />,
  Code2: <Code2 className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Gauge: <Gauge className="h-6 w-6" />,
};

export function ServicesSection() {
  const coreServices = servicesData.slice(0, 6);

  return (
    <section className="py-24 bg-[#092D23] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#063F2E] rounded-full blur-[140px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            eyebrow="CAPABILITIES // WHAT WE BUILD"
            title="Engineered for Performance."
            highlight="Tailored for Growth."
            description="Comprehensive digital engineering services designed to give your brand a decisive advantage online."
            theme="dark"
          />

          <Button
            href="/services"
            variant="lime-outline"
            size="md"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            All Services &amp; Deliverables
          </Button>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {coreServices.map((service) => {
            const icon = iconMap[service.iconName] || <Code2 className="h-6 w-6" />;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#063F2E]/80 border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-[#C7F532]/60 hover:bg-[#063F2E] transition-all duration-300 shadow-[4px_4px_0px_0px_#032118] hover:shadow-[5px_5px_0px_0px_#C7F532] hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="font-mono text-2xl font-black text-[#C7F532]">
                      {service.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#092D23] text-[#C7F532] border border-[#C7F532]/20 group-hover:scale-105 group-hover:bg-[#C7F532] group-hover:text-[#092D23] transition-all duration-300">
                      {icon}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#C7F532] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Deliverables snippet */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-[#C7F532] block">
                      Key Highlights
                    </span>
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="h-3.5 w-3.5 text-[#C7F532] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {service.technologies.slice(0, 2).join(" • ")}
                  </span>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C7F532] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
