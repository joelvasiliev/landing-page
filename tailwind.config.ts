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
        "green-dark": "#015B34",
        "green-light": "#01BB6D",
        green: "#018B50",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(to right, #018B50, #01BB6D, #015B34)",
        "linear-purple": "linear-gradient(to right, #782AFF, #481999)",
      },
    },
  },
  plugins: [],
};
export default config;
