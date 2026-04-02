export interface ChatOption {
  label: string;
  value: string;
  response: string;
  followUp?: ChatOption[];
}

export const chatbotGreeting =
  "¡Hola! 👋 Soy el asistente virtual de Garbal. ¿En qué puedo ayudarte?";

export const chatbotOptions: ChatOption[] = [
  {
    label: "🥾 Productos",
    value: "productos",
    response:
      "Tenemos 3 líneas de productos: Botas Industriales, Botas Agrícolas y Calzado Casual. ¿Cuál te interesa?",
    followUp: [
      {
        label: "Botas Industriales",
        value: "industrial",
        response:
          "Nuestra línea industrial incluye la Super Montana Industrial con caña y suela PVC, y la variante con suela Nítrelo para máxima resistencia a aceites y químicos. ¿Te gustaría cotizar?",
        followUp: [
          {
            label: "Sí, quiero cotizar",
            value: "cotizar",
            response:
              "¡Perfecto! Te conecto con nuestro equipo por WhatsApp para darte una cotización personalizada.",
          },
          {
            label: "Ver catálogo",
            value: "catalogo",
            response:
              "Puedes ver todos nuestros productos en la sección de Productos o descargar nuestro catálogo PDF.",
          },
        ],
      },
      {
        label: "Botas Agrícolas",
        value: "agricola",
        response:
          "Para el campo tenemos: Huracán, Dakota y Super Montana Agrícola. Todas con caña y suela PVC, diseñadas para terrenos húmedos y trabajo pesado.",
        followUp: [
          {
            label: "Sí, quiero cotizar",
            value: "cotizar",
            response:
              "¡Perfecto! Te conecto con nuestro equipo por WhatsApp para darte una cotización personalizada.",
          },
        ],
      },
      {
        label: "Calzado Casual",
        value: "casual",
        response:
          "Nuestra línea casual incluye: Veranera, Valeria, Cruzada y Ester. Calzado cómodo y duradero para el día a día.",
        followUp: [
          {
            label: "Sí, quiero cotizar",
            value: "cotizar",
            response:
              "¡Perfecto! Te conecto con nuestro equipo por WhatsApp para darte una cotización personalizada.",
          },
        ],
      },
    ],
  },
  {
    label: "💰 Precios y cotización",
    value: "precios",
    response:
      "Los precios varían según el producto y volumen. Para una cotización personalizada, puedes contactarnos por WhatsApp o llenar el formulario de contacto. ¿Qué prefieres?",
    followUp: [
      {
        label: "WhatsApp",
        value: "whatsapp",
        response:
          "Te redirijo a nuestro WhatsApp para atención directa. ¡Nuestro equipo estará encantado de ayudarte!",
      },
      {
        label: "Formulario de contacto",
        value: "formulario",
        response:
          "Puedes llenar el formulario en nuestra página de Contacto y te responderemos a la brevedad.",
      },
    ],
  },
  {
    label: "📍 Ubicación y horarios",
    value: "ubicacion",
    response:
      "Estamos en Kilómetro 24 ½ carretera al Puerto de La Libertad, Zaragoza, El Salvador.\n\n📞 +503 6310 8147\n📧 servicioalcliente@garbal.com\n\n⏰ Horarios:\nLunes a Viernes: 9:00 AM - 10:00 PM\nSábado: 9:30 AM - 11:30 PM\nDomingo: 10:00 AM - 4:00 PM",
  },
  {
    label: "💬 Hablar con alguien",
    value: "hablar",
    response:
      "¡Claro! Te conecto con nuestro equipo por WhatsApp para atención personalizada.",
  },
];
