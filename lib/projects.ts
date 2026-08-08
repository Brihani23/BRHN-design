export type ProjectService =
  | "digital"
  | "productos"
  | "marcas"
  | "espacios";

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;

  year: string;
  client: string;
  discipline: string;
  scope: string;

  description: string;
  cover: string;
  images: string[];
  tags: string[];

  service: ProjectService;

  challenge: string;
  solution: string;
  result: string;
};

export const projects: Project[] = [
  {
    id: "roger",
    number: "01",
    title: "ROGER",
    category:
      "Producto digital · UX/UI · Sistema operativo",

    year: "2026",
    client: "ROGER",
    discipline: "Producto digital",
    scope: "UX/UI · Desarrollo · Sistema",

    description:
      "Plataforma que conecta clientes, técnicos y administración en un solo flujo para gestionar reportes, cotizaciones, rutas, servicios y pagos.",

    cover: "/projects/roger/cover.png",

    images: [
      "/projects/roger/cover.png",
      "/projects/roger/01.png",
      "/projects/roger/02.png",
      "/projects/roger/03.png",
      "/projects/roger/04.png",
    ],

    tags: [
      "Aplicación móvil",
      "Dashboard",
      "Firebase",
      "Stripe",
      "Operación",
    ],

    service: "digital",

    challenge:
      "Centralizar la operación de un servicio técnico dental que dependía de distintos canales, procesos manuales y seguimiento fragmentado.",

    solution:
      "Diseñamos una experiencia digital que conecta clientes, técnicos y administración mediante reportes, cotizaciones, rutas, inventario, pagos y seguimiento del servicio.",

    result:
      "Un sistema operativo capaz de ordenar el flujo completo del negocio y ofrecer una experiencia más clara para todos los usuarios.",
  },

  {
    id: "bigtree",
    number: "02",
    title: "BIGTREE",
    category:
      "Ecommerce · UX/UI · Automatización",

    year: "2026",
    client: "BIGTREE",
    discipline: "Producto digital",
    scope: "Ecommerce · UX/UI · Automatización",

    description:
      "Evolución de la experiencia digital de un depósito dental mediante arquitectura de información, búsqueda, contenido técnico y herramientas de conversión.",

    cover: "/projects/bigtree/cover.png",

    images: [
      "/projects/bigtree/cover.png",
      "/projects/bigtree/01.png",
      "/projects/bigtree/02.png",
      "/projects/bigtree/03.png",
      "/projects/bigtree/04.png",
    ],

    tags: [
      "Shopify",
      "UX/UI",
      "SEO",
      "IA",
      "Automatización",
    ],

    service: "digital",

    challenge:
      "Mejorar la navegación, búsqueda y comunicación de un catálogo dental amplio y técnicamente complejo.",

    solution:
      "Rediseñamos la experiencia digital, organizamos la información del catálogo y desarrollamos herramientas de búsqueda, contenido y asistencia para facilitar la compra.",

    result:
      "Una plataforma más clara, útil y preparada para convertir el ecommerce en una herramienta central para clientes y operación.",
  },

  {
    id: "rompevientos",
    number: "01",
    title: "ROMPEVIENTOS BRHN",
    category:
      "Producto físico · Textil · Prototipado",

    year: "2026",
    client: "BRHN",
    discipline: "Diseño de producto",
    scope: "Concepto · Textil · Prototipado",

    description:
      "Diseño y desarrollo de una chamarra rompevientos desde su concepto funcional hasta la selección de materiales, construcción y preparación para producción.",

    cover: "/projects/rompevientos/cover.png",

    images: [
      "/projects/rompevientos/cover.png",
      "/projects/rompevientos/01.png",
      "/projects/rompevientos/02.png",
      "/projects/rompevientos/03.png",
      "/projects/rompevientos/04.png",
    ],

    tags: [
      "Diseño de producto",
      "Textiles",
      "Materiales",
      "Prototipado",
      "Producción",
    ],

    service: "productos",

    challenge:
      "Crear una prenda ligera y funcional que protegiera del viento sin perder movilidad, ventilación ni una identidad visual propia.",

    solution:
      "Desarrollamos el concepto formal, sistema de ventilación, selección de textiles, construcción de la prenda y una propuesta de packaging relacionada con el aire y la naturaleza.",

    result:
      "Un producto diferenciado, coherente y preparado para avanzar hacia pruebas físicas, validación y producción.",
  },

  {
    id: "huge-steps",
    number: "01",
    title: "HUGE STEPS",
    category:
      "Marca · Identidad · Dirección creativa",

    year: "2026",
    client: "HUGE STEPS",
    discipline: "Identidad",
    scope:
      "Estrategia · Identidad · Dirección creativa",

    description:
      "Desarrollo de una identidad visual flexible y coherente, construida para crecer junto con la marca y funcionar en medios físicos y digitales.",

    cover: "/projects/huge-steps/cover.png",

    images: [
      "/projects/huge-steps/cover.png",
      "/projects/huge-steps/01.png",
      "/projects/huge-steps/02.png",
      "/projects/huge-steps/03.png",
      "/projects/huge-steps/04.png",
    ],

    tags: [
      "Estrategia",
      "Identidad visual",
      "Dirección creativa",
      "Aplicaciones",
      "Comunicación",
    ],

    service: "marcas",

    challenge:
      "Construir una identidad clara y reconocible para una marca relacionada con fisioterapia, rehabilitación y movimiento.",

    solution:
      "Definimos una dirección visual flexible, un sistema de marca consistente y aplicaciones preparadas para medios físicos y digitales.",

    result:
      "Una identidad capaz de comunicar movimiento, confianza y profesionalismo en todos sus puntos de contacto.",
  },
];

export function getProjectById(
  id: string,
): Project | undefined {
  return projects.find(
    (project) => project.id === id,
  );
}

export function getProjectsByService(
  service: ProjectService,
): Project[] {
  return projects.filter(
    (project) => project.service === service,
  );
}