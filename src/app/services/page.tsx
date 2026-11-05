import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/LayoutPrimitives";
import { TopographicBackground } from "@/components/ui/TopographicBackground";
import {
  Globe,
  Layout,
  Code2,
  Server,
  Layers,
  Gauge,
  Palette,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Services & Capabilities — WordPress, Laravel, React & Web Development",
  description:
    "Explore Pixvarse's web development services: custom WordPress themes, Divi and Elementor development, custom Laravel applications, React frontends, and website speed optimization.",
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-5 w-5" />,
  Layout: <Layout className="h-5 w-5" />,
  Code2: <Code2 className="h-5 w-5" />,
  Server: <Server className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  Gauge: <Gauge className="h-5 w-5" />,
  Palette: <Palette className="h-5 w-5" />,
  Cpu: <Cpu className="h-5 w-5" />,
};

export default function ServicesPage() {
  const engagementModels = [
    {
      title: "Fixed-Scope Projects",
      subtitle: "Milestone-Based Delivery",
      description:
        "Ideal for new websites, redesigns, or well-defined web applications. We define clear specifications, deadlines, and deliverables upfront with milestone payments.",
      points: [
        "Rigorous technical specification",
        "Clear timeline with staging milestones",
        "30-day post-launch warranty",
      ],
      ctaText: "Start a Fixed Project",
    },
    {
      title: "Agency White-Label Partner",
      subtitle: "Dedicated Sprints & Overflow",
      description:
        "Designed for digital design and marketing agencies needing seamless technical execution. We plug directly into your Slack, Figma, and Git repositories under your agency's brand.",
      points: [
        "Strict adherence to your design tokens",
        "Fast turnarounds for client proposals",
        "Confidential non-disclosure agreement (NDA)",
      ],
      ctaText: "Partner as Agency",
    },
    {
      title: "Care & Maintenance Retainer",
      subtitle: "Continuous Health & Optimization",
      description:
        "Ongoing proactive maintenance, Core Web Vitals monitoring, security patching, and reserved developer hours each month for updates and improvements.",
      points: [
        "Continuous uptime & malware monitoring",
        "Plugin, theme & CMS staging updates",
        "Priority bug remediation & SLA",
      ],
      ctaText: "Inquire About Retainers",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="AGENCY CAPABILITIES // COMPLETE STUDIO OFFERING"
        title="Engineered for Scalability."
        highlight="Built to Last."
        description="Pixvarse provides full-spectrum digital development for ambitious businesses and agencies. From bespoke WordPress architectures and visual builder mastery to full-stack Laravel systems and high-speed React interfaces."
      />

      {/* Services List Section */}
      <section className="py-16 sm:py-24 bg-[#F7F9FA] border-b border-[#2C4058]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {servicesData.map((service) => {
            const icon = iconMap[service.iconName] || <Code2 className="h-5 w-5" />;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-sm bg-white border border-[#2C4058]/15 p-6 sm:p-10 lg:p-12 shadow-[4px_4px_0px_0px_#2C4058] hover:shadow-[6px_6px_0px_0px_#738B46] hover:border-[#2C4058] transition-all duration-200"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-black text-[#2C4058] bg-[#EEF3E6] px-3 py-1 rounded-sm border border-[#738B46]/30">
                        {service.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2C4058] text-[#FFFFFF] border border-[#2C4058] shadow-[2px_2px_0px_0px_#738B46]">
                        {icon}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#2C4058]">
                      {service.title}
                    </h2>

                    <p className="text-base text-[#2C4058]/80 leading-relaxed font-sans">
                      {service.fullDescription}
                    </p>

                    {/* Technologies Tag Group */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#738B46] block mb-2 font-bold">
                        Technologies &amp; Frameworks
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-sm bg-[#EEF3E6] text-[#2C4058] px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider border border-[#738B46]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="primary"
                        size="md"
                        icon={<ArrowUpRight className="h-4 w-4 stroke-[2.5]" />}
                      >
                        Discuss This Service
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Business Benefits */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F7F9FA] p-6 sm:p-8 rounded-sm border border-[#2C4058]/15 shadow-[2px_2px_0px_0px_#2C4058]">
                    {/* Deliverables */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-[#2C4058] font-bold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#738B46]" />
                        <span>Key Deliverables</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C4058]/85 font-sans">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#738B46] shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Commercial Benefits */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-[#2C4058] font-bold flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#738B46]" />
                        <span>Project Benefits</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#2C4058]/85 font-sans">
                        {service.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#738B46] border border-[#2C4058] shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-20 sm:py-28 bg-[#2C4058] text-white relative overflow-hidden">
        <TopographicBackground opacity={0.05} strokeColor="#738B46" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGAGEMENT // TRANSPARENT COLLABORATION"
            title="How We Structure"
            highlight="Client Engagements."
            description="Transparent pricing models tailored to project needs, whether you need a single launch or ongoing technical development."
            theme="dark"
            className="mb-14 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="rounded-sm bg-[#1E2D3E]/90 border border-white/12 p-6 sm:p-8 flex flex-col justify-between hover:border-[#738B46] hover:bg-[#1E2D3E] transition-all duration-200 shadow-[4px_4px_0px_0px_#141E2A] hover:shadow-[4px_4px_0px_0px_#738B46]"
              >
                <div>
                  <span className="font-mono text-xs text-[#738B46] uppercase tracking-widest block mb-1 font-bold">
                    {model.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {model.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-6 font-sans">
                    {model.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-white/90">
                    {model.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#738B46] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    href="/contact"
                    variant="accent"
                    size="sm"
                    className="w-full"
                    icon={<ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />}
                  >
                    {model.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
