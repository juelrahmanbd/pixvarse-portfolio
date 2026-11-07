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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-canvas/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/80"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1560px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo variant="light" showTagline={false} />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 border border-white/10 bg-black/60 backdrop-blur-xl px-2 py-1">
              {siteConfig.navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase transition-all duration-200 select-none",
                      isActive
                        ? "bg-white text-black font-bold"
                        : "text-ink-secondary hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Available Indicator & Let's Talk CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald" />
                </span>
                <span className="text-ink-secondary font-medium">{siteConfig.status.badgeText}</span>
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

            {/* Mobile Hamburger Trigger */}
            <div className="flex md:hidden items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="text-xs px-3 py-1"
              >
                Let&apos;s Talk
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-ink-headline hover:text-cyber-emerald focus:outline-none transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={siteConfig.navigation}
        currentPath={pathname}
      />
    </>
  );
}
