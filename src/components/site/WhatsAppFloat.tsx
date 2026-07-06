import whatsappIcon from "@/assets/icons8-whatsapp-50.png";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar orçamento pelo WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex h-14 items-center gap-2 rounded-full bg-[#25D366] px-3 shadow-elevated animate-pulse-ring transition-transform hover:scale-105 sm:right-5 sm:px-4"
      style={{ boxShadow: "0 10px 30px -10px rgba(37,211,102,0.55)" }}
    >
      <img src={whatsappIcon} alt="" width={28} height={28} className="h-7 w-7" />
      <span className="hidden sm:inline font-mono-tech text-white">Agendar Orçamento</span>
    </a>
  );
}
