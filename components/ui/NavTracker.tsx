"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const COUNT_KEY = "nav-pages-count";
const LAST_KEY = "nav-last-path";

/**
 * Conta quantas páginas distintas do site a aba já visitou (sessionStorage).
 * O BackLink usa essa contagem para decidir entre history.back() — quando a
 * navegação começou dentro do site — e o href de fallback, quando a pessoa
 * chegou direto por um link compartilhado (back() sairia do site).
 * Refresh não infla a contagem: só conta quando o pathname muda.
 */
export default function NavTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (sessionStorage.getItem(LAST_KEY) !== pathname) {
      const count = Number(sessionStorage.getItem(COUNT_KEY) ?? "0");
      sessionStorage.setItem(COUNT_KEY, String(count + 1));
      sessionStorage.setItem(LAST_KEY, pathname);
    }
  }, [pathname]);

  return null;
}

export function hasInternalHistory(): boolean {
  return (
    Number(sessionStorage.getItem(COUNT_KEY) ?? "0") > 1 &&
    window.history.length > 1
  );
}
