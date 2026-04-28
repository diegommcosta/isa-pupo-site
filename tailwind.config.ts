import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bege: "#EDBF9F",
        "bege-light": "#EFDDD1",
        "bege-hero": "#EDBF9F",
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
        "title-hero": ["4rem", { lineHeight: "1.1" }],
        titulos: ["3rem", { lineHeight: "1", fontWeight: "700" }],
        sessions: ["2rem", { lineHeight: "3rem", fontWeight: "700" }],
        "title-atendimentos": ["2.5rem", { lineHeight: "3rem" }],
        "card-title": ["1.5rem", { lineHeight: "1.5rem", fontWeight: "700" }],
        preco: ["4rem", { lineHeight: "1.1", fontWeight: "700" }],
        descricao: ["1.25rem", { lineHeight: "1.5" }],
        "mini-title": ["1.25rem", { fontWeight: "700" }],
        "invest-titulo": ["2rem", { fontWeight: "700" }],
        rodape: ["1rem", { lineHeight: "1.375rem" }],
        date: ["0.875rem", { lineHeight: "1" }],
      },
      maxWidth: {
        site: "1440px",
        content: "1040px",
      },
    },
  },
  plugins: [],
};
export default config;
