"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

/**
 * Background Beams Component
 * Renders subtle light theme dot grid and soft luminous gradient aura
 */
export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-dot-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-60",
        className
      )}
    >
      {/* Radiant Gradient Flares - subtle executive depth */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none" />
    </div>
  );
}

