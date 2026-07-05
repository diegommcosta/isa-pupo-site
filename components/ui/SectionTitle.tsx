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
}: SectionTitleProps) {
  const heading = title ?? eyebrow;

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
        className="font-display text-display-lg px-2 -mx-2"
        style={{ color }}
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
