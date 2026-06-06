export interface SitePageContent {
  title: string;
  description: string;
  sections: Array<{ heading?: string; body: string }>;
}

export const SITE_PAGES: Record<string, SitePageContent> = {
  privacidad: {
    title: "Política de privacidad",
    description: "Cómo ComuniApp protege y utiliza tu información.",
    sections: [
      {
        body: "ComuniApp recopila únicamente los datos necesarios para conectar residentes con proveedores de servicios locales. No vendemos tu información a terceros.",
      },
      {
        heading: "Datos que recopilamos",
        body: "Nombre, correo electrónico, teléfono y preferencias de servicio cuando creas una cuenta o solicitas un servicio.",
      },
      {
        heading: "Tus derechos",
        body: "Puedes solicitar acceso, corrección o eliminación de tus datos desde la sección Editar Perfil o contactándonos.",
      },
    ],
  },
  terminos: {
    title: "Términos de servicio",
    description: "Condiciones de uso de la plataforma ComuniApp.",
    sections: [
      {
        body: "Al usar ComuniApp aceptas utilizar la plataforma de forma respetuosa y conforme a las leyes locales aplicables.",
      },
      {
        heading: "Responsabilidad",
        body: "ComuniApp facilita la conexión entre usuarios. Los acuerdos de servicio se realizan directamente entre residente y proveedor.",
      },
    ],
  },
  sostenibilidad: {
    title: "Informe de sostenibilidad",
    description: "Nuestro compromiso con el comercio comunitario responsable.",
    sections: [
      {
        body: "Promovemos servicios locales para reducir desplazamientos y fortalecer la economía del barrio.",
      },
      {
        heading: "Metas 2026",
        body: "Ampliar la red de emprendedores verificados y medir el impacto social de cada transacción comunitaria.",
      },
    ],
  },
  ayuda: {
    title: "Centro de ayuda",
    description: "Respuestas rápidas para residentes y emprendedores.",
    sections: [
      {
        heading: "¿Cómo busco un servicio?",
        body: "Inicia sesión, usa el buscador del dashboard o explora las categorías de Hogar para ver electricistas, limpieza y más.",
      },
      {
        heading: "¿Cómo publico un servicio?",
        body: "Regístrate como emprendedor, crea tu perfil y usa Crear servicio desde tu tablero emprendedor.",
      },
      {
        heading: "¿Necesitas más ayuda?",
        body: "Visita la página de contacto y escríbenos. Respondemos en un plazo de 24 a 48 horas hábiles.",
      },
    ],
  },
  contacto: {
    title: "Contáctenos",
    description: "Estamos aquí para ayudarte.",
    sections: [
      {
        body: "Correo: soporte@comuniapp.com",
      },
      {
        body: "Horario de atención: lunes a viernes, 9:00 – 18:00.",
      },
      {
        body: "Para soporte urgente sobre un servicio activo, incluye tu número de reserva en el asunto del correo.",
      },
    ],
  },
  recuperar: {
    title: "Recuperar contraseña",
    description: "Te enviaremos instrucciones a tu correo.",
    sections: [
      {
        body: "Ingresa el correo asociado a tu cuenta. Si existe en nuestro sistema, recibirás un enlace para restablecer tu contraseña.",
      },
      {
        body: "En esta versión de demostración el envío está simulado. Usa las credenciales de prueba en la pantalla de inicio de sesión.",
      },
    ],
  },
};
