import Link from "next/link";
import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "cyber-cyan"
  | "amber"
  | "forest"
  | "outline"
  | "lime-outline"
  | "glass"
  | "text"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * Reusable Precision Button Primitive
 * High-performance styling with Electric Cyber Emerald, Obsidian Glass, and micro-hover states
 */
export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  isLoading = false,
  className = "",
  target,
  rel,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-sans font-semibold rounded-full select-none transition-all duration-200 focus-ring disabled:opacity-40 disabled:pointer-events-none cursor-pointer group overflow-hidden";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    // Primary Cyber Emerald CTA
    primary:
      "bg-cyber-emerald text-canvas font-bold shadow-glow-emerald hover:shadow-glow-emerald-lg hover:brightness-110 active:scale-[0.98] border border-cyber-emerald",

    // Secondary Obsidian Glass
    secondary:
      "bg-white/[0.05] text-ink-headline border border-white/[0.12] hover:bg-white/[0.1] hover:border-white/[0.25] active:scale-[0.98]",

    // Cyber Cyan Accent
    "cyber-cyan":
      "bg-cyber-cyan text-canvas font-bold shadow-glow-cyan hover:shadow-glow-cyan hover:brightness-110 active:scale-[0.98] border border-cyber-cyan",

    // Amber Glow Accent
    amber:
      "bg-cyber-amber text-canvas font-bold shadow-glow-amber hover:brightness-110 active:scale-[0.98] border border-cyber-amber",

    // Glass Panel
    glass:
      "glass-panel text-ink-headline hover:text-cyber-emerald border-edge-glass hover:border-cyber-emerald/50 active:scale-[0.98]",

    // Outline
    outline:
      "bg-transparent text-ink-primary border border-white/[0.15] hover:border-cyber-emerald hover:text-cyber-emerald active:scale-[0.98]",

    // Backwards-compatible aliases
    forest:
      "bg-white/[0.08] text-cyber-emerald border border-cyber-emerald/30 hover:border-cyber-emerald active:scale-[0.98]",
    "lime-outline":
      "bg-transparent text-cyber-emerald border border-cyber-emerald/50 hover:bg-cyber-emerald/10 active:scale-[0.98]",

    // Ghost & Text
    ghost: "bg-transparent text-ink-secondary hover:text-ink-headline hover:bg-white/[0.04]",
    text: "bg-transparent text-ink-secondary hover:text-cyber-emerald underline-offset-4 hover:underline p-0",
  };

  const content = (
    <>
      {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" strokeWidth={1.5} />}
      {!isLoading && icon && iconPosition === "left" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const mergedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={mergedClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={mergedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
}
