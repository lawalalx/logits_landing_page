import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY: Digital Indigo (AI Depth & Reasoning)
        indigo: {
          DEFAULT: "#4338CA", // PRIMARY
          500: "#4338CA",
          600: "#3730A3"
        },
        // PRIMARY: AI Electric Blue
        electric: {
          DEFAULT: "#2563EB", // PRIMARY
          500: "#2563EB",
          600: "#1E40AF"
        },
        // SECONDARY: Neural Teal (Data Intelligence)
        teal: {
          DEFAULT: "#0EA5A4",
          500: "#0EA5A4"
        },
        // SECONDARY: Infra Green (Scalable Systems)
        green: {
          DEFAULT: "#059669",
          500: "#059669"
        },
        // SECONDARY: Signal Orange (CTA/Alerts)
        orange: {
          DEFAULT: "#F97316",
          500: "#F97316"
        },
        // SECONDARY: Deep Intelligence Blue (AI Features)
        deepblue: {
          DEFAULT: "#0A2540",
          500: "#0A2540"
        },
        // Supporting colors
        ink: "#1e1b4b",
        sand: "#f3f4f6",
        accent: "#fbbf24"
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["Geist Mono", "monospace"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(67, 56, 202, 0.08)",
        float: "0 18px 45px rgba(37, 99, 235, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
