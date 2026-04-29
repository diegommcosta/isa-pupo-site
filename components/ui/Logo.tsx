import LogoHorizontal from "@/components/ui/icons/LogoHorizontal";
import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <LogoHorizontal
      aria-label="Isa Pupo"
      style={{ fill: "currentColor" }}
      className={cn(className)}
      {...props}
    />
  );
}
