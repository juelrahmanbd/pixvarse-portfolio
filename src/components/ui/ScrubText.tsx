"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface ScrubTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  start?: string;
  end?: string;
}

/**
 * ScrubText Component
 * PORSCHE RACING / BRUTALIST LUXURY:
 * Scrubs typography fill-color word-by-word from muted dark gray to pure high-white as user scrolls.
 */
export function ScrubText({
  text,
  className,
  wordClassName,
  as: Component = "h2",
  start = "top 85%",
  end = "bottom 50%",
}: ScrubTextProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const words = containerRef.current.querySelectorAll(".scrub-word");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          color: "rgba(255, 255, 255, 0.16)",
          opacity: 0.35,
        },
        {
          color: "#FFFFFF",
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            end,
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, start, end]);

  const words = text.split(" ");

  return React.createElement(
    Component,
    {
      ref: containerRef,
      className: cn("leading-[1.15] font-display", className),
    },
    words.map((word, idx) => (
      <span
        key={idx}
        className={cn(
          "scrub-word inline-block mr-[0.25em] transition-colors duration-75",
          wordClassName
        )}
      >
        {word}
      </span>
    ))
  );
}

