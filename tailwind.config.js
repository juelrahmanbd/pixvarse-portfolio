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
        // Master Design Reference Brand Tokens
        brand: {
          primary: "#063F2E",
          deep: "#092D23",
          lime: "#C7F532",
          "lime-hover": "#B6E228",
          mint: "#E6F4EC",
          gray: "#E7EAE5",
        },
        // Semantic Surface Tokens
        surface: {
          primary: "#FFFFFF",
          secondary: "#F8FAF6",
          accent: "#E6F4EC",
          dark: "#092D23",
          "dark-subtle": "#063F2E",
        },
        // Semantic Text Tokens
        ink: {
          primary: "#092D23",
          secondary: "rgba(9, 45, 35, 0.78)",
          muted: "rgba(9, 45, 35, 0.55)",
          light: "#FFFFFF",
          "light-muted": "rgba(255, 255, 255, 0.75)",
        },
        // Semantic Line/Border Tokens
        edge: {
          default: "rgba(9, 45, 35, 0.15)",
          subtle: "rgba(9, 45, 35, 0.08)",
          strong: "#092D23",
          dark: "rgba(255, 255, 255, 0.12)",
          lime: "rgba(199, 245, 50, 0.35)",
        },
        // Legacy compatibility mappings
        forest: {
          DEFAULT: "#063F2E",
          dark: "#092D23",
          deep: "#032118",
          light: "#0d4d3a",
        },
        lime: {
          DEFAULT: "#C7F532",
          hover: "#b6e228",
        },
        offwhite: "#F8FAF6",
        mint: "#E6F4EC",
        charcoal: {
          DEFAULT: "#171A18",
          light: "#242926",
        },
        lightgray: "#E7EAE5",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "neo-sm": "2px 2px 0px 0px #092D23",
        neo: "4px 4px 0px 0px #092D23",
        "neo-lg": "6px 6px 0px 0px #092D23",
        "neo-lime": "4px 4px 0px 0px #C7F532",
        "neo-lime-sm": "2px 2px 0px 0px #C7F532",
        "neo-forest": "3px 3px 0px 0px #063F2E",
      },
    },
  },
  plugins: [],
};
