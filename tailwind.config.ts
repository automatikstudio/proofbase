import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#DB2777",
          violet: "#7C3AED",
          bg: "#FFF1F2",
          surface: "#FFFFFF",
          text: "#18181B",
        },
      },
      fontFamily: {
        heading: ['"DM Serif Display"', "serif"],
        body: ['"Figtree"', "sans-serif"],
      },
      borderRadius: {
        btn: "16px",
        card: "20px",
      },
    },
  },
  plugins: [],
};
export default config;
