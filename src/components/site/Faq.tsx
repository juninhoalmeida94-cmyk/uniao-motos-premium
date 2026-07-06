import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    q: "Quais marcas vocês atendem?",
    a: "Trabalhamos com todas as marcas nacionais e importadas: Honda, Yamaha, Kawasaki, BMW Motorrad, Royal Enfield, Bajaj, Suzuki, Shineray e Haojue.",
  },
  {
    q: "O diagnóstico tem custo?",
    a: "Não. O diagnóstico inicial é gratuito. Só executamos qualquer serviço após aprovação do orçamento pelo cliente.",
  },
  {
    q: "Vocês dão garantia?",
    a: "Sim. Todos os serviços têm garantia formal, com prazo definido por tipo de reparo, e utilizamos peças de qualidade comprovada.",
  },
  {
    q: "Onde ficam localizados?",
    a: "No Bairro Morumbi, em Paranavaí — PR. Consulte a seção de localização para o endereço completo e rota no Google Maps.",
  },
  {
    q: "Qual o prazo médio de entrega?",
    a: "Revisões e serviços simples saem no mesmo dia. Reparos maiores são combinados no orçamento, sempre com prazo transparente.",
  },
  {
    q: "Quais formas de pagamento aceitam?",
    a: "Dinheiro, Pix, débito e crédito. Consulte parcelamento pelo WhatsApp.",
  },
  {
    q: "Preciso agendar horário?",
    a: "Recomendamos sim, para evitar espera. Basta chamar no WhatsApp e escolhemos o melhor horário.",
  },
  {
    q: "Vocês trabalham com peças originais?",
    a: "Sim. Utilizamos peças originais e genuínas, ou alternativas de qualidade equivalente sempre com sua aprovação prévia.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="titulo-faq"
      className="relative bg-surface-2 py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:px-8 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-24">
        <div>
          <p className="font-mono-tech text-primary mb-5">/ FAQ</p>
          <h2 id="titulo-faq" className="text-section">
            Perguntas <span className="text-primary">frequentes.</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border-white/10">
              <AccordionTrigger className="py-6 text-left font-display text-xl sm:text-2xl tracking-wide hover:text-primary hover:no-underline transition-colors duration-300">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-[15.5px] leading-[1.75] max-w-[68ch] pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
