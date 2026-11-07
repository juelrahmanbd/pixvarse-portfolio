import Link from "next/link";
import React from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "cobalt"
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
 * Reusable Executive Button Primitive
 * High-legibility Swiss/Apple styling with Solid Slate, Crisp White, and Tech Cobalt accents
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
    "relative inline-flex items-center justify-center font-sans font-medium rounded-xl select-none transition-all duration-200 focus-ring disabled:opacity-40 disabled:pointer-events-none cursor-pointer group";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2",
    lg: "text-sm sm:text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    // Primary Solid Slate Black (Executive Standard)
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow active:scale-[0.98] border border-slate-900",

    // Secondary Crisp White Card
    secondary:
      "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm active:scale-[0.98]",

    // Tech Cobalt Accent
    cobalt:
      "bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-sm active:scale-[0.98] border border-blue-600",
    "cyber-cyan":
      "bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-sm active:scale-[0.98] border border-blue-600",

    amber:
      "bg-amber-600 text-white font-medium hover:bg-amber-700 shadow-sm active:scale-[0.98] border border-amber-600",

    glass:
      "bg-white/80 backdrop-blur-md text-slate-800 border border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm active:scale-[0.98]",

    outline:
      "bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98]",

    // Backwards-compatible aliases
    forest:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 active:scale-[0.98]",
    "lime-outline":
      "bg-transparent text-blue-600 border border-blue-200 hover:bg-blue-50 active:scale-[0.98]",

    ghost: "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/70",
    text: "bg-transparent text-slate-600 hover:text-blue-600 underline-offset-4 hover:underline p-0",
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

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClass} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
}
