import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const REVIEWS = [
  {
    name: "Rafael S.",
    moto: "Honda CB 500F",
    text: "Serviço impecável. Diagnóstico rápido e preço justo. Minha CB voltou nova.",
  },
  {
    name: "Marcelo P.",
    moto: "Yamaha MT-07",
    text: "Honestidade em primeiro lugar. Explicaram cada peça antes de trocar.",
  },
  {
    name: "Juliana M.",
    moto: "Honda Biz 125",
    text: "Atendimento rápido e educado. Recomendo demais para quem mora em Paranavaí.",
  },
  {
    name: "Eduardo L.",
    moto: "BMW G 310 GS",
    text: "Encontrei quem entendesse minha BMW no Morumbi. Trabalho premium.",
  },
  {
    name: "Diego R.",
    moto: "Kawasaki Ninja 400",
    text: "Preparação e revisão nota 10. Voltarei com certeza.",
  },
];

export function Testimonials() {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start" });
  const paused = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  const togglePaused = () => {
    paused.current = !paused.current;
    setIsPaused(paused.current);
  };

  useEffect(() => {
    if (!api) return;
    const id = window.setInterval(() => {
      if (!paused.current) api.scrollNext();
    }, 6000);
    return () => window.clearInterval(id);
  }, [api]);

  return (
    <section
      id="depoimentos"
      aria-labelledby="titulo-depoimentos"
      className="relative bg-black py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <p className="font-mono-tech text-primary mb-5">/ Depoimentos</p>
        <div className="mb-12 flex items-end justify-between gap-6 sm:mb-16 lg:mb-20">
          <h2 id="titulo-depoimentos" className="text-section max-w-3xl">
            Quem confia, <span className="text-primary">volta.</span>
          </h2>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Depoimento anterior"
              className="carousel-control"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={togglePaused}
              aria-label={
                isPaused ? "Continuar rotação dos depoimentos" : "Pausar rotação dos depoimentos"
              }
              className="carousel-control"
            >
              {isPaused ? (
                <Play aria-hidden="true" className="h-4 w-4" />
              ) : (
                <Pause aria-hidden="true" className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Próximo depoimento"
              className="carousel-control"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Depoimentos de clientes"
          className="overflow-hidden"
          ref={ref}
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = isPaused;
          }}
          onFocusCapture={() => {
            paused.current = true;
          }}
          onBlurCapture={() => {
            paused.current = isPaused;
          }}
        >
          <div className="-ml-4 flex">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                aria-label={`Avaliação de ${r.name}, proprietário de ${r.moto}`}
                className="card-premium ml-4 min-w-0 shrink-0 basis-full border border-white/10 bg-surface p-7 md:basis-1/2 md:p-9 xl:basis-1/3 xl:p-10"
              >
                <div aria-label="5 de 5 estrelas" className="text-primary text-lg tracking-widest">
                  <span aria-hidden="true">★★★★★</span>
                </div>
                <blockquote className="mt-5 text-lg leading-[1.7] text-white/85">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-display text-xl tracking-wide">{r.name}</div>
                  <div className="font-mono-tech text-white/50 mt-1">{r.moto}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
