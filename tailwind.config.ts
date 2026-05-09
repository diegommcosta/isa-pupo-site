import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bege: "#EDBF9F",
        "bege-light": "#EFDDD1",
        rosa: "#CF6A61",
        laranja: "#BC2F0A",
        "roxo-claro": "#725093",
        "roxo-escuro": "#53346B",
        marrom: "#2D1605",
        "verde-claro": "#6E7C59",
        "verde-escuro": "#2D3322",
        cinza: "#9E9E9E",
        branco: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-amaranth)", "sans-serif"],
        display: ["var(--font-berliana)", "cursive"],
      },
      maxWidth: {
        site: "1440px",
        content: "1040px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
