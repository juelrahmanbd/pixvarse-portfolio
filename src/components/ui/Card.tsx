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
      "bg-[#FFFFFF] text-[#092D23] border border-[#092D23]/15 shadow-[4px_4px_0px_0px_#092D23]",
    soft:
      "bg-[#F8FAF6] text-[#092D23] border border-[#092D23]/15 shadow-[4px_4px_0px_0px_#092D23]",
    mint:
      "bg-[#E6F4EC] text-[#092D23] border border-[#092D23]/20 shadow-[4px_4px_0px_0px_#063F2E]",
    dark:
      "bg-[#092D23] text-white border border-[#C7F532]/25 shadow-[4px_4px_0px_0px_#C7F532]",
    outline:
      "bg-transparent text-[#092D23] border-2 border-[#092D23] shadow-[3px_3px_0px_0px_#092D23]",
  };

  const hoverClasses = hoverEffect
    ? "transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#092D23]"
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
    <div className={`text-[#092D23]/80 leading-relaxed ${className}`} {...props}>
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
      className={`mt-6 pt-4 border-t border-[#092D23]/10 flex items-center justify-between ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
