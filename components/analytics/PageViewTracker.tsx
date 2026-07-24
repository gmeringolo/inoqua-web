"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/analytics/gtag";

/**
 * Con el App Router, navegar entre páginas no recarga el documento, así que
 * gtag.js solo registra la primera vista automáticamente. Este componente
 * dispara un pageview manual cada vez que cambia la ruta o los query params.
 */
export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    pageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}
