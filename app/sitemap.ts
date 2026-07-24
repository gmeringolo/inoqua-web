import type { MetadataRoute } from "next";
import { site } from "@/lib/seo/site";

/**
 * Next.js expone esto automáticamente en /sitemap.xml.
 * Si agregás una página nueva, sumala acá para que Google la descubra rápido.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/nosotros", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.8, changeFrequency: "monthly" },

    { path: "/servicios/habilitaciones", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/representacion-tecnica", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/registro-productos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/capacitaciones", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/certificaciones", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/planes-de-trabajo", priority: 0.8, changeFrequency: "monthly" },

    { path: "/tipo-de-negocio/locales-gastronomicos", priority: 0.85, changeFrequency: "monthly" },
    { path: "/tipo-de-negocio/locales-sin-elaboracion", priority: 0.85, changeFrequency: "monthly" },
    { path: "/tipo-de-negocio/supermercados", priority: 0.85, changeFrequency: "monthly" },
    { path: "/tipo-de-negocio/industria-y-elaboracion", priority: 0.85, changeFrequency: "monthly" },
    { path: "/tipo-de-negocio/depositos-y-logistica", priority: 0.85, changeFrequency: "monthly" },
    { path: "/tipo-de-negocio/ferias-gastronomicas", priority: 0.85, changeFrequency: "monthly" },
    { path: "/tipo-de-negocio/espacios-colectivos", priority: 0.85, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: `${site.siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
