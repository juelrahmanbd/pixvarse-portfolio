"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ArrowUpRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-50/60 text-slate-900 overflow-hidden border-b border-slate-200/80">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-card p-8 sm:p-14 lg:p-16 text-center space-y-6">
          {/* Eyebrow */}
          <div className="flex justify-center">
            <Badge variant="cyan" dot={true} dotColor="cyan" size="md">
              DIRECT ENGAGEMENT
            </Badge>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-slate-900 leading-[1.12] max-w-3xl mx-auto">
            Ready to Build a High-Performance{" "}
            <span className="text-blue-600">
              Digital Platform?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Whether you need bespoke WordPress blocks, a custom Next.js web application, or a reliable white-label partner for your digital agency, we build platforms that perform.
          </p>

          {/* Dual CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />}
            >
              Start Your Project
            </Button>

            <Button
              href={`mailto:${siteConfig.email}`}
              variant="secondary"
              size="lg"
              icon={<Mail className="h-4 w-4" strokeWidth={1.5} />}
            >
              Direct Email
            </Button>
          </div>

          {/* Availability Status */}
          <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-center gap-3 text-xs font-mono text-slate-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for New Client Commissions (2-4 Week Turnaround)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
