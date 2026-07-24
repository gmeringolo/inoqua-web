import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import AlertBanner from "@/components/sections/service/AlertBanner";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import ProcessSteps from "@/components/sections/service/ProcessSteps";
import DifferentiatorCards from "@/components/sections/service/DifferentiatorCards";
import BusinessTypeGrid from "@/components/sections/service/BusinessTypeGrid";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
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
      <ProblemCards {...problemSection} />
      <AlertBanner text={alertBannerText} />
      <FeatureSplit {...featureSplitSection} />
      <ProcessSteps {...processStepsSection} />
      <DifferentiatorCards {...differentiatorSection} />
      <BusinessTypeGrid {...businessTypesGrid} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
