import { Check } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const CASES = [
  {
    title: "Honda CG 160 — motor com falha",
    problem: "Falhas em rotação alta, consumo elevado.",
    solution: "Limpeza de bicos, troca de velas e ajuste da injeção.",
    time: "1 dia útil",
  },
  {
    title: "Honda Biz 125 — freios",
    problem: "Frenagem esponjosa e ruído.",
    solution: "Troca de pastilhas, sangria do sistema e regulagem.",
    time: "3 horas",
  },
  {
    title: "Honda CB 300R — revisão completa",
    problem: "Revisão dos 20.000 km.",
    solution: "Checklist completo, óleo, filtros e diagnóstico eletrônico.",
    time: "1 dia útil",
  },
];

export function Results() {
  return (
    <section
      id="resultados"
      aria-labelledby="titulo-resultados"
      className="relative bg-surface py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:mb-16 md:flex-row md:items-end md:justify-between lg:mb-20">
          <div>
            <p className="font-mono-tech text-primary mb-5">/ Resultados</p>
            <h2 id="titulo-resultados" className="text-section max-w-3xl">
              Casos reais. <span className="text-primary">Motos rodando.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="card-premium flex flex-col border border-white/10 bg-black p-7 sm:p-10"
            >
              <div className="font-mono-tech text-primary">Caso · {c.time}</div>
              <h3 className="mt-5 font-display text-2xl tracking-wide leading-tight">{c.title}</h3>
              <div className="mt-8 space-y-5 text-[15px]">
                <div>
                  <div className="font-mono-tech text-white/45 mb-2">Problema</div>
                  <p className="text-white/80 leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <div className="font-mono-tech text-white/45 mb-2">Solução</div>
                  <p className="text-white/80 leading-relaxed flex gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-1" /> {c.solution}
                  </p>
                </div>
              </div>
              <a
                href={whatsappLink(`Vi o caso "${c.title}" no site. Quero um orçamento.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Solicitar orçamento relacionado ao caso ${c.title}`}
                className="mt-10 inline-flex items-center gap-2 font-mono-tech text-primary transition-transform duration-300 hover:translate-x-1"
              >
                Quero o mesmo →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
