/** @type {import('tailwindcss').Config} */
module.exports = {
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
        // Official Brand Colors: Navy Blue + Olive Green + Black + White
        brand: {
          navy: "#2C4058",
          "navy-dark": "#1E2D3E",
          "navy-deeper": "#141E2A",
          olive: "#738B46",
          "olive-hover": "#5E7337",
          "olive-light": "#EEF3E6",
          "olive-tint": "#F4F7F0",
          black: "#000000",
          white: "#FFFFFF",
          // Primary/Secondary aliases
          primary: "#2C4058",
          secondary: "#738B46",
          accent: "#738B46",
        },
        // Semantic Surfaces
        surface: {
          primary: "#FFFFFF",
          secondary: "#F7F9FA",
          accent: "#EEF3E6",
          dark: "#2C4058",
          "dark-deep": "#1E2D3E",
        },
        // Semantic Typography
        ink: {
          primary: "#2C4058",
          body: "#111827",
          secondary: "rgba(44, 64, 88, 0.82)",
          muted: "rgba(44, 64, 88, 0.58)",
          light: "#FFFFFF",
          "light-muted": "rgba(255, 255, 255, 0.78)",
          olive: "#738B46",
        },
        // Semantic Borders
        edge: {
          default: "rgba(44, 64, 88, 0.16)",
          subtle: "rgba(44, 64, 88, 0.08)",
          strong: "#2C4058",
          dark: "rgba(255, 255, 255, 0.14)",
          olive: "rgba(115, 139, 70, 0.35)",
        },
        // Legacy fallbacks mapped cleanly to the new palette to guarantee backwards compatibility
        forest: {
          DEFAULT: "#2C4058",
          dark: "#1E2D3E",
          deep: "#141E2A",
          light: "#3A5372",
        },
        lime: {
          DEFAULT: "#738B46",
          hover: "#5E7337",
        },
        offwhite: "#F7F9FA",
        mint: "#EEF3E6",
        charcoal: {
          DEFAULT: "#111827",
          light: "#1F2937",
        },
        lightgray: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "neo-sm": "2px 2px 0px 0px #2C4058",
        neo: "4px 4px 0px 0px #2C4058",
        "neo-lg": "6px 6px 0px 0px #2C4058",
        "neo-olive": "4px 4px 0px 0px #738B46",
        "neo-olive-sm": "2px 2px 0px 0px #738B46",
        "neo-navy-dark": "4px 4px 0px 0px #1E2D3E",
      },
    },
  },
  plugins: [],
};
