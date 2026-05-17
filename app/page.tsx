import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import CarlJungQuote from "@/components/home/CarlJungQuote";
import SobreMim from "@/components/home/SobreMim";
import Atendimentos from "@/components/home/Atendimentos";
import EbookTeaser from "@/components/home/EbookTeaser";
import BlogTeaser from "@/components/home/BlogTeaser";
import CtaBand from "@/components/layout/CtaBand";

export const revalidate = 3600;

const latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0..2] {
  _id, title, slug, excerpt, cover, publishedAt,
  "category": category->{ title, slug }
}`;

export default async function HomePage() {
  const posts = await client
    .fetch(latestPostsQuery, {}, { next: { revalidate: 3600, tags: ["post"] } })
    .catch(() => []);

  return (
    <SiteLayout>
      <Hero />
      <CarlJungQuote />
      <SobreMim />
      <Atendimentos />
      <EbookTeaser />
      <BlogTeaser posts={posts ?? []} />
      <CtaBand />
    </SiteLayout>
  );
}
