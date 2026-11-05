import React from "react";

export type BadgeVariant =
  | "surface"
  | "olive"
  | "navy"
  | "forest"
  | "lime"
  | "mint"
  | "dark"
  | "outline";

export type BadgeSize = "sm" | "md";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  dotColor?: "olive" | "navy" | "forest" | "lime" | "emerald";
  className?: string;
  size?: BadgeSize;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "surface",
  dot = false,
  dotColor = "olive",
  className = "",
  size = "md",
  icon,
}: BadgeProps) {
  const sizeClasses: Record<BadgeSize, string> = {
    sm: "text-[10px] sm:text-[11px] px-2.5 py-1",
    md: "text-[11px] sm:text-xs px-3.5 py-1.5",
  };

  const variantClasses: Record<BadgeVariant, string> = {
    // Master Eyebrow style: clean surface with navy border and olive shadow
    surface:
      "bg-[#FFFFFF] text-[#2C4058] border border-[#2C4058]/20 shadow-[2px_2px_0px_0px_#738B46]",
    olive:
      "bg-[#738B46] text-[#FFFFFF] font-black border border-[#2C4058] shadow-[2px_2px_0px_0px_#2C4058]",
    lime:
      "bg-[#738B46] text-[#FFFFFF] font-black border border-[#2C4058] shadow-[2px_2px_0px_0px_#2C4058]",
    navy:
      "bg-[#2C4058] text-[#FFFFFF] border border-[#738B46]/40 shadow-[2px_2px_0px_0px_#738B46]",
    forest:
      "bg-[#2C4058] text-[#FFFFFF] border border-[#738B46]/40 shadow-[2px_2px_0px_0px_#738B46]",
    mint:
      "bg-[#EEF3E6] text-[#2C4058] border border-[#738B46]/30 shadow-[1px_1px_0px_0px_#738B46]",
    dark:
      "bg-[#1E2D3E] text-white border border-white/15 shadow-[2px_2px_0px_0px_#738B46]",
    outline:
      "bg-transparent text-[#2C4058] border border-[#2C4058]/30 shadow-[1px_1px_0px_0px_#2C4058]",
  };

  const dotClasses = {
    olive: { ping: "bg-[#738B46]", dot: "bg-[#738B46]" },
    lime: { ping: "bg-[#738B46]", dot: "bg-[#738B46]" },
    navy: { ping: "bg-[#2C4058]", dot: "bg-[#2C4058]" },
    forest: { ping: "bg-[#738B46]", dot: "bg-[#2C4058]" },
    emerald: { ping: "bg-[#738B46]", dot: "bg-[#5E7337]" },
  };

  const activeDot = dotClasses[dotColor] || dotClasses.olive;

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
