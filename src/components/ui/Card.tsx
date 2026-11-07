"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export type CardVariant = "glass" | "obsidian" | "elevated" | "white" | "soft" | "mint" | "dark" | "outline";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverEffect?: boolean;
  spotlight?: boolean;
  className?: string;
}

/**
 * Executive Light Card Primitive
 * Clean Swiss/Apple elevation, soft shadows, rounded-2xl, and micro-hover lift
 */
export function Card({
  children,
  variant = "glass",
  hoverEffect = true,
  spotlight = true,
  className = "",
  ...props
}: CardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !spotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const variantStyles: Record<CardVariant, string> = {
    glass:
      "bg-white text-ink-primary border border-slate-200/80 shadow-card",
    obsidian:
      "bg-white text-ink-primary border border-slate-200/80 shadow-card",
    elevated:
      "bg-white text-ink-headline border border-slate-200 shadow-card",
    outline:
      "bg-transparent text-ink-primary border border-slate-200",
    white:
      "bg-white text-ink-primary border border-slate-200/80 shadow-card",
    soft:
      "bg-slate-50/70 text-ink-primary border border-slate-200/60 shadow-subtle",
    mint:
      "bg-emerald-50/50 text-ink-primary border border-emerald-100 shadow-subtle",
    dark:
      "bg-slate-900 text-white border border-slate-900 shadow-md",
  };

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:border-slate-300 hover:shadow-cardHover hover:-translate-y-1"
    : "";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl overflow-hidden",
        variantStyles[variant],
        hoverClasses,
        className
      )}
      {...props}
    >
      {/* Subtle cursor spotlight glow */}
      {spotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.035), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
