# Curriculum Vitae v2

Sitio web personal tipo CV / portfolio de **Mariano Vazquez**: periodista, comunicador digital y desarrollador frontend. Desplegado como SPA estática con TanStack Start, React, TypeScript y Tailwind CSS.

---

## Tecnologías principales

- **Framework:** [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routing)
- **Frontend:** React 19, TypeScript, Vite
- **Estilos:** Tailwind CSS v4, `@tailwindcss/vite`, fuentes Inter y Sora
- **Componentes UI:** shadcn/ui basado en Radix UI + Lucide icons
- **Internacionalización:** sistema propio en `src/lib/i18n.ts`
- **Despliegue:** Firebase Hosting

---

## Estructura del proyecto

```
.
├── src/
│   ├── assets/            # Imágenes del portfolio y recursos estáticos
│   ├── components/        # Componentes React
│   │   ├── ui/            # Componentes de shadcn/ui (button, card, dialog, etc.)
│   │   └── WhatsAppButton.tsx
│   ├── hooks/             # Hooks personalizados
│   │   ├── use-mobile.tsx
│   │   └── use-reveal.ts  # Animaciones al hacer scroll
│   ├── lib/               # Utilidades y datos
│   │   ├── i18n.ts        # Diccionarios de texto en es/en
│   │   ├── projects.ts    # Datos del portfolio
│   │   ├── utils.ts       # cn() y helpers
│   │   └── ...
│   ├── routes/            # Rutas de TanStack Start
│   │   ├── __root.tsx     # Layout raíz
│   │   ├── index.tsx      # Página principal (CV completo)
│   │   └── README.md      # Convenciones de routing
│   ├── styles.css         # Entrada de Tailwind + fuentes
│   ├── router.tsx         # Configuración del router
│   └── start.ts           # Configuración de TanStack Start
├── firebase.json          # Configuración de Firebase Hosting
├── vite.config.ts         # Configuración de Vite
└── package.json
```

---

## Scripts disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Build de producción (cliente + SSR + prerender)
npm run preview  # Previsualiza el build localmente
npm run lint     # Ejecuta ESLint
npm run format   # Formatea con Prettier
```

---

## Cómo empezar

1. Clonar el repositorio e instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

3. Abrir `http://localhost:3000` en el navegador.

---

## Internacionalización

El sitio soporta dos idiomas: **español (es)** e **inglés (en)**.

Los textos de la interfaz viven en `src/lib/i18n.ts`, que actúa como fuente de verdad para:

- Navegación
- Hero
- Sobre mí
- Skills
- Experiencia
- Formación
- Docencia
- Contacto
- Footer

El idioma se guarda en `localStorage` y persiste entre recargas.

---

## Datos del portfolio

Los proyectos del portfolio están centralizados en `src/lib/projects.ts`. Cada proyecto incluye:

- `key`: identificador único
- `name`: nombre visible
- `image`: imagen importada
- `tags`: stack tecnológico
- `href`: URL del sitio
- `desc`: descripción en español e inglés
- `category`: categoría en español e inglés

Para agregar, editar o eliminar un proyecto se modifica únicamente ese archivo.

---

## Estilos

Tailwind CSS v4 se configura vía `vite.config.ts` (plugin `@tailwindcss/vite`) y la entrada de estilos es `src/styles.css`.

Temas y utilidades adicionales:

- `tw-animate-css` para animaciones de componentes
- Variables CSS personalizadas para tema claro/oscuro
- Fuente **Inter** para cuerpo de texto y **Sora** para títulos

---

## Despliegue

El proyecto está configurado para desplegarse en **Firebase Hosting** (`firebase.json`).

Para desplegar manualmente (con Firebase CLI instalado):

```bash
npm run build
firebase deploy
```

---

## Convenciones

- Routing file-based de TanStack Start. Ver `src/routes/README.md` para más detalles.
- Componentes de UI en `src/components/ui/` siguen el patrón de shadcn/ui.
- Hooks reutilizables en `src/hooks/`.
- Datos y utilidades en `src/lib/`.
