"use client";

import React from "react";
import { testimonialsData, clientPartnershipPillars } from "@/data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Quote, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  const hasTestimonials = testimonialsData.length > 0;

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="STANDARDS // TRUST &amp; INTEGRITY"
            title={hasTestimonials ? "Client Endorsements." : "Client Partnership"}
            highlight={hasTestimonials ? "Direct Feedback." : "Philosophy."}
            description={
              hasTestimonials
                ? "Direct feedback from clients and agency partners who rely on Pixvarse for technical execution."
                : "A steadfast commitment to transparency, technical excellence, and zero-compromise delivery on every client engagement."
            }
          />
        </div>

        {hasTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-6 w-6 text-blue-600/40 mb-4" strokeWidth={1.5} />
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900">{item.clientName}</h4>
                    <p className="text-xs text-slate-500 font-mono">
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
                className="rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-cardHover hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 font-semibold">
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
