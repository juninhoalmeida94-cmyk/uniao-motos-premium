import { ArrowRight, Shield, Wrench, Clock, Award } from "lucide-react";
import hero from "@/assets/hero-workshop.jpg";
import { Counter } from "./Counter";
import { whatsappLink } from "@/lib/site";

const PILLS = [
  { icon: Wrench, label: "Atendimento especializado" },
  { icon: Shield, label: "Qualidade garantida" },
  { icon: Award, label: "Profissionais experientes" },
  { icon: Clock, label: "Atendimento rápido" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-principal"
      className="relative isolate min-h-dvh flex items-end overflow-hidden bg-black"
    >
      <img
        src={hero}
        alt="Mecânico trabalhando em motocicleta na oficina União Motos"
        width={1920}
        height={1280}
        className="hero-media absolute -top-[100px] left-0 h-[calc(100%+100px)] w-full object-cover opacity-70"
        fetchPriority="high"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36 md:px-8 lg:pb-24 lg:pt-40 xl:pb-28">
        <div
          data-um-reveal="fadeUp"
          className="hero-enter hero-delay-1 mb-6 flex items-center gap-3 font-mono-tech text-primary sm:mb-8 sm:gap-4"
        >
          <span className="h-px w-8 bg-primary sm:w-12" />
          Morumbi · Paranavaí — PR
        </div>
        <h1
          data-um-reveal="mask"
          id="titulo-principal"
          className="hero-enter hero-delay-2 text-hero max-w-5xl"
        >
          Mecânica de motos que resolve <br />
          <span className="text-primary">o problema</span> da sua moto.
        </h1>
        <p
          data-um-reveal="fadeUp"
          className="hero-enter hero-delay-3 mt-8 max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed"
        >
          Oficina no Morumbi, em Paranavaí, com diagnóstico preciso, execução técnica e entrega no
          prazo.
        </p>

        <div
          data-um-reveal="fade"
          className="hero-enter hero-delay-4 mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-2.5"
        >
          {PILLS.map((p, index) => (
            <span
              key={p.label}
              style={{ animationDelay: `${900 + index * 80}ms` }}
              className="inline-flex items-center gap-2 border border-white/15 bg-black/25 px-3 py-2 font-mono-tech text-[0.65rem] text-white/90 backdrop-blur sm:px-3.5 sm:text-[0.72rem]"
            >
              <p.icon className="h-3.5 w-3.5 text-primary" /> {p.label}
            </span>
          ))}
        </div>

        <div
          data-um-reveal="mask"
          className="hero-enter hero-delay-5 mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar orçamento com a União Motos pelo WhatsApp"
            className="btn-premium group inline-flex h-14 w-full items-center justify-center gap-3 bg-primary px-6 font-mono-tech text-white hover:bg-primary-glow sm:w-auto sm:px-9"
          >
            Agendar Orçamento
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#servicos"
            className="btn-premium inline-flex h-14 w-full items-center justify-center gap-2 border border-white/25 px-6 font-mono-tech text-white hover:border-white/50 hover:bg-white/10 sm:w-auto sm:px-9"
          >
            Conhecer Serviços
          </a>
        </div>

        <dl
          data-um-reveal="fadeUp"
          className="hero-enter hero-delay-6 mt-14 grid grid-cols-2 gap-x-5 gap-y-8 border-t border-white/10 pt-8 sm:mt-16 sm:grid-cols-4 sm:gap-x-6 sm:pt-10 lg:mt-20"
        >
          {[
            {
              v: (
                <>
                  <Counter end={500} suffix="+" />
                </>
              ),
              l: "Motos atendidas",
            },
            {
              v: (
                <>
                  <Counter end={10} suffix="+" />
                </>
              ),
              l: "Anos de estrada",
            },
            { v: "★★★★★", l: "Avaliação Google" },
            {
              v: (
                <>
                  <Counter end={100} suffix="%" />
                </>
              ),
              l: "Compromisso",
            },
          ].map((s) => (
            <div key={s.l}>
              <dt className="font-display text-3xl leading-none text-white sm:text-5xl">{s.v}</dt>
              <dd className="mt-3 font-mono-tech text-white/55">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
