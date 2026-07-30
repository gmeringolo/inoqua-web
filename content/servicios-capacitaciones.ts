export const heroContent = {
  breadcrumb: "Servicios — Capacitaciones",
  title: "Capacitá a tu equipo y evitá errores que pueden costarte caro",
  subtitle:
    "Diseñamos e implementamos capacitaciones en inocuidad alimentaria adaptadas a tu empresa, cumpliendo con la normativa y mejorando el funcionamiento real del negocio.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/capacitaciones-hero.png",
};

export const problemSection = {
  title: "Capacitá a tu equipo y evitá errores costosos",
  subtitle:
    "Diseñamos capacitaciones en inocuidad alimentaria adaptadas a tu empresa.",
  cards: [
    { icon: "warning" as const, text: "Manipulación incorrecta de alimentos" },
    { icon: "close" as const, text: "Contaminación cruzada" },
    { icon: "rule" as const, text: "Falta de procedimientos claros" },
    { icon: "package" as const, text: "Personal sin formación adecuada" },
    { icon: "money" as const, text: "Riesgo de sanciones y mala reputación" },
  ],
};

export const alertBannerText = "Evitá riesgos constantes capacitando a tu equipo de forma correcta";

export const featureSplitSection = {
  title: "Capacitaciones prácticas y alineadas a normativa",
  subtitle: "En InoQua diseñamos programas de capacitación específicos para cada tipo de empresa.",
  items: [
    "Capacitación en BPM (Buenas Prácticas de Manufactura)",
    "Programas HACCP",
    "Manipulación segura de alimentos",
    "Procedimientos internos adaptados",
    "Planes de capacitación obligatorios",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/capacitaciones-solucion.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: "Nuestro enfoque en capacitación empresarial",
  cards: [
    {
      icon: "building" as const,
      title: "Adaptado a tu realidad",
      text: "Sin plantillas genéricas: nos enfocamos en tus procesos reales.",
    },
    {
      icon: "eye" as const,
      title: "Orientado a inspecciones reales",
      text: "Preparamos al personal para responder correctamente.",
    },
    {
      icon: "warning" as const,
      title: "Enfocado en reducir errores",
      text: "Bajamos drásticamente el desperdicio y las quejas de clientes.",
    },
  ],
  quote: "La capacitación real no es para cumplir un trámite, es para prevenir riesgos",
};

export const audienceSection = {
  title: "Para quién es este servicio",
  subtitle: "Trabajamos con empresas que manipulan alimentos en cualquier escala.",
  cards: [
    { icon: "fork" as const, text: "Tenés un local gastronómico en funcionamiento" },
    { icon: "shield" as const, text: "Estás habilitado pero no tenés seguimiento técnico" },
    { icon: "warning" as const, text: "Querés evitar problemas con inspecciones" },
    { icon: "headset" as const, text: "Necesitás respaldo profesional constante" },
  ],
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "Nuestro método para capacitar a tu empresa",
  subtitle:
    "Un proceso ágil y planificado para transformar la teoría en hábitos prácticos, asegurando el cumplimiento legal de tu equipo.",
  subTitleMaxWidth: "43rem",
  steps: [
    { number: 1, title: "Diagnóstico", text: "Evaluamos el nivel actual de tu equipo." },
    { number: 2, title: "Plan a medida", text: "Diseñamos contenidos según tu rubro." },
    { number: 3, title: "Capacitación", text: "Presencial o virtual, con casos reales." },
    { number: 4, title: "Documentación", text: "Dejamos todo listo para la inspección." },
  ],
};

export const finalCtaContent = {
  title: "No esperes a una inspección para entrenar a tu equipo de trabajo",
  subtitleRegular: "La inocuidad alimentaria es la base de tu operación diaria. ",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/servicios-cta3.png",
  titleMaxWidth: "37rem",
};
