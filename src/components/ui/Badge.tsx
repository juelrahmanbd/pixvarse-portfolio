import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "forest" | "mint" | "outline" | "dark";
  dot?: boolean;
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "outline",
  dot = false,
  className = "",
  size = "md",
}: BadgeProps) {
  const sizeClasses = size === "sm" ? "text-[11px] px-2.5 py-0.5" : "text-xs px-3 py-1";

  const variantClasses = {
    lime: "bg-[#C7F532] text-[#092D23] font-bold border border-[#092D23]/20",
    forest: "bg-[#063F2E] text-[#C7F532] border border-[#C7F532]/30",
    mint: "bg-[#E6F4EC] text-[#063F2E] border border-[#063F2E]/15 font-semibold",
    dark: "bg-[#171A18] text-[#F8FAF6] border border-white/10",
    outline: "bg-transparent text-[#063F2E] border border-[#063F2E]/30 font-medium",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider font-mono ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C7F532] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C7F532]" />
        </span>
      )}
      {children}
    </span>
  );
}

