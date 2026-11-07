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
    <div className="fixed inset-0 z-50 flex flex-col bg-white/98 backdrop-blur-2xl text-slate-900 transition-all duration-300">
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-slate-900">Pixvarse</span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        </div>
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
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
                className="group flex items-center justify-between py-2 border-b border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
                  <span
                    className={`text-xl font-display font-semibold transition-colors ${
                      isActive ? "text-blue-600 font-bold" : "text-slate-800 group-hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            );
          })}
        </nav>

        {/* Footer Area inside Mobile Menu */}
        <div className="pt-8 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-slate-500 uppercase">Availability</span>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Available for Projects</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="flex-1 justify-center"
              onClick={onClose}
            >
              Start Project
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>&copy; {new Date().getFullYear()} {siteConfig.brandName}</span>
            <div className="flex items-center gap-4">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
                <GithubIcon className="h-4 w-4" />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-900">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
