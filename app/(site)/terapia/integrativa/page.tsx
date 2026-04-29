import type { Metadata } from "next";
import TherapyPage from "@/components/therapy/TherapyPage";
import { TERAPIA_INTEGRATIVA } from "@/lib/content/therapy";

export const metadata: Metadata = {
  title: "Terapia Integrativa — Isa Pupo",
  description: TERAPIA_INTEGRATIVA.metaDescription,
};

export default function TerapiaIntegrativa() {
  return <TherapyPage data={TERAPIA_INTEGRATIVA} />;
}
