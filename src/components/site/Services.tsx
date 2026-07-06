import {
  Gauge,
  Cog,
  Disc,
  Waves,
  Droplet,
  Cpu,
  Zap,
  Circle,
  Search,
  ShieldCheck,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { whatsappLink } from "@/lib/site";

const SERVICES = [
  {
    icon: Gauge,
    title: "Revisões completas",
    desc: "Checklist técnico com relatório detalhado da sua moto.",
  },
  { icon: Cog, title: "Motor", desc: "Retífica, reparo e regulagem com peças de qualidade." },
  { icon: Disc, title: "Freios", desc: "Discos, pastilhas, fluido e sangria com precisão." },
  { icon: Waves, title: "Suspensão", desc: "Regulagem, troca de óleo do bengala e amortecedores." },
  {
    icon: Droplet,
    title: "Troca de óleo",
    desc: "Óleos indicados por fabricante — sem improviso.",
  },
  { icon: Cpu, title: "Injeção Eletrônica", desc: "Scanner, limpeza de bicos e ajuste fino." },
  { icon: Zap, title: "Elétrica", desc: "Bateria, alternador, chicote e iluminação." },
  { icon: Circle, title: "Embreagem", desc: "Discos, molas e cabos com ajuste correto." },
  { icon: Search, title: "Diagnóstico", desc: "Sem custo inicial — descobrimos o problema real." },
  { icon: ShieldCheck, title: "Manutenção Preventiva", desc: "Sua moto sempre pronta para rodar." },
  { icon: Rocket, title: "Preparação", desc: "Ajustes para performance e viagens longas." },
];

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="titulo-servicos"
      className="relative bg-black py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between lg:mb-20">
          <div>
            <p className="font-mono-tech text-primary mb-5">/ Serviços</p>
            <h2 id="titulo-servicos" className="text-section max-w-3xl">
              Do óleo à injeção. <span className="text-primary">Da rua à pista.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/70 text-base leading-relaxed">
            Todos os serviços com garantia, peças de qualidade e orçamento transparente antes de
            qualquer execução.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 border border-white/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => (
            <a
              key={s.title}
              href={whatsappLink(`Olá! Tenho interesse no serviço de ${s.title.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Solicitar orçamento para ${s.title} pelo WhatsApp`}
              className="group relative flex min-h-[220px] flex-col bg-black p-7 transition-colors duration-500 hover:bg-primary sm:min-h-[240px] sm:p-8 xl:p-10"
            >
              <s.icon
                className="h-9 w-9 text-primary group-hover:text-white transition-colors duration-500"
                strokeWidth={1.25}
              />
              <h3 className="mt-8 font-display text-2xl tracking-wide">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65 group-hover:text-white/90 flex-1 transition-colors duration-500">
                {s.desc}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 font-mono-tech text-primary group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
                Solicitar <ArrowUpRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
