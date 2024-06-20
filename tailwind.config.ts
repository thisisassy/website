import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      maxWidth: {
        1200: "1200px",
        892: "892px",
        790: "790px",
        584: "584px",
        276: "276px",
      },
      width: {
        892: "892px",
      },
      spacing: {
        120: "120px",
        28: "28px",
        24: "24px",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "xs": "14px",
        "sm": "16px",
        "base": "19px",
        "heading-1": "40px",
        "heading-2": "32px",
        "heading-3": "28px",
        "heading-4": "24px",
        "heading-5": "21px",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
