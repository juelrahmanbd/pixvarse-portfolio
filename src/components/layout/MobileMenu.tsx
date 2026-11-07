"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "../ui/Button";
import { X, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePath?: string;
  currentPath?: string;
  navigation?: { name: string; href: string }[];
}

export function MobileMenu({
  isOpen,
  onClose,
  activePath,
  currentPath,
  navigation = siteConfig.navigation,
}: MobileMenuProps) {
  const active = currentPath || activePath || "/";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-canvas/95 backdrop-blur-2xl text-ink-headline transition-all duration-300">
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="font-display font-extrabold text-lg text-ink-headline">PIXVARSE</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-pulse" />
        </div>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/[0.1] text-ink-headline hover:text-cyber-emerald transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-4">
          {navigation.map((item, idx) => {
            const isActive = active === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center justify-between py-3.5 border-b border-white/[0.06] text-2xl font-display font-bold tracking-tight transition-colors ${
                  isActive ? "text-cyber-emerald" : "text-ink-headline hover:text-cyber-emerald"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ink-muted">0{idx + 1}</span>
                  <span>{item.name}</span>
                </div>
                <ArrowRight
                  className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                    isActive ? "text-cyber-emerald" : "text-ink-muted"
                  }`}
                  strokeWidth={1.5}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom Drawer Actions */}
        <div className="pt-8 space-y-6">
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-5 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-emerald block font-semibold">
              DIRECT CONNECTION
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm font-sans font-medium text-ink-secondary hover:text-cyber-emerald transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              <span>{siteConfig.email}</span>
            </a>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-ink-secondary hover:text-cyber-emerald transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-ink-secondary hover:text-cyber-emerald transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>

            <Button href="/contact" variant="primary" size="md" onClick={onClose}>
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
