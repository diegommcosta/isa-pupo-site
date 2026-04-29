import type { Metadata } from "next";
import TherapyPage from "@/components/therapy/TherapyPage";
import { TERAPIA_JUNGIANA } from "@/lib/content/therapy";

export const metadata: Metadata = {
  title: "Terapia Junguiana — Isa Pupo",
  description: TERAPIA_JUNGIANA.metaDescription,
};

export default function TerapiaJungiana() {
  return <TherapyPage data={TERAPIA_JUNGIANA} />;
}
