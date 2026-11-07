import React from "react";

// Official WordPress SVG
export function WordPressLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fill="#21759B"
        d="M12 2C6.486 2 2 6.486 2 12c0 4.223 2.628 7.834 6.334 9.278L4.47 9.878A9.97 9.97 0 0 1 12 4c2.146 0 4.124.678 5.748 1.832L12 2zm7.666 9.278A9.92 9.92 0 0 1 20 12c0 2.457-.889 4.707-2.368 6.452l-3.32-9.61 5.354 2.436zM12 22a9.96 9.96 0 0 1-5.748-1.832L10.37 8.358l2.97 8.622 1.942-5.498 1.054 3.064A9.97 9.97 0 0 1 12 22z"
      />
      <circle cx="12" cy="12" r="10" stroke="#21759B" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

// Official Divi SVG
export function DiviLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#7E3BD0" />
      <path
        d="M16.002 6.5C10.754 6.5 6.5 10.755 6.5 16s4.254 9.5 9.502 9.5c5.246 0 9.498-4.255 9.498-9.5s-4.252-9.5-9.498-9.5zm.02 15.65c-3.397 0-6.15-2.753-6.15-6.15 0-3.398 2.753-6.15 6.15-6.15 3.395 0 6.148 2.752 6.148 6.15 0 3.397-2.753 6.15-6.148 6.15zm2.748-7.85c-.05-.98-.6-1.57-1.58-1.63-.97-.05-1.74.52-1.95 1.44l-.06.27h-1.82v5.78h1.82v-3.56c0-.57.34-.91.87-.91.54 0 .86.35.86.91v3.56h1.82v-3.86c0-1.07-.44-1.79-1.22-2l1.26-.01v-.01z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Elementor SVG
export function ElementorLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#92003B" />
      <path
        d="M8.5 7.5h1.5v9H8.5v-9zm3.5 0h4.5V9H12v-1.5zm0 3.75h4.5v1.5H12v-1.5zm0 3.75h4.5V16.5H12V15z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Laravel SVG
export function LaravelLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M20.61 5.34l-7.39-4.26a2.23 2.23 0 00-2.22 0L3.61 5.34A2.21 2.21 0 002.5 7.26v8.52a2.21 2.21 0 001.11 1.92l7.39 4.26c.69.4 1.53.4 2.22 0l7.39-4.26a2.21 2.21 0 001.11-1.92V7.26a2.21 2.21 0 00-1.11-1.92z"
        fill="#FF2D20"
      />
      <path
        d="M12 2.6l6.8 3.92-3.8 2.19-6.8-3.92L12 2.6zm-7.6 5.3l6.8 3.92v4.38L4.4 12.3V7.9zm8.4 8.3v-4.38l6.8-3.92V12.3l-6.8 3.9z"
        fill="#FFFFFF"
        opacity="0.9"
      />
    </svg>
  );
}

// Official React SVG
export function ReactLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
    </svg>
  );
}

// Plugin Development Icon
export function PluginDevIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00F5A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <rect x="8" y="8" width="8" height="8" rx="1.5" fill="rgba(0,245,160,0.15)" stroke="#00F5A0" />
    </svg>
  );
}

// Custom Web Apps Icon
export function CustomWebAppsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00D9F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M6 8l3 3-3 3M11 14h4" stroke="#00F5A0" />
    </svg>
  );
}

// Mobile Apps Icon
export function MobileAppsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00F5A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 18h2" />
      <path d="M9 6h6" strokeOpacity="0.4" />
    </svg>
  );
}

// Full-Stack Development Icon
export function FullStackIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00D9F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" fill="rgba(0,217,245,0.12)" />
      <polyline points="2 12 12 17 22 12" />
      <polyline points="2 17 12 22 22 17" />
    </svg>
  );
}

// AI Solutions Icon
export function AISolutionsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.39 8.26L21 9.27L16 13.82L17.5 20.27L12 16.9L6.5 20.27L8 13.82L3 9.27L9.61 8.26L12 2Z"
        fill="rgba(0,245,160,0.2)"
        stroke="#00F5A0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="1.5" fill="#00F5A0" />
    </svg>
  );
}

// Team Support Icon
export function TeamSupportIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00F5A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
