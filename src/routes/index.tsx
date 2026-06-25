import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
  Code2,
  Palette,
  Wrench,
  Database,
} from "lucide-react";

import { content, type Lang } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useActiveSection, useRevealOnScroll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mariano Vazquez" },
      {
        name: "description",
        content:
          "Mi nombre es Mariano Vazquez, periodista, comunicador digital y desarrollador frontend.",
      },
      { property: "og:title", content: "Frontend Developer · comunicador digital" },
      {
        property: "og:description",
        content:
          "Mi nombre es Mariano Vazquez, periodista, comunicador digital y desarrollador frontend.",
      },
    ],
  }),
  component: Landing,
});

const SECTION_IDS = ["sobre", "skills", "experiencia", "portfolio", "formacion", "contacto"];

function Landing() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("lang", lang);
  }, [lang]);

  useRevealOnScroll();
  useActiveSection(SECTION_IDS);

  const t = content[lang];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav lang={lang} setLang={setLang} t={t} />
      <main className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-6xl space-y-6 pb-12 pt-6 sm:space-y-8 sm:pt-10">
          <Hero t={t} />
          <About t={t} />
          <Skills t={t} />
          <Experience t={t} />
          <Portfolio t={t} lang={lang} />
          <Education t={t} />
          <Teaching t={t} />
        </div>
      </main>
      <Contact t={t} />
      <Footer t={t} />
      <WhatsAppButton lang={lang} />
    </div>
  );
}

/* -------------------- Nav -------------------- */

function Nav({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)["es"];
}) {
  const links: { id: string; label: string }[] = [
    { id: "sobre", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experiencia", label: t.nav.experience },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "formacion", label: t.nav.education },
    { id: "contacto", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#sobre" className="font-heading text-lg font-extrabold tracking-tighter">
          <span className="text-foreground">mariano</span>
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-nav-link={l.id}
              className="group relative rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-data-[active=true]:scale-x-100" />
            </a>
          ))}
        </nav>

        <LangToggle lang={lang} setLang={setLang} />
      </div>

      {/* Mobile nav strip */}
      <div className="no-scrollbar flex gap-1 overflow-x-auto px-4 pb-2 md:hidden">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            data-nav-link={l.id}
            className="whitespace-nowrap rounded-full border border-border px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground transition-colors data-[active=true]:border-primary/40 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-border bg-surface/60 p-0.5 text-[10px] font-semibold uppercase tracking-widest">
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* -------------------- Hero -------------------- */

function Hero({ t }: { t: (typeof content)["es"] }) {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface to-background p-6 reveal sm:p-10 lg:p-14"
    >
      <div className="absolute -right-20 -top-20 size-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 size-72 rounded-full bg-primary-dark/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          {t.hero.available}
        </span>

        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          {t.hero.title} <span className="text-primary">{t.hero.titleAccent}</span>{" "}
          {t.hero.titleTail}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.lede}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-light active:scale-95"
          >
            {t.hero.ctaPrimary}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-surface/60"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <div className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="size-3.5 text-primary" />
          <span>{t.hero.role}</span>
        </div>
      </div>
    </section>
  );
}

/* -------------------- About -------------------- */

