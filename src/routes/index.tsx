import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Splash } from "@/components/site/Splash";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { Results } from "@/components/site/Results";
import { Faq, FAQ_JSONLD } from "@/components/site/Faq";
import { Location } from "@/components/site/Location";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PremiumMotion } from "@/components/site/PremiumMotion";
import hero from "@/assets/hero-workshop.jpg";
import {
  INSTAGRAM_URL,
  LOCAL_KEYWORDS,
  SEO_DESCRIPTION,
  SEO_IMAGE,
  SEO_TITLE,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "@/lib/site";

const Testimonials = lazy(() =>
  import("@/components/site/Testimonials").then((module) => ({
    default: module.Testimonials,
  })),
);

const BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  image: SEO_IMAGE,
  logo: SEO_IMAGE,
  description: SEO_DESCRIPTION,
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bairro Morumbi",
    addressLocality: "Paranavaí",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Paranavaí",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  sameAs: [INSTAGRAM_URL],
  knowsAbout: [
    "Revisão de motocicletas",
    "Diagnóstico eletrônico",
    "Injeção eletrônica",
    "Freios e suspensão",
    "Manutenção preventiva",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      { name: "description", content: SEO_DESCRIPTION },
      { name: "keywords", content: LOCAL_KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "BR-PR" },
      { name: "geo.placename", content: "Paranavaí" },
      { property: "og:title", content: SEO_TITLE },
      { property: "og:description", content: SEO_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: SEO_IMAGE },
      { property: "og:image:alt", content: "Oficina União Motos em Paranavaí" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_TITLE },
      { name: "twitter:description", content: SEO_DESCRIPTION },
      { name: "twitter:image", content: SEO_IMAGE },
      { name: "twitter:image:alt", content: "Oficina União Motos em Paranavaí" },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "preload", href: hero, as: "image", type: "image/jpeg", fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(BUSINESS_JSONLD),
      },
      { type: "application/ld+json", children: JSON.stringify(FAQ_JSONLD) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-black text-foreground">
      <PremiumMotion />
      <Splash />
      <Navbar />
      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <Results />
        <Suspense
          fallback={
            <div
              className="min-h-[32rem] bg-black"
              role="status"
              aria-label="Carregando depoimentos"
            />
          }
        >
          <Testimonials />
        </Suspense>
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
