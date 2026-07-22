"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { hasInternalHistory } from "@/components/ui/NavTracker";
import type { MouseEvent, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

/**
 * Link de retorno padrão (seta + texto), usado no blog e nas terapias.
 * Comporta-se como "voltar" de verdade: se a navegação começou dentro do
 * site, usa history.back() (preserva a página e o scroll de origem — home,
 * lista do blog, etc.); em acesso direto (link compartilhado) navega para o
 * href, para não jogar a pessoa de volta para fora do site.
 */
export default function BackLink({ href, children }: Props) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Modificadores (abrir em nova aba/janela) seguem o href normal
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (hasInternalHistory()) {
      e.preventDefault();
      router.back();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-verde-escuro font-sans text-[14px] hover:opacity-80 transition-opacity"
    >
      <Icon
        name="arrow-right"
        size={14}
        color="var(--verde-escuro)"
        style={{ transform: "rotate(180deg)" }}
      />
      {children}
    </Link>
  );
}
