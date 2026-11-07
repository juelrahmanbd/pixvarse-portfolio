"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-black/[0.06] py-3 shadow-sm"
            : "bg-white/60 backdrop-blur-sm py-4 border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo showTagline={false} />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-50 border border-slate-200/80 p-1 rounded-full">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-1.5 text-xs font-sans font-medium rounded-full transition-colors select-none",
                      isActive
                        ? "bg-white text-slate-900 font-semibold shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Available Status & Primary CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-700 font-medium">{siteConfig.status.badgeText}</span>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />}
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center md:hidden gap-2">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={siteConfig.navigation}
      />
    </>
  );
}
