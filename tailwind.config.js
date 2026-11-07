/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Obsidian Canvas Tokens (Huge Inc #050505 standard)
        canvas: {
          DEFAULT: "#050505", // Stark unapologetic obsidian black
          secondary: "#0A0A0A", // Elevated secondary stark dark
          elevated: "#111111", // Subtle raised layer
        },
        // Elevated Surfaces & Obsidian Glass
        surface: {
          obsidian: "rgba(255, 255, 255, 0.02)",
          card: "rgba(255, 255, 255, 0.03)",
          elevated: "rgba(255, 255, 255, 0.05)",
          glass: "rgba(5, 5, 5, 0.85)",
          active: "rgba(255, 255, 255, 0.08)",
        },
        // High-Contrast High-Tech Text Tokens
        ink: {
          headline: "#FFFFFF", // Pure White
          primary: "#F3F4F6", // Crisp Primary Body
          secondary: "#A1A1AA", // Muted Fog Gray
          muted: "#71717A", // Subtle Caption Gray
          faint: "#3F3F46", // Hairline Metadata Gray
        },
        // High-Voltage Accent Color System
        cyber: {
          emerald: "#00F5A0", // Electric Cyber Emerald
          magenta: "#FF0055", // Huge Inc Electric Magenta
          cyan: "#00D9F5", // Cyber Cyan
          amber: "#FF6B4A", // Warm Amber Glow
          emeraldGlow: "rgba(0, 245, 160, 0.25)",
          magentaGlow: "rgba(255, 0, 85, 0.35)",
        },
        // Border & Glass Edge Tokens
        edge: {
          subtle: "rgba(255, 255, 255, 0.08)", // 1px subtle obsidian border
          glass: "rgba(255, 255, 255, 0.12)", // Highlight border
          strong: "rgba(255, 255, 255, 0.20)", // Active card border
          emerald: "rgba(0, 245, 160, 0.40)", // Emerald accent glow border
          cyan: "rgba(0, 217, 245, 0.40)", // Cyan accent glow border
        },
      },
      fontFamily: {
        display: [
          "var(--font-syne)",
          "var(--font-plus-jakarta)",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        sans: [
          "var(--font-inter)",
          "var(--font-geist-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "glow-emerald": "0 0 30px -5px rgba(0, 245, 160, 0.35)",
        "glow-emerald-lg": "0 0 50px -10px rgba(0, 245, 160, 0.45)",
        "glow-cyan": "0 0 30px -5px rgba(0, 217, 245, 0.35)",
        "glow-amber": "0 0 30px -5px rgba(255, 107, 74, 0.35)",
        "glass-card": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "pulse-glow": "pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 35s linear infinite",
        "shine-pulse": "shine 4s ease-in-out infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shine: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};
