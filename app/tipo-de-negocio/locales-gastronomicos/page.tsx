import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import DifferentiatorCards from "@/components/sections/service/DifferentiatorCards";
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
} from "@/content/negocio-locales-gastronomicos";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/tipo-de-negocio/locales-gastronomicos";
const pageTitle = "Habilitación Bromatológica para Restaurantes y Locales Gastronómicos";
const pageDescription =
  "Habilitá tu restaurante, rotisería, pizzería o panadería sin multas ni observaciones. Adaptamos los procesos de tu cocina a la normativa bromatológica vigente.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "habilitación bromatológica restaurante",
    "habilitación cocina Uruguay",
    "normativa bromatológica gastronomía",
    "habilitación rotisería pizzería",
  ],
});

export default function LocalesGastronomicosPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Tipo de negocio", path: "/#tipo-de-negocio" },
          { name: "Locales gastronómicos", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <ProblemCards {...problemSection} />
      <FeatureSplit {...featureSplitSection} />
      <DifferentiatorCards {...differentiatorSection} />
      <BusinessTypeGrid {...businessTypesGrid} />
      <ProcessSteps {...processStepsSection} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
