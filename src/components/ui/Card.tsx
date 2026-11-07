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
 * Obsidian Glassmorphic Card Primitive
 * Meets Awwwards specifications with cursor-reactive spotlights and hairline borders
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
      "bg-white/[0.03] text-ink-primary border border-white/[0.08] backdrop-blur-xl shadow-glass-card",
    obsidian:
      "bg-canvas-secondary/90 text-ink-primary border border-white/[0.06] backdrop-blur-md shadow-2xl",
    elevated:
      "bg-white/[0.06] text-ink-headline border border-white/[0.12] backdrop-blur-2xl shadow-glass-card",
    outline:
      "bg-transparent text-ink-primary border border-white/[0.12]",
    // Compatibility aliases
    white:
      "bg-white/[0.03] text-ink-primary border border-white/[0.08] backdrop-blur-xl",
    soft:
      "bg-white/[0.04] text-ink-primary border border-white/[0.08] backdrop-blur-xl",
    mint:
      "bg-cyber-emerald/[0.03] text-ink-primary border border-cyber-emerald/20",
    dark:
      "bg-canvas-secondary text-ink-primary border border-white/[0.08]",
  };

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-black/70 hover:translate-y-[-2px]"
    : "";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative rounded-2xl p-6 sm:p-8 overflow-hidden",
        variantStyles[variant],
        hoverClasses,
        className
      )}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 160, 0.08), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      {children}
    </div>
  );
}
