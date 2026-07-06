const STEPS = [
  { n: "01", title: "Agende", desc: "Fale conosco no WhatsApp e marque seu horário." },
  { n: "02", title: "Diagnóstico", desc: "Análise técnica sem custo inicial." },
  { n: "03", title: "Orçamento", desc: "Transparente, item por item, antes de tocar." },
  { n: "04", title: "Execução", desc: "Peças de qualidade e mão de obra especializada." },
  { n: "05", title: "Entrega", desc: "Sua moto testada e pronta no prazo combinado." },
];

export function Process() {
  return (
    <section
      id="processo"
      aria-labelledby="titulo-processo"
      className="relative bg-surface-2 py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <p className="font-mono-tech text-primary mb-5">/ Processo</p>
        <h2 id="titulo-processo" className="text-section max-w-3xl">
          Como <span className="text-primary">trabalhamos.</span>
        </h2>

        <ol className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-black p-7 sm:p-8 xl:p-10">
              <div className="font-mono-tech text-primary">{s.n}</div>
              <h3 className="mt-8 font-display text-2xl tracking-wide">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
