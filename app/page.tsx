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
import WaveDivider from "@/components/ui/shapes/WaveDivider";

export const revalidate = 30;

const latestPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0..2] {
  _id, title, slug, excerpt, cover, publishedAt,
  "category": category->{ title, slug }
}`;

export default async function HomePage() {
  const posts = await client.fetch(latestPostsQuery).catch((err) => {
    console.error("[home] Falha ao buscar posts no Sanity:", err);
    return [];
  });

  return (
    <SiteLayout>
      <Hero />
      <WaveDivider from="bg-bege-light" to="text-roxo-escuro" variant="soft" />
      <CarlJungQuote />
      <WaveDivider from="bg-roxo-escuro" to="text-bege-light" variant="organic" flip />
      <SobreMim />
      <WaveDivider from="bg-bege-light" to="text-verde-escuro" variant="organic" />
      <Atendimentos />
      <WaveDivider from="bg-verde-escuro" to="text-bege" variant="soft" flip />
      <EbookTeaser />
      <WaveDivider from="bg-bege" to="text-white" variant="organic" />
      <BlogTeaser posts={posts ?? []} />
      <WaveDivider from="bg-white" to="text-marrom" variant="soft" flip />
      <CtaBand />
      <WaveDivider from="bg-marrom" to="text-verde-escuro" variant="organic" />
    </SiteLayout>
  );
}
