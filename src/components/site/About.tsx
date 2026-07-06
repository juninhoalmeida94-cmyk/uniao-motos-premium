import about from "@/assets/about-shop-new.png";
import { Zap, Users, ShieldCheck, Wrench, Handshake, FileText } from "lucide-react";

const BADGES = [
  { icon: Zap, title: "Atendimento rápido" },
  { icon: Users, title: "Profissionais especializados" },
  { icon: ShieldCheck, title: "Garantia nos serviços" },
  { icon: Wrench, title: "Equipamentos modernos" },
  { icon: Handshake, title: "Honestidade" },
  { icon: FileText, title: "Orçamento transparente" },
];

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="relative bg-surface py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="relative isolate">
          <a
            href={about}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir foto da oficina União Motos em tamanho completo"
            className="relative z-10 block cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
          >
            <img
              src={about}
              alt="Interior da oficina União Motos em Paranavaí"
              width={1280}
              height={1280}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </a>
          <div className="pointer-events-none absolute -bottom-8 -right-8 z-20 hidden sm:block bg-primary p-8 max-w-[240px] shadow-elevated">
            <div className="font-display text-5xl leading-none">10+</div>
            <div className="font-mono-tech mt-3 text-white/90">
              anos consertando motos em Paranavaí
            </div>
          </div>
        </div>
        <div>
          <p className="font-mono-tech text-primary mb-5">/ Sobre a União Motos</p>
          <h2 id="titulo-sobre" className="text-section max-w-xl">
            Dedicação, qualidade e compromisso <span className="text-primary">em cada moto.</span>
          </h2>
          <div className="mt-8 space-y-5 text-white/70 text-[17px] leading-[1.75] max-w-[58ch]">
            <p>
              A UNIÃO MOTOS trabalha para oferecer o melhor atendimento e soluções completas para
              sua moto. Nossa missão é entregar confiança, segurança e excelência em cada serviço.
            </p>
            <p>
              Com equipe especializada e equipamentos de ponta, estamos prontos para resolver
              qualquer problema mecânico. Cada cliente é importante e cada moto recebe o cuidado
              que merece.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3">
            {BADGES.map((b) => (
              <div
                key={b.title}
                className="card-premium min-h-32 border border-white/10 bg-black/40 p-5"
              >
                <b.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <div className="mt-4 font-mono-tech text-white/85 text-[11px] leading-tight">
                  {b.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
