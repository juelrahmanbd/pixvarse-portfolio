"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "glass" | "outline";
  strength?: number;
}

/**
 * Magnetic Button Component
 * Attracts smoothly to the user's cursor with spring physics
 */
export function MagneticButton({
  children,
  href,
  className,
  onClick,
  variant = "primary",
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary:
      "bg-cyber-emerald text-canvas font-bold shadow-glow-emerald hover:shadow-glow-emerald-lg border border-cyber-emerald",
    secondary:
      "bg-white/[0.05] text-ink-headline border border-white/[0.12] hover:bg-white/[0.1] hover:border-white/[0.25]",
    glass:
      "glass-panel text-ink-headline hover:text-cyber-emerald border-edge-glass hover:border-cyber-emerald/50",
    outline:
      "bg-transparent text-ink-primary border border-white/[0.15] hover:border-cyber-emerald hover:text-cyber-emerald",
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: smoothX, y: smoothY }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide transition-colors cursor-pointer select-none",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick} className="inline-block">
      {content}
    </div>
  );
}

