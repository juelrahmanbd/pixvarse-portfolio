"use client";

import React from "react";
import { testimonialsData, clientPartnershipPillars } from "@/data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Quote, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  const hasTestimonials = testimonialsData.length > 0;

  return (
    <section className="py-20 sm:py-28 bg-canvas-secondary relative overflow-hidden border-b border-edge-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="STANDARDS // TRUST & INTEGRITY"
            title={hasTestimonials ? "Client Endorsements." : "Client Partnership"}
            highlight={hasTestimonials ? "Direct Feedback." : "Philosophy."}
            description={
              hasTestimonials
                ? "Direct feedback from clients and digital agency partners who rely on Pixvarse for technical execution."
                : "A steadfast commitment to transparency, technical excellence, and zero-compromise delivery on every client engagement."
            }
          />
        </div>

        {hasTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/[0.2] transition-all"
              >
                <div>
                  <Quote className="h-7 w-7 text-cyber-emerald/40 mb-4" strokeWidth={1.5} />
                  <p className="text-sm text-ink-primary leading-relaxed font-sans font-normal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-ink-headline">{item.clientName}</h4>
                    <p className="text-xs text-ink-muted font-mono">
                      {item.role}, {item.company}
                    </p>
                  </div>
                  {item.verified && (
                    <Badge variant="emerald" size="sm">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Client Partnership Pillars */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientPartnershipPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] text-cyber-emerald border border-white/[0.08]">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-display font-bold text-ink-headline tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-emerald font-semibold">
                    {`0${idx + 1} // COMMITMENT`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
