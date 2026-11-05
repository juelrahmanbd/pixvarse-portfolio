import React from "react";

export type CardVariant = "white" | "soft" | "mint" | "dark" | "outline";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hoverEffect?: boolean;
  sharp?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = "white",
  hoverEffect = true,
  sharp = true,
  className = "",
  ...props
}: CardProps) {
  const variantStyles: Record<CardVariant, string> = {
    white:
      "bg-[#FFFFFF] text-[#2C4058] border border-[#2C4058]/15 shadow-[4px_4px_0px_0px_#2C4058]",
    soft:
      "bg-[#F7F9FA] text-[#2C4058] border border-[#2C4058]/15 shadow-[4px_4px_0px_0px_#2C4058]",
    mint:
      "bg-[#EEF3E6] text-[#2C4058] border border-[#738B46]/30 shadow-[4px_4px_0px_0px_#738B46]",
    dark:
      "bg-[#2C4058] text-white border border-[#738B46]/35 shadow-[4px_4px_0px_0px_#738B46]",
    outline:
      "bg-transparent text-[#2C4058] border-2 border-[#2C4058] shadow-[3px_3px_0px_0px_#2C4058]",
  };

  const hoverClasses = hoverEffect
    ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#738B46]"
    : "";

  const roundedClasses = sharp ? "rounded-sm" : "rounded-md";

  return (
    <div
      className={`relative p-6 sm:p-8 ${roundedClasses} ${variantStyles[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 space-y-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`text-[#2C4058]/80 leading-relaxed font-sans ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`mt-6 pt-4 border-t border-[#2C4058]/10 flex items-center justify-between ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
