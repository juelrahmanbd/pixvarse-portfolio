"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./BorderBeam";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface BentoGridItemProps {
  className?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  tags?: string[];
  ctaText?: string;
  ctaHref?: string;
  showBeam?: boolean;
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  tags,
  ctaText,
  ctaHref,
  showBeam = false,
}: BentoGridItemProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative row-span-1 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden",
        "bg-surface-card border border-edge-subtle backdrop-blur-xl transition-all duration-300",
        "hover:border-edge-glass hover:bg-surface-elevated hover:shadow-2xl hover:shadow-black/60",
        className
      )}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 160, 0.08), transparent 80%)`,
        }}
      />

      {/* Optional Border Beam for flagship bento items */}
      {showBeam && isHovered && (
        <BorderBeam size={250} duration={8} colorFrom="#00F5A0" colorTo="#00D9F5" />
      )}

      {/* Top Media / Visual Header */}
      {header && <div className="w-full relative overflow-hidden rounded-xl mb-4">{header}</div>}

      {/* Content & Metadata */}
      <div className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
        {/* Icon & Tags */}
        <div className="flex items-center justify-between gap-3 mb-4">
          {icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] text-cyber-emerald group-hover:scale-105 group-hover:border-cyber-emerald/40 transition-all">
              {icon}
            </div>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 justify-end">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase text-ink-secondary bg-white/[0.03] border border-white/[0.06] rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Title */}
        <div className="font-display font-bold text-lg sm:text-xl text-ink-headline tracking-tight group-hover:text-cyber-emerald transition-colors">
          {title}
        </div>

        {/* Description */}
        <div className="mt-2 text-sm text-ink-secondary leading-relaxed font-sans line-clamp-3">
          {description}
        </div>

        {/* CTA Link */}
        {ctaText && ctaHref && (
          <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono font-medium tracking-wider uppercase text-ink-muted group-hover:text-cyber-emerald transition-colors">
            <span>{ctaText}</span>
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </div>
        )}
      </div>
    </div>
  );
}

