import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

/**
 * Editorial Section Heading Primitive
 * Combines Syne Display typography with Cyber Emerald highlights and JetBrains Mono badges
 */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
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
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4 sm:mb-5">
          <Badge variant="emerald" dot={true} dotColor="emerald" size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-[-0.03em] leading-[1.12] text-ink-headline">
        {highlight && titleParts.match ? (
          <>
            <span>{titleParts.before}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald via-[#00F5A0] to-cyber-cyan">
              {titleParts.match}
            </span>
            <span>{titleParts.after}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-ink-secondary leading-relaxed font-sans max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
