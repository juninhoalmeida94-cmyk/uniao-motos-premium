import { useEffect } from "react";

type RevealKind = "fadeUp" | "mask" | "fade";

export function PremiumMotion() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    document.documentElement.classList.add("motion-ready");

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-um-reveal]"));

    const groups = new Map<Element, number>();

    elements.forEach((element) => {
      const kind = (element.dataset.umReveal ?? "fadeUp") as RevealKind;
      element.classList.add("premium-reveal");
      element.dataset.umRevealKind = kind;

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
    let raf = 0;

    const updateParallax = () => {
      raf = 0;
      if (!hero) return;
      const y = window.scrollY;
      if (y <= 0) {
        hero.style.setProperty("--hero-shift", `0px`);
        return;
      }
      if (y > window.innerHeight * 1.2) return;
      hero.style.setProperty("--hero-shift", `${Math.min(y * 0.14, 84)}px`);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
