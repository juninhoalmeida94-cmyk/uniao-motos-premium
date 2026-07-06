import { useEffect } from "react";

const REVEAL_SELECTOR = [
  "main > section:not(#inicio) .font-mono-tech.text-primary",
  "main > section:not(#inicio) h2",
  "main > section:not(#inicio) .text-section + p",
  ".card-premium",
  "#servicos .grid > a",
  "main section ol > li",
  "main section figure",
  "main section iframe",
  "main > section:not(#inicio) .group",
].join(",");

export function PremiumMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    document.documentElement.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    const groups = new Map<Element, number>();

    elements.forEach((element) => {
      element.classList.add("premium-reveal");

      const parent = element.parentElement;
      if (!parent) return;
      const index = groups.get(parent) ?? 0;
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 350)}ms`);
      groups.set(parent, index + 1);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    const hero = document.querySelector<HTMLElement>("#inicio");
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      if (!hero || window.scrollY > window.innerHeight * 1.2) return;
      hero.style.setProperty("--hero-shift", `${Math.min(window.scrollY * 0.16, 90)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
