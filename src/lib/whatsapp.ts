const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Vi este servicio en ComuniApp y me interesa.";

export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function buildWhatsAppContactUrl(phone: string): string {
  const cleanPhone = formatPhoneForWhatsApp(phone);
  const text = encodeURIComponent(WHATSAPP_CONTACT_MESSAGE);
  return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${text}`;
}
