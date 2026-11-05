import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showTagline?: boolean;
}

export function Logo({ className = "", variant = "default", showTagline = false }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-transform hover:scale-[1.01] ${className}`}
      aria-label="Pixvarse Homepage"
    >
      {/* Geometric Symbol */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#063F2E] border border-[#C7F532]/40 shadow-[2px_2px_0px_0px_#C7F532] transition-all duration-300 group-hover:shadow-[3px_3px_0px_0px_#C7F532] group-hover:border-[#C7F532]">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          {/* Geometric Topographic Prism / Vertex Emblem */}
          <polygon
            points="16,3 28,10 28,22 16,29 4,22 4,10"
            stroke="#C7F532"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="transition-opacity opacity-90 group-hover:opacity-100"
          />
          <polygon
            points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5"
            stroke="#E6F4EC"
            strokeWidth="1"
            strokeLinejoin="round"
            strokeOpacity="0.4"
          />
          <path
            d="M16 3V29M4 10L28 22M28 10L4 22"
            stroke="#C7F532"
            strokeWidth="0.75"
            strokeOpacity="0.6"
          />
          <circle cx="16" cy="16" r="2.5" fill="#C7F532" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span
            className={`font-black tracking-[-0.03em] text-xl font-mono leading-none ${
              isLight ? "text-white" : "text-[#171A18] group-hover:text-[#063F2E]"
            }`}
          >
            PIXVARSE
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C7F532]" />
        </div>
        {showTagline ? (
          <span
            className={`text-[9px] uppercase tracking-[0.2em] font-semibold mt-1 ${
              isLight ? "text-emerald-200/70" : "text-[#063F2E]/70"
            }`}
          >
            Digital Studio
          </span>
        ) : null}
      </div>
    </Link>
  );
}
