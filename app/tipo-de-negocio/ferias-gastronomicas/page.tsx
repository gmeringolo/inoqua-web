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
} from "@/content/negocio-ferias-gastronomicas";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/tipo-de-negocio/ferias-gastronomicas";
const pageTitle = "Habilitación de Ferias y Eventos Gastronómicos";
const pageDescription =
  "Organizá tu feria gastronómica, festival o evento con respaldo técnico y normas bromatológicas vigentes. Asesoramiento integral para organizadores y expositores.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "habilitación feria gastronómica Uruguay",
    "permiso evento gastronómico",
    "normativa bromatológica eventos",
  ],
});

export default function FeriasGastronomicasPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Tipo de negocio", path: "/#tipo-de-negocio" },
          { name: "Ferias gastronómicas", path },
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
