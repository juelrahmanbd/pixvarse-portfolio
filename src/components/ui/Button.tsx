import Link from "next/link";
import React from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
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
  // Base structural styles honoring the Master Hero design reference
  const baseStyles =
    "inline-flex items-center justify-center font-mono font-black uppercase tracking-wider rounded-sm select-none transition-all duration-150 focus-ring disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none cursor-pointer group";

  // Size scale
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5 border",
    md: "text-xs sm:text-sm px-5 py-2.5 gap-2 border-2",
    lg: "text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 gap-2.5 border-2",
  };

  // Neo-brutalist variants directly matching the approved Hero styling language
  const variantStyles: Record<ButtonVariant, string> = {
    // Master Hero Primary CTA
    primary:
      "bg-[#C7F532] text-[#092D23] hover:bg-[#B6E228] border-[#092D23] shadow-[4px_4px_0px_0px_#092D23] hover:shadow-[2px_2px_0px_0px_#092D23] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Master Hero Secondary CTA
    secondary:
      "bg-[#FFFFFF] text-[#092D23] hover:bg-[#E6F4EC] border-[#092D23] shadow-[4px_4px_0px_0px_#092D23] hover:shadow-[2px_2px_0px_0px_#092D23] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Forest Green Dark Variant (for dark surfaces or high contrast CTA)
    forest:
      "bg-[#063F2E] text-[#C7F532] hover:bg-[#092D23] border-[#C7F532]/40 shadow-[4px_4px_0px_0px_#C7F532] hover:shadow-[2px_2px_0px_0px_#C7F532] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Outline Variant
    outline:
      "bg-transparent text-[#092D23] hover:bg-[#E6F4EC] border-[#092D23]/30 hover:border-[#092D23] shadow-[2px_2px_0px_0px_#092D23] hover:shadow-[1px_1px_0px_0px_#092D23] hover:translate-x-[1px] hover:translate-y-[1px]",

    // Lime Outline Variant (for dark backgrounds)
    "lime-outline":
      "bg-transparent text-[#C7F532] hover:bg-[#C7F532] hover:text-[#092D23] border-[#C7F532] shadow-[3px_3px_0px_0px_#C7F532] hover:shadow-[1px_1px_0px_0px_#C7F532] hover:translate-x-[2px] hover:translate-y-[2px]",

    // Text Link Button (minimal inline action with underline/arrow hover)
    text:
      "bg-transparent text-[#092D23] hover:text-[#063F2E] underline decoration-[#C7F532] decoration-2 underline-offset-4 border-0 shadow-none px-0 py-0 hover:translate-x-0 hover:translate-y-0",

    // Ghost / Subdued
    ghost:
      "bg-transparent text-[#092D23] hover:bg-[#E6F4EC] border-transparent hover:border-[#092D23]/10 shadow-none",
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
