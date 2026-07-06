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

// Ondulações rasas (amplitude contida) — o fill fecha em y=92 (2px além do
// viewBox) e o svg tem margin-bottom negativa para a seção seguinte pintar por
// cima da base sólida, eliminando o fio de subpixel entre onda e seção.
const PATHS: Record<NonNullable<Props["variant"]>, string> = {
  soft: "M0,92 L0,58 C240,38 480,30 720,44 C960,58 1200,68 1440,46 L1440,92 Z",
  organic:
    "M0,92 L0,54 C160,34 300,28 460,42 C620,56 720,66 880,54 C1040,42 1160,30 1300,40 C1360,45 1410,52 1440,46 L1440,92 Z",
};

export default function WaveDivider({ to, from, variant = "soft", flip = false, className }: Props) {
  return (
    <div
      className={cn("leading-none mt-[-1px] relative z-[1] pointer-events-none", to, from, className)}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn(
          "block w-full h-[clamp(32px,5vw,72px)] mb-[-2px] overflow-visible",
          flip && "-scale-x-100"
        )}
        fill="currentColor"
      >
        <path d={PATHS[variant]} />
      </svg>
    </div>
  );
}