function About({ t }: { t: (typeof content)["es"] }) {
  return (
    <section className="reveal-on-view grid gap-4 lg:grid-cols-3">
      <div className="rounded-3xl border border-border bg-surface/50 p-6 sm:p-8 lg:col-span-2">
        <Kicker>{t.about.kicker}</Kicker>
        <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          {t.about.title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t.about.body}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {t.about.body2}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
        <StatCard value="8+" label={t.stats.years} />
        <StatCard value="20+" label={t.stats.projects} />
        <div className="col-span-2 flex items-center gap-3 rounded-3xl border border-border bg-surface/50 p-5 lg:col-span-1">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Sparkles className="size-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {t.stats.stack}
            </p>
            <p className="truncate text-sm font-medium">React · TypeScript · Tailwind · Firebase</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface/50 p-5">
      <p className="font-heading text-3xl font-extrabold text-primary sm:text-4xl">{value}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

/* -------------------- Skills -------------------- */

function Skills({ t }: { t: (typeof content)["es"] }) {
  const icons = [Code2, Palette, Database, Wrench];
  return (
    <section id="skills" className="reveal-on-view">
      <SectionHead kicker={t.skills.kicker} title={t.skills.title} />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {t.skills.groups.map((g, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={g.label}
              className="group rounded-3xl border border-border bg-surface/50 p-5 transition-colors hover:border-primary/30 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-4" />
                </div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-widest">
                  {g.label}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* -------------------- Experience -------------------- */

function Experience({ t }: { t: (typeof content)["es"] }) {
  return (
    <section
      id="experiencia"
      className="reveal-on-view rounded-3xl border border-border bg-surface/40 p-6 sm:p-10"
    >
      <SectionHead kicker={t.experience.kicker} title={t.experience.title} />
      <ol className="relative mt-8 space-y-8 border-l border-border pl-6 sm:pl-8">
        {t.experience.items.map((item, i) => (
          <li key={i} className="relative">
            <span
              className={`absolute -left-[31px] top-1.5 size-3 rounded-full border-4 border-background sm:-left-[39px] ${
                i === 0 ? "bg-primary" : "bg-muted-foreground/40"
              }`}
            />
            <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
              {item.period}
            </p>
            <h3 className="mt-1 font-heading text-lg font-bold sm:text-xl">{item.role}</h3>
            <p className="text-sm text-muted-foreground">{item.company}</p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/80">{item.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------- Portfolio -------------------- */

function Portfolio({ t, lang }: { t: (typeof content)["es"]; lang: Lang }) {
  return (
    <section id="portfolio" className="reveal-on-view">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Kicker>{t.portfolio.kicker}</Kicker>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.portfolio.title}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
            {t.portfolio.subtitle}
          </p>
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {String(projects.length).padStart(2, "0")} · {lang === "es" ? "proyectos" : "projects"}
        </span>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.key}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface/40 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-background">
              <img
                src={p.image}
                alt={p.name}
                width={800}
                height={600}
                loading="lazy"
                className="portfolio-img size-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90 transition-opacity group-hover:opacity-60" />
              <span className="absolute left-3 top-3 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
                {p.category[lang]}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-base font-bold leading-tight sm:text-lg">
                  {p.name}
                </h3>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">{p.desc[lang]}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Education + Teaching -------------------- */

function Education({ t }: { t: (typeof content)["es"] }) {
  return (
    <section
      id="formacion"
      className="reveal-on-view rounded-3xl border border-border bg-surface/40 p-6 sm:p-10"
    >
      <SectionHead kicker={t.education.kicker} title={t.education.title} />
      <ul className="mt-6 divide-y divide-border">
        {t.education.items.map((it, i) => (
          <li
            key={i}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-4 sm:grid-cols-[140px_1fr_auto]"
          >
            <span className="hidden text-[11px] font-semibold uppercase tracking-widest text-primary sm:block">
              {it.period}
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary sm:hidden">
                {it.period}
              </p>
              <p className="truncate font-heading text-base font-semibold">{it.title}</p>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground">{it.school}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Teaching({ t }: { t: (typeof content)["es"] }) {
  return (
    <section className="reveal-on-view grid gap-4 rounded-3xl border border-border bg-gradient-to-br from-surface/70 to-background p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-10">
      <div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Sparkles className="size-6" />
      </div>
      <div>
        <Kicker>{t.teaching.kicker}</Kicker>
        <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight">{t.teaching.title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {t.teaching.body}
        </p>
      </div>
    </section>
  );
}

/* -------------------- Contact + Footer -------------------- */

function Contact({ t }: { t: (typeof content)["es"] }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xpwavzva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(t.contact.errorMsg);
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error sending form to Formspree:", error);
      alert(t.contact.errorMsg);
      setStatus("idle");
    }
  };

  return (
    <section
      id="contacto"
      className="relative mt-12 overflow-hidden border-t border-border bg-surface/20 px-4 py-16 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl reveal-on-view">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <Kicker>{t.contact.kicker}</Kicker>
            <h2 className="mt-3 font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
              {t.contact.lede}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:marianodariovazquez@gmail.com"
                className="group flex w-fit items-center gap-3 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-surface"
              >
                <Mail className="size-4 text-primary transition-transform group-hover:scale-110" />
                <span>marianodariovazquez@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-3xl border border-border bg-surface/50 p-6 backdrop-blur-xl sm:p-8 shadow-xl">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in-50 duration-500">
                <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="size-6 animate-pulse" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold">{t.contact.successMsg}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Gracias por tu mensaje. Te responderé a la brevedad.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-background"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full resize-none rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:bg-background focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-light active:scale-95 disabled:pointer-events-none disabled:opacity-50"
                >
                  <span>{status === "sending" ? t.contact.sendingBtn : t.contact.submitBtn}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: (typeof content)["es"] }) {
  return (
    <footer className="border-t border-border bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">{t.footer.location}</p>
        <div className="flex items-center gap-2">
          <SocialLink href="https://github.com/mareanovazquez" label="GitHub">
            <Github className="size-4" />
          </SocialLink>
          <SocialLink href="https://ar.linkedin.com/in/mareanovazquez" label="LinkedIn">
            <Linkedin className="size-4" />
          </SocialLink>
          <SocialLink href="mailto:marianodariovazquez@gmail.com" label="Email">
            <Mail className="size-4" />
          </SocialLink>
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          © 2026 · {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
    >
      {children}
    </a>
  );
}

/* -------------------- Shared atoms -------------------- */

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
      <span className="h-px w-6 bg-primary/40" />
      {children}
    </span>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
