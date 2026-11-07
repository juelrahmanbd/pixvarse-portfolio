import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    wide: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    full: "w-full px-4 sm:px-6 lg:px-8",
  };

  return (
    <div className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "canvas" | "secondary" | "elevated" | "white" | "soft" | "mint" | "dark";
  padding?: "default" | "compact" | "spacious" | "none";
  borderBottom?: boolean;
  borderTop?: boolean;
  className?: string;
}

export function Section({
  children,
  variant = "canvas",
  padding = "default",
  borderBottom = true,
  borderTop = false,
  className = "",
  ...props
}: SectionProps) {
  const variantClasses = {
    canvas: "bg-white text-slate-900",
    secondary: "bg-slate-50 text-slate-900",
    elevated: "bg-white text-slate-900",
    white: "bg-white text-slate-900",
    soft: "bg-slate-50/70 text-slate-900",
    mint: "bg-emerald-50/30 text-slate-900",
    dark: "bg-slate-900 text-white",
  };

  const paddingClasses = {
    none: "",
    compact: "py-12 sm:py-16",
    default: "py-20 sm:py-28",
    spacious: "py-28 sm:py-36",
  };

  return (
    <section
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        borderBottom && "border-b border-slate-200/80",
        borderTop && "border-t border-slate-200/80",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  className = "",
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white text-slate-900 overflow-hidden border-b border-slate-200/80 bg-dot-grid",
        className
      )}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-5">
          {eyebrow && (
            <div>
              <Badge variant="cyan" dot={true} dotColor="cyan" size="sm">
                {eyebrow}
              </Badge>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight leading-[1.1] text-slate-900">
            {title}{" "}
            {highlight && (
              <span className="text-blue-600">
                {highlight}
              </span>
            )}
          </h1>

          {description && (
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-sans font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
