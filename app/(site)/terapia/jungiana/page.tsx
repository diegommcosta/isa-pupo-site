import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { therapyPageQuery } from "@/lib/sanity/queries";
import TherapyPage from "@/components/therapy/TherapyPage";
import type { TherapyPage as TherapyPageType } from "@/lib/sanity/types";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Terapia Jungiana",
  description:
    "Conheça a Psicologia Analítica Jungiana e como ela pode te ajudar na jornada de autoconhecimento.",
};

export default async function TerapiaJungiana() {
  const therapy: TherapyPageType | null = await client
    .fetch(therapyPageQuery, { slug: "jungiana" })
    .catch(() => null);

  return <TherapyPage therapy={therapy} slug="jungiana" />;
}
