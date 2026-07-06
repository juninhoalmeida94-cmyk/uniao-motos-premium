import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const IMAGES = [
  {
    src: g1,
    alt: "Detalhe de motor em manutenção na União Motos",
    width: 1024,
    height: 1024,
    span: "md:row-span-2",
  },
  { src: g2, alt: "Mecânico ajustando o freio de uma motocicleta", width: 1024, height: 1280 },
  { src: g3, alt: "Suspensão dianteira de motocicleta em manutenção", width: 1024, height: 1024 },
  {
    src: g4,
    alt: "Motocicleta Honda vermelha revisada na oficina",
    width: 1024,
    height: 1280,
    span: "md:row-span-2",
  },
  { src: g5, alt: "Painel de motocicleta durante diagnóstico técnico", width: 1024, height: 1024 },
  { src: g6, alt: "Coroa e corrente de motocicleta sendo lubrificadas", width: 1024, height: 1024 },
];

export function Gallery() {
  return (
    <section
      id="galeria"
      aria-labelledby="titulo-galeria"
      className="relative bg-black py-20 sm:py-28 lg:py-36 xl:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <p className="font-mono-tech text-primary mb-5">/ Galeria</p>
        <h2 id="titulo-galeria" className="text-section mb-12 max-w-3xl sm:mb-16 lg:mb-20">
          Trabalho <span className="text-primary">de perto.</span>
        </h2>

        <div className="grid auto-rows-[140px] grid-cols-2 gap-2 min-[390px]:auto-rows-[170px] sm:auto-rows-[220px] sm:gap-4 md:auto-rows-[240px] md:grid-cols-3 lg:auto-rows-[260px]">
          {IMAGES.map((img) => (
            <figure
              key={img.src}
              className={`group relative isolate overflow-hidden bg-surface ${img.span ?? ""}`}
            >
              <a
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir imagem: ${img.alt}`}
                className="relative z-10 block h-full w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
