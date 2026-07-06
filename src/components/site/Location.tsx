import { MapPin, Navigation } from "lucide-react";
import { ADDRESS_LINE, HOURS, MAPS_URL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

export function Location() {
  return (
    <section
      id="contato"
      aria-labelledby="titulo-localizacao"
      className="relative bg-black py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <p className="font-mono-tech text-primary mb-5">/ Localização</p>
        <h2 id="titulo-localizacao" className="text-section mb-12 max-w-3xl sm:mb-16 lg:mb-20">
          Estamos no <span className="text-primary">Morumbi.</span>
        </h2>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 sm:aspect-video">
            <iframe
              title="Mapa União Motos"
              src="https://www.google.com/maps?q=Morumbi,+Paranavai+PR&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-5 border border-white/10 bg-surface p-6 sm:p-10">
            <div>
              <h3 className="font-mono-tech text-primary mb-2">Endereço</h3>
              <div className="flex gap-2 text-white/85 leading-relaxed">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {ADDRESS_LINE}
              </div>
            </div>
            <div>
              <h3 className="font-mono-tech text-primary mb-2">Horário</h3>
              <p className="text-white/85 leading-relaxed">{HOURS}</p>
            </div>
            <div>
              <h3 className="font-mono-tech text-primary mb-2">WhatsApp</h3>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a União Motos pelo WhatsApp"
                className="text-white/85 hover:text-primary transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div className="mt-auto flex flex-col gap-2.5 pt-6">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir rota até a União Motos no Google Maps"
                className="btn-premium inline-flex h-12 items-center justify-center gap-2 bg-primary font-mono-tech text-white hover:bg-primary-glow"
              >
                <Navigation className="h-4 w-4" /> Como chegar
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a União Motos pelo WhatsApp"
                className="btn-premium inline-flex h-12 items-center justify-center border border-white/25 font-mono-tech text-white hover:bg-white/10 hover:border-white/50"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
