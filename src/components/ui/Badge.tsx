import React from "react";

export type BadgeVariant = "forest" | "lime" | "mint" | "surface" | "outline" | "dark";
export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  dotColor?: "lime" | "forest" | "emerald";
  className?: string;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "surface",
  dot = false,
  dotColor = "forest",
  className = "",
  size = "md",
  icon,
}: BadgeProps) {
  const sizeClasses: Record<BadgeSize, string> = {
    sm: "text-[10px] sm:text-[11px] px-2.5 py-1",
    md: "text-[11px] sm:text-xs px-3.5 py-1.5",
  };

  const variantClasses: Record<BadgeVariant, string> = {
    // Master Eyebrow style: soft background with dark border and forest shadow
    surface:
      "bg-[#F8FAF6] text-[#092D23] border border-[#092D23]/20 shadow-[2px_2px_0px_0px_#063F2E]",
    lime:
      "bg-[#C7F532] text-[#092D23] font-black border border-[#092D23] shadow-[2px_2px_0px_0px_#092D23]",
    forest:
      "bg-[#063F2E] text-[#C7F532] border border-[#C7F532]/30 shadow-[2px_2px_0px_0px_#C7F532]",
    mint:
      "bg-[#E6F4EC] text-[#092D23] border border-[#092D23]/15 shadow-[1px_1px_0px_0px_#063F2E]",
    dark:
      "bg-[#092D23] text-white border border-white/10 shadow-[2px_2px_0px_0px_#C7F532]",
    outline:
      "bg-transparent text-[#092D23] border border-[#092D23]/30 shadow-[1px_1px_0px_0px_#092D23]",
  };

  const dotClasses = {
    forest: { ping: "bg-[#C7F532]", dot: "bg-[#063F2E]" },
    lime: { ping: "bg-[#C7F532]", dot: "bg-[#092D23]" },
    emerald: { ping: "bg-[#10B981]", dot: "bg-[#059669]" },
  };

  const activeDot = dotClasses[dotColor] || dotClasses.forest;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-sm font-mono font-bold tracking-[0.16em] uppercase select-none transition-transform hover:scale-[1.01] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-80 ${activeDot.ping}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${activeDot.dot}`} />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
