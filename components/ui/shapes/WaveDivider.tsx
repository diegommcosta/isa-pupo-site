import { cn } from "@/lib/utils";

type Props = {
  /** Classe text-* com a cor da PRÓXIMA seção (a onda é pintada nessa cor). */
  to: string;
  /** Classe bg-* com a cor da seção ANTERIOR (fundo atrás da onda). */
  from?: string;
  variant?: "soft" | "organic";
  flip?: boolean;
  className?: string;
};

const PATHS: Record<NonNullable<Props["variant"]>, string> = {
  soft: "M0,90 L0,55 C240,10 480,0 720,25 C960,50 1200,80 1440,45 L1440,90 Z",
  organic:
    "M0,90 L0,60 C120,25 260,5 420,30 C560,52 640,75 800,60 C980,43 1060,8 1220,18 C1320,25 1390,50 1440,38 L1440,90 Z",
};

export default function WaveDivider({ to, from, variant = "soft", flip = false, className }: Props) {
  return (
    <div className={cn("overflow-hidden leading-none mt-[-1px]", to, from, className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn(
          "block w-full h-[clamp(40px,6vw,90px)] mb-[-1px]",
          flip && "-scale-x-100"
        )}
        fill="currentColor"
      >
        <path d={PATHS[variant]} />
      </svg>
    </div>
  );
}
