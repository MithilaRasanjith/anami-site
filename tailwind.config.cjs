/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        jp: ["var(--font-jp)", "var(--font-sans)", "system-ui", "sans-serif"],
      },

      colors: {
        // Figma tokens
        bg: {
          soft: "#FAFAF8",
          white: "#FFFFFF",
        },
        text: {
          primary: "#1F2937",
          muted: "#6B7280",
        },
        border: {
          light: "#E5E7EB",
        },

        // Brand
        brand: {
          DEFAULT: "#B11226",
          hover: "#9C0F21",
        },
        gold: {
          DEFAULT: "#C9A24D",
          hover: "#B8923F",
        },
      },
    },
  },
  plugins: [],
};
