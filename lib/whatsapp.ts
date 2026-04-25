const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "11999998888";

export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/55${number}?text=${encoded}`;
}

export const defaultMessage =
  "Olá Isa! Gostaria de agendar uma consulta.";
