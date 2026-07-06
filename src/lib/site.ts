export const WHATSAPP_NUMBER = "5544998264924";
export const WHATSAPP_DISPLAY = "44 99826-4924";
export const SITE_NAME = "União Motos";
export const SITE_URL = "https://uniao-motos.lovable.app";
export const SEO_TITLE = "União Motos | Mecânica de Motos em Paranavaí — Morumbi";
export const SEO_DESCRIPTION =
  "Mecânica de motos em Paranavaí, no Morumbi. Revisão, diagnóstico, injeção eletrônica, freios e manutenção de motos nacionais e importadas.";
export const SEO_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/db1b45b4-c7a7-43a1-89c3-76dacedc7710/id-preview-67aa22cb--7b026a65-276d-48b5-a447-83d5551d36c2.lovable.app-1783127181309.png";
export const INSTAGRAM_HANDLE = "uni_motos.276";
export const INSTAGRAM_URL = "https://instagram.com/uni_motos.276";
export const MAPS_URL = "https://maps.app.goo.gl/2df3uN1ZB4RJyjmG7";
export const ADDRESS_LINE = "Bairro Morumbi, Paranavaí — PR";
export const HOURS = "Seg–Sex 08h–18h · Sáb 08h–12h";
export const LOCAL_KEYWORDS = [
  "União Motos",
  "mecânica de motos em Paranavaí",
  "oficina de motos Paranavaí",
  "mecânica de motos Morumbi PR",
  "revisão de motos Paranavaí",
  "injeção eletrônica de motos",
  "manutenção de motos Paranavaí",
].join(", ");

export function whatsappLink(message = "Olá! Gostaria de agendar um orçamento na União Motos.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
