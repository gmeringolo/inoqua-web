import type { Metadata } from "next";
import { site } from "./site";

type BuildMetadataArgs = {
  /** Título específico de la página (sin el sufijo del sitio, se agrega automáticamente). */
  title: string;
  /** Meta description optimizada (~150-160 caracteres), con la palabra clave principal cerca del inicio. */
  description: string;
  /** Ruta relativa de la página, ej: "/servicios/habilitaciones". Se usa para el canonical y OG url. */
  path: string;
  /** Palabras clave objetivo para esta página (uso interno/documentación; su peso en rankings es bajo pero ayuda a mantener foco). */
  keywords?: string[];
  /** Imagen para Open Graph/Twitter. Por defecto usa la foto principal del sitio. */
  image?: string;
};

/**
 * Genera el objeto Metadata completo (title, description, canonical,
 * Open Graph, Twitter Card) para una página, a partir de sus datos puntuales.
 * Usar en cada `page.tsx`:
 *
 * export const metadata = buildMetadata({
 *   title: "Habilitaciones Bromatológicas en Uruguay",
 *   description: "...",
 *   path: "/servicios/habilitaciones",
 *   keywords: ["habilitación bromatológica", "..."],
 * });
 */
export function buildMetadata({ title, description, path, keywords, image }: BuildMetadataArgs): Metadata {
  const url = `${site.siteUrl}${path}`;
  const ogImage = image ?? site.defaultOgImage;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${site.shortName}`,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [{ url: ogImage, width: 1300, height: 866, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.shortName}`,
      description,
      images: [ogImage],
    },
  };
}
