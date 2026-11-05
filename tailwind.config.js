/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [],
};

