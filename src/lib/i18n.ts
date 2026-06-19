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
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Contactar",
      available: "Disponible para nuevos proyectos",
    },
    about: {
      kicker: "Sobre mí",
      title: "Código con criterio de diseño.",
      body: "Trabajo en la intersección del diseño y el desarrollo web desde hace varios años. Mi foco está en construir interfaces accesibles, performantes y mantenibles, cuidando el detalle desde la tipografía hasta la arquitectura del front.",
      body2:
        "Hoy desarrollo principalmente con React, TypeScript y Tailwind, y disfruto colaborar con diseñadores y equipos chicos donde cada decisión cuenta.",
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
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        { label: "UI & estilos", items: ["Tailwind CSS", "Sass", "Radix UI", "Framer Motion"] },
        { label: "Estado & data", items: ["TanStack Query", "Zustand", "REST", "Supabase"] },
        { label: "Tooling", items: ["Vite", "Git", "Figma", "Vitest"] },
      ],
    },
    experience: {
      kicker: "Experiencia",
      title: "Trayectoria",
      items: [
        {
          period: "2023 — Presente",
          role: "Frontend Developer",
          company: "Freelance",
          desc: "Desarrollo de sitios y aplicaciones web para estudios, comercios y emprendimientos en Argentina. Diseño técnico, implementación y mantenimiento.",
        },
        {
          period: "2021 — 2023",
          role: "Web Developer",
          company: "Proyectos independientes",
          desc: "Construcción de landing pages, sitios institucionales y catálogos digitales con foco en performance y SEO.",
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
      title: "Aprendizaje continuo",
      items: [
        {
          period: "2020 — 2023",
          title: "Tecnicatura en Desarrollo Web",
          school: "Formación universitaria",
        },
        {
          period: "2022",
          title: "React avanzado & ecosistema moderno",
          school: "Coursera / Platzi",
        },
        { period: "2021", title: "UI Design Fundamentals", school: "Bootcamp" },
      ],
    },
    teaching: {
      kicker: "Docencia",
      title: "También enseño lo que aprendo.",
      body: "Doy clases particulares y talleres de HTML, CSS, JavaScript y React. Me gusta acompañar a quienes empiezan en frontend y ver cómo arman su primer proyecto real.",
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
      titleAccent: "pixel-perfect",
      titleTail: "interfaces for products that matter.",
      lede: "Frontend web developer specialized in React. Design and code for digital products that feel fast, clear and well crafted.",
      ctaPrimary: "See projects",
      ctaSecondary: "Get in touch",
      available: "Available for new projects",
    },
    about: {
      kicker: "About",
      title: "Code with a designer's eye.",
      body: "I've been working at the intersection of design and web development for years. My focus is on building accessible, performant and maintainable interfaces — caring for details from typography to front-end architecture.",
      body2:
        "Today I mostly build with React, TypeScript and Tailwind, and I enjoy collaborating with designers and small teams where every decision counts.",
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
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        { label: "UI & styles", items: ["Tailwind CSS", "Sass", "Radix UI", "Framer Motion"] },
        { label: "State & data", items: ["TanStack Query", "Zustand", "REST", "Supabase"] },
        { label: "Tooling", items: ["Vite", "Git", "Figma", "Vitest"] },
      ],
    },
    experience: {
      kicker: "Experience",
      title: "Track record",
      items: [
        {
          period: "2023 — Present",
          role: "Frontend Developer",
          company: "Freelance",
          desc: "Building websites and web apps for studios, businesses and ventures across Argentina. Technical design, implementation and maintenance.",
        },
        {
          period: "2021 — 2023",
          role: "Web Developer",
          company: "Independent projects",
          desc: "Landing pages, brand sites and digital catalogs with a focus on performance and SEO.",
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
      title: "Always learning",
      items: [
        { period: "2020 — 2023", title: "Web Development Degree", school: "University training" },
        { period: "2022", title: "Advanced React & modern ecosystem", school: "Coursera / Platzi" },
        { period: "2021", title: "UI Design Fundamentals", school: "Bootcamp" },
      ],
    },
    teaching: {
      kicker: "Teaching",
      title: "I also teach what I learn.",
      body: "I give private lessons and workshops on HTML, CSS, JavaScript and React. I love helping people getting started in frontend ship their first real project.",
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
