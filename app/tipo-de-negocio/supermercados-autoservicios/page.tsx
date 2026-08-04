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
} from "@/content/negocio-supermercados-autoservicios";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/tipo-de-negocio/supermercados-autoservicios";
const pageTitle = "Asesoría Bromatológica para Supermercados y Autoservicios";
const pageDescription =
  "Asesoría bromatológica integral para supermercados y autoservicios en Uruguay: control sanitario por sector, cadena de frío y habilitación de gran superficie.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "asesoría bromatológica supermercado",
    "habilitación autoservicio Uruguay",
    "control sanitario supermercado",
  ],
});

export default function SupermercadosPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Tipo de negocio", path: "/#tipo-de-negocio" },
          { name: "Supermercados", path },
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
