import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { LinkItem } from "@/lib/sanity/types";

/**
 * Pílula full-width da página /links: rótulo à esquerda, seta à direita.
 * Segue as convenções de hover/motion do Button (lift + sombra terrosa,
 * seta deslizando; tudo neutralizado sob prefers-reduced-motion).
 */
export default function LinkPill({ label, url, icon, destaque }: LinkItem) {
  const cls = cn(
    "group tap-target flex w-full items-center justify-between gap-3 rounded-full px-7 h-[58px]",
    "font-sans font-bold text-[17px] leading-none text-bege",
    "shadow-[0_2px_12px_rgba(45,22,5,0.06)]",
    "transition-[filter,transform,box-shadow] duration-200",
    "hover:brightness-[0.96] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(45,22,5,0.18)]",
    "active:translate-y-0 active:shadow-none",
    "motion-reduce:transition-[filter] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
    destaque ? "bg-laranja" : "bg-roxo-escuro"
  );

  const content = (
    <>
      <span className="flex min-w-0 items-center gap-3">
        {icon && <Icon name={icon as IconName} size={18} color="currentColor" />}
        <span className="truncate">{label}</span>
      </span>
      <span
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
      >
        <Icon name="arrow-right" size={18} color="currentColor" />
      </span>
    </>
  );

  // Rotas internas via next/link (client nav + prefetch); externas em nova aba.
  if (url.startsWith("/")) {
    return (
      <Link href={url} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <a href={url} className={cls} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
