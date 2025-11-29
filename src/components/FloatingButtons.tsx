import { Calendar, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const whatsappNumber = "917305571103";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to book a consultation at Chennai Hair Studio Clinic.");

  return (
    <>
      {/* WhatsApp Button - Bottom Left */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-float bottom-6 left-6 bg-[#25D366] text-white hover:bg-[#20BA5C]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Book Button - Bottom Right */}
      <a
        href="#book"
        className="btn-float bottom-6 right-6 bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label="Book Consultation"
      >
        <Calendar className="w-6 h-6" />
      </a>
    </>
  );
};

export default FloatingButtons;
