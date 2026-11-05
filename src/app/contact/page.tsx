import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TopographicBackground } from "@/components/ui/TopographicBackground";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  Mail,
  MessageSquare,
  Clock,
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
      a: "Standard WordPress and custom landing platforms typically take 2 to 4 weeks from scope approval to launch. Custom Laravel applications or complex e-commerce stores take 4 to 8 weeks depending on specifications.",
    },
    {
      q: "How do you handle client payments?",
      a: "Fixed-scope projects are typically structured with a 50% deposit upon milestone agreement and 50% upon final sign-off before production domain launch. For agency partnerships, monthly retainers or net-15 milestone invoices are accommodated.",
    },
    {
      q: "Can you sign a Non-Disclosure Agreement (NDA)?",
      a: "Absolutely. I frequently work as a confidential white-label development partner for digital agencies and respect all commercial intellectual property.",
    },
    {
      q: "Do you offer post-launch maintenance & support?",
      a: "Yes. Every newly launched project includes 30 days of comprehensive post-launch warranty support. Monthly ongoing care and optimization retainers are also available for continuous security and updates.",
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
              PROJECT INQUIRY // DIRECT CONNECTION
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              Let&apos;s Talk About Your{" "}
              <span className="relative inline-block text-[#C7F532] bg-[#063F2E] px-3 py-1 rounded-lg border border-[#C7F532]/30 shadow-[3px_3px_0px_0px_#C7F532] -rotate-1">
                Next Project.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
              Whether you need a bespoke WordPress platform, a tailored web application, or a reliable white-label development partner for your agency, fill out the inquiry form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-20 bg-[#F8FAF6]">
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
              <div className="rounded-3xl bg-[#092D23] text-white p-8 border border-[#C7F532]/30 shadow-[6px_6px_0px_0px_#032118] space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7F532] font-bold block mb-1">
                    DIRECT COMMUNICATION
                  </span>
                  <h3 className="text-2xl font-bold font-sans text-white">
                    Get in Touch Directly
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-[#063F2E] border border-white/10 hover:border-[#C7F532]/60 hover:bg-[#063F2E]/90 transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#092D23] text-[#C7F532] border border-[#C7F532]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        Email Address
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#C7F532] transition-colors">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-[#063F2E] border border-white/10 hover:border-[#C7F532]/60 hover:bg-[#063F2E]/90 transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#092D23] text-[#C7F532] border border-[#C7F532]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        WhatsApp Chat
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#C7F532] transition-colors">
                        Direct Message on WhatsApp
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-[#063F2E] border border-white/10 hover:border-[#C7F532]/60 hover:bg-[#063F2E]/90 transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#092D23] text-[#C7F532] border border-[#C7F532]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <GithubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        GitHub Profile &amp; Repos
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#C7F532] transition-colors">
                        github.com/juelrahmanbd
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-[#063F2E] border border-white/10 hover:border-[#C7F532]/60 hover:bg-[#063F2E]/90 transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#092D23] text-[#C7F532] border border-[#C7F532]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        LinkedIn Network
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#C7F532] transition-colors">
                        Juel Rahman
                      </span>
                    </div>
                  </a>
                </div>

                {/* Status Indicator */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-emerald-200">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7F532] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7F532]" />
                    </span>
                    <span>Currently Accepting Projects</span>
                  </div>
                  <span className="text-white/40">Remote Worldwide</span>
                </div>
              </div>

              {/* Service SLA Commitment */}
              <div className="rounded-2xl bg-white p-6 border border-[#063F2E]/15 shadow-[4px_4px_0px_0px_#063F2E] space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#063F2E] font-bold">
                  <Clock className="h-4 w-4" />
                  <span>24-Hour Response Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-[#171A18]/75 leading-relaxed font-sans">
                  Every inquiry receives a personal, technical evaluation from Juel Rahman within 24 business hours. No automated robot answers — just real assessment and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-[#063F2E]/10">
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
                className="rounded-2xl bg-[#F8FAF6] border border-[#063F2E]/15 p-6 shadow-sm space-y-2"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#171A18] flex items-start gap-2">
                  <span className="font-mono text-xs text-[#063F2E] bg-[#E6F4EC] px-2 py-0.5 rounded border border-[#063F2E]/15 mt-0.5">
                    Q{idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-[#171A18]/80 leading-relaxed font-sans pl-8">
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
