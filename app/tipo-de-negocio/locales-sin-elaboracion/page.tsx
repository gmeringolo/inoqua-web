import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import DifferentiatorCardsGrid from "@/components/sections/service/DifferentiatorCardsGrid";
import BusinessTypeGrid from "@/components/sections/service/BusinessTypeGrid";
import ProcessSteps from "@/components/sections/service/ProcessSteps";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
  problemSection,
  featureSplitSection,
  differentiatorSection,
  businessTypesGrid,
  processStepsSection,
  finalCtaContent,
} from "@/content/negocio-locales-sin-elaboracion";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/tipo-de-negocio/locales-sin-elaboracion";
const pageTitle = "Habilitación de Kioscos, Almacenes y Comercios sin Elaboración";
const pageDescription =
  "Habilitá tu kiosco, almacén o comercio de productos envasados sin complicaciones. Cumplimiento de normativas municipales y sanitarias con respaldo técnico.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "habilitación kiosco Uruguay",
    "habilitación almacén Montevideo",
    "habilitación comercial alimentos envasados",
  ],
});

export default function LocalesSinElaboracionPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Tipo de negocio", path: "/#tipo-de-negocio" },
          { name: "Locales sin elaboración", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <ProblemCards {...problemSection} />
      <FeatureSplit {...featureSplitSection} />
      <DifferentiatorCardsGrid {...differentiatorSection} />
      <BusinessTypeGrid {...businessTypesGrid} />
      <ProcessSteps {...processStepsSection} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
