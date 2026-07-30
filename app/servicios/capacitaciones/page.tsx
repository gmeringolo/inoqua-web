import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import AlertBanner from "@/components/sections/service/AlertBanner";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import DifferentiatorCards from "@/components/sections/service/DifferentiatorCards";
import AudienceCards from "@/components/sections/service/AudienceCards";
import ProcessSteps from "@/components/sections/service/ProcessSteps";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
  problemSection,
  alertBannerText,
  featureSplitSection,
  differentiatorSection,
  audienceSection,
  processStepsSection,
  finalCtaContent,
} from "@/content/servicios-capacitaciones";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import DifferentiatorCardsGrid from "@/components/sections/service/DifferentiatorCardsGrid";

const path = "/servicios/capacitaciones";
const pageTitle = "Capacitaciones en Inocuidad Alimentaria";
const pageDescription =
  "Capacitaciones en BPM, HACCP y manipulación segura de alimentos para tu equipo. Programas a medida que reducen errores y preparan a tu empresa para cualquier inspección.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "capacitación manipulación de alimentos Uruguay",
    "curso BPM alimentos",
    "capacitación HACCP",
    "curso inocuidad alimentaria Montevideo",
  ],
});

export default function CapacitacionesPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/#servicios" },
          { name: "Capacitaciones", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <ProblemCards {...problemSection} />
      <AlertBanner text={alertBannerText} />
      <FeatureSplit {...featureSplitSection} />
      <DifferentiatorCardsGrid {...differentiatorSection} />
      <AudienceCards {...audienceSection} />
      <ProcessSteps {...processStepsSection} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
