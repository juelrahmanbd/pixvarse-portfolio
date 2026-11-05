import Link from "next/link";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost" | "lime-outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
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
  className = "",
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C7F532] focus:ring-offset-2 active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-lg gap-2",
    lg: "text-base px-6 py-3.5 rounded-lg gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#C7F532] text-[#092D23] hover:bg-[#b6e228] border border-[#092D23] shadow-[3px_3px_0px_0px_#063F2E] hover:shadow-[1px_1px_0px_0px_#063F2E] hover:translate-x-[2px] hover:translate-y-[2px]",
    secondary:
      "bg-[#063F2E] text-[#C7F532] hover:bg-[#092D23] border border-[#C7F532]/30 shadow-[3px_3px_0px_0px_#C7F532] hover:shadow-[1px_1px_0px_0px_#C7F532] hover:translate-x-[2px] hover:translate-y-[2px]",
    dark: "bg-[#092D23] text-white hover:bg-[#063F2E] border border-white/10 shadow-[3px_3px_0px_0px_#C7F532]",
    outline:
      "bg-transparent text-[#171A18] hover:bg-[#063F2E] hover:text-[#C7F532] border border-[#171A18]/30 hover:border-[#063F2E]",
    "lime-outline":
      "bg-transparent text-[#C7F532] hover:bg-[#C7F532] hover:text-[#092D23] border border-[#C7F532]/40 hover:border-[#C7F532]",
    ghost: "bg-transparent text-[#171A18] hover:bg-[#E6F4EC] hover:text-[#063F2E]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
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
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}

