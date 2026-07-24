import type { MetadataRoute } from "next";
import { site } from "@/lib/seo/site";

/** Next.js expone esto automáticamente en /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
