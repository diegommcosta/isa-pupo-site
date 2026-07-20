import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/ui/Icon";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type Variant =
  | "primary"
  | "dark"
  | "purple"
  | "outline-orange"
  | "outline-dark"
  | "outline-purple";

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
  "group tap-target inline-flex items-center justify-center gap-2 font-sans font-bold whitespace-nowrap rounded-full transition-[filter,background,color,transform,box-shadow] duration-200 cursor-pointer motion-reduce:transition-[filter,background,color] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none";

const filledHover =
  "hover:brightness-[0.96] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(45,22,5,0.18)] active:translate-y-0 active:shadow-none";

const variants: Record<Variant, string> = {
  // bege no laranja (3.54:1): escolha de marca do cliente; bold maximiza legibilidade
  primary:           `bg-laranja text-bege border border-transparent ${filledHover}`,
  dark:              `bg-verde-escuro text-bege border border-transparent ${filledHover}`,
  purple:            `bg-roxo-escuro text-bege border border-transparent ${filledHover}`,
  "outline-orange":  "bg-transparent text-laranja border border-laranja hover:bg-laranja hover:text-bege",
  "outline-dark":    "bg-transparent text-verde-escuro border border-verde-escuro hover:bg-verde-escuro hover:text-bege",
  "outline-purple":  "bg-transparent text-roxo-escuro border border-roxo-escuro hover:bg-roxo-escuro hover:text-bege",
};

const sizes: Record<Size, string> = {
  sm: "h-[34px] px-4 text-[16px] leading-none",
  md: "h-[46px] px-6 text-[17px] leading-none",
  lg: "h-[56px] px-8 text-[18px] leading-none",
};

function resolveIcon(icon: ReactNode | IconName | undefined, iconColor?: string): ReactNode {
  if (!icon) return null;
  if (typeof icon === "string") {
    return <Icon name={icon as IconName} size={16} color={iconColor ?? "currentColor"} />;
  }
  return icon;
}

export default function Button({
  variant = "primary",
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
      {rightIcon && (
        <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
          {resolveIcon(rightIcon, iconColor)}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as LinkProps;
    // Rotas internas via next/link (client nav + prefetch); externas/âncoras em <a> puro.
    if (href.startsWith("/") && !rest.target) {
      return (
        <Link href={href} className={cls} {...rest}>
          {content}
        </Link>
      );
    }
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
