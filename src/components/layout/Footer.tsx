"use client";

import Link from "next/link";
import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { TopographicBackground } from "../ui/TopographicBackground";
import { ArrowUp, Mail, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coreServices = servicesData.slice(0, 6);

  return (
    <footer className="relative bg-[#092D23] text-white overflow-hidden border-t-2 border-[#092D23]">
      {/* Topographic Line Accent */}
      <TopographicBackground opacity={0.06} strokeColor="#C7F532" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info & Identity */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="light" showTagline={true} />
            <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-sm font-sans font-normal">
              {siteConfig.shortDescription}
            </p>
            <div className="rounded-sm bg-[#063F2E] p-4 border border-[#C7F532]/25 shadow-[2px_2px_0px_0px_#C7F532] inline-block">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C7F532] block mb-1 font-bold">
                Studio Leadership
              </span>
              <p className="text-white text-sm font-semibold">
                {siteConfig.creatorName}{" "}
                <span className="text-white/60 font-normal">— Web Developer &amp; Technologist</span>
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-[#C7F532] hover:text-[#092D23] border border-white/15 hover:border-[#C7F532] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-[#C7F532] hover:text-[#092D23] border border-white/15 hover:border-[#C7F532] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-[#C7F532] hover:text-[#092D23] border border-white/15 hover:border-[#C7F532] transition-colors"
                aria-label="Email Direct Contact"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-[#C7F532] hover:text-[#092D23] border border-white/15 hover:border-[#C7F532] transition-colors"
                aria-label="WhatsApp Direct Message"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#C7F532] font-bold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-[#C7F532] transition-colors inline-flex items-center gap-1 group font-mono text-xs uppercase tracking-wider"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C7F532]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#C7F532] font-bold">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {coreServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-white/75 hover:text-[#C7F532] transition-colors line-clamp-1 text-sm font-sans"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Project Inquiry */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#C7F532] font-bold">
              Availability
            </h3>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7F532] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7F532]" />
              </span>
              <span className="font-bold">{siteConfig.status.badgeText}</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              Open to selective client projects, agency white-label partnerships, and custom web contracts.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="w-full text-xs"
              icon={<ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />}
            >
              Start a Project
            </Button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-mono">
          <p>
            © {new Date().getFullYear()} {siteConfig.brandName}. Designed &amp; Developed by {siteConfig.creatorName}.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#C7F532] transition-colors py-1.5 px-3 rounded-sm border border-white/15 hover:border-[#C7F532]/60 bg-white/5 cursor-pointer"
            aria-label="Back to top of page"
          >
            <span className="font-mono uppercase tracking-wider text-[11px] font-bold">Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 text-[#C7F532]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
