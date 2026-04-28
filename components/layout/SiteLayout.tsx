import Header from "./Header";
import Footer from "./Footer";
import AnimationsProvider from "@/components/ui/AnimationsProvider";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimationsProvider />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
