import { MessageCircle, Phone, MapPin } from "lucide-react";
import { MAPS_URL, WHATSAPP_NUMBER, whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section
      id="agendamento"
      aria-labelledby="titulo-agendamento"
      className="relative overflow-hidden bg-black py-24 sm:py-32 lg:py-40 xl:py-48"
    >
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 md:px-8">
        <p className="font-mono-tech text-primary mb-8">/ Chegou a hora</p>
        <h2
          id="titulo-agendamento"
          className="font-display text-[2.75rem] uppercase leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Sua moto merece <br />
          <span className="text-primary">o melhor.</span>
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-lg sm:text-xl text-white/70 leading-relaxed">
          Diagnóstico sem custo, orçamento honesto e execução no prazo. Vagas limitadas por semana —
          garanta a sua agora.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:mt-14 md:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar orçamento pelo WhatsApp"
            className="btn-premium inline-flex h-14 items-center justify-center gap-2 bg-primary px-9 font-mono-tech text-white hover:bg-primary-glow"
          >
            <MessageCircle className="h-4 w-4" /> Agendar Orçamento
          </a>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="btn-premium inline-flex h-14 items-center justify-center gap-2 border border-white/25 px-9 font-mono-tech text-white hover:bg-white/10 hover:border-white/50"
          >
            <Phone className="h-4 w-4" /> Ligar agora
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir localização da União Motos no Google Maps"
            className="btn-premium inline-flex h-14 items-center justify-center gap-2 border border-white/25 px-9 font-mono-tech text-white hover:bg-white/10 hover:border-white/50"
          >
            <MapPin className="h-4 w-4" /> Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
