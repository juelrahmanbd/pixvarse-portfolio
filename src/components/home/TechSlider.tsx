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
  { name: "WordPress", icon: <WordPressLogo className="h-5 w-5 shrink-0" /> },
  { name: "Divi", icon: <DiviLogo className="h-5 w-5 shrink-0" /> },
  { name: "Elementor", icon: <ElementorLogo className="h-5 w-5 shrink-0" /> },
  { name: "Plugin Development", icon: <PluginDevIcon className="h-5 w-5 shrink-0" /> },
  { name: "Custom Web Apps", icon: <CustomWebAppsIcon className="h-5 w-5 shrink-0" /> },
  { name: "Mobile Apps", icon: <MobileAppsIcon className="h-5 w-5 shrink-0" /> },
  { name: "Full-Stack Development", icon: <FullStackIcon className="h-5 w-5 shrink-0" /> },
  { name: "AI Solutions", icon: <AISolutionsIcon className="h-5 w-5 shrink-0" /> },
  { name: "Laravel Development", icon: <LaravelLogo className="h-5 w-5 shrink-0" /> },
  { name: "React Development", icon: <ReactLogo className="h-5 w-5 shrink-0" /> },
  { name: "Team Support", icon: <TeamSupportIcon className="h-5 w-5 shrink-0" /> },
];

export function TechSlider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-8 sm:my-10 overflow-hidden py-3">
      {/* Edge Gradient Fade Masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Marquee Track Container */}
      <div className="flex items-center space-x-3 sm:space-x-4 animate-marquee group hover:[animation-play-state:paused]">
        {/* Double array for seamless infinite loop */}
        {[...sliderData, ...sliderData].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#FFFFFF] border border-[#092D23]/15 rounded-sm shadow-[1px_1px_0px_0px_#063F2E] hover:border-[#063F2E] hover:shadow-[2px_2px_0px_0px_#C7F532] hover:-translate-y-0.5 transition-all duration-200 select-none shrink-0"
          >
            <div className="flex items-center justify-center">{item.icon}</div>
            <span className="text-xs sm:text-sm font-bold font-mono text-[#092D23] whitespace-nowrap tracking-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
