/**
 * ID de medición de Google Analytics 4 (formato "G-XXXXXXXXXX").
 * Se toma de la variable de entorno NEXT_PUBLIC_GA_ID (ver .env.local.example).
 * Si no está definida, Analytics simplemente no se carga — así el sitio
 * funciona igual en desarrollo o antes de tener el ID configurado.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Registra una vista de página. Se llama automáticamente en cada cambio de ruta (ver PageViewTracker). */
export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

/**
 * Registra un evento personalizado. Útil para trackear clicks en botones clave
 * (ej: "Solicitar asesoramiento", "Hablar por Whatsapp", envío del formulario de contacto).
 *
 * Ejemplo de uso en un componente cliente:
 *   import { event } from "@/lib/analytics/gtag";
 *   onClick={() => event({ action: "click", category: "cta", label: "Solicitar asesoramiento" })}
 */
export function event({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}
