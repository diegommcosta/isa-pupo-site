import Sparkle from "@/components/ui/shapes/Sparkle";
import { cn } from "@/lib/utils";

interface Props {
  /** "light" = fundo claro (texto escuro) · "dark" = fundo escuro (texto claro). */
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

/**
 * Linha de reasseguramento sob os CTAs primários de WhatsApp (crença nº 4 do
 * PRODUCT.md: "o primeiro passo é fácil e sem compromisso"). Copy aprovado.
 */
export default function CtaReassurance({ tone = "light", align = "left", className }: Props) {
  const dark = tone === "dark";
  return (
    <p
      className={cn(
        "mt-4 flex items-start gap-2 font-sans text-[16px] leading-[1.45] max-w-[380px]",
        align === "center" && "justify-center text-center mx-auto",
        dark ? "text-bege/85" : "text-marrom/80",
        className
      )}
    >
      <Sparkle
        size={11}
        className={cn("mt-[3px] shrink-0", dark ? "text-bege/70" : "text-rosa")}
      />
      <span>Pode me escrever com tranquilidade: sem compromisso, e eu respondo em horário comercial.</span>
    </p>
  );
}
