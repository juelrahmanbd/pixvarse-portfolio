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
        // Ultra-Clean Light Canvas Architecture (Swiss/Apple standard)
        canvas: {
          DEFAULT: "#FFFFFF", // Pure white background
          secondary: "#F8F9FA", // Secondary subtle canvas
          elevated: "#FFFFFF",
          subtle: "#F4F5F7",
        },
        // Card & Elevated Surfaces
        surface: {
          DEFAULT: "#FFFFFF",
          card: "#FFFFFF",
          elevated: "#FFFFFF",
          glass: "rgba(255, 255, 255, 0.85)",
          active: "#F8F9FA",
          subtle: "#F1F5F9",
        },
        // Deep Charcoal & Refined Slate Contrast
        ink: {
          headline: "#0F172A", // Deep Charcoal/Slate Black
          primary: "#1E293B", // Crisp Body Slate
          secondary: "#475569", // Refined Slate (line-height relaxed)
          muted: "#64748B", // Subtle Metadata Slate
          faint: "#94A3B8", // Hairline Slate
        },
        // Premium Executive Accents
        accent: {
          cobalt: "#2563EB", // Tech Cobalt Blue
          cobaltDark: "#1D4ED8",
          cobaltLight: "#EFF6FF",
          emerald: "#059669", // Subtle Emerald
          emeraldLight: "#ECFDF5",
        },
        // Compatibility Aliases for Cyber/Legacy Tokens
        cyber: {
          emerald: "#059669",
          cyan: "#2563EB",
          magenta: "#2563EB",
          amber: "#D97706",
          emeraldGlow: "rgba(5, 150, 105, 0.15)",
          magentaGlow: "rgba(37, 99, 235, 0.15)",
        },
        // Razor-Thin Borders & Dividers
        edge: {
          DEFAULT: "#E5E7EB",
          subtle: "#E5E7EB", // Razor-thin crisp border
          hairline: "rgba(0, 0, 0, 0.06)",
          glass: "rgba(0, 0, 0, 0.08)",
          strong: "#CBD5E1",
          emerald: "#059669",
          cyan: "#2563EB",
        },
      },
      fontFamily: {
        display: [
          "var(--font-jakarta)",
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        sans: [
          "var(--font-inter)",
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
        card: "0 1px 3px rgba(0, 0, 0, 0.04), 0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        cardHover: "0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
        subtle: "0 1px 2px rgba(0, 0, 0, 0.04)",
        elevated: "0 20px 40px -15px rgba(0, 0, 0, 0.07)",
        float: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
