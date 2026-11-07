"use client";

import React from "react";
import {
  WordPressLogo,
  DiviLogo,
  ElementorLogo,
  LaravelLogo,
  ReactLogo,
  PluginDevIcon,
  CustomWebAppsIcon,
  MobileAppsIcon,
  FullStackIcon,
  AISolutionsIcon,
  TeamSupportIcon,
} from "./TechLogos";

export interface SliderItem {
  name: string;
  category?: string;
  icon: React.ReactNode;
}

const sliderData: SliderItem[] = [
  { name: "WordPress", icon: <WordPressLogo className="h-4 w-4 shrink-0" /> },
  { name: "Divi", icon: <DiviLogo className="h-4 w-4 shrink-0" /> },
  { name: "Elementor", icon: <ElementorLogo className="h-4 w-4 shrink-0" /> },
  { name: "Plugin Engineering", icon: <PluginDevIcon className="h-4 w-4 shrink-0" /> },
  { name: "Custom Web Apps", icon: <CustomWebAppsIcon className="h-4 w-4 shrink-0" /> },
  { name: "Mobile Apps", icon: <MobileAppsIcon className="h-4 w-4 shrink-0" /> },
  { name: "Full-Stack Development", icon: <FullStackIcon className="h-4 w-4 shrink-0" /> },
  { name: "AI Solutions", icon: <AISolutionsIcon className="h-4 w-4 shrink-0" /> },
  { name: "Laravel", icon: <LaravelLogo className="h-4 w-4 shrink-0" /> },
  { name: "React", icon: <ReactLogo className="h-4 w-4 shrink-0" /> },
  { name: "Team Support", icon: <TeamSupportIcon className="h-4 w-4 shrink-0" /> },
];

/**
 * Infinite High-Tech Marquee Slider
 * Obsidian glass capsules with edge fading
 */
export function TechSlider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-6 sm:my-8 overflow-hidden py-3">
      {/* Edge Gradient Depth Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-canvas via-canvas/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-canvas via-canvas/90 to-transparent z-10" />

      {/* Marquee Track Container */}
      <div className="flex items-center space-x-3 sm:space-x-4 animate-marquee group hover:[animation-play-state:paused]">
        {[...sliderData, ...sliderData].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-full hover:border-cyber-emerald/40 hover:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(0,245,160,0.15)] transition-all duration-300 select-none shrink-0"
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <span className="text-xs font-mono font-medium text-ink-primary whitespace-nowrap tracking-wider">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
