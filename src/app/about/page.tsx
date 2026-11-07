import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/LayoutPrimitives";
import { Card } from "@/components/ui/Card";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "About Juel Rahman — Independent Developer & Creative Technologist",
  description:
    "Learn about Juel Rahman, founder of Pixvarse digital development studio. Professional background, development philosophy, core technologies, and client collaboration approach.",
};

export default function AboutPage() {
  const philosophies = [
    {
      number: "01",
      title: "Code Clarity Over Complexity",
      description:
        "Software should be understandable, maintainable, and built to stand the test of time. I avoid convoluted dependencies and fragile hacks, favoring clean, documented patterns that any competent engineer can immediately understand and extend.",
    },
    {
      number: "02",
      title: "Pixel Fidelity & Design Integrity",
      description:
        "A design is a promise made to the user. I treat typography, spacing, responsive fluid scaling, and interactive states with meticulous respect, ensuring the final live website honors every detail of the original design vision.",
    },
    {
      number: "03",
      title: "Real Performance, Not Just Vanity Metrics",
      description:
        "Speed directly influences conversions, bounce rates, and organic search rankings. I architect websites from the ground up to achieve lean payloads, instant First Contentful Paint, and zero layout shifting across mobile devices.",
    },
    {
      number: "04",
      title: "Direct Engineering Partnership",
      description:
        "When you work with Pixvarse, you speak directly with the developer building your platform. There are no project managers or account executives filtering feedback — ensuring fast iterations, honest timelines, and total transparency.",
    },
  ];

  const workApproaches = [
    {
      title: "Agency White-Label Partner",
      description:
        "Partnering with design and marketing agencies across the globe as their dedicated technical muscle. I convert Figma and XD designs into pixel-perfect WordPress, Divi, Elementor, or React code, seamlessly matching internal team workflows and Git conventions.",
    },
    {
      title: "Direct Client Builds",
      description:
        "Helping growing businesses and entrepreneurs launch high-converting corporate websites, WooCommerce storefronts, or tailored web applications from scratch, providing end-to-end guidance from scoping through deployment.",
    },
    {
      title: "Modernization & Performance",
      description:
        "Rescuing slow, outdated, or brittle websites. I audit database queries, eliminate obsolete plugins, refactor frontend assets, and upgrade legacy setups to fast, modern standards.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-canvas text-ink-primary">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="BEHIND THE BRAND // JUEL RAHMAN"
        title="Behind Every Great Digital Experience Is a"
        highlight="Clear Vision."
        description={`I'm ${siteConfig.creatorName}, an independent web developer, creative technologist, and the founder of Pixvarse, collaborating with a skilled professional team to build modern, resilient websites and digital platforms for ambitious clients worldwide.`}
      />

      {/* Narrative & Background Section */}
      <section className="py-20 sm:py-28 bg-canvas border-b border-edge-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Story Column */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="BACKGROUND // THE JOURNEY"
                title="Craftsmanship, Curiosity &"
                highlight="Code Integrity."
                description="How passion for technology evolved into an independent digital studio."
              />

              <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-sans font-normal">
                <p>
                  My journey into software and web engineering began with a genuine curiosity: understanding how digital interfaces influence human decisions and empower business operations. Over the years, I honed deep technical expertise across both traditional CMS systems like <strong className="text-ink-headline font-semibold">WordPress, Divi, and Elementor</strong> and modern application frameworks like <strong className="text-ink-headline font-semibold">Laravel, React, and Next.js</strong>.
                </p>
                <p>
                  I created <strong className="text-ink-headline font-semibold">Pixvarse</strong> as an independent studio brand to represent this standard of work: agile, modern, and uncompromising in quality. In an industry frequently bogged down by bloated multi-layer agencies and cookie-cutter templates, Pixvarse delivers direct, engineer-led solutions.
                </p>
                <p>
                  Whether I&apos;m writing a custom WordPress Gutenberg block, architecting a normalized MySQL database schema in Laravel, or tuning client-side JavaScript for sub-second First Contentful Paint, my philosophy remains identical: build it cleanly, test it rigorously, and deliver on time.
                </p>
              </div>

              {/* Developer Credentials Card */}
              <Card variant="glass" className="mt-8 p-6 sm:p-8 space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-cyber-emerald font-semibold">
                  Core Competencies &amp; Focus Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm font-medium text-ink-primary">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-emerald shrink-0" strokeWidth={1.5} />
                    <span>Custom WordPress &amp; ACF Block Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-emerald shrink-0" strokeWidth={1.5} />
                    <span>Divi &amp; Elementor Pro Theme Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-cyan shrink-0" strokeWidth={1.5} />
                    <span>Laravel Backend &amp; Inertia.js Monoliths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-cyan shrink-0" strokeWidth={1.5} />
                    <span>React, Next.js &amp; TypeScript Interfaces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-emerald shrink-0" strokeWidth={1.5} />
                    <span>Core Web Vitals &amp; PageSpeed Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyber-cyan shrink-0" strokeWidth={1.5} />
                    <span>Automated Deployment &amp; Hostinger Node.js</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Quick Bio Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-canvas-secondary p-6 sm:p-8 border border-white/[0.08] backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                  <div>
                    <h3 className="text-xl font-display font-bold text-ink-headline">{siteConfig.creatorName}</h3>
                    <p className="text-xs font-mono text-cyber-emerald mt-0.5">{siteConfig.creatorRole}</p>
                  </div>
                  <Badge variant="emerald" size="sm">
                    Verified
                  </Badge>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-ink-secondary">
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="font-mono text-ink-muted">Studio Brand:</span>
                    <span className="font-semibold text-ink-headline font-mono">{siteConfig.brandName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="font-mono text-ink-muted">Primary Role:</span>
                    <span className="font-semibold text-ink-headline">Full-Stack Web Developer</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="font-mono text-ink-muted">Location:</span>
                    <span className="font-semibold text-ink-headline">Sylhet, Bangladesh (Global Remote)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/[0.06]">
                    <span className="font-mono text-ink-muted">Client Focus:</span>
                    <span className="font-semibold text-ink-headline">Agencies &amp; Growing Businesses</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-mono text-ink-muted">Status:</span>
                    <span className="font-semibold text-cyber-emerald flex items-center gap-1.5 font-mono">
                      <span className="h-2 w-2 rounded-full bg-cyber-emerald animate-ping" />
                      Available for Select Work
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon={<ArrowUpRight className="h-4 w-4 stroke-[2.5]" strokeWidth={1.5} />}
                  >
                    Start a Project with Juel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophies Section */}
      <section className="py-20 sm:py-28 bg-canvas-secondary border-b border-edge-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <SectionHeading
            eyebrow="CORE VALUES // WORK PRINCIPLES"
            title="The Engineering Philosophies That"
            highlight="Guide Every Build."
            description="Four fundamental standards governing how every line of code is written and every project is managed."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {philosophies.map((phil) => (
              <Card
                key={phil.number}
                variant="glass"
                className="p-6 sm:p-8 space-y-4 hover:border-white/[0.2]"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="font-mono text-xs font-bold text-cyber-emerald">
                    {`${phil.number} // PRINCIPLE`}
                  </span>
                  <Zap className="h-4 w-4 text-cyber-emerald" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-ink-headline tracking-tight">
                  {phil.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                  {phil.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Approaches */}
      <section className="py-20 sm:py-28 bg-canvas border-b border-edge-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          <SectionHeading
            eyebrow="COLLABORATION // HOW WE WORK TOGETHER"
            title="Tailored Partnerships for"
            highlight="Every Scale."
            description="Whether you need emergency technical bandwidth, white-label execution, or a ground-up platform build."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {workApproaches.map((app, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="font-mono text-xs text-cyber-emerald font-semibold uppercase tracking-wider block">
                    Mode 0{i + 1}
                  </span>
                  <h3 className="text-xl font-display font-bold text-ink-headline tracking-tight">
                    {app.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                    {app.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-cyber-emerald hover:text-white transition-colors"
                  >
                    <span>Inquire About This Model</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
