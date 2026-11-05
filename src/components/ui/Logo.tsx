import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  showTagline?: boolean;
}

export function Logo({ className = "", variant = "dark", showTagline = false }: LogoProps) {
  const isDarkText = variant === "dark" || variant === "default";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 select-none transition-transform hover:scale-[1.01] ${className}`}
      aria-label="Pixvarse Homepage"
    >
      {/* Precision Geometric Symbol */}
      <div className="relative flex h-9 w-9 items-center justify-center rounded-sm bg-[#2C4058] border border-[#738B46]/40 shadow-[2px_2px_0px_0px_#738B46] transition-all duration-200 group-hover:shadow-[3px_3px_0px_0px_#738B46] group-hover:border-[#738B46]">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          {/* Geometric Topographic Prism / Vertex Emblem */}
          <polygon
            points="16,3 28,10 28,22 16,29 4,22 4,10"
            stroke="#738B46"
            strokeWidth="1.5"
            strokeLinejoin="round"
            className="transition-opacity opacity-90 group-hover:opacity-100"
          />
          <polygon
            points="16,8 24,12.5 24,19.5 16,24 8,19.5 8,12.5"
            stroke="#EEF3E6"
            strokeWidth="1"
            strokeLinejoin="round"
            strokeOpacity="0.5"
          />
          <path
            d="M16 3V29M4 10L28 22M28 10L4 22"
            stroke="#738B46"
            strokeWidth="0.75"
            strokeOpacity="0.7"
          />
          <circle cx="16" cy="16" r="2.5" fill="#738B46" />
        </svg>
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span
            className={`font-black tracking-[-0.03em] text-lg sm:text-xl font-mono leading-none transition-colors ${
              isDarkText
                ? "text-[#2C4058] group-hover:text-[#738B46]"
                : "text-white group-hover:text-[#738B46]"
            }`}
          >
            PIXVARSE
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#738B46]" />
        </div>
        {showTagline ? (
          <span
            className={`text-[9px] uppercase tracking-[0.2em] font-semibold mt-0.5 ${
              isDarkText ? "text-[#738B46]" : "text-white/70"
            }`}
          >
            Digital Studio
          </span>
        ) : null}
      </div>
    </Link>
  );
}
