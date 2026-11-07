import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "emerald"
  | "cyan"
  | "cobalt"
  | "amber"
  | "surface"
  | "outline"
  | "dark"
  | "forest"
  | "lime"
  | "mint";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  dotColor?: "emerald" | "cyan" | "cobalt" | "amber" | "lime" | "forest";
  className?: string;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

/**
 * Clean Executive Badge Primitive
 * Formatted with JetBrains Mono, crisp borders, and subtle status beacons
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
    md: "text-xs px-3 py-1 gap-2",
  };

  const variantClasses: Record<BadgeVariant, string> = {
    // Subtle Emerald Status Pill
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
    forest: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",
    lime: "bg-emerald-50 text-emerald-700 border border-emerald-200/80",

    // Tech Cobalt Pill
    cobalt: "bg-blue-50 text-blue-700 border border-blue-200/80",
    cyan: "bg-blue-50 text-blue-700 border border-blue-200/80",
    mint: "bg-blue-50 text-blue-700 border border-blue-200/80",

    // Amber
    amber: "bg-amber-50 text-amber-700 border border-amber-200/80",

    // Neutral Clean Surface
    surface: "bg-slate-50 text-slate-700 border border-slate-200/80",
    dark: "bg-slate-900 text-white border border-slate-900",
    outline: "bg-white text-slate-600 border border-slate-200",
  };

  const dotClasses: Record<string, string> = {
    emerald: "bg-emerald-500",
    forest: "bg-emerald-500",
    lime: "bg-emerald-500",
    cyan: "bg-blue-500",
    cobalt: "bg-blue-500",
    amber: "bg-amber-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium rounded-full select-none transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-60",
              dotClasses[dotColor] || "bg-emerald-500"
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotClasses[dotColor] || "bg-emerald-500"
            )}
          />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
