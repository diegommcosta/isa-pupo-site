interface SectionTitleProps {
  eyebrow: string;
  subtitle?: string;
  color?: string;
  subColor?: string;
}

export function SectionTitle({
  eyebrow,
  subtitle,
  color = "var(--verde-escuro)",
  subColor = "var(--verde-escuro)",
}: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2
        className="font-sans font-bold text-[32px] leading-none"
        style={{ color }}
      >
        {eyebrow}
      </h2>
      <span className="eyebrow-rule" />
      {subtitle && (
        <p
          className="font-sans text-[16px] leading-[1.4] max-w-[520px]"
          style={{ color: subColor }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
