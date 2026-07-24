import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type BusinessChip = { icon: IconName; label: string };

type BusinessTypeGridProps = {
  title: string;
  chips: BusinessChip[];
};

/**
 * Grilla compacta de "tipos de negocio a los que aplica este servicio":
 * chips angostas con ícono + nombre del rubro. Distinto de AudienceCards
 * (que lleva frases más largas) y de BusinessTypes de Home (que lleva fotos).
 */
export default function BusinessTypeGrid({ title, chips }: BusinessTypeGridProps) {
  return (
    <section className="mx-auto max-w-content px-6 py-15 sm:px-10 lg:px-20">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-3xl text-subtitulo-35 text-azul">{title}</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {chips.map((chip, i) => (
          <Reveal key={chip.label} delay={i * 60}>
            <div className="flex h-[150px] flex-col items-center gap-4 rounded-card bg-azul p-4 pt-8 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <Icon name={chip.icon} className="h-8 w-8 text-naranja" />
              </div>
              <p className="text-[15px] mt-1 text-white">{chip.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
