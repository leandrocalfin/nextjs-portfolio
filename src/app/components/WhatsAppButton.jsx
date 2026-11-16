import { FaWhatsapp } from "react-icons/fa";

// Número en formato internacional sin "+" ni espacios (wa.me).
// Argentina: 54 + 9 + código de área + número.
const WHATSAPP_NUMBER = "5492966717176";
const WHATSAPP_MESSAGE = "Hola, quiero hacer una consulta.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
      {/* ONDAS */}
      <span className="whatsapp-pulse whatsapp-pulse-1" aria-hidden="true" />
      <span className="whatsapp-pulse whatsapp-pulse-2" aria-hidden="true" />

      {/* BOTÓN */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="
          relative z-10
          flex h-[52px] w-[52px]
          items-center justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_25px_rgba(37,211,102,0.35)]
          transition-all duration-300
          hover:scale-110
          sm:h-[56px] sm:w-[56px]
          md:h-[60px] md:w-[60px]
        "
      >
        <FaWhatsapp className="h-[28px] w-[28px] sm:h-[31px] sm:w-[31px] md:h-[34px] md:w-[34px]" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
