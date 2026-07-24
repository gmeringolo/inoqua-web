import { site } from "@/lib/seo/site";

/**
 * Cada componente inyecta un bloque <script type="application/ld+json">.
 * Esto es lo que le permite a Google mostrar resultados enriquecidos
 * (breadcrumbs en el buscador, ficha de negocio, etc.) y entender de qué
 * trata cada página más allá del texto visible.
 */

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Organization + LocalBusiness. Se coloca UNA sola vez, en el layout raíz,
 * para que aparezca en todas las páginas del sitio.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    alternateName: site.shortName,
    url: site.siteUrl,
    logo: `${site.siteUrl}/img/logo.png`,
    image: `${site.siteUrl}${site.defaultOgImage}`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressCountry: site.address.country,
    },
    areaServed: {
      "@type": "Country",
      name: "Uruguay",
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin].filter(Boolean),
  };

  return <JsonLdScript data={data} />;
}

type ServiceJsonLdProps = {
  name: string;
  description: string;
  path: string;
};

/** Marca una landing como un Service concreto ofrecido por la empresa. */
export function ServiceJsonLd({ name, description, path }: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.siteUrl}${path}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      telephone: site.phone,
      email: site.email,
    },
    areaServed: {
      "@type": "Country",
      name: "Uruguay",
    },
  };

  return <JsonLdScript data={data} />;
}

type BreadcrumbItem = { name: string; path: string };

/** Migas de pan estructuradas — Google puede mostrarlas directamente en el resultado de búsqueda. */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.siteUrl}${item.path}`,
    })),
  };

  return <JsonLdScript data={data} />;
}
