import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showTagline?: boolean;
}

/**
 * Pixvarse High-Tech Monogram & Typography Mark
 */
export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 select-none transition-transform hover:scale-[1.01]",
        className
      )}
      aria-label="Pixvarse Homepage"
    >
      {/* Precision Geometric Prism Emblem */}
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.12] backdrop-blur-md shadow-glow-emerald transition-all duration-300 group-hover:border-cyber-emerald group-hover:shadow-glow-emerald-lg">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <polygon
            points="16,3 28,10 28,22 16,29 4,22 4,10"
            stroke="#00F5A0"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="transition-opacity opacity-90 group-hover:opacity-100"
          />
          <polygon
            points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5"
            stroke="#00D9F5"
            strokeWidth="1"
            strokeLinejoin="round"
            strokeOpacity="0.6"
          />
          <path
            d="M16 3V29M4 10L28 22M28 10L4 22"
            stroke="#00F5A0"
            strokeWidth="0.75"
            strokeOpacity="0.4"
          />
          <circle cx="16" cy="16" r="2.5" fill="#00F5A0" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-display font-extrabold tracking-[-0.03em] text-lg sm:text-xl text-ink-headline leading-none group-hover:text-cyber-emerald transition-colors">
            Pixvarse
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyber-emerald animate-pulse" />
        </div>
        {showTagline && (
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-muted leading-tight mt-0.5">
            Digital Studio
          </span>
        )}
      </div>
    </Link>
  );
}
