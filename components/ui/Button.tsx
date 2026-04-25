import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type BaseProps = { variant?: "primary" | "ghost"; className?: string };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type Props = ButtonProps | LinkProps;

const styles = {
  primary:
    "inline-flex items-center gap-1.5 bg-laranja text-bege font-sans text-base font-normal px-3 py-1.5 rounded-[5px] hover:bg-laranja/90 transition-colors whitespace-nowrap",
  ghost:
    "inline-flex items-center gap-1.5 text-bege font-sans text-base underline hover:text-bege/80 transition-colors",
};

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  const cls = cn(styles[variant], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as LinkProps;
    return (
      <a href={href} className={cls} {...rest} />
    );
  }

  return <button className={cls} {...(props as ButtonProps)} />;
}
