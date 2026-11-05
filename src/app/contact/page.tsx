import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/ui/LayoutPrimitives";
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
    <div className="flex flex-col">
      {/* Master Page Header */}
      <PageHeader
        eyebrow="PROJECT BRIEF // DIRECT CONNECTION"
        title="Let's Talk About Your"
        highlight="Next Project."
        description="Whether you need a bespoke WordPress platform, a tailored web application, or a reliable white-label development partner for your agency, fill out the inquiry form below or reach out directly."
      />

      {/* Main Form & Contact Info Section */}
      <section className="py-16 sm:py-24 bg-[#F7F9FA] border-b border-[#2C4058]/10">
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
              <div className="rounded-sm bg-[#2C4058] text-white p-6 sm:p-8 border border-[#738B46]/30 shadow-[4px_4px_0px_0px_#738B46] space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#738B46] font-bold block mb-1">
                    DIRECT COMMUNICATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                    Get in Touch Directly
                  </h3>
                </div>

                <div className="space-y-3.5 pt-2">
                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4 p-4 rounded-sm bg-[#1E2D3E] border border-white/10 hover:border-[#738B46]/60 hover:bg-[#1E2D3E]/90 transition-all shadow-[2px_2px_0px_0px_#1E2D3E]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2C4058] text-[#738B46] border border-[#738B46]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        Email Address
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#738B46] transition-colors">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-sm bg-[#1E2D3E] border border-white/10 hover:border-[#738B46]/60 hover:bg-[#1E2D3E]/90 transition-all shadow-[2px_2px_0px_0px_#1E2D3E]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2C4058] text-[#738B46] border border-[#738B46]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        WhatsApp Chat
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#738B46] transition-colors">
                        Direct Message on WhatsApp
                      </span>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-sm bg-[#1E2D3E] border border-white/10 hover:border-[#738B46]/60 hover:bg-[#1E2D3E]/90 transition-all shadow-[2px_2px_0px_0px_#1E2D3E]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2C4058] text-[#738B46] border border-[#738B46]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <GithubIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        GitHub Profile &amp; Repos
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#738B46] transition-colors">
                        github.com/juelrahmanbd
                      </span>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 rounded-sm bg-[#1E2D3E] border border-white/10 hover:border-[#738B46]/60 hover:bg-[#1E2D3E]/90 transition-all shadow-[2px_2px_0px_0px_#1E2D3E]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2C4058] text-[#738B46] border border-[#738B46]/20 shrink-0 group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        LinkedIn Network
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#738B46] transition-colors">
                        Juel Rahman
                      </span>
                    </div>
                  </a>
                </div>

                {/* Status Indicator */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#738B46]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#738B46] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#738B46]" />
                    </span>
                    <span className="font-bold text-white">{siteConfig.status.badgeText}</span>
                  </div>
                  <span className="text-white/60">Remote Worldwide</span>
                </div>
              </div>

              {/* Service SLA Commitment */}
              <div className="rounded-sm bg-white p-6 sm:p-8 border border-[#2C4058]/15 shadow-[4px_4px_0px_0px_#2C4058] space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#738B46] font-bold">
                  <Clock className="h-4 w-4" />
                  <span>24-Hour Response Guarantee</span>
                </div>
                <p className="text-xs sm:text-sm text-[#2C4058]/75 leading-relaxed font-sans">
                  Every inquiry receives a personal, technical evaluation from Juel Rahman within 24 business hours. No automated robot answers — just real assessment and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#2C4058]/10">
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
                className="rounded-sm bg-[#F7F9FA] border border-[#2C4058]/15 p-6 shadow-[2px_2px_0px_0px_#2C4058] space-y-2"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#2C4058] flex items-start gap-2">
                  <span className="font-mono text-xs text-[#2C4058] bg-[#EEF3E6] px-2 py-0.5 rounded-sm border border-[#2C4058]/15 mt-0.5 font-bold">
                    Q{idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-[#2C4058]/80 leading-relaxed font-sans pl-8">
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
