"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type ContactFormProps = {
  title: string;
  subtitle: string;
  submitLabel: string;
};

const situaciones = ["Idea de negocio", "En proceso", "Funcionando"];

/**
 * Formulario de "Solicitá la evaluación técnica de tu negocio". Es un componente
 * de cliente (maneja estado de los inputs) exclusivo de la landing de Contacto.
 *
 * NOTA: el envío hoy solo valida y muestra un mensaje de confirmación en pantalla.
 * Para conectarlo a un backend real, reemplazá el cuerpo de `handleSubmit` por,
 * por ejemplo, un fetch a una API route de Next.js (app/api/contacto/route.ts)
 * que dispare un email o lo guarde en tu CRM.
 */
export default function ContactForm({ title, subtitle, submitLabel }: ContactFormProps) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    negocio: "",
    situacion: situaciones[0],
    comentarios: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const inputClass =
    "w-full rounded-xl border-2 border-azul bg-white px-4 py-3 text-[16px] text-azul placeholder:text-[#6e6e6e] outline-none transition-colors focus:border-naranja";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar a un endpoint real (ver nota arriba).
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-content px-6 py-17 sm:px-10 lg:px-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-titulo-xxl text-azul">{title}</h2>
        <p className="mt-3 text-subtitulo-xxl mx-auto max-w-xl text-texto">{subtitle}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-panel bg-azul/[0.06] p-10 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF8D28" strokeWidth="2" className="mb-4">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12.5l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-card-titulo text-azul">¡Gracias por escribirnos!</h3>
              <p className="mt-2 text-parrafo-20 text-texto">
                Recibimos tu consulta y te vamos a contactar a la brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="mb-1.5 block text-[18px] font-medium text-azul">Nombre *</label>
                <input
                  required
                  type="text"
                  placeholder="Tu nombre y apellido"
                  className={inputClass}
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[18px] font-medium text-azul">Teléfono *</label>
                  <input
                    required
                    type="tel"
                    placeholder="Teléfono de contacto"
                    className={inputClass}
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[18px] font-medium text-azul">Correo electrónico *</label>
                  <input
                    required
                    type="email"
                    placeholder="Correo electrónico"
                    className={inputClass}
                    value={form.correo}
                    onChange={(e) => setForm({ ...form, correo: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[18px] font-medium text-azul">¿Qué tipo de negocio tenés? *</label>
                <input
                  required
                  type="text"
                  placeholder="Selecciona la categoría de tu negocio"
                  className={inputClass}
                  value={form.negocio}
                  onChange={(e) => setForm({ ...form, negocio: e.target.value })}
                />
              </div>

              <div>
                <label className="mb-2 block text-[18px] font-medium text-azul">
                  ¿En qué situación está tu negocio? *
                </label>
                <div className="flex flex-wrap gap-5">
                  {situaciones.map((s) => (
                    <label key={s} className="flex cursor-pointer items-center gap-2 text-[16px] text-texto">
                      <input
                        type="radio"
                        name="situacion"
                        value={s}
                        checked={form.situacion === s}
                        onChange={() => setForm({ ...form, situacion: s })}
                        className="h-4 w-4 accent-naranja"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[18px] font-medium text-azul">¿Cómo podemos ayudarte? *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Contanos tus ideas"
                  className={`${inputClass} resize-none`}
                  value={form.comentarios}
                  onChange={(e) => setForm({ ...form, comentarios: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-[10px] bg-naranja px-7 py-[8px] text-[18px] font-semibold text-azul transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e67d1e] hover:shadow-lg active:scale-95"
              >
                {submitLabel}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={150} className="relative mx-auto h-[620px] w-full max-w-[552px] overflow-hidden rounded-panel">
          <Image src="/img/certificaciones-servicios.png" alt={title} fill sizes="(max-width: 1024px) 90vw, 552px" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
