"use client";

import { Icon } from "@/components/ui/Icon";

interface Props {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: Props) {
  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // usuário cancelou ou erro — não faz nada
      }
    } else {
      // fallback: copia o link para a área de transferência
      await navigator.clipboard.writeText(url);
      alert("Link copiado para a área de transferência!");
    }
  }

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(title + " — " + url)}`;

  return (
    <div className="flex gap-2">
      <button
        onClick={handleShare}
        aria-label="Compartilhar via menu do dispositivo"
        className="w-[34px] h-[34px] rounded-lg bg-roxo-escuro flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
      >
        <Icon name="send" size={18} color="var(--bege)" />
      </button>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no WhatsApp"
        className="w-[34px] h-[34px] rounded-lg bg-roxo-escuro flex items-center justify-center hover:opacity-80 transition-opacity"
      >
        <Icon name="whatsapp" size={18} color="var(--bege)" />
      </a>
    </div>
  );
}
