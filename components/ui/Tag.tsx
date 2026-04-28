import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Tag({ children, className }: Props) {
  return (
    <span className={cn("tag", className)}>
      {children}
    </span>
  );
}
