import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
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
  ArrowRight,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Services & Capabilities — WordPress, Laravel, React & Web Development",
  description:
    "Explore Pixvarse's web development services: custom WordPress themes, Divi and Elementor development, custom Laravel applications, React frontends, and website speed optimization.",
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Layout: <Layout className="h-6 w-6" />,
  Code2: <Code2 className="h-6 w-6" />,
  Server: <Server className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Gauge: <Gauge className="h-6 w-6" />,
  Palette: <Palette className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
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
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 bg-[#092D23] text-white overflow-hidden">
        <TopographicBackground opacity={0.08} strokeColor="#C7F532" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <Badge variant="forest" dot={true} className="border-[#C7F532]/30 text-[#C7F532]">
              AGENCY CAPABILITIES // COMPLETE STUDIO OFFERING
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Engineered for Scalability.{" "}
              <span className="relative inline-block text-[#C7F532] bg-[#063F2E] px-3 py-1 rounded-lg border border-[#C7F532]/30 shadow-[3px_3px_0px_0px_#C7F532] -rotate-1">
                Built to Last.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              Pixvarse provides full-spectrum digital development for ambitious businesses and agencies. From bespoke WordPress architectures and visual builder mastery to full-stack Laravel systems and high-speed React interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-[#F8FAF6] border-b border-[#063F2E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesData.map((service) => {
            const icon = iconMap[service.iconName] || <Code2 className="h-6 w-6" />;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-3xl bg-white border border-[#063F2E]/15 p-8 sm:p-12 shadow-[6px_6px_0px_0px_#063F2E] hover:shadow-[8px_8px_0px_0px_#C7F532] hover:border-[#063F2E] transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-3xl font-black text-[#063F2E] bg-[#E6F4EC] px-3 py-1 rounded-lg border border-[#063F2E]/15">
                        {service.number}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#063F2E] text-[#C7F532] shadow-sm">
                        {icon}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#171A18]">
                      {service.title}
                    </h2>

                    <p className="text-base text-[#171A18]/80 leading-relaxed font-sans">
                      {service.fullDescription}
                    </p>

                    {/* Technologies Tag Group */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#063F2E]/70 block mb-2 font-bold">
                        Technologies &amp; Frameworks
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-[#063F2E] text-[#C7F532] px-2.5 py-1 text-xs font-mono font-medium"
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
                        icon={<ArrowRight className="h-4 w-4" />}
                      >
                        Discuss This Service
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Business Benefits */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#F8FAF6] p-6 sm:p-8 rounded-2xl border border-[#063F2E]/10">
                    {/* Deliverables */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-[#063F2E] font-bold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#063F2E]" />
                        <span>Key Deliverables</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#171A18]/85">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#063F2E] shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Commercial Benefits */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-[#063F2E] font-bold flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#063F2E]" />
                        <span>Project Benefits</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#171A18]/85">
                        {service.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#C7F532] border border-[#063F2E] shrink-0 mt-2" />
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
      <section className="py-24 bg-[#092D23] text-white relative overflow-hidden">
        <TopographicBackground opacity={0.06} strokeColor="#C7F532" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGAGEMENT // TRANSPARENT COLLABORATION"
            title="How We Structure"
            highlight="Client Engagements."
            description="Transparent pricing models tailored to project needs, whether you need a single launch or ongoing technical development."
            theme="dark"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#063F2E]/80 border border-white/10 p-8 flex flex-col justify-between hover:border-[#C7F532]/60 hover:bg-[#063F2E] transition-all duration-300 shadow-[4px_4px_0px_0px_#032118] hover:shadow-[6px_6px_0px_0px_#C7F532]"
              >
                <div>
                  <span className="font-mono text-xs text-[#C7F532] uppercase tracking-widest block mb-1">
                    {model.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {model.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    {model.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-200">
                    {model.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#C7F532] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full"
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
