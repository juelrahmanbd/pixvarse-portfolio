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
  Globe: <Globe className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Layout: <Layout className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Code2: <Code2 className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Server: <Server className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Layers: <Layers className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Gauge: <Gauge className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Palette: <Palette className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
  Cpu: <Cpu className="h-5 w-5 text-blue-600" strokeWidth={1.5} />,
};

export default function ServicesPage() {
  const engagementModels = [
    {
      title: "Fixed-Scope Projects",
      subtitle: "Milestone-Based Delivery",
      description:
        "Ideal for new websites, redesigns, or well-defined web applications. We define clear specifications, sprint deadlines, and deliverables upfront with milestone payments.",
      points: [
        "Rigorous technical specification & wireframe review",
        "Clear timeline with staging preview milestones",
        "30-day comprehensive post-launch warranty",
      ],
      ctaText: "Start a Fixed Project",
    },
    {
      title: "Agency White-Label Partner",
      subtitle: "Dedicated Sprints & Overflow",
      description:
        "Designed for digital design and marketing agencies needing seamless technical muscle. We plug directly into your Slack, Figma, and Git repositories under your agency's brand.",
      points: [
        "Strict adherence to your internal design tokens",
        "Fast turnarounds for client proposals & scopes",
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
        "Priority bug remediation & SLA guarantee",
      ],
      ctaText: "Inquire About Retainers",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="AGENCY CAPABILITIES // COMPLETE STUDIO OFFERING"
        title="Engineered for Scalability."
        highlight="Built to Last."
        description="Pixvarse provides full-spectrum digital development for ambitious businesses and agencies. From bespoke WordPress architectures and visual builder mastery to full-stack Laravel systems and high-speed React interfaces."
      />

      {/* Services List Section */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {servicesData.map((service) => {
            const icon = iconMap[service.iconName] || <Code2 className="h-5 w-5 text-blue-600" strokeWidth={1.5} />;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover transition-all duration-300 p-6 sm:p-10 lg:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl border border-blue-100">
                        {service.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-200">
                        {icon}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-900">
                      {service.title}
                    </h2>

                    <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
                      {service.fullDescription}
                    </p>

                    {/* Technologies Tag Group */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                        Technologies &amp; Frameworks
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-slate-100 text-slate-700 px-2.5 py-1 text-xs font-mono font-medium"
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
                        icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}
                      >
                        Discuss This Service
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Business Benefits */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
                    {/* Deliverables */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" strokeWidth={1.5} />
                        <span>Key Deliverables</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-sans font-normal">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Commercial Benefits */}
                    <div className="space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-600" strokeWidth={1.5} />
                        <span>Commercial Advantage</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-sans font-normal">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0 mt-2" />
                            <span>{benefit}</span>
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
      <section className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="COLLABORATION // FLEXIBLE ENGAGEMENT"
            title="How We Partner."
            highlight="Tailored to Your Workflow."
            description="Whether you have an immediate fixed-scope website launch or need a long-term dedicated white-label development partner, choose the engagement framework that matches your goals."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold block mb-1">
                      {model.subtitle}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      {model.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans font-normal">
                    {model.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                      {model.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}
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
