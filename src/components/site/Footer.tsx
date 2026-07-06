import logo from "@/assets/logo-uniao-motos.png";
import instagram from "@/assets/icons8-instagram-50.png";
import whatsapp from "@/assets/icons8-whatsapp-50.png";
import {
  ADDRESS_LINE,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="União Motos"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-full"
              />
              <div>
                <div className="font-display text-2xl tracking-wider">
                  <span className="text-[#b80100]">União</span> Motos
                </div>
                <div className="font-mono-tech text-white/50">União · Confiança · Paixão</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-white/70">
              Oficina especializada em motocicletas em Paranavaí — Bairro Morumbi. Trabalho técnico,
              honesto e no prazo.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 hover:border-primary transition-colors"
              >
                <img
                  src={whatsapp}
                  alt=""
                  width={22}
                  height={22}
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 hover:border-primary transition-colors"
              >
                <img
                  src={instagram}
                  alt=""
                  width={22}
                  height={22}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-mono-tech text-primary mb-4">Contato</h2>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                WhatsApp:{" "}
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  @{INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>{ADDRESS_LINE}</li>
              <li>{HOURS}</li>
            </ul>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="font-mono-tech text-primary mb-4">Links</h2>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>
                <a href="#sobre" className="hover:text-primary">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-primary">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-3 border-t border-white/10 pt-6 font-mono-tech text-white/50">
          <div>© {new Date().getFullYear()} União Motos. Todos os direitos reservados.</div>
          <div>Cristo Vive</div>
        </div>
      </div>
    </footer>
  );
}
