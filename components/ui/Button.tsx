import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type Variant =
  | "filled"       // laranja — primary CTA (legacy name)
  | "outlined"     // border laranja (legacy name)
  | "ghost"        // bege underline (legacy)
  | "primary"      // alias: filled
  | "dark"         // verde-escuro bg
  | "brown"        // marrom bg
  | "purple"       // roxo-escuro bg
  | "outline-orange"
  | "outline-dark"
  | "outline-purple"
  | "outline-brown"
  | "outline-bege";

export type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode | IconName;
  rightIcon?: ReactNode | IconName;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const base =
  "inline-flex items-center gap-1.5 font-sans font-normal whitespace-nowrap transition-[filter,background,color] duration-200 cursor-pointer";

const variants: Record<Variant, string> = {
  filled:         "bg-laranja text-bege border border-transparent hover:brightness-[0.92] active:translate-y-px",
  primary:        "bg-laranja text-bege border border-transparent hover:brightness-[0.92] active:translate-y-px",
  outlined:       "border border-laranja text-laranja bg-transparent hover:bg-laranja hover:text-bege",
  ghost:          "text-bege underline hover:text-bege/80 border border-transparent",
  dark:           "bg-verde-escuro text-bege border border-transparent hover:brightness-[0.92] active:translate-y-px",
  brown:          "bg-marrom text-bege border border-transparent hover:brightness-[0.92] active:translate-y-px",
  purple:         "bg-roxo-escuro text-bege border border-transparent hover:brightness-[0.92] active:translate-y-px",
  "outline-orange":  "bg-transparent text-laranja border border-laranja hover:bg-laranja hover:text-bege",
  "outline-dark":    "bg-transparent text-verde-escuro border border-verde-escuro hover:bg-verde-escuro hover:text-bege",
  "outline-purple":  "bg-transparent text-roxo-escuro border border-roxo-escuro hover:bg-roxo-escuro hover:text-bege",
  "outline-brown":   "bg-transparent text-marrom border border-marrom hover:bg-marrom hover:text-bege",
  "outline-bege":    "bg-transparent text-bege border border-bege hover:bg-bege hover:text-marrom",
};

// sm is the "compact" design size (29px h, 5x10 padding, 16px font)
const sizes: Record<Size, string> = {
  sm: "h-[29px] px-[10px] py-[5px] text-[16px] leading-none rounded-[5px]",
  md: "px-6 py-3 text-base rounded-[5px]",
  lg: "px-8 py-4 text-base rounded-[5px]",
};

function resolveIcon(icon: ReactNode | IconName | undefined, iconColor?: string): ReactNode {
  if (!icon) return null;
  if (typeof icon === "string") {
    return <Icon name={icon as IconName} size={16} color={iconColor ?? "currentColor"} />;
  }
  return icon;
}

export default function Button({
  variant = "filled",
  size = "sm",
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  const iconColor = "currentColor";

  const content = (
    <>
      {resolveIcon(leftIcon, iconColor)}
      <span>{children}</span>
      {resolveIcon(rightIcon, iconColor)}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as LinkProps;
    return (
      <a href={href} className={cls} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={cls} {...(props as ButtonProps)}>
      {content}
    </button>
  );
}
