const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "11947756885";

export function buildWhatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/55${number}?text=${encoded}`;
}

export const defaultMessage =
  "Olá Isa! Gostaria de agendar uma consulta.";

export const chooseMessage =
  "Olá Isa! Não sei qual terapia combina comigo, pode me ajudar a escolher?";
