import Header, { type HeaderTone } from "./Header";
import Footer from "./Footer";
import AnimationsProvider from "@/components/ui/AnimationsProvider";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function SiteLayout({
  children,
  headerTone = "light",
}: {
  children: React.ReactNode;
  headerTone?: HeaderTone;
}) {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-verde-escuro focus:text-bege focus:px-5 focus:py-3 focus:rounded-full font-sans"
      >
        Pular para o conteúdo
      </a>
      <SmoothScroll />
      <AnimationsProvider />
      <Header tone={headerTone} />
      <main id="conteudo" className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
