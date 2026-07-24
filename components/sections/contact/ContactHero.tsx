import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";

type ContactInfoCard = {
  icon: "email" | "phone" | "social";
  label: string;
  href: string;
};

type ContactHeroProps = {
  title: string;
  subtitle: string;
  cards: ContactInfoCard[];
};

const icons: Record<ContactInfoCard["icon"], React.ReactNode> = {
  email: (
    <>
      <path d="M2 6h20v12H2V6Z" />
      <path d="m2 6 10 7 10-7" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  social: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
};

/**
 * Hero de la landing de Contacto: foto de fondo con parallax, título + subtítulo,
 * y 3 tarjetas oscuras con las vías de contacto directo. Distinto de ServiceHero
 * y de Hero de Home (no lleva botones, sino tarjetas de contacto).
 */
export default function ContactHero({ title, subtitle, cards }: ContactHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-20">
      <Parallax className="absolute inset-x-0 -inset-y-[15%] opacity-[0.12]">
        <Image src="/img/home1.jpg" alt="" fill className="object-cover" />
      </Parallax>

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-titulo-xxl-hero text-azul">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-subtitulo-xxl text-texto">{subtitle}</p>
      </Reveal>

      <div className="relative mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 100}>
            <a
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-[140px] flex-col items-center justify-center gap-3 rounded-card bg-azul p-4 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {icons[card.icon]}
              </svg>
              <span className="text-[15px] text-white">{card.label}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
