import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/LayoutPrimitives";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Contact Pixvarse — Start a Project with Juel Rahman",
  description:
    "Get in touch with Juel Rahman at Pixvarse to discuss your website or web application project. Direct email, WhatsApp, and project inquiry form.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Standard WordPress and custom landing platforms typically take 2 to 4 weeks from scope approval to launch. Custom Laravel applications or complex e-commerce platforms take 4 to 8 weeks depending on technical specifications.",
    },
    {
      q: "How do you handle client payments?",
      a: "Fixed-scope projects are typically structured with a 50% deposit upon milestone agreement and 50% upon final sign-off before production domain launch. For agency partnerships, monthly retainers or net-15 milestone invoices are accommodated.",
    },
    {
      q: "Can you sign a Non-Disclosure Agreement (NDA)?",
      a: "Absolutely. I frequently work as a confidential white-label development partner for digital agencies and respect all commercial intellectual property and brand privacy.",
    },
    {
      q: "Do you offer post-launch maintenance & support?",
      a: "Yes. Every newly launched project includes 30 days of comprehensive post-launch warranty support. Monthly ongoing care and optimization retainers are also available for continuous security, performance, and updates.",
    },
  ];

  return (
    <div className="flex flex-col bg-canvas text-ink-body">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="PROJECT BRIEF // DIRECT CONNECTION"
        title="Let's Talk About Your"
        highlight="Next Project."
        description="Whether you need a bespoke WordPress platform, a tailored web application, or a reliable white-label development partner for your agency, fill out the inquiry form below or reach out directly."
      />

      {/* Main Form & Contact Info Section */}
      <section className="py-16 sm:py-24 bg-canvas border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Interactive Form */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="PROJECT BRIEF // INITIAL SCOPE"
                title="Send a Project"
                highlight="Inquiry."
                description="Share your requirements and you'll receive a detailed technical response within 24 business hours."
              />

              <ContactForm />
            </div>

            {/* Right Column: Direct Channels & Guarantee */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Info Card */}
              <div className="rounded-2xl bg-surface-elevated/70 border border-white/[0.08] backdrop-blur-xl p-6 sm:p-8 space-y-6 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-emerald/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyber-emerald/20 transition-all duration-700" />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-3.5 w-3.5 text-cyber-emerald" strokeWidth={1.5} />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-emerald font-semibold">
                      DIRECT COMMUNICATION
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-ink-headline">
                    Get in Touch Directly
                  </h3>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyber-emerald/40 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20 shrink-0 group-hover/item:scale-105 transition-transform">
                      <Mail className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block">
                        Email Address
                      </span>
                      <span className="text-sm font-semibold text-ink-headline group-hover/item:text-cyber-emerald transition-colors font-mono">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyber-emerald/40 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20 shrink-0 group-hover/item:scale-105 transition-transform">
                      <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block">
                        WhatsApp Chat
                      </span>
                      <span className="text-sm font-semibold text-ink-headline group-hover/item:text-cyber-emerald transition-colors">
                        Direct Message on WhatsApp
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyber-emerald/40 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20 shrink-0 group-hover/item:scale-105 transition-transform">
                      <GithubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block">
                        GitHub Profile &amp; Repos
                      </span>
                      <span className="text-sm font-semibold text-ink-headline group-hover/item:text-cyber-emerald transition-colors font-mono">
                        github.com/juelrahmanbd
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyber-emerald/40 hover:bg-white/[0.06] transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20 shrink-0 group-hover/item:scale-105 transition-transform">
                      <LinkedinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted block">
                        LinkedIn Network
                      </span>
                      <span className="text-sm font-semibold text-ink-headline group-hover/item:text-cyber-emerald transition-colors">
                        Juel Rahman
                      </span>
                    </div>
                  </a>
                </div>

                {/* Status Indicator */}
                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
                    </span>
                    <span className="font-semibold text-cyber-emerald">{siteConfig.status.badgeText}</span>
                  </div>
                  <span className="text-ink-muted text-[11px]">Remote Worldwide</span>
                </div>
              </div>

              {/* Service SLA Commitment */}
              <div className="rounded-2xl bg-surface-elevated/40 border border-white/[0.08] p-6 sm:p-8 space-y-3 backdrop-blur-md">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cyber-emerald font-semibold">
                  <Clock className="h-4 w-4" strokeWidth={1.5} />
                  <span>24-Hour Response Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Every inquiry receives a personal, technical evaluation from Juel Rahman within 24 business hours. No automated robot answers — just real assessment and actionable next steps.
                </p>
                <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-ink-muted">
                  <ShieldCheck className="h-3.5 w-3.5 text-cyber-cyan" strokeWidth={1.5} />
                  <span>Confidentiality &amp; NDA standard respected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-canvas-subtle/30 border-b border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="FAQ // FREQUENTLY ASKED QUESTIONS"
            title="Common Inquiries About"
            highlight="Client Engagements."
            description="Clear answers regarding turnaround, contracts, milestones, and ongoing support."
            align="center"
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-surface-elevated/60 border border-white/[0.08] p-6 hover:border-white/[0.14] transition-all space-y-2 backdrop-blur-sm"
              >
                <h3 className="text-base sm:text-lg font-display font-semibold text-ink-headline flex items-start gap-3">
                  <span className="font-mono text-xs text-cyber-emerald bg-cyber-emerald/10 px-2 py-0.5 rounded border border-cyber-emerald/20 mt-0.5 font-semibold shrink-0">
                    Q{idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed font-sans pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
