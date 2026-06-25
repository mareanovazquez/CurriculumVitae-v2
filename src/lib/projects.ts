import projectRec from "@/assets/project-rec.jpg";
import projectCuanto from "@/assets/project-cuanto.jpg";
import projectEpica from "@/assets/project-epica.jpg";
import projectDanez from "@/assets/project-danez.jpg";
import projectJardin from "@/assets/project-jardin.jpg";
import projectCarta from "@/assets/project-carta.jpg";

export const projects = [
  {
    key: "rec",
    name: "Estudio REC",
    image: projectRec,
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://estudiorec.com.ar",
    desc: {
      es: "Estudio profesional especializado en redacción, edición y corrección de contenidos. Servicios integrales de comunicación y gestión de textos para formatos físicos y digitales.",
      en: "Professional studio specializing in writing, editing and proofreading. Comprehensive communication and text management services for print and digital formats.",
    },
    category: { es: "Redacción y edición", en: "Writing & Editing" },
  },
  {
    key: "cuanto",
    name: "¿Cuánto cada uno?",
    image: projectCuanto,
    tags: ["React", "Firebase", "PWA"],
    href: "https://cuanto-cada-uno.web.app/",
    desc: {
      es: "App gratuita para dividir gastos en grupo, ideal para salidas a restaurantes y viajes. Sin registro, simple y directa.",
      en: "Free app for splitting group expenses — perfect for restaurant outings and trips. No sign-up required, simple and straightforward.",
    },
    category: { es: "Herramienta web", en: "Web tool" },
  },
  {
    key: "epica",
    name: "Épica Servicios Turísticos",
    image: projectEpica,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tiendanube"],
    href: "https://epicaserviciosturisticos.com.ar",
    desc: {
      es: "Agencia de viajes en Santa Teresita, Partido de La Costa, con paquetes nacionales e internacionales, excursiones locales y alojamientos.",
      en: "Travel agency in Santa Teresita, Partido de La Costa, offering domestic and international packages, local excursions and accommodation.",
    },
    category: { es: "Turismo", en: "Travel" },
  },
  {
    key: "danez",
    name: "DANEZ",
    image: projectDanez,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    href: "https://danez.com.ar",
    desc: {
      es: "Centro de entrenamiento especializado en Pilates reformer, entrenamiento funcional y stretching, ubicado en Villa del Parque.",
      en: "Specialized training center focused on Reformer Pilates, functional training and stretching, located in Villa del Parque.",
    },
    category: { es: "Fitness", en: "Fitness" },
  },
  {
    key: "jardin",
    name: "Jardín Hermano Sol",
    image: projectJardin,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    href: "https://jardinhermanosol.com.ar",
    desc: {
      es: "Jardín de infantes en Villa Santa Rita (CABA) con 40 años de trayectoria, pionero en educación inclusiva y con enfoque ambientalista.",
      en: "Kindergarten in Villa Santa Rita (CABA) with 40 years of history, pioneering inclusive education with an environmentalist approach.",
    },
    category: { es: "Institucional", en: "Institutional" },
  },
  {
    key: "carta",
    name: "Carta Online",
    image: projectCarta,
    tags: ["Astro.js", "React", "Firebase", "TypeScript"],
    href: "https://cartaonline.com.ar",
    desc: {
      es: "Plataforma para digitalizar y administrar menús de negocios gastronómicos. Cartas digitales simples que eliminan la necesidad de reimpresiones.",
      en: "Platform for digitizing and managing menus for food businesses. Simple digital menus that eliminate the need for reprints.",
    },
    category: { es: "Producto SaaS", en: "SaaS product" },
  },
];
