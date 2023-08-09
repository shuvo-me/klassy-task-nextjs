import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "coupon-gradient":
          "linear-gradient(262.92deg, #a36bfc 4.14%, #f4627a 87.63%)",
      },
    },
  },
  plugins: [],
};
export default config;
