import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const amaranth = localFont({
  src: [
    { path: "./fonts/Amaranth-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Amaranth-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Amaranth-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Amaranth-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-amaranth",
  display: "swap",
});

const berliana = localFont({
  src: "./fonts/berliana.woff",
  variable: "--font-berliana",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Isa Pupo | Psicoterapia Jungiana & Integrativa",
    template: "%s | Isa Pupo",
  },
  description:
    "Atendimento psicoterapêutico com abordagem Jungiana e Integrativa. Cuidando da sua jornada interior com acolhimento e profundidade.",
  openGraph: {
    siteName: "Isa Pupo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${amaranth.variable} ${berliana.variable}`}>
        {children}
      </body>
    </html>
  );
}
