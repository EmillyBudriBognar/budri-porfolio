import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        wave: "wave 1s infinite",
      },
      keyframes: {
        wave: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(15deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
