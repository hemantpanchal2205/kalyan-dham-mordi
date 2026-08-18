import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#6E1E24",
          dark: "#3F1014",
          light: "#8F2A31",
        },
        marigold: {
          DEFAULT: "#E8A233",
          dark: "#C97F17",
          light: "#F3C267",
        },
        gold: "#C9A24B",
        ivory: "#FBF3E6",
        sandal: "#F3E3C7",
        ink: "#2B1A12",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "diya-glow":
          "radial-gradient(circle at 50% 0%, rgba(232,162,51,0.25), transparent 60%)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 2.4s ease-in-out infinite",
        rise: "rise 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
