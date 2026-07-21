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
      <SmoothScroll />
      <AnimationsProvider />
      <Header tone={headerTone} />
      <main id="conteudo" className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
