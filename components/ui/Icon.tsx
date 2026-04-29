import ArrowRight from "@/components/ui/icons/ArrowRight";
import BookHalf from "@/components/ui/icons/BookHalf";
import BoxArrowUpRight from "@/components/ui/icons/BoxArrowUpRight";
import Calendar from "@/components/ui/icons/Calendar";
import Chat from "@/components/ui/icons/Chat";
import Check2 from "@/components/ui/icons/Check2";
import Instagram from "@/components/ui/icons/Instagram";
import LogoBullet from "@/components/ui/icons/LogoBullet";
import MoonStarsFill from "@/components/ui/icons/MoonStarsFill";
import People from "@/components/ui/icons/People";
import StarFill from "@/components/ui/icons/StarFill";
import Stars from "@/components/ui/icons/Stars";
import Whatsapp from "@/components/ui/icons/Whatsapp";
import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

const MAP = {
  "arrow-right": ArrowRight,
  "book-half": BookHalf,
  "box-arrow-up-right": BoxArrowUpRight,
  calendar: Calendar,
  chat: Chat,
  check2: Check2,
  instagram: Instagram,
  "logo-bullet": LogoBullet,
  "moon-stars-fill": MoonStarsFill,
  people: People,
  "star-fill": StarFill,
  stars: Stars,
  whatsapp: Whatsapp,
} as const;

export type IconName = keyof typeof MAP;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({
  name,
  size = 16,
  color = "currentColor",
  className,
  style,
  "aria-hidden": ariaHidden = true,
  ...rest
}: IconProps) {
  const Svg = MAP[name];
  if (!Svg) return null;
  return (
    <Svg
      aria-hidden={ariaHidden}
      width={size}
      height={size}
      style={{ color, fill: "currentColor", flexShrink: 0, ...style }}
      className={cn("inline-block", className)}
      {...rest}
    />
  );
}
