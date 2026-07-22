import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const amaranth = localFont({
  src: [
    { path: "./fonts/Amaranth-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Amaranth-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/Amaranth-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Amaranth-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-amaranth",
  display: "swap",
});

const berliana = localFont({
  src: "./fonts/berliana.woff2",
  variable: "--font-berliana",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://isa-pupo-site.vercel.app"),
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
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
