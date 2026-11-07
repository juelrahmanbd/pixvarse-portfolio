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
    <footer className="relative bg-slate-50 text-slate-800 overflow-hidden border-t border-slate-200/80">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80">
          {/* Brand Info & Identity */}
          <div className="lg:col-span-5 space-y-5">
            <Logo showTagline={true} />
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-sans">
              {siteConfig.shortDescription}
            </p>

            <div className="rounded-xl bg-white border border-slate-200/90 p-4 text-xs font-mono text-slate-600 inline-block shadow-sm">
              <span className="text-blue-600 uppercase font-semibold block mb-0.5">
                Principal Engineer
              </span>
              <p className="text-slate-900 font-medium">
                {siteConfig.creatorName}{" "}
                <span className="text-slate-500 font-normal">— Full-Stack Developer &amp; Technologist</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-sm transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-sm transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-900 block font-semibold">
              Directory
            </span>
            <ul className="space-y-2 text-sm font-sans text-slate-600">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue-600 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3.5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-900 block font-semibold">
              Capabilities
            </span>
            <ul className="space-y-2 text-sm font-sans text-slate-600">
              {coreServices.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.id}`}
                    className="hover:text-blue-600 transition-colors inline-block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Connection & Action */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-900 block font-semibold">
              Get in Touch
            </span>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Have an upcoming platform launch or agency partnership in mind? Let&apos;s connect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-slate-900 text-white font-sans text-xs font-medium hover:bg-slate-800 shadow-sm transition-colors"
            >
              <span>Start Project</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. Designed &amp; Developed by {siteConfig.creatorName}.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact Portal
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
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
