import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
};

/** Estrela de 4 pontas ✦ decorativa (fill = currentColor). */
export default function Sparkle({ size = 16, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn("pointer-events-none shrink-0", className)}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C12.9 5.6 13.9 8.2 15.8 10.1 17.7 12 20.3 13 24 12 18.4 12.9 15.8 13.9 13.9 15.8 12 17.7 11 20.3 12 24 11.1 18.4 10.1 15.8 8.2 13.9 6.3 12 3.7 11 0 12 5.6 11.1 8.2 10.1 10.1 8.2 12 6.3 13 3.7 12 0Z" />
    </svg>
  );
}
