import ServiceHero from "@/components/sections/service/ServiceHero";
import CategoryCards from "@/components/sections/service/CategoryCards";
import ProblemCardsGrid from "@/components/sections/service/ProblemCardsGrid";
import AlertBanner from "@/components/sections/service/AlertBanner";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import ProcessSteps from "@/components/sections/service/ProcessSteps";
import DifferentiatorCardsGrid from "@/components/sections/service/DifferentiatorCardsGrid";
import BusinessTypeGrid from "@/components/sections/service/BusinessTypeGrid";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
  categoriesSection,
  problemSection,
  alertBannerText,
  featureSplitSection,
  processStepsSection,
  differentiatorSection,
  businessTypesGrid,
  finalCtaContent,
} from "@/content/servicios-registro-productos";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/servicios/registro-productos";
const pageTitle = "Registro de Productos Alimentarios en Uruguay";
const pageDescription =
  "Registrá tus productos alimentarios ante los organismos competentes en Uruguay y comercializalos de forma legal. Gestión completa del expediente y las etiquetas.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "registro de productos alimentarios Uruguay",
    "registro RUPE alimentos",
    "registro sanitario de alimentos",
    "registro MGAP MSP",
  ],
});

export default function RegistroProductosPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/#servicios" },
          { name: "Registro de productos", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <CategoryCards {...categoriesSection} />
      <ProblemCardsGrid {...problemSection} />
      <AlertBanner text={alertBannerText} />
      <FeatureSplit {...featureSplitSection} />
      <ProcessSteps {...processStepsSection} />
      <DifferentiatorCardsGrid {...differentiatorSection} />
      <BusinessTypeGrid {...businessTypesGrid} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
