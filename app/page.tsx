import { client } from "@/lib/sanity/client";
import { homePageQuery } from "@/lib/sanity/queries";
import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import CarlJungQuote from "@/components/home/CarlJungQuote";
import SobreMim from "@/components/home/SobreMim";
import Atendimentos from "@/components/home/Atendimentos";
import EbookTeaser from "@/components/home/EbookTeaser";
import BlogTeaser from "@/components/home/BlogTeaser";
import CtaBand from "@/components/layout/CtaBand";

export const revalidate = 3600;

export default async function HomePage() {
  const data = await client.fetch(homePageQuery).catch(() => null);

  const page = data?.page ?? {};
  const posts = data?.latestPosts ?? [];

  return (
    <SiteLayout>
      <Hero title={page.heroTitle} subtitle={page.heroSubtitle} />
      <CarlJungQuote quote={page.carlJungQuote} />
      <SobreMim bio={page.sobreMimBio} photo={page.sobreMimPhoto} />
      <Atendimentos cards={page.atendimentos} />
      <EbookTeaser teaser={page.ebookTeaser} />
      <BlogTeaser posts={posts} />
      <CtaBand />
    </SiteLayout>
  );
}
