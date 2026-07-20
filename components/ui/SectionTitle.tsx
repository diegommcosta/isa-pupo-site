import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: string;
  subColor?: string;
  className?: string;
  /** Anima o título linha a linha via AnimationsProvider. */
  animate?: boolean;
}

/**
 * Título de seção padrão do site: Amaranth Bold 32px centralizado com a
 * linha laranja curta abaixo (design aprovado pela cliente). O subtítulo,
 * quando presente, também fica centralizado.
 */
export function SectionTitle({
  title,
  subtitle,
  color = "var(--verde-escuro)",
  subColor = "var(--verde-escuro)",
  className,
  animate = true,
}: SectionTitleProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {/* cor via style: tailwind-merge confunde text-section (font-size) com classes de cor */}
      <h2
        className="font-sans font-bold text-section px-2 -mx-2"
        style={{ color }}
        {...(animate ? { "data-anim": "lines" } : {})}
      >
        {title}
      </h2>
      <span aria-hidden className="mt-2 block h-[3px] w-14 rounded-full bg-laranja" />
      {subtitle && (
        <p
          className="mt-4 font-sans text-[17px] leading-[1.5] max-w-[560px]"
          style={{ color: subColor }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
