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
  soft: "M0,92 L0,64 C240,52 480,48 720,56 C960,64 1200,72 1440,58 L1440,92 Z",
  organic:
    "M0,92 L0,62 C160,50 300,46 460,56 C620,66 720,72 880,64 C1040,56 1160,46 1300,52 C1360,55 1410,60 1440,56 L1440,92 Z",
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
          "block w-full h-[clamp(24px,4vw,56px)] mb-[-2px] overflow-visible",
          flip && "-scale-x-100"
        )}
        fill="currentColor"
      >
        <path d={PATHS[variant]} />
      </svg>
    </div>
  );
}
