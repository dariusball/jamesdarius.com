import type { Config } from "tailwindcss";

/**
 * Design tokens for jamesdarius.com.
 *
 * Palette direction: professional but warm, with subtle, tasteful nods to
 * Zoroastrian symbolism — fire/flame (saffron + ember), a Persian lapis blue,
 * and a warm ivory "parchment" ground. Nothing costume-y; the symbolism reads
 * as a refined accent system, not a theme.
 *
 * Everything visual is centralized here so the whole site can be re-skinned by
 * editing tokens rather than touching components.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm off-white ground ("parchment").
        ivory: "#faf7f0",

        // Warm neutral scale — used for text, borders, muted surfaces.
        sand: {
          50: "#f8f5ee",
          100: "#efe9dc",
          200: "#ddd3c0",
          300: "#c4b69d",
          400: "#a8967a",
          500: "#8c7a60",
          600: "#6f604b",
          700: "#564a3a",
          800: "#3a3228",
          900: "#241f19",
        },

        // Fire / flame — the primary accent (saffron → ember).
        ember: {
          50: "#fdf6ec",
          100: "#f9e7c9",
          200: "#f0c98a",
          300: "#e6ab53",
          400: "#d98e2b",
          500: "#c2741b",
          600: "#9e5a14",
          700: "#7a4310",
          800: "#5c330d",
          900: "#3f2409",
        },

        // Persian lapis — the secondary accent (deep blue-teal).
        lapis: {
          50: "#eaf1f3",
          100: "#cad9de",
          200: "#9bb8c0",
          300: "#6a929e",
          400: "#3f6e7c",
          500: "#1f5366",
          600: "#184150",
          700: "#123039",
          800: "#0d2329",
          900: "#08161a",
        },

        // Deep crimson — used very sparingly for emphasis.
        crimson: "#7d2b1d",
      },
      fontFamily: {
        // Warm, characterful display serif for the name + headings.
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        // Clean, modern sans for body + UI.
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        content: "72rem",
        prose: "44rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
