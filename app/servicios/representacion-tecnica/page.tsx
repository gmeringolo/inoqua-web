import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import AlertBanner from "@/components/sections/service/AlertBanner";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import DifferentiatorCards from "@/components/sections/service/DifferentiatorCards";
import AudienceCards from "@/components/sections/service/AudienceCards";
import ProcessSteps from "@/components/sections/service/ProcessSteps";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  serviceHeroContent,
  problemSection,
  alertBannerText,
  featureSplitSection,
  differentiatorSection,
  audienceSection,
  processStepsSection,
  finalCtaContent,
} from "@/content/servicios-representacion-tecnica";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/servicios/representacion-tecnica";
const pageTitle = "Representación Técnica de Empresas Alimentarias";
const pageDescription =
  "Representación técnica para empresas alimentarias en Uruguay: cumplimiento normativo, inspecciones y respaldo profesional continuo. Solicitá asesoramiento.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "representación técnica alimentos Uruguay",
    "representante técnico bromatológico",
    "cumplimiento normativo alimentario",
  ],
});

export default function RepresentacionTecnicaPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/#servicios" },
          { name: "Representación Técnica", path },
        ]}
      />
      <ServiceHero {...serviceHeroContent} />
      <ProblemCards {...problemSection} />
      <AlertBanner text={alertBannerText} />
      <FeatureSplit {...featureSplitSection} />
      <DifferentiatorCards {...differentiatorSection} />
      <AudienceCards {...audienceSection} />
      <ProcessSteps {...processStepsSection} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
