"use client";

import Link from "next/link";
import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coreServices = servicesData.slice(0, 6);

  return (
    <footer className="relative bg-canvas text-ink-primary overflow-hidden border-t border-edge-subtle">
      {/* Ambient background flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyber-emerald/[0.04] blur-[150px] rounded-full pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/[0.08]">
          {/* Brand Info & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" showTagline={true} />
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed max-w-sm font-sans font-normal">
              {siteConfig.shortDescription}
            </p>

            <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/[0.08] backdrop-blur-md inline-block max-w-md">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cyber-emerald block mb-1 font-semibold">
                Studio Leadership
              </span>
              <p className="text-ink-headline text-sm font-semibold">
                {siteConfig.creatorName}{" "}
                <span className="text-ink-muted font-normal">— Web Developer &amp; Technologist</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-ink-secondary hover:text-cyber-emerald hover:bg-white/[0.08] border border-white/[0.08] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-ink-secondary hover:text-cyber-emerald hover:bg-white/[0.08] border border-white/[0.08] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-headline block font-semibold">
              Platform Index
            </span>
            <ul className="space-y-2.5 text-sm font-sans text-ink-secondary">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-cyber-emerald transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-headline block font-semibold">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-sm font-sans text-ink-secondary">
              {coreServices.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-cyber-emerald transition-colors inline-block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connection & Action */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-ink-headline block font-semibold">
              Initiate Project
            </span>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              Have a project or partnership in mind? Let&apos;s build something exceptional.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="w-full"
              icon={<ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" strokeWidth={1.5} />}
            >
              Start Conversation
            </Button>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. Designed &amp; Developed by {siteConfig.creatorName}.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-cyber-emerald transition-colors">
              Direct Contact
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-cyber-emerald transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
