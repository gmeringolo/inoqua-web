export const heroContent = {
  breadcrumb: "Tipo de negocio — Locales gastronómicos",
  title: "Habilitá tu local gastronómico sin multas ni observaciones",
  subtitle:
    "Adaptamos los procesos de tu cocina a las normativas vigentes para evitar costosas multas y sanciones operativas.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/localesGastronomicos-hero.png",
};

export const problemSection = {
  title: "Los desafíos que frenan la apertura y operación de tu cocina",
  subtitle: "Muchos emprendedores se encuentran con:",
  cards: [
    { icon: "clock" as const, text: "Demoras por retrasos en trámites municipales" },
    { icon: "building" as const, text: "Reformas edilicias costosas por mala planificación" },
    { icon: "warning" as const, text: "Inspecciones con miedo a sufrir clausuras" },
    { icon: "eye" as const, text: "Observaciones por contaminación cruzada" },
  ],
};

export const featureSplitSection = {
  title: "Nos encargamos de todo el proceso por vos",
  subtitle: "En InoQua te acompañamos desde la evaluación inicial hasta la aprobación final.",
  items: [
    "Diseño de soluciones técnicas para tu cocina",
    "Respuestas profesionales para operar con tranquilidad",
    "Gestión del trámite ante los organismos",
    "Seguimiento del expediente hasta su aprobación",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/localesGastronomicos-solucion.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: 'No trabajamos solo para "presentar papeles"',
  cards: [
    {
      icon: "close" as const,
      title: "Minimizá errores costosos",
      text: "Muchos negocios terminan gastando bastante más en reformas por falta de criterio técnico previo.",
    },
    {
      icon: "clock" as const,
      title: "Reducí tiempos de aprobación",
      text: "Conocemos los atajos legales y administrativos para acelerar tu aprobación.",
    },
    {
      icon: "handshake" as const,
      title: "Evitá observaciones innecesarias",
      text: "Presentaciones impecables que minimizan las vueltas del expediente.",
    },
    {
      icon: "rule" as const,
      title: "Recibí inspecciones con tranquilidad",
      text: "Pasá cualquier inspección de rutina con la tranquilidad de estar en regla.",
    },
  ],
  quote: "Te acompañamos para que logres habilitar tu negocio a la primera",
};

export const businessTypesGrid = {
  title: "Para quién es este servicio",
  chips: [
    { icon: "fork" as const, label: "Restaurantes" },
    { icon: "hamburger" as const, label: "Rotiserías" },
    { icon: "croissant" as const, label: "Panaderías" },
    { icon: "pizza" as const, label: "Pizzerías" },
    { icon: "wheat" as const, label: "Fábrica de pastas" },
    { icon: "iceCream" as const, label: "Heladerías" },
    { icon: "fish" as const, label: "Pescaderías" },
    { icon: "chefHat" as const, label: "Comidas al paso" },
    { icon: "cookingPot" as const, label: "Cantinas con elaboración" },
    { icon: "sandwich" as const, label: "Elaboración de sandwiches" },
    { icon: "balloon" as const, label: "Salón de fiestas" },
    { icon: "flame" as const, label: "Parrilladas" },
  ],
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "Un proceso claro y profesional",
  subtitle: "Empleamos un método claro y sin sorpresas.",
  closingText: "Más que una solución puntual, somos tu aliado estratégico",
  steps: [
    { number: 1, title: "Evaluamos tu caso", text: "Analizamos el estado actual de tu negocio." },
    { number: 2, title: "Detectamos riesgos", text: "Detectamos puntos de mejora e incumplimientos." },
    { number: 3, title: "Implementamos soluciones", text: "Ordenamos procesos y documentación necesaria." },
    { number: 4, title: "Te acompañamos", text: "Continuamos con vos para que todo siga en regla." },
  ],
};

export const finalCtaContent = {
  title: "Llevá la gestión técnica de tu cocina al día",
  subtitleRegular: "Asegurá tu aprobación oficial con nuestro respaldo. ",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/servicios-cta5.png",
};
