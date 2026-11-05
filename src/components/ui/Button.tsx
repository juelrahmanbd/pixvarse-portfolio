import Link from "next/link";
import React from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "forest"
  | "outline"
  | "lime-outline"
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
  // Base structural styles honoring the Master sharp neo-brutalist geometry
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-black uppercase tracking-wider rounded-sm select-none transition-all duration-150 focus-ring disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none cursor-pointer group";

  // Size scale
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 border",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2 border-2",
    lg: "text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 gap-2.5 border-2",
  };

  // Button variants strictly using Navy Blue (#2C4058) + Olive Green (#738B46) + White (#FFFFFF)
  const variantStyles: Record<ButtonVariant, string> = {
    // Official Primary Button: Navy Blue with Olive Green hover
    primary:
      "bg-[#2C4058] text-[#FFFFFF] hover:bg-[#738B46] border-[#2C4058] shadow-[4px_4px_0px_0px_#738B46] hover:shadow-[2px_2px_0px_0px_#2C4058] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Official Secondary Button: White with Navy Blue border, text & hover
    secondary:
      "bg-[#FFFFFF] text-[#2C4058] hover:bg-[#2C4058] hover:text-[#FFFFFF] border-[#2C4058] shadow-[4px_4px_0px_0px_#2C4058] hover:shadow-[2px_2px_0px_0px_#738B46] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Official Accent Button: Olive Green with Navy Blue hover
    accent:
      "bg-[#738B46] text-[#FFFFFF] hover:bg-[#2C4058] hover:text-[#FFFFFF] border-[#738B46] shadow-[4px_4px_0px_0px_#2C4058] hover:shadow-[2px_2px_0px_0px_#738B46] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Alias for accent/forest for backwards compatibility
    forest:
      "bg-[#738B46] text-[#FFFFFF] hover:bg-[#2C4058] hover:text-[#FFFFFF] border-[#738B46] shadow-[4px_4px_0px_0px_#2C4058] hover:shadow-[2px_2px_0px_0px_#738B46] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Outline Variant
    outline:
      "bg-transparent text-[#2C4058] hover:bg-[#EEF3E6] border-[#2C4058]/30 hover:border-[#2C4058] shadow-[2px_2px_0px_0px_#2C4058] hover:shadow-[1px_1px_0px_0px_#2C4058] hover:translate-x-[1px] hover:translate-y-[1px]",

    // Olive Outline Variant (designed for dark Navy sections like Footer / CTA)
    "lime-outline":
      "bg-transparent text-[#FFFFFF] hover:bg-[#738B46] hover:text-[#FFFFFF] border-white/60 hover:border-[#738B46] shadow-[3px_3px_0px_0px_#738B46] hover:shadow-[1px_1px_0px_0px_#738B46] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Text Link Button (minimal inline action with olive underline)
    text:
      "bg-transparent text-[#2C4058] hover:text-[#738B46] underline decoration-[#738B46] decoration-2 underline-offset-4 border-0 shadow-none px-0 py-0 hover:translate-x-0 hover:translate-y-0",

    // Ghost / Subdued
    ghost:
      "bg-transparent text-[#2C4058] hover:bg-[#EEF3E6] border-transparent hover:border-[#2C4058]/20 shadow-none",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin shrink-0" />
      ) : (
        icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
}
