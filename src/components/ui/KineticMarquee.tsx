"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface KineticMarqueeProps {
  words: string[];
  direction?: "left" | "right";
  speed?: number; // duration for loop in seconds
  strokeOnly?: boolean;
  className?: string;
  parallaxSpeed?: number;
}

export function KineticMarquee({
  words,
  direction = "left",
  speed = 25,
  strokeOnly = false,
  className,
  parallaxSpeed = 150,
}: KineticMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !trackRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Base infinite drift
      const xTarget = direction === "left" ? "-50%" : "0%";
      const xStart = direction === "left" ? "0%" : "-50%";

      gsap.fromTo(
        trackRef.current,
        { x: xStart },
        {
          x: xTarget,
          duration: speed,
          ease: "none",
          repeat: -1,
        }
      );

      // ScrollTrigger Parallax scrub acceleration
      gsap.to(containerRef.current, {
        x: direction === "left" ? -parallaxSpeed : parallaxSpeed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [direction, speed, parallaxSpeed]);

  // Duplicate words array to allow seamless continuous loop
  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden select-none pointer-events-none whitespace-nowrap will-change-transform py-2",
        className
      )}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="inline-flex items-center gap-6 sm:gap-10 font-display font-black uppercase tracking-tighter"
      >
        {repeated.map((word, idx) => {
          const isOutline = strokeOnly || idx % 2 === 1;
          return (
            <span
              key={idx}
              className={cn(
                "text-[7vw] sm:text-[9vw] md:text-[11vw] leading-[0.85] shrink-0 transition-opacity",
                isOutline
                  ? "text-stroke-white opacity-40 hover:opacity-80"
                  : "text-white/10 hover:text-white/30"
              )}
            >
              {word}
              <span className="inline-block mx-4 sm:mx-8 text-[4vw] text-blue-500/40 font-mono">
                {"//"}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
