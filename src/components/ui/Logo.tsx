import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showTagline?: boolean;
}

/**
 * Pixvarse Executive Monogram & Typography Mark
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
      {/* Precision Geometric Emblem */}
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition-all duration-200 group-hover:bg-blue-600">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <polygon
            points="16,3 28,10 28,22 16,29 4,22 4,10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <polygon
            points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
          <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-display font-bold tracking-tight text-lg sm:text-xl text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
            Pixvarse
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        </div>

        {showTagline && (
          <span className="font-sans text-[11px] font-normal text-slate-500 tracking-normal mt-0.5">
            Digital Engineering Studio
          </span>
        )}
      </div>
    </Link>
  );
}
