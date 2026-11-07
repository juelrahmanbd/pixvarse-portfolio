import React from "react";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/LayoutPrimitives";
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
  Globe: <Globe className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
  Layout: <Layout className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
  Code2: <Code2 className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
  Server: <Server className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
  Layers: <Layers className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
  Gauge: <Gauge className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
  Palette: <Palette className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />,
  Cpu: <Cpu className="h-5 w-5 text-cyber-cyan" strokeWidth={1.5} />,
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
    <div className="flex flex-col min-h-screen bg-canvas text-ink-primary">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="AGENCY CAPABILITIES // COMPLETE STUDIO OFFERING"
        title="Engineered for Scalability."
        highlight="Built to Last."
        description="Pixvarse provides full-spectrum digital development for ambitious businesses and agencies. From bespoke WordPress architectures and visual builder mastery to full-stack Laravel systems and high-speed React interfaces."
      />

      {/* Services List Section */}
      <section className="py-20 sm:py-28 bg-canvas border-b border-edge-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {servicesData.map((service) => {
            const icon = iconMap[service.iconName] || <Code2 className="h-5 w-5 text-cyber-emerald" strokeWidth={1.5} />;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.05]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-cyber-emerald bg-white/[0.04] px-3 py-1 rounded-xl border border-white/[0.08]">
                        {service.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08]">
                        {icon}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-ink-headline">
                      {service.title}
                    </h2>

                    <p className="text-base text-ink-secondary leading-relaxed font-sans font-normal">
                      {service.fullDescription}
                    </p>

                    {/* Technologies Tag Group */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted block mb-2 font-semibold">
                        Technologies &amp; Frameworks
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/[0.04] text-ink-primary px-2.5 py-1 text-xs font-mono font-medium uppercase tracking-wider border border-white/[0.08]"
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
                        icon={<ArrowUpRight className="h-4 w-4 stroke-[2.5]" strokeWidth={1.5} />}
                      >
                        Discuss This Service
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Business Benefits */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-canvas-secondary p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
                    {/* Deliverables */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-cyber-emerald font-semibold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyber-emerald" strokeWidth={1.5} />
                        <span>Key Deliverables</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary font-sans font-normal">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald shrink-0 mt-2 shadow-glow-emerald" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Commercial Benefits */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-widest text-cyber-cyan font-semibold flex items-center gap-2">
                        <Zap className="h-4 w-4 text-cyber-cyan" strokeWidth={1.5} />
                        <span>Project Benefits</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary font-sans font-normal">
                        {service.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyber-cyan shrink-0 mt-2 shadow-glow-cyan" />
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
      <section className="py-20 sm:py-28 bg-canvas-secondary relative overflow-hidden border-b border-edge-subtle">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENGAGEMENT // TRANSPARENT COLLABORATION"
            title="How We Structure"
            highlight="Client Engagements."
            description="Transparent pricing models tailored to project needs, whether you need a single launch or ongoing technical development."
            className="mb-14 sm:mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-xs text-cyber-emerald uppercase tracking-widest block mb-1 font-semibold">
                    {model.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-headline mb-4">
                    {model.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-6 font-sans font-normal">
                    {model.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.08] text-xs text-ink-primary font-normal">
                    {model.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-cyber-emerald shrink-0" strokeWidth={1.5} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full"
                    icon={<ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" strokeWidth={1.5} />}
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
