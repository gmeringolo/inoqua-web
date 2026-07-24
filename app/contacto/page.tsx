import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import HowWeWork from "@/components/sections/HowWeWork";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  contactHeroContent,
  contactFormContent,
  contactHowWeWorkContent,
  contactFinalCtaContent,
} from "@/content/contacto";
import { buildMetadata } from "@/lib/seo/metadata";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contactá a InoQua para coordinar una asesoría bromatológica, solicitar un presupuesto o resolver tus dudas sobre normativa alimentaria en Uruguay.",
  path: "/contacto",
  keywords: ["contacto consultora alimentaria Uruguay", "asesoría bromatológica presupuesto"],
});

export default function ContactoPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Inicio", path: "/" }, { name: "Contacto", path: "/contacto" }]} />
      <ContactHero {...contactHeroContent} />
      <ContactForm {...contactFormContent} />
      <HowWeWork {...contactHowWeWorkContent} />
      <FinalCTA {...contactFinalCtaContent} />
    </main>
  );
}
