import React from "react";
import { TopographicBackground } from "./TopographicBackground";
import { Badge } from "./Badge";

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
    <div className={`${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "white" | "soft" | "mint" | "dark";
  padding?: "default" | "compact" | "spacious" | "none";
  borderBottom?: boolean;
  borderTop?: boolean;
  className?: string;
}

export function Section({
  children,
  variant = "white",
  padding = "default",
  borderBottom = true,
  borderTop = false,
  className = "",
  ...props
}: SectionProps) {
  const variantClasses = {
    white: "bg-[#FFFFFF] text-[#2C4058]",
    soft: "bg-[#F7F9FA] text-[#2C4058]",
    mint: "bg-[#EEF3E6] text-[#2C4058]",
    dark: "bg-[#2C4058] text-white",
  };

  const paddingClasses = {
    none: "",
    compact: "py-12 sm:py-16",
    default: "py-16 sm:py-24",
    spacious: "py-20 sm:py-32",
  };

  const borders = `${borderTop ? "border-t border-[#2C4058]/10" : ""} ${
    borderBottom ? "border-b border-[#2C4058]/10" : ""
  }`;

  return (
    <section
      className={`relative overflow-hidden ${variantClasses[variant]} ${paddingClasses[padding]} ${borders} ${className}`}
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
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  children,
  className = "",
}: PageHeaderProps) {
  // Split title if highlight word is provided
  let titleParts = { before: title, match: highlight, after: "" };
  if (highlight && title.includes(highlight)) {
    const split = title.split(highlight);
    titleParts = {
      before: split[0],
      match: highlight,
      after: split.slice(1).join(highlight),
    };
  }

  return (
    <section
      className={`relative pt-32 sm:pt-36 pb-16 sm:pb-20 bg-[#2C4058] text-white overflow-hidden border-b border-[#738B46]/30 ${className}`}
    >
      {/* Topographic line overlay */}
      <TopographicBackground opacity={0.06} strokeColor="#738B46" />

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1E2D3E] rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-5">
          {eyebrow && (
            <div>
              <Badge variant="navy" dot={true} dotColor="olive" size="sm">
                {eyebrow}
              </Badge>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.025em] leading-[1.1]">
            {highlight ? (
              <>
                {titleParts.before}
                <span className="relative inline-block my-1">
                  <span
                    className="relative inline-block text-[#FFFFFF] bg-[#738B46] px-3 py-1 rounded-sm -rotate-1 border border-[#738B46]/40 shadow-[3px_3px_0px_0px_#1E2D3E] mx-1"
                    aria-hidden="true"
                  >
                    {titleParts.match}
                  </span>
                </span>
                {titleParts.after}
              </>
            ) : (
              title
            )}
          </h1>

          {description && (
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl font-normal">
              {description}
            </p>
          )}

          {children && <div className="pt-2">{children}</div>}
        </div>
      </div>
    </section>
  );
}
