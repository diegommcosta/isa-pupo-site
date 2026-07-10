import { cn } from "@/lib/utils";
import Sparkle from "@/components/ui/shapes/Sparkle";

interface SectionTitleProps {
  eyebrow: string;
  /** Título grande em Berliana. Se omitido, o eyebrow assume o papel de título. */
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  color?: string;
  subColor?: string;
  eyebrowColor?: string;
  className?: string;
  /** Anima o título linha a linha via AnimationsProvider. */
  animate?: boolean;
  /**
   * Fonte do título grande. "display" = Berliana (padrão, só para frases curtas).
   * "sans" = Amaranth Bold, para títulos longos (Regra da Berliana Curta).
   */
  displayFont?: "display" | "sans";
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  color = "var(--verde-escuro)",
  subColor = "var(--verde-escuro)",
  eyebrowColor = "var(--laranja)",
  className,
  animate = true,
  displayFont = "display",
}: SectionTitleProps) {
  const heading = title ?? eyebrow;
  const sans = displayFont === "sans";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {title && (
        <span
          className="inline-flex items-center gap-2 font-sans font-bold text-eyebrow uppercase"
          style={{ color: eyebrowColor }}
        >
          <Sparkle size={12} />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "px-2 -mx-2",
          sans
            ? "font-sans font-bold text-display-md leading-[1.1]"
            : "font-display font-normal text-display-lg"
        )}
        style={{ color }}
        {...(animate ? { "data-anim": "lines" } : {})}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className="font-sans text-[17px] leading-[1.5] max-w-[560px]"
          style={{ color: subColor }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
