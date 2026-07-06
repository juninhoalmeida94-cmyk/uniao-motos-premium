import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-uniao-motos.webp";
import { whatsappLink } from "@/lib/site";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`animate-nav-in fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          aria-label="União Motos — voltar ao início"
          className="flex items-center gap-3 min-w-0"
        >
          <img
            src={logo}
            alt="União Motos"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full shrink-0"
          />
          <span className="font-display text-lg sm:text-xl tracking-wider truncate">
            <span className="text-[#b80100]">União</span> Motos
          </span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar orçamento pelo WhatsApp"
            className="btn-premium hidden sm:inline-flex h-11 items-center rounded-none bg-primary px-6 font-mono-tech text-white hover:bg-primary-glow"
          >
            Agendar
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center text-white"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[9999] flex flex-col overflow-y-auto bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/75 lg:hidden"
        >
          <ul className="flex flex-1 flex-col gap-1 p-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-3xl tracking-wider text-white hover:text-primary border-b border-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar orçamento pelo WhatsApp"
            className="m-6 inline-flex h-14 items-center justify-center bg-primary font-mono-tech text-white"
          >
            Agendar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
