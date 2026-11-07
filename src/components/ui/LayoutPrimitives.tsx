import React from "react";
import { Badge } from "./Badge";
import { BackgroundBeams } from "./BackgroundBeams";
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
    wide: "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8",
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
    canvas: "bg-canvas text-ink-primary",
    secondary: "bg-canvas-secondary text-ink-primary",
    elevated: "bg-canvas-elevated text-ink-primary",
    white: "bg-canvas text-ink-primary",
    soft: "bg-canvas-secondary text-ink-primary",
    mint: "bg-canvas text-ink-primary",
    dark: "bg-canvas text-ink-primary",
  };

  const paddingClasses = {
    none: "",
    compact: "py-12 sm:py-16",
    default: "py-16 sm:py-24",
    spacious: "py-24 sm:py-32",
  };

  return (
    <section
      className={cn(
        "relative",
        variantClasses[variant],
        paddingClasses[padding],
        borderBottom && "border-b border-edge-subtle",
        borderTop && "border-t border-edge-subtle",
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
        "relative pt-32 sm:pt-40 pb-16 sm:pb-24 bg-canvas text-ink-headline overflow-hidden border-b border-edge-subtle",
        className
      )}
    >
      <BackgroundBeams />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-6">
          {eyebrow && (
            <div>
              <Badge variant="emerald" dot={true} dotColor="emerald" size="sm">
                {eyebrow}
              </Badge>
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.03em] leading-[1.08] text-ink-headline">
            {title}{" "}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald to-cyber-cyan">
                {highlight}
              </span>
            )}
          </h1>

          {description && (
            <p className="text-base sm:text-lg md:text-xl text-ink-secondary leading-relaxed max-w-2xl font-sans font-normal">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
