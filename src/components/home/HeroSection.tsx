"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { TopographicBackground } from "../ui/TopographicBackground";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "performance">("preview");

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center bg-[#092D23] text-white overflow-hidden">
      {/* Topographic Background Overlay */}
      <TopographicBackground opacity={0.09} strokeColor="#C7F532" />

      {/* Decorative radial gradients for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#063F2E] rounded-full blur-[140px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C7F532]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="forest" dot={true} className="border-[#C7F532]/40 text-[#C7F532]">
                {siteConfig.status.badgeText}
              </Badge>
              <span className="hidden sm:inline-block font-mono text-xs text-emerald-200/70">
                — {siteConfig.positioning}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08]">
              Designing &amp; Building{" "}
              <span className="relative inline-block text-[#C7F532] bg-[#063F2E] px-3 py-1 rounded-lg border border-[#C7F532]/30 shadow-[3px_3px_0px_0px_#C7F532] my-1 -rotate-1">
                Digital Experiences
              </span>{" "}
              That Matter.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
              I&apos;m <span className="text-white font-semibold underline decoration-[#C7F532] decoration-2 underline-offset-4">{siteConfig.creatorName}</span>, an independent web developer helping ambitious businesses and agencies turn ideas into powerful, high-performance digital experiences under the studio brand <span className="font-mono text-[#C7F532] font-semibold">Pixvarse</span>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/work"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                Explore My Work
              </Button>
              <Button
                href="/contact"
                variant="lime-outline"
                size="lg"
              >
                Start a Project
              </Button>
            </div>

            {/* Quick Proof Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <span className="font-mono text-xl sm:text-2xl font-black text-[#C7F532] block">
                  100%
                </span>
                <span className="text-xs text-slate-300 uppercase tracking-wider font-mono">
                  Custom Code
                </span>
              </div>
              <div>
                <span className="font-mono text-xl sm:text-2xl font-black text-white block">
                  &lt; 1.2s
                </span>
                <span className="text-xs text-slate-300 uppercase tracking-wider font-mono">
                  Target Speed
                </span>
              </div>
              <div>
                <span className="font-mono text-xl sm:text-2xl font-black text-[#C7F532] block">
                  Global
                </span>
                <span className="text-xs text-slate-300 uppercase tracking-wider font-mono">
                  Client Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Browser & Code Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#063F2E]/90 border border-[#C7F532]/30 p-1 shadow-[8px_8px_0px_0px_#032118] backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#092D23] rounded-t-xl border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-emerald-300/80 hidden sm:inline-block">
                    pixvarse.studio/craft
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#063F2E] p-1 rounded-lg border border-white/10">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "preview"
                        ? "bg-[#C7F532] text-[#092D23] font-bold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "code"
                        ? "bg-[#C7F532] text-[#092D23] font-bold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab("performance")}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "performance"
                        ? "bg-[#C7F532] text-[#092D23] font-bold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    Vitals
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 sm:p-6 bg-[#032118]/90 rounded-b-xl min-h-[360px] flex flex-col justify-between font-mono text-xs">
                {activeTab === "preview" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#C7F532]" />
                        <span className="text-[#C7F532] font-bold text-xs uppercase tracking-wider">
                          Active Engineering Sprint
                        </span>
                      </div>
                      <span className="text-white/50 text-[10px]">PRODUCTION READY</span>
                    </div>

                    <div className="rounded-lg bg-[#063F2E]/60 p-4 border border-[#C7F532]/20 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-sans font-bold text-white">Full-Stack Web Architecture</p>
                          <p className="text-[11px] text-slate-300 font-sans">Crafted with precision by Juel Rahman</p>
                        </div>
                        <span className="bg-[#C7F532] text-[#092D23] text-[10px] font-bold px-2 py-0.5 rounded">
                          EST. 2024
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                        <div className="bg-[#092D23] p-2 rounded border border-white/5">
                          <span className="text-white/40 block text-[9px] uppercase">Engine</span>
                          <span className="text-white font-bold">WordPress / Laravel</span>
                        </div>
                        <div className="bg-[#092D23] p-2 rounded border border-white/5">
                          <span className="text-white/40 block text-[9px] uppercase">Interface</span>
                          <span className="text-emerald-300 font-bold">React / Tailwind</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature checks */}
                    <div className="space-y-2 pt-1 font-sans text-xs text-slate-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#C7F532] shrink-0" />
                        <span>Zero bloated templates — custom tailored markup</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#C7F532] shrink-0" />
                        <span>Fluid responsive behavior across all viewports</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#C7F532] shrink-0" />
                        <span>Automated CI/CD deployment configured for Hostinger</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="space-y-3 text-slate-300 font-mono text-[11px] leading-relaxed">
                    <div className="text-emerald-400/80">&#47;&#47; Pixvarse Engineering Architecture</div>
                    <div>
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-[#C7F532]">pixvarse</span> = &#123;
                    </div>
                    <div className="pl-4">
                      leadDeveloper: <span className="text-amber-300">&quot;Juel Rahman&quot;</span>,
                    </div>
                    <div className="pl-4">
                      specializations: [
                      <span className="text-amber-300">&quot;WordPress&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Divi&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;Laravel&quot;</span>,{" "}
                      <span className="text-amber-300">&quot;React&quot;</span>],
                    </div>
                    <div className="pl-4">
                      architecture: <span className="text-amber-300">&quot;Clean, Modular, Accessible&quot;</span>,
                    </div>
                    <div className="pl-4">
                      deployment: <span className="text-amber-300">&quot;Hostinger Node.js Web App&quot;</span>,
                    </div>
                    <div className="pl-4">
                      status: <span className="text-amber-300">&quot;Available for Projects&quot;</span>,
                    </div>
                    <div>&#125;;</div>
                    <div className="text-emerald-400/80 pt-2">&#47;&#47; Ready for execution</div>
                    <div>
                      <span className="text-purple-400">export default</span>{" "}
                      <span className="text-[#C7F532]">pixvarse</span>;
                    </div>
                  </div>
                )}

                {activeTab === "performance" && (
                  <div className="space-y-4">
                    <div className="text-xs font-sans text-slate-300">
                      Target Core Web Vitals benchmark metrics on modern deployments:
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="rounded-lg bg-[#063F2E] p-3 border border-[#C7F532]/30 text-center">
                        <span className="text-2xl font-black text-[#C7F532] block font-mono">
                          98+
                        </span>
                        <span className="text-[10px] text-white/70 uppercase tracking-widest font-mono">
                          Performance Score
                        </span>
                      </div>
                      <div className="rounded-lg bg-[#063F2E] p-3 border border-[#C7F532]/30 text-center">
                        <span className="text-2xl font-black text-white block font-mono">
                          0.8s
                        </span>
                        <span className="text-[10px] text-white/70 uppercase tracking-widest font-mono">
                          First Contentful Paint
                        </span>
                      </div>
                      <div className="rounded-lg bg-[#063F2E] p-3 border border-[#C7F532]/30 text-center">
                        <span className="text-2xl font-black text-[#C7F532] block font-mono">
                          0.00
                        </span>
                        <span className="text-[10px] text-white/70 uppercase tracking-widest font-mono">
                          Layout Shift (CLS)
                        </span>
                      </div>
                      <div className="rounded-lg bg-[#063F2E] p-3 border border-[#C7F532]/30 text-center">
                        <span className="text-2xl font-black text-white block font-mono">
                          &lt; 50ms
                        </span>
                        <span className="text-[10px] text-white/70 uppercase tracking-widest font-mono">
                          Interaction to Paint
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Bar inside Mockup */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Hostinger Node.js Runtime</span>
                  </div>
                  <Link
                    href="/work"
                    className="text-[#C7F532] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
