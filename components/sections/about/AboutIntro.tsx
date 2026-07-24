import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

type AboutIntroProps = {
  title: string;
  paragraphs: string[];
  imagePosition?: "left" | "right";
  button?: { label: string; href: string };
};

/**
 * Bloque simple de "quiénes somos": título + uno o más párrafos + foto al lado.
 * Sin checklist (a diferencia de FeatureSplit / WhyChooseUs). El botón es opcional.
 */
export default function AboutIntro({ title, paragraphs, imagePosition = "right", button }: AboutIntroProps) {
  const textOrderClass = imagePosition === "left" ? "lg:order-last" : "lg:order-first";
  const imageOrderClass = imagePosition === "left" ? "lg:order-first" : "lg:order-last";

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-20">
        <Reveal className={textOrderClass}>
          <h2 className="text-titulo-xxl text-azul">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-subtitulo-xxl text-texto">
              {p}
            </p>
          ))}
          {button && (
            <div className="mt-8">
              <Button label={button.label} href={button.href} variant="solid" />
            </div>
          )}
        </Reveal>

        <Reveal
          delay={150}
          className={`relative mx-auto h-[340px] w-full max-w-[492px] overflow-hidden rounded-panel ${imageOrderClass}`}
        >
          <Image src="/img/home1.jpg" alt={title} fill sizes="(max-width: 1024px) 90vw, 492px" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
