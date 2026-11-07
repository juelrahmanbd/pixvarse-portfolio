"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  stagger?: number;
  duration?: number;
  splitBy?: "words" | "chars" | "lines";
}

/**
 * TextReveal Component
 * Uses GSAP ScrollTrigger + SplitType to create Awwwards-grade mask-up typography reveals
 */
export function TextReveal({
  children,
  className,
  as: Component = "h2",
  stagger = 0.04,
  duration = 0.9,
  splitBy = "words",
}: TextRevealProps) {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !textRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    let splitInstance: SplitType | null = null;

    try {
      splitInstance = new SplitType(textRef.current, {
        types: splitBy,
      });

      const targets =
        splitBy === "words"
          ? splitInstance.words
          : splitBy === "chars"
          ? splitInstance.chars
          : splitInstance.lines;

      if (targets && targets.length > 0) {
        gsap.fromTo(
          targets,
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration,
            stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    } catch {
      // Fallback simple reveal if DOM is mutating
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }

    return () => {
      splitInstance?.revert();
    };
  }, [children, splitBy, stagger, duration]);

  return React.createElement(
    Component,
    {
      ref: textRef,
      className: cn("overflow-hidden inline-block", className),
    },
    children
  );
}
