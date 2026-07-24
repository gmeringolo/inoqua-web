"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Qué tan fuerte se mueve la imagen respecto al scroll. Valores chicos (0.1–0.3) se ven más naturales. */
  strength?: number;
};

/**
 * Envolvé una imagen de fondo con <Parallax> para que "suba" suavemente a medida
 * que la sección entra y sale del viewport al hacer scroll.
 * Ej: <Parallax className="absolute -inset-y-[15%] inset-x-0"><Image fill .../></Parallax>
 */
export default function Parallax({ children, className = "", strength = 0.18 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let ticking = false;

    const update = () => {
      const rect = node.parentElement?.getBoundingClientRect();
      if (rect) {
        const viewportCenter = window.innerHeight / 2;
        const sectionCenter = rect.top + rect.height / 2;
        const offset = (viewportCenter - sectionCenter) * strength;
        node.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
