import React from "react";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  const isCenter = align === "center";

  // Split title if highlight word is provided
  let titleParts = { before: title, match: highlight, after: "" };
  if (highlight && title.includes(highlight)) {
    const split = title.split(highlight);
    titleParts = {
      before: split[0],
      match: highlight,
      after: split.slice(1).join(highlight),
    };
  }

  return (
    <div
      className={`flex flex-col ${
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="mb-4 sm:mb-5">
          <Badge
            variant={isDark ? "navy" : "surface"}
            dot={true}
            dotColor="olive"
            size="sm"
          >
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.025em] leading-[1.12] ${
          isDark ? "text-white" : "text-[#2C4058]"
        }`}
      >
        {highlight ? (
          <>
            {titleParts.before}
            <span className="relative inline-block my-1">
              <span
                className={`relative inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-sm -rotate-1 mx-1 ${
                  isDark
                    ? "text-[#FFFFFF] bg-[#738B46] shadow-[3px_3px_0px_0px_#1E2D3E]"
                    : "text-[#FFFFFF] bg-[#738B46] shadow-[3px_3px_0px_0px_#2C4058]"
                }`}
                aria-hidden="true"
              >
                {titleParts.match}
              </span>
            </span>
            {titleParts.after}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-white/80" : "text-[#2C4058]/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
