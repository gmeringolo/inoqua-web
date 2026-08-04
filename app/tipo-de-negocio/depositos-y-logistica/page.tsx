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
} from "@/content/negocio-depositos-y-logistica";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/tipo-de-negocio/depositos-y-logistica";
const pageTitle = "Habilitación de Depósitos y Centros Logísticos de Alimentos";
const pageDescription =
  "Habilitá tu depósito o centro logístico de alimentos cumpliendo con normativa de almacenamiento y cadena de frío. Controles estrictos y agilización de trámites.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "habilitación depósito de alimentos Uruguay",
    "habilitación centro logístico alimentario",
    "cadena de frío normativa Uruguay",
  ],
});

export default function DepositosYLogisticaPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Tipo de negocio", path: "/#tipo-de-negocio" },
          { name: "Depósitos y logística", path },
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
