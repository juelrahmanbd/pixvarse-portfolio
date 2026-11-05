"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#092D23]/90 backdrop-blur-md border-b border-[#C7F532]/20 py-3.5 shadow-lg shadow-black/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo
              variant={isScrolled ? "light" : "default"}
              showTagline={false}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 border border-[#063F2E]/15 bg-[#F8FAF6]/80 backdrop-blur-md shadow-sm">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded-full ${
                      isActive
                        ? "bg-[#063F2E] text-[#C7F532] shadow-sm"
                        : "text-[#171A18]/80 hover:text-[#063F2E] hover:bg-[#E6F4EC]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: CTA & Status */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#063F2E]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7F532] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7F532]" />
                </span>
                <span className={isScrolled ? "text-emerald-200 text-[11px]" : "text-[#063F2E] text-[11px] font-semibold"}>
                  Available for Hire
                </span>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="text-xs px-3 py-1.5"
              >
                Let&apos;s Talk
              </Button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors ${
                  isScrolled
                    ? "border-white/20 text-white hover:bg-white/10"
                    : "border-[#063F2E]/20 text-[#063F2E] hover:bg-[#E6F4EC]"
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
}
