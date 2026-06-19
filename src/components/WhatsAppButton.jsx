const MESSAGES = {
  es: "Hola! Vi tu portfolio y quería consultarte...",
  en: "Hi! I saw your portfolio and wanted to ask...",
};

export function WhatsAppButton({ lang = "es" }) {
  const message = encodeURIComponent(MESSAGES[lang]);
  const href = `https://wa.me/5491132380400?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === "es" ? "Chatear por WhatsApp" : "Chat on WhatsApp"}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-[0_0_0_4px_rgba(37,211,102,0.25)] active:scale-95 sm:h-14 sm:w-14"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      </svg>
    </a>
  );
}
