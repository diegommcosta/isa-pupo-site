import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { therapyPageQuery } from "@/lib/sanity/queries";
import TherapyPage from "@/components/therapy/TherapyPage";
import type { TherapyPage as TherapyPageType } from "@/lib/sanity/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Terapia Integrativa",
  description:
    "A Terapia Integrativa combina diferentes abordagens para um cuidado personalizado e holístico.",
};

export default async function TerapiaIntegrativa() {
  const therapy: TherapyPageType | null = await client
    .fetch(therapyPageQuery, { slug: "integrativa" })
    .catch(() => null);

  return <TherapyPage therapy={therapy} slug="integrativa" />;
}
