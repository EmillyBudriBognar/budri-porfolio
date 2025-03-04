import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: "class", // Adiciona suporte ao modo escuro
  mode: 'jit',
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
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      transitionProperty: {
        background: 'background-color',
        color: 'color',
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;