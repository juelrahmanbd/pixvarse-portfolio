"use client";

import Link from "next/link";
import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { Logo } from "../ui/Logo";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coreServices = servicesData.slice(0, 6);

  return (
    <footer className="relative bg-canvas text-ink-primary overflow-hidden border-t border-white/10">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-[1560px] mx-auto px-4 sm:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info & Identity */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="light" showTagline={true} />
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed max-w-sm font-sans font-normal">
              {siteConfig.shortDescription}
            </p>

            <div className="border border-white/10 p-4 text-xs font-mono text-ink-muted inline-block max-w-md">
              <span className="text-cyber-magenta uppercase font-bold block mb-1">
                Studio Leadership
              </span>
              <p className="text-white font-medium">
                {siteConfig.creatorName}{" "}
                <span className="text-ink-muted">— Full-Stack Web Developer &amp; Technologist</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white hover:border-cyber-magenta hover:text-cyber-magenta transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white hover:border-cyber-magenta hover:text-cyber-magenta transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white block font-semibold">
              Directory
            </span>
            <ul className="space-y-2.5 text-sm font-sans text-ink-secondary">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors inline-block uppercase text-xs font-mono tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white block font-semibold">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-sm font-sans text-ink-secondary">
              {coreServices.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-cyber-emerald transition-colors inline-block text-xs font-mono uppercase tracking-wider"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connection & Action */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-white block font-semibold">
              Commission
            </span>
            <p className="text-xs text-ink-muted leading-relaxed font-sans">
              Have an enterprise project or agency partnership in mind? Let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-mono text-xs uppercase tracking-wider font-bold hover:bg-cyber-magenta hover:text-white transition-colors"
            >
              <span>Initialize</span>
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Massive Huge Inc Watermark Typography */}
        <div className="pt-12 select-none pointer-events-none overflow-hidden">
          <span className="font-display font-black text-[14vw] uppercase tracking-[-0.05em] leading-[0.75] text-stroke-white opacity-10 block text-center">
            PIXVARSE
          </span>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. Engineered by {siteConfig.creatorName}.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Direct Contact
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
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
