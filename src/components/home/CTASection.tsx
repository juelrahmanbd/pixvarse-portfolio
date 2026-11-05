import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { TopographicBackground } from "../ui/TopographicBackground";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#2C4058] text-white overflow-hidden border-b border-white/10">
      {/* Topographic Lines Background */}
      <TopographicBackground opacity={0.05} strokeColor="#738B46" />

      {/* Radial depth light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#1E2D3E] rounded-full blur-[140px] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="mb-6 flex justify-center">
          <Badge variant="navy" dot={true} dotColor="olive" size="md">
            START A CONVERSATION
          </Badge>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.025em] leading-[1.12]">
          Have an Idea?{" "}
          <span className="relative inline-block text-white bg-[#738B46] px-3 py-1 rounded-sm border border-[#738B46]/40 shadow-[4px_4px_0px_0px_#1E2D3E] -rotate-1 mx-1">
            Let&apos;s Build
          </span>{" "}
          Something Great.
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
          Whether you need a bespoke WordPress website, a custom web application, or a reliable white-label development partner for your digital agency, let&apos;s discuss your goals.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            icon={<ArrowUpRight className="h-5 w-5 stroke-[2.5]" />}
          >
            Start a Project
          </Button>

          <Button
            href={`mailto:${siteConfig.email}`}
            variant="lime-outline"
            size="lg"
            icon={<Mail className="h-4 w-4" />}
          >
            Contact Directly
          </Button>
        </div>

        {/* Availability guarantee footer */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-white/80 font-medium">
          <span>✓ Direct response within 24 business hours</span>
          <span>✓ Detailed technical proposal &amp; estimate</span>
          <span>✓ Zero obligation consultation</span>
        </div>
      </div>
    </section>
  );
}
