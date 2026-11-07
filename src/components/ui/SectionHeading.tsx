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
 * Swiss/Apple-grade typography hierarchy with Deep Slate contrast and Tech Cobalt highlights
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
        <div className="mb-3.5 sm:mb-4">
          <Badge variant="cyan" dot={true} dotColor="cyan" size="sm">
            {eyebrow}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.15] text-slate-900">
        {highlight && titleParts.match ? (
          <>
            <span>{titleParts.before}</span>
            <span className="text-blue-600">
              {titleParts.match}
            </span>
            <span>{titleParts.after}</span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </h2>

      {description && (
        <p className="mt-3.5 sm:mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
