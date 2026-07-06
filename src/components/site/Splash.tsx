import { useEffect, useState } from "react";

export function Splash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      sessionStorage.getItem("um-splash") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(false);
      return;
    }
    const dismiss = () => {
      setFading(true);
      window.setTimeout(() => setVisible(false), 500);
      sessionStorage.setItem("um-splash", "1");
    };
    const t = window.setTimeout(dismiss, 900);
    const onScroll = () => dismiss();
    window.addEventListener("scroll", onScroll, { once: true, passive: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) return null;
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ${fading ? "opacity-0" : "opacity-100"}`}
    >
      <span
        className="font-display text-5xl sm:text-7xl tracking-widest text-white"
        style={{ animation: "fade-up 1s ease-out both" }}
      >
        <span className="text-primary-readable">União</span> Motos
      </span>
    </div>
  );
}
