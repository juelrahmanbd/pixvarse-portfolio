import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "emerald" | "cyan" | "amber" | "surface" | "outline" | "dark" | "forest" | "lime" | "mint";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  dotColor?: "emerald" | "cyan" | "amber" | "lime" | "forest";
  className?: string;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

/**
 * High-Tech Terminal Badge Primitive
 * Formatted with JetBrains Mono, micro-borders, and pulsing status beacons
 */
export function Badge({
  children,
  variant = "surface",
  dot = false,
  dotColor = "emerald",
  className = "",
  size = "md",
  icon,
}: BadgeProps) {
  const sizeClasses: Record<BadgeSize, string> = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1.5",
    md: "text-[11px] px-3 py-1 gap-2",
  };

  const variantClasses: Record<BadgeVariant, string> = {
    // Primary Cyber Emerald Eyebrow Pill
    emerald:
      "bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30 shadow-[0_0_12px_rgba(0,245,160,0.15)]",
    // Cyber Cyan Variant
    cyan:
      "bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 shadow-[0_0_12px_rgba(0,217,245,0.15)]",
    // Amber Accent Variant
    amber:
      "bg-cyber-amber/10 text-cyber-amber border border-cyber-amber/30",
    // Obsidian Surface Glass
    surface:
      "bg-white/[0.04] text-ink-headline border border-white/[0.1] backdrop-blur-md",
    dark:
      "bg-black/60 text-ink-primary border border-white/[0.08]",
    outline:
      "bg-transparent text-ink-secondary border border-white/[0.12]",
    // Compatibility aliases
    forest:
      "bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30",
    lime:
      "bg-cyber-emerald/15 text-cyber-emerald border border-cyber-emerald/40",
    mint:
      "bg-white/[0.04] text-cyber-cyan border border-cyber-cyan/20",
  };

  const dotClasses = {
    emerald: { ping: "bg-cyber-emerald", dot: "bg-cyber-emerald" },
    cyan: { ping: "bg-cyber-cyan", dot: "bg-cyber-cyan" },
    amber: { ping: "bg-cyber-amber", dot: "bg-cyber-amber" },
    lime: { ping: "bg-cyber-emerald", dot: "bg-cyber-emerald" },
    forest: { ping: "bg-cyber-emerald", dot: "bg-cyber-emerald" },
  };

  const activeDot = dotClasses[dotColor] || dotClasses.emerald;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-mono font-medium tracking-wider uppercase select-none transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              activeDot.ping
            )}
          />
          <span
            className={cn("relative inline-flex rounded-full h-2 w-2", activeDot.dot)}
          />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
