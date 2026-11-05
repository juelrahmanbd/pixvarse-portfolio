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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#092D23]/10 py-3 shadow-[0_2px_12px_rgba(9,45,35,0.06)]"
            : "bg-white/80 backdrop-blur-sm border-b border-[#092D23]/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="dark" showTagline={false} />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 rounded-sm p-1 border border-[#092D23]/15 bg-[#F8FAF6] shadow-[1px_1px_0px_0px_#092D23]">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-bold uppercase tracking-wider font-mono transition-all duration-150 rounded-sm select-none ${
                      isActive
                        ? "bg-[#092D23] text-[#C7F532] shadow-sm"
                        : "text-[#092D23]/80 hover:text-[#063F2E] hover:bg-[#E6F4EC]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Available Indicator & Let's Talk CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Availability Indicator */}
              <div className="flex items-center gap-2 px-3 py-1 bg-[#F8FAF6] border border-[#092D23]/15 rounded-sm shadow-[1px_1px_0px_0px_#063F2E]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#063F2E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#063F2E]" />
                </span>
                <span className="text-[#092D23] text-[11px] font-mono font-bold uppercase tracking-wider">
                  {siteConfig.status.badgeText}
                </span>
              </div>

              {/* Let's Talk Button */}
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="px-3 py-1 text-[11px]"
              >
                Let&apos;s Talk
              </Button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-[#092D23]/20 bg-[#F8FAF6] text-[#092D23] hover:bg-[#E6F4EC] transition-colors cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
}
