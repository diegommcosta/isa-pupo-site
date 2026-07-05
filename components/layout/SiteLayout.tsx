import Header from "./Header";
import Footer from "./Footer";
import AnimationsProvider from "@/components/ui/AnimationsProvider";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      <AnimationsProvider />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
