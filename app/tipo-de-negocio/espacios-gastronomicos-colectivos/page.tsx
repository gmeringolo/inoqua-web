import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import DifferentiatorCardsGrid from "@/components/sections/service/DifferentiatorCardsGrid";
import ProcessSteps from "@/components/sections/service/ProcessSteps";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
  problemSection,
  featureSplitSection,
  differentiatorSection,
  processStepsSection,
  finalCtaContent,
} from "@/content/negocio-espacios-colectivos";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/tipo-de-negocio/espacios-gastronomicos-colectivos";
const pageTitle = "Habilitación de Plazas de Comidas y Espacios Gastronómicos Colectivos";
const pageDescription =
  "Habilitación técnica de plazas de comidas y espacios donde conviven varios operadores gastronómicos. Coordinación integral y protocolos sanitarios estandarizados.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "habilitación plaza de comidas Uruguay",
    "espacio gastronómico colectivo normativa",
    "food court habilitación bromatológica",
  ],
});

export default function EspaciosColectivosPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Tipo de negocio", path: "/#tipo-de-negocio" },
          { name: "Espacios colectivos", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <ProblemCards {...problemSection} />
      <FeatureSplit {...featureSplitSection} />
      <DifferentiatorCardsGrid {...differentiatorSection} />
      <ProcessSteps {...processStepsSection} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
