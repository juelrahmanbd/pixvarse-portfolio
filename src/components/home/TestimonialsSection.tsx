import React from "react";
import { testimonialsData, clientPartnershipPillars } from "@/data/testimonials";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { Quote, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  const hasTestimonials = testimonialsData.length > 0;

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF6] relative overflow-hidden border-b border-[#092D23]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="STANDARDS // TRUST & RELIABILITY"
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
                className="rounded-sm bg-white border border-[#092D23]/15 p-6 sm:p-7 shadow-[3px_3px_0px_0px_#092D23] flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-8 w-8 text-[#063F2E]/30 mb-4" />
                  <p className="text-sm text-[#092D23]/85 leading-relaxed italic font-serif">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#092D23]/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#092D23]">{item.clientName}</h4>
                    <p className="text-xs text-[#092D23]/60 font-mono">
                      {item.role}, {item.company}
                    </p>
                  </div>
                  {item.verified && (
                    <Badge variant="mint" size="sm">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Client Partnership Pillars (Zero Fake Reviews Policy) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientPartnershipPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group rounded-sm bg-white border border-[#092D23]/15 p-6 shadow-[3px_3px_0px_0px_#092D23] hover:shadow-[5px_5px_0px_0px_#C7F532] hover:border-[#092D23] transition-all duration-200"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm bg-[#063F2E] text-[#C7F532] border border-[#C7F532]/30 shadow-[2px_2px_0px_0px_#092D23]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-[#092D23] group-hover:text-[#063F2E] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#092D23]/75 leading-relaxed font-sans font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
