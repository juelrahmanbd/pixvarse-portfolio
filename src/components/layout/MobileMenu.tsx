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
  activePath: string;
}

export function MobileMenu({ isOpen, onClose, activePath }: MobileMenuProps) {
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
    <div className="fixed inset-0 z-50 flex flex-col bg-[#092D23]/98 backdrop-blur-xl text-white transition-all duration-300">
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="font-mono font-black text-lg text-white">PIXVARSE</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C7F532]" />
        </div>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <nav className="flex flex-col space-y-4">
          {siteConfig.navigation.map((item, idx) => {
            const isActive = activePath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center justify-between py-3 border-b border-white/10 text-2xl font-black tracking-tight transition-colors ${
                  isActive ? "text-[#C7F532]" : "text-white hover:text-[#C7F532]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                  <span>{item.name}</span>
                </div>
                <ArrowRight
                  className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                    isActive ? "text-[#C7F532]" : "text-white/40"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom Contact Details */}
        <div className="pt-8 mt-6 border-t border-white/10 space-y-6">
          <div className="rounded-sm bg-[#063F2E] p-4 border border-[#C7F532]/20">
            <span className="text-xs uppercase tracking-widest text-[#C7F532] font-mono block mb-1">
              Direct Contact
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-white hover:text-[#C7F532] text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <Mail className="h-4 w-4 text-[#C7F532]" />
              {siteConfig.email}
            </a>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 hover:bg-[#C7F532] hover:text-[#092D23] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm bg-white/10 hover:bg-[#C7F532] hover:text-[#092D23] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>

            <Button
              href="/contact"
              variant="primary"
              size="sm"
              onClick={onClose}
              className="rounded-sm"
              icon={<ArrowRight className="h-3.5 w-3.5" />}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
