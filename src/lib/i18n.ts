export type Lang = "es" | "en";

type Dict = {
  nav: {
    about: string;
    skills: string;
    experience: string;
    portfolio: string;
    education: string;
    teaching: string;
    contact: string;
  };
  hero: {
    role: string;
    title: string;
    titleAccent: string;
    titleTail: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    available: string;
  };
  about: { kicker: string; title: string; body: string; body2: string };
  stats: { years: string; projects: string; stack: string };
  skills: { kicker: string; title: string; groups: { label: string; items: string[] }[] };
  experience: {
    kicker: string;
    title: string;
    items: { period: string; role: string; company: string; desc: string }[];
  };
  portfolio: { kicker: string; title: string; subtitle: string; viewSite: string };
  education: {
    kicker: string;
    title: string;
    items: { period: string; title: string; school: string }[];
  };
  teaching: { kicker: string; title: string; body: string };
  contact: {
    kicker: string;
    title: string;
    lede: string;
    cta: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitBtn: string;
    successMsg: string;
    sendingBtn: string;
    errorMsg: string;
  };
  footer: { location: string; rights: string };
};

export const content: Record<Lang, Dict> = {
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      portfolio: "Portfolio",
      education: "Formación",
      teaching: "Docencia",
      contact: "Contacto",
    },
    hero: {
      role: "Frontend Developer · Argentina",
      title: "Construyo",
      titleAccent: "productos",
      titleTail: "que importan.",
      lede: "Desarrollador web frontend especializado en React & Firebase. Diseño soluciones digitales que se sienten rápidos, claros y orientados a la comunicación.",
      ctaPrimary: "Proyectos",
      ctaSecondary: "Escribime",
      available: "Disponible para proyectos freelance",
    },
    about: {
      kicker: "Sobre mí",
      title: "Comunicación aplicada al desarrollo de productos digitales.",
      body: "Soy doctor y licenciado en comunicación social por la UNLP, con experiencia en medios gráficos, radiales y digitales. Ese recorrido me enseñó a leer mensajes, audiencias y contextos — habilidades que aplico directamente a cómo diseño y construyo productos web.",
      body2:
        "Hoy me desempeño como docente de grado y posgrado en la FPyCS (UNLP), integro el equipo de soporte informático de la SCBA y lidero el desarrollo web en Estudio REC. Me muevo bien en equipos multidisciplinarios y me comprometo fuerte con cada proyecto que asumo.",
    },
    stats: {
      years: "Años desarrollando",
      projects: "Proyectos shipped",
      stack: "Stack principal",
    },
    skills: {
      kicker: "Skills",
      title: "Stack & herramientas",
      groups: [
        {
          label: "Frontend",
          items: ["React","TypeScript", "JavaScript", "HTML", "CSS", "Astro.js"],
        },
        { label: "UI & estilos", items: ["Tailwind CSS", "Bootstrap", "Radix UI"] },
        { label: "Estado & data", items: ["TanStack Query", "Zustand", "Firebase"] },
        { label: "Tooling", items: ["Vite", "Git", "Figma", "Canva", "Adobe" ] },
      ],
    },
    experience: {
      kicker: "Experiencia",
      title: "Trayectoria",
      items: [
        {
          period: "2020 — Presente",
          role: "Consultor en comunicación digital y desarrollo web",
          company: "Estudio REC",
          desc: "Consultor externo para múltiples clientes: Estudio REC, Ratzkier Arquitectura, Épica Turismo, DANEZ y Jardín Hermano Sol. Desarrollo y mantenimiento de sus sitios web.",
        },
        {
          period: "2012 — Presente",
          role: "Área de soporte informático al usuario / Frontend Developer",
          company: "Suprema Corte de Justicia de Buenos Aires",
          desc: "Capacitación y soporte a usuarios del sistema de presentaciones y notificaciones electrónicas. Desde 2021, desarrollo frontend en React para herramientas de gestión interna.",
        },
        {
          period: "2014 — 2022",
          role: "Desarrollador web y editor de contenidos",
          company: "La Cueva de Chauvet",
          desc: "Desarrollo y mantenimiento del sitio. Edición de artículos y producción de contenido para redes sociales.",
        },
        {
          period: "2014 — 2016",
          role: "Community manager",
          company: "Syntagma comunicación",
          desc: "Planificación de campañas digitales para organizaciones políticas y estudiantiles. Consultoría en comunicación digital.",
        },
        {
          period: "2011 — 2016",
          role: "Columnista de tecnología",
          company: "Radio Estación Sur",
          desc: "Columna semanal sobre tecnología y producción de contenido digital para redes sociales.",
        },
        {
          period: "2011 — 2012",
          role: "Periodista",
          company: "Diario Hoy de La Plata",
          desc: "Producción de notas y entrevistas para la sección de interés general.",
        },
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Proyectos destacados",
      subtitle: "Una selección de trabajos recientes para clientes reales.",
      viewSite: "Visitar sitio",
    },
    education: {
      kicker: "Formación",
      title: "Aprendizaje continuo.",
      items: [
        { period: "2011-2018", title: "Doctorado en Comunicación Social", school: "FPyCS — UNLP" },
        { period: "2003 — 2011", title: "Licenciatura en Comunicación Social con orientación en Periodismo", school: "FPyCS — UNLP" },
        { period: "2018 — 2023", title: "Desarrollo Web · JavaScript · React · Diseño UX-UI", school: "CoderHouse" },
        { period: "2022 — 2024", title: "Web Designer · Profesional Developer · Front End Developer", school: "Digital House" },
      ],
    },
    teaching: {
      kicker: "Docencia",
      title: "Docente universitario desde 2012.",
      body: "Docente de grado y posgrado en la FPyCS (UNLP) en las cátedras de Periodismo digital y nuevos medios, Introducción a los lenguajes de programación y el Seminario de posgrado «Vivir en las redes». También ejercí la docencia en el Instituto Superior en Registración y Publicidad Inmobiliaria y en la Universidad del Este.",
    },
    contact: {
      kicker: "Contacto",
      title: "¿Trabajamos juntos?",
      lede: "Si tenés un proyecto en mente o querés sumar un dev a tu equipo, escribime. Respondo en menos de 24hs.",
      cta: "Enviar un email",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      submitBtn: "Enviar mensaje",
      successMsg: "¡Mensaje enviado con éxito!",
      sendingBtn: "Enviando...",
      errorMsg: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
    },
    footer: {
      location: "Buenos Aires, Argentina",
      rights: "Hecho con café en Argentina",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      portfolio: "Portfolio",
      education: "Education",
      teaching: "Teaching",
      contact: "Contact",
    },
    hero: {
      role: "Frontend Developer · Argentina",
      title: "I build",
      titleAccent: "products",
      titleTail: "that matter.",
      lede: "Frontend developer specialized in React & Firebase. I craft digital solutions that feel fast, clear, and built around communication.",
      ctaPrimary: "Projects",
      ctaSecondary: "Get in touch",
      available: "Available for freelance projects",
    },
    about: {
      kicker: "About",
      title: "Communication applied to digital product development.",
      body: "I hold a PhD and a degree in Social Communication from UNLP, with a background in print, radio and digital media. That path taught me to read messages, audiences and contexts — skills I bring directly to how I design and build web products.",
      body2:
        "Today I work as a professor at FPyCS (UNLP), as part of the IT support team at SCBA, and as the web development lead at Estudio REC. I thrive in multidisciplinary teams and take strong ownership of every project I take on.",
    },
    stats: {
      years: "Years building",
      projects: "Projects shipped",
      stack: "Main stack",
    },
    skills: {
      kicker: "Skills",
      title: "Stack & tooling",
      groups: [
        {
          label: "Frontend",
          items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Astro.js"],
        },
        { label: "UI & styles", items: ["Tailwind CSS", "Sass", "Radix UI"] },
        { label: "State & data", items: ["TanStack Query", "Zustand", "Firebase"] },
        { label: "Tooling", items: ["Vite", "Git", "Figma", "Canva", "Adobe"] },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Track record",
      items: [
        {
          period: "2020 — Present",
          role: "Digital Communication Consultant & Web Developer",
          company: "Estudio REC",
          desc: "External consultant for multiple clients: Estudio REC, Ratzkier Architecture, Épica Tourism, DANEZ and Jardín Hermano Sol. Web development and ongoing maintenance.",
        },
        {
          period: "2012 — Present",
          role: "IT Support Technician / Frontend Developer",
          company: "Supreme Court of Buenos Aires (SCBA)",
          desc: "User support and training for the electronic filing system. Since 2021, building internal React tools for the court's digital infrastructure.",
        },
        {
          period: "2014 — 2022",
          role: "Web Developer & Editor",
          company: "La Cueva de Chauvet",
          desc: "Site development and maintenance, article editing, and social media content production.",
        },
        {
          period: "2014 — 2016",
          role: "Community Manager",
          company: "Syntagma Comunicación",
          desc: "Digital campaign planning for political and student organizations. Digital communication consulting.",
        },
        {
          period: "2011 — 2016",
          role: "Technology Columnist",
          company: "Radio Estación Sur",
          desc: "Weekly technology column and digital content production for social media.",
        },
        {
          period: "2011 — 2012",
          role: "Journalist",
          company: "Diario Hoy de La Plata",
          desc: "News writing and interviews for the general interest section.",
        },
      ],
    },
    portfolio: {
      kicker: "Portfolio",
      title: "Selected work",
      subtitle: "A handful of recent projects shipped for real clients.",
      viewSite: "Visit site",
    },
    education: {
      kicker: "Education",
      title: "Continuous learning.",
      items: [
        { period: "2011 — 2018", title: "PhD in Social Communication", school: "FPyCS — UNLP" },
        { period: "2003 — 2011", title: "Bachelor's Degree in Social Communication — Journalism", school: "FPyCS — UNLP" },
        { period: "2018 — 2023", title: "Web Development · JavaScript · React · UX-UI Design", school: "CoderHouse" },
        { period: "2022 — 2024", title: "Web Designer · Professional Developer · Front End Developer", school: "Digital House" },
      ],
    },
    teaching: {
      kicker: "Teaching",
      title: "University lecturer since 2012.",
      body: "I teach undergraduate and postgraduate courses at FPyCS (UNLP): Digital Journalism and New Media, Introduction to Programming Languages, and the postgraduate seminar \"Living in Networks\". I have also taught at the Instituto Superior en Registración y Publicidad Inmobiliaria and Universidad del Este.",
    },
    contact: {
      kicker: "Contact",
      title: "Let's work together.",
      lede: "If you have a project in mind or you're looking for a dev to join your team, drop me a line. I reply within 48 hours.",
      cta: "Send an email",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitBtn: "Send message",
      successMsg: "Message sent successfully!",
      sendingBtn: "Sending...",
      errorMsg: "An error occurred while sending the message. Please try again.",
    },
    footer: {
      location: "Buenos Aires, Argentina",
      rights: "Built with coffee in Argentina",
    },
  },
};
