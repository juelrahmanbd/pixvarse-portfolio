import React from "react";
import { Badge } from "./Badge";

interface SectionHeadingProps {
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
        <div className="mb-3.5">
          <Badge
            variant={isDark ? "forest" : "mint"}
            dot={true}
            size="sm"
            className="tracking-widest"
          >
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.12] ${
          isDark ? "text-white" : "text-[#171A18]"
        }`}
      >
        {highlight ? (
          <>
            {titleParts.before}
            <span className="relative inline-block text-[#C7F532] bg-[#063F2E] px-2 py-0.5 rounded-md -rotate-1 shadow-[2px_2px_0px_0px_#C7F532] mx-1">
              {titleParts.match}
            </span>
            {titleParts.after}
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-[#171A18]/75"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

