import { cn } from "@/lib/utils";

type Props = {
  /** Classe text-* com a cor do blob (fill = currentColor). */
  color: string;
  variant?: 1 | 2 | 3;
  className?: string;
};

const PATHS: Record<NonNullable<Props["variant"]>, string> = {
  1: "M421,309Q387,368,328,398.5Q269,429,205,412.5Q141,396,96,348Q51,300,58.5,232.5Q66,165,113,118Q160,71,226,60Q292,49,349.5,87Q407,125,431,187.5Q455,250,421,309Z",
  2: "M411,297Q377,344,335.5,391Q294,438,232,432.5Q170,427,120,388.5Q70,350,57.5,285.5Q45,221,73,163.5Q101,106,158,77.5Q215,49,278,57.5Q341,66,393,108Q445,150,445,200Q445,250,411,297Z",
  3: "M429,290Q400,330,367.5,371Q335,412,281,424Q227,436,172,415.5Q117,395,83.5,347.5Q50,300,52,240.5Q54,181,92,136Q130,91,186,68.5Q242,46,301,63.5Q360,81,404,124.5Q448,168,453,209Q458,250,429,290Z",
};

export default function Blob({ color, variant = 1, className }: Props) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={cn("pointer-events-none", color, className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={PATHS[variant]} />
    </svg>
  );
}
