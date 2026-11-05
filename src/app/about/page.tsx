import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/LayoutPrimitives";
import { TopographicBackground } from "@/components/ui/TopographicBackground";
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
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
    <div className="flex flex-col">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="BEHIND THE BRAND // JUEL RAHMAN"
        title="Behind Every Great Digital Experience Is a"
        highlight="Clear Vision."
        description={`I'm ${siteConfig.creatorName}, an independent web developer, creative technologist, and the founder of Pixvarse, collaborating with a skilled professional team to build modern, resilient websites and digital platforms for ambitious clients worldwide.`}
      />

      {/* Narrative & Background Section */}
      <section className="py-16 sm:py-24 bg-[#F7F9FA] border-b border-[#2C4058]/10">
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

              <div className="space-y-4 text-base sm:text-lg text-[#2C4058]/85 leading-relaxed font-sans font-normal">
                <p>
                  My journey into software and web engineering began with a genuine curiosity: understanding how digital interfaces influence human decisions and empower business operations. Over the years, I honed deep technical expertise across both traditional CMS systems like <strong className="text-[#2C4058] font-bold">WordPress, Divi, and Elementor</strong> and modern application frameworks like <strong className="text-[#2C4058] font-bold">Laravel, React, and Next.js</strong>.
                </p>
                <p>
                  I created <strong className="text-[#2C4058] font-bold">Pixvarse</strong> as an independent studio brand to represent this standard of work: agile, modern, and uncompromising in quality. In an industry frequently bogged down by bloated multi-layer agencies and cookie-cutter templates, Pixvarse delivers direct, engineer-led solutions.
                </p>
                <p>
                  Whether I&apos;m writing a custom WordPress Gutenberg block, architecting a normalized MySQL database schema in Laravel, or tuning client-side JavaScript for sub-second First Contentful Paint, my philosophy remains identical: build it cleanly, test it rigorously, and deliver on time.
                </p>
              </div>

              {/* Developer Credentials Card */}
              <div className="mt-8 rounded-sm bg-white p-6 sm:p-8 border border-[#2C4058]/15 shadow-[4px_4px_0px_0px_#2C4058] space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#2C4058] font-bold">
                  Core Competencies &amp; Focus Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm font-medium text-[#2C4058]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#738B46] shrink-0" />
                    <span>Custom WordPress &amp; ACF Block Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#738B46] shrink-0" />
                    <span>Divi &amp; Elementor Pro Theme Engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#738B46] shrink-0" />
                    <span>Laravel Backend &amp; Inertia.js Monoliths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#738B46] shrink-0" />
                    <span>React, Next.js &amp; TypeScript Interfaces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#738B46] shrink-0" />
                    <span>Core Web Vitals &amp; PageSpeed Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#738B46] shrink-0" />
                    <span>Automated Deployment &amp; Hostinger Node.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Quick Bio Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-sm bg-[#2C4058] text-white p-6 sm:p-8 border border-[#738B46]/35 shadow-[4px_4px_0px_0px_#738B46]">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-xl font-bold font-sans text-white">{siteConfig.creatorName}</h3>
                    <p className="text-xs font-mono text-[#738B46] mt-0.5">{siteConfig.creatorRole}</p>
                  </div>
                  <Badge variant="olive" size="sm">
                    Verified
                  </Badge>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-white/80">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="font-mono text-white/50">Studio Brand:</span>
                    <span className="font-bold text-white font-mono">{siteConfig.brandName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="font-mono text-white/50">Primary Role:</span>
                    <span className="font-semibold text-white">Full-Stack Web Developer</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="font-mono text-white/50">Location:</span>
                    <span className="font-semibold text-white">Available Worldwide (Remote)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="font-mono text-white/50">Working Language:</span>
                    <span className="font-semibold text-white">English (Fluent)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="font-mono text-white/50">Code Repositories:</span>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#738B46] hover:underline font-mono inline-flex items-center gap-1 font-bold"
                    >
                      <span>github.com/juelrahmanbd</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Button
                    href="/contact"
                    variant="accent"
                    size="md"
                    className="w-full"
                    icon={<ArrowUpRight className="h-4 w-4 stroke-[2.5]" />}
                  >
                    Start a Conversation
                  </Button>
                </div>
              </div>

              {/* Quick Quote Card */}
              <div className="rounded-sm bg-[#EEF3E6] p-6 border border-[#738B46]/30 text-[#2C4058] shadow-[2px_2px_0px_0px_#738B46]">
                <span className="font-mono text-xs uppercase tracking-widest font-bold block mb-2 text-[#738B46]">
                  Studio Creed
                </span>
                <p className="text-sm italic font-serif leading-relaxed text-[#2C4058]/90">
                  &ldquo;Great digital products are built at the intersection of disciplined architecture, aesthetic precision, and empathetic communication.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 bg-[#2C4058] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="PHILOSOPHY // ENGINEERING VALUES"
            title="How I Approach"
            highlight="Software & Craft."
            description="Four fundamental tenets that govern every line of code written at Pixvarse."
            theme="dark"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {philosophies.map((phil) => (
              <div
                key={phil.number}
                className="group rounded-sm bg-[#1E2D3E]/90 border border-white/12 p-6 sm:p-8 hover:border-[#738B46] hover:bg-[#1E2D3E] transition-all duration-200 shadow-[4px_4px_0px_0px_#141E2A] hover:shadow-[4px_4px_0px_0px_#738B46]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <span className="font-mono text-2xl font-black text-[#738B46]">
                    {phil.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                    CORE PRINCIPLE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#738B46] transition-colors">
                  {phil.title}
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed font-sans">
                  {phil.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-16 sm:py-24 bg-[#F7F9FA] border-b border-[#2C4058]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="COLLABORATION // HOW WE WORK TOGETHER"
            title="Flexible Partnerships for"
            highlight="Agencies & Brands."
            description="Whether you need end-to-end website delivery or reliable ongoing engineering support."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {workApproaches.map((approach, i) => (
              <div
                key={i}
                className="rounded-sm bg-white border border-[#2C4058]/15 p-6 sm:p-8 shadow-[4px_4px_0px_0px_#2C4058] hover:shadow-[6px_6px_0px_0px_#738B46] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#EEF3E6] text-[#738B46] border border-[#738B46]/30 shadow-[2px_2px_0px_0px_#738B46]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C4058] mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-sm text-[#2C4058]/75 leading-relaxed font-sans">
                    {approach.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#2C4058]/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#2C4058] hover:text-[#738B46] group"
                  >
                    <span>Inquire About Partnership</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 text-[#738B46]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 bg-[#2C4058] text-white text-center relative overflow-hidden">
        <TopographicBackground opacity={0.05} strokeColor="#738B46" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Ready to collaborate with a{" "}
            <span className="text-[#738B46] underline decoration-4 underline-offset-4">dedicated developer</span>?
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto font-sans font-normal">
            Let&apos;s discuss your upcoming project or review how Pixvarse can support your development pipeline.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="accent"
              size="lg"
              icon={<ArrowUpRight className="h-5 w-5 stroke-[2.5]" />}
            >
              Get in Touch
            </Button>
            <Button
              href="/work"
              variant="lime-outline"
              size="lg"
            >
              Review Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
