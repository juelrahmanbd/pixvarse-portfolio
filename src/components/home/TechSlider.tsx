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
  { name: "Plugin Engineering", icon: <PluginDevIcon className="h-4 w-4 shrink-0 text-blue-600" /> },
  { name: "Custom Web Apps", icon: <CustomWebAppsIcon className="h-4 w-4 shrink-0 text-blue-600" /> },
  { name: "Mobile Apps", icon: <MobileAppsIcon className="h-4 w-4 shrink-0 text-blue-600" /> },
  { name: "Full-Stack Development", icon: <FullStackIcon className="h-4 w-4 shrink-0 text-blue-600" /> },
  { name: "AI Solutions", icon: <AISolutionsIcon className="h-4 w-4 shrink-0 text-blue-600" /> },
  { name: "Laravel", icon: <LaravelLogo className="h-4 w-4 shrink-0" /> },
  { name: "React", icon: <ReactLogo className="h-4 w-4 shrink-0" /> },
  { name: "Team Support", icon: <TeamSupportIcon className="h-4 w-4 shrink-0 text-emerald-600" /> },
];

/**
 * Executive Light Technology Slider
 * Clean rounded pills with edge fade masks
 */
export function TechSlider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-4 sm:my-6 overflow-hidden py-2">
      {/* Edge Gradient Depth Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Marquee Track Container */}
      <div className="flex items-center space-x-3 sm:space-x-4 animate-marquee group hover:[animation-play-state:paused]">
        {[...sliderData, ...sliderData].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-4 py-2 bg-slate-50 border border-slate-200/80 rounded-full hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all duration-200 select-none shrink-0"
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <span className="text-xs font-sans font-medium text-slate-700 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
