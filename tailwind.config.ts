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
      fontSize: {
        "display-hero": ["clamp(52px, 9vw, 96px)", { lineHeight: "0.98" }],
        "display-xl": ["clamp(42px, 6.5vw, 76px)", { lineHeight: "1.02" }],
        "display-lg": ["clamp(34px, 5vw, 60px)", { lineHeight: "1.05" }],
        "display-md": ["clamp(28px, 3.8vw, 46px)", { lineHeight: "1.08" }],
        eyebrow: ["14px", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
      borderRadius: {
        "blob-1": "58% 42% 55% 45% / 45% 52% 48% 55%",
        "blob-2": "45% 55% 48% 52% / 55% 44% 56% 45%",
        organic: "36px 80px 36px 36px",
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.8)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        float: "float 6s ease-in-out infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
