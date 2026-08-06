import Reveal from "@/components/ui/Reveal";

type Step = { number: number; title: string; text: string };

type HowWeWorkProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  closingText: string;
  steps: Step[];
};

function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="flex h-[273px] w-full flex-col items-center rounded-card p-6">
        <div className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-naranja text-[28px] font-extrabold text-white">
          {step.number}
        </div>
        <h3 className="mt-5 min-h-13 text-card-titulo text-white">{step.title}</h3>
        <p className="mt-3 text-card-txt text-white/90">{step.text}</p>
      </div>

      {!isLast && (
        <svg
          className="absolute -right-8 top-13.75 hidden -translate-y-1/2 lg:block"
          width="60"
          height="16"
          viewBox="0 0 60 16"
          fill="none"
        >
          <path
            d="M0 8h56M50 2l6 6-6 6"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

/** Sección "Cómo trabajamos" — pasos numerados sobre fondo azul oscuro, con flechas conectoras. */
export default function HowWeWork({ eyebrow, title, subtitle, closingText, steps }: HowWeWorkProps) {
  return (
    <section className="bg-azul py-20">
      <div className="mx-auto max-w-content px-6 sm:px-10 lg:px-20">
        <Reveal className="text-center">
          <span className="text-[13px] font-normal tracking-[1.2px] text-naranja">{eyebrow}</span>
          <h2 className="mt-2 text-titulo-xxl text-white">{title}</h2>
          <p className="mt-3 text-subtitulo-xxl text-white">{subtitle}</p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <StepCard step={step} isLast={i === steps.length - 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mx-auto mt-2 max-w-4xl text-center text-parrafo-20 text-naranja">
            {closingText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
