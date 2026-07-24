import Button from "@/components/ui/Button";
import HeroImage from "@/components/ui/HeroImage";

type HeroProps = {
  title: string;
  subtitle: string;
  imageLabel: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
  /** Foto específica de esta landing. Si no se pasa, usa la foto genérica del sitio. */
  image?: string;
};

/**
 * Sección Hero / banner principal. Reutilizable en cualquier landing:
 * <Hero title="..." subtitle="..." imageLabel="..." primaryButton={...} secondaryButton={...} />
 */
export default function Hero({ title, subtitle, imageLabel, primaryButton, secondaryButton, image }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 pt-8 pb-16 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-20 lg:pt-10 lg:pb-20">
        <div className="animate-fadeUp">
          <h1 className="text-titulo-xxl-hero text-azul">{title}</h1>
          <p className="mt-6 text-subtitulo-xxl text-texto">{subtitle}</p>
          <div className="mt-10 flex flex-nowrap gap-3">
            <Button label={primaryButton.label} href={primaryButton.href} variant="solid" />
            <Button label={secondaryButton.label} href={secondaryButton.href} variant="outline" />
          </div>
        </div>

        <HeroImage alt={imageLabel} image={image} />
      </div>
    </section>
  );
}
