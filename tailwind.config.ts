import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Muted, natural palette — off-white, stone, sage, warm gray.
        cream: "#f6f4ef",
        stone: {
          50: "#f7f6f3",
          100: "#ecebe5",
          200: "#dcd9cf",
          300: "#c4bfb1",
          400: "#a8a193",
          500: "#8c8576",
          600: "#6f695d",
          700: "#565147",
          800: "#3c3933",
          900: "#252320",
        },
        sage: {
          100: "#e7ebe4",
          200: "#cdd6c7",
          300: "#aab8a1",
          400: "#869a7b",
          500: "#697d5f",
          600: "#53634b",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
