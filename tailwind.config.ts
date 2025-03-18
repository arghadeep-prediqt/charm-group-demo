import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import safelistGenerator from "tailwind-safelist-generator";

const safeListFile = "safelist.txt";
const SAFELIST_COLORS = "colors";

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./safelist.txt",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "576",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        neutral: {
          white: "#FFF",
          muted: "#EEEEEE",
        },
       
        primary: {
          50: "#666666",
          100: "#B1B1B1",
          200: "#B1B1B1",
          500: "#858585",
          600: "#4A4A4A",
          700: "#2C2C2C",
        },
        info: {
          25: "#F5FAFF",
          50: "#eaedf4",
          100: "#d4dbe8",
          200: "#bfc9dd",
          300: "#a9b7d1",
          400: "#94a6c6",
          500: "#7f94ba",
          600: "#6982af",
          700: "#5470a3",
          800: "#3e5e98",
          900: "#294c8c",
        },
        purple: {
          25: "#FAFAFF",
          50: "#F4F3FF",
          100: "#EBE9FE",
          200: "#D9D6FE",
          300: "#BDB4FE",
          400: "#9B8AFB",
          500: "#7A5AF8",
          600: "#6938EF",
          700: "#5925DC",
          800: "#4A1FB8",
          900: "#3E1C96",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
      },
      blur: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "20px",
      },
      fontSize: {
        // Headings
        "h1-semi-bold": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "h2-semi-bold": ["28px", { lineHeight: "35px", fontWeight: "600" }],
        "h3-semi-bold": ["24px", { lineHeight: "30px", fontWeight: "600" }],
        "h4-semi-bold": ["18px", { lineHeight: "22.5px", fontWeight: "600" }],
        "h5-semi-bold": ["16px", { lineHeight: "17.5px", fontWeight: "600" }],
        // Body text
        "p1-r": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "p1-m": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "p1-b": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "p2-r": ["14px", { lineHeight: "21px", fontWeight: "400" }],
        "p2-m": ["14px", { lineHeight: "21px", fontWeight: "500" }],
        "p2-b": ["14px", { lineHeight: "21px", fontWeight: "600" }],
        "p3-r": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "p3-m": ["12px", { lineHeight: "18px", fontWeight: "500" }],
        "p3-b": ["12px", { lineHeight: "18px", fontWeight: "600" }],
        // Labels
        "l1-r": ["16px", { lineHeight: "19.84px", fontWeight: "400" }],
        "l1-b": ["16px", { lineHeight: "19.84px", fontWeight: "600" }],
        "l2-r": ["14px", { lineHeight: "17.36px", fontWeight: "400" }],
        "l2-b": ["14px", { lineHeight: "17.36px", fontWeight: "600" }],
        "l3-r": ["12px", { lineHeight: "14.88px", fontWeight: "400" }],
        "l3-b": ["12px", { lineHeight: "14.88px", fontWeight: "600" }],
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
        md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)",
        lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.10)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(132deg, #294c8c, #00c5a4, #627cc2)",
        "medium-gradient":
          "linear-gradient(132deg, #627cc2f9, #848fbbf9, #a7aabdf9)",
        "light-gradient":
          "linear-gradient(132deg, #294c8caa, #a7aabdaa, #74adaaaa)",
      },

      keyframes: {
        slideCircular: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "spin-slow": "spin 1.2s linear infinite",
        "slide-circular": "slideCircular 0.5s linear infinite",
      },
    },
  },
  plugins: [
    typography,
    safelistGenerator({
      path: safeListFile,
      colors: SAFELIST_COLORS,
    }),
  ],
};

export default config;
