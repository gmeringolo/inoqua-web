import ServiceHero from "@/components/sections/service/ServiceHero";
import ProblemCards from "@/components/sections/service/ProblemCards";
import AboutIntro from "@/components/sections/about/AboutIntro";
import CertificationCards from "@/components/sections/service/CertificationCards";
import FeatureSplit from "@/components/sections/service/FeatureSplit";
import BusinessTypeGrid from "@/components/sections/service/BusinessTypeGrid";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
  problemSection,
  strategicSupportSection,
  strategicSupportButton,
  certificationCardsSection,
  servicesIncludedSection,
  businessTypesGrid,
  finalCtaContent,
} from "@/content/servicios-certificaciones";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/servicios/certificaciones";
const pageTitle = "Certificaciones y Sistemas de Gestión ISO";
const pageDescription =
  "Preparamos a tu empresa para certificaciones ISO 9001, ISO 22000 e ISO 27001. Implementamos sistemas de gestión que fortalecen calidad e inocuidad alimentaria.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "certificación ISO 22000 Uruguay",
    "certificación ISO 9001 alimentos",
    "sistemas de gestión de calidad",
    "consultoría certificaciones ISO",
  ],
});

export default function CertificacionesPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/#servicios" },
          { name: "Certificaciones", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <ProblemCards {...problemSection} />
      <AboutIntro {...strategicSupportSection} button={strategicSupportButton} />
      <CertificationCards {...certificationCardsSection} />
      <FeatureSplit {...servicesIncludedSection} />
      <BusinessTypeGrid {...businessTypesGrid} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
