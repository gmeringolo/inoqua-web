import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import AlertBanner from "@/components/sections/service/AlertBanner";
import DifferentiatorCards from "@/components/sections/service/DifferentiatorCards";
import BusinessTypeGrid from "@/components/sections/service/BusinessTypeGrid";
import ProcessSteps from "@/components/sections/service/ProcessSteps";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
  problemSection,
  featureSplitSection,
  alertBannerText,
  differentiatorSection,
  businessTypesGrid,
  processStepsSection,
  finalCtaContent,
} from "@/content/servicios-habilitaciones";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/servicios/habilitaciones";
const pageTitle = "Habilitaciones y Renovaciones Bromatológicas en Uruguay";
const pageDescription =
  "Habilitá o renová la bromatológica de tu negocio de alimentos sin multas ni demoras. Gestión integral del trámite ante los organismos correspondientes en Uruguay.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "habilitación bromatológica Uruguay",
    "renovación bromatológica Montevideo",
    "trámite bromatológico",
    "habilitación municipal alimentos",
  ],
});

export default function HabilitacionesPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/#servicios" },
          { name: "Habilitaciones", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <ProblemCards {...problemSection} />
      <AlertBanner text={alertBannerText} />
      <FeatureSplit {...featureSplitSection} />
      <DifferentiatorCards {...differentiatorSection} />
      <BusinessTypeGrid {...businessTypesGrid} />
      <ProcessSteps {...processStepsSection} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
