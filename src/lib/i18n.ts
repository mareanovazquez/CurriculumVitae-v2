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
  portfolio: { kicker: string; title: string; viewSite: string };
  education: {
    kicker: string;
    title: string;
    items: { period: string; title: string; school: string }[];
  };
  teaching: { kicker: string; title: string; body: string };
  testimonials: {
    kicker: string;
    title: string;
    items: { quote: string; name: string; role: string; company: string }[];
  };
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
  footer: { location: string; rightsPre: string; rightsPost: string };
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
      role: "frontend developer · comunicador ",
      title: "Trabajo para que las ideas",
      titleTail: "comuniquen",
      lede: "Desarrollador web frontend especializado en React & Firebase. Diseño soluciones digitales que se sienten rápidas y simples. La comunicación está en el centro de mi trabajo.",
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
          items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Astro.js"],
        },
        { label: "UI & estilos", items: ["Tailwind CSS", "Bootstrap", "Radix UI"] },
        { label: "Estado & data", items: ["TanStack Query", "Zustand", "Firebase"] },
        { label: "Tooling", items: ["Vite", "Git", "Figma", "Canva", "Adobe"] },
      ],
    },
    experience: {
      kicker: "Experiencia",
      title: "Trayectoria",
      items: [
        {
          period: "2026 — Presente",
          role: "Responsable de contenido y estrategia digital",
          company: "China Editora & Evaristo Editorial",
          desc: "Diseño y ejecución de la estrategia de comunicación digital para lanzamientos editoriales y eventos de escala (Feria Internacional del Libro de Buenos Aires). Configuración y customización integral de tiendas en Tiendanube para optimizar UX y maximizar ventas directas. Producción de assets digitales (reels, carruseles, mockups) con flujos potenciados por IA para mejorar conversión y engagement.",
        },
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
      viewSite: "Visitar sitio",
    },
    education: {
      kicker: "Formación",
      title: "Aprendizaje continuo.",
      items: [
        { period: "2011-2018", title: "Doctorado en Comunicación Social", school: "FPyCS — UNLP" },
        {
          period: "2003 — 2011",
          title: "Licenciatura en Comunicación Social con orientación en Periodismo",
          school: "FPyCS — UNLP",
        },
        {
          period: "2018 — 2023",
          title: "Desarrollo Web · JavaScript · React · Diseño UX-UI",
          school: "CoderHouse",
        },
        {
          period: "2022 — 2024",
          title: "Web Designer · Profesional Developer · Front End Developer",
          school: "Digital House",
        },
      ],
    },
    teaching: {
      kicker: "Docencia",
      title: "Docente universitario desde 2012.",
      body: "Docente de grado y posgrado en la FPyCS (UNLP) en las cátedras de Periodismo digital y nuevos medios, Introducción a los lenguajes de programación y el Seminario de posgrado «Vivir en las redes». También ejercí la docencia en el Instituto Superior en Registración y Publicidad Inmobiliaria y en la Universidad del Este.",
    },
    testimonials: {
      kicker: "Clientes",
      title: "Lo que dicen quienes trabajaron conmigo.",
      items: [
        {
          quote:
            "Mariano logró interpretar exactamente lo que queríamos transmitir con nuestra marca. Siempre estuvo atento a cada detalle, resolviendo todo con rapidez y profesionalismo. Fue un placer trabajar con él y lo recomendamos totalmente a quienes busquen un diseñador comprometido, creativo y confiable.",
          name: "Ezequiel Cabrera",
          role: "Cliente",
          company: "DANEZ",
        },
        {
          quote:
            "Nos entendió desde el primer momento. Entregó el sitio en tiempo y forma, con un diseño que realmente representa lo que somos.",
          name: "Graciela Berisso",
          role: "Cliente",
          company: "Jardín Hermano Sol",
        },
        {
          quote:
            "Muy profesional y atento. El resultado superó nuestras expectativas y el proceso fue muy ordenado de principio a fin.",
          name: "Laura Efrón",
          role: "Cliente",
          company: "Tinta & Raíces",
        },
      ],
    },
    contact: {
      kicker: "Contacto",
      title: "¿Trabajamos juntos?",
      lede: "Si tenés un proyecto en mente o querés sumar un dev a tu equipo, escribime.",
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
      rightsPre: "Hecho con",
      rightsPost: "en Argentina",
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
      role: "frontend developer · communicator",
      title: "I work to make ideas",
      titleTail: "communicate.",
      lede: "Frontend developer specialized in React & Firebase. I design digital solutions that feel fast and simple. Communication is at the center of my work.",
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
        { label: "UI & styles", items: ["Tailwind CSS", "Bootstrap", "Radix UI"] },
        { label: "State & data", items: ["TanStack Query", "Zustand", "Firebase"] },
        { label: "Tooling", items: ["Vite", "Git", "Figma", "Canva", "Adobe"] },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Track record",
      items: [
        {
          period: "2026 — Present",
          role: "Digital Content & Strategy Manager",
          company: "China Editora & Evaristo Editorial",
          desc: "Design and execution of digital communication strategies and marketing plans for key editorial launches and large-scale events (Buenos Aires International Book Fair). Full setup and customization of Tiendanube e-commerce stores to optimize UX and maximize direct sales. Production of digital assets (reels, carousels, mockups) with AI-enhanced workflows to boost conversion and engagement.",
        },
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
      viewSite: "Visit site",
    },
    education: {
      kicker: "Education",
      title: "Continuous learning.",
      items: [
        { period: "2011 — 2018", title: "PhD in Social Communication", school: "FPyCS — UNLP" },
        {
          period: "2003 — 2011",
          title: "Bachelor's Degree in Social Communication — Journalism",
          school: "FPyCS — UNLP",
        },
        {
          period: "2018 — 2023",
          title: "Web Development · JavaScript · React · UX-UI Design",
          school: "CoderHouse",
        },
        {
          period: "2022 — 2024",
          title: "Web Designer · Professional Developer · Front End Developer",
          school: "Digital House",
        },
      ],
    },
    teaching: {
      kicker: "Teaching",
      title: "University lecturer since 2012.",
      body: 'I teach undergraduate and postgraduate courses at FPyCS (UNLP): Digital Journalism and New Media, Introduction to Programming Languages, and the postgraduate seminar "Living in Networks". I have also taught at the Instituto Superior en Registración y Publicidad Inmobiliaria and Universidad del Este.',
    },
    testimonials: {
      kicker: "Clients",
      title: "What people say about working with me.",
      items: [
        {
          quote:
            "Mariano captured exactly what we wanted to convey with our brand. He was always attentive to every detail, handling everything quickly and professionally. It was a pleasure working with him, and we wholeheartedly recommend him to anyone looking for a committed, creative, and reliable developer.",
          name: "Ezequiel Cabrera",
          role: "Client",
          company: "DANEZ",
        },
        {
          quote:
            "He understood us from day one. The site was delivered on time, with a design that truly represents who we are.",
          name: "Graciela Berisso",
          role: "Client",
          company: "Jardín Hermano Sol",
        },
        {
          quote:
            "Very professional and attentive. The result exceeded our expectations and the whole process was well-organized from start to finish.",
          name: "Laura Efrón",
          role: "Client",
          company: "Tinta & Raíces",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's work together.",
      lede: "If you have a project in mind or you're looking for a dev to join your team, drop me a line.",
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
      rightsPre: "Built with",
      rightsPost: "in Argentina",
    },
  },
};
