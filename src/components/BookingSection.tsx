import salonInterior from "@/assets/salon-interior.jpg";
import iconPin from "@/assets/icon-pin.svg";
import iconPhoneCall from "@/assets/icon-phone-call.svg";
import iconClock from "@/assets/icon-clock.svg";
import google from "@/assets/google.png";
import star from "@/assets/star.svg";
import { RevealSection } from "@/hooks/useScrollReveal";

const BookingSection = () => {
  return (
    <section id="contacto" className="relative w-full">
      <div className="absolute inset-0">
        <img src={salonInterior} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>
      <div className="relative z-10 max-w-[800px] mx-auto px-6 py-20 md:py-28 text-center">
        <RevealSection direction="up">
          <span className="font-accent text-xs tracking-[4px] uppercase text-white/50">¿Primera vez en Afra?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-[1.1] mt-4 mb-6">
            Reservar es <span className="italic font-light">fácil.</span>
          </h2>
          <p className="font-body text-base text-white/65 leading-[1.8] mb-10 max-w-[550px] mx-auto">
            Llamanos al 011 4774-4011, o escribinos por WhatsApp y te confirmamos el turno disponible con Rodrigo o Eugenia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="https://wa.me/5491147744011" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-accent text-white font-body text-sm font-semibold tracking-[2px] uppercase hover:bg-accent/90 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
              Reservar por WhatsApp
            </a>
            <a href="tel:01147744011" className="px-10 py-4 border border-white/30 text-white font-body text-sm font-semibold tracking-[2px] uppercase hover:bg-white/10 transition-all duration-300">
              Llamar: 011 4774-4011
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/50">
            <div className="flex items-center gap-2">
              <img src={iconPin} alt="" className="w-4 h-4" style={{ filter: "brightness(0) invert(1) opacity(0.5)" }} />
              <span className="font-accent text-xs">Bonpland 1427, Palermo</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={iconClock} alt="" className="w-4 h-4" style={{ filter: "brightness(0) invert(1) opacity(0.5)" }} />
              <span className="font-accent text-xs">Mar–Sáb 8–20hs</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={google} alt="" className="h-3" />
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <img key={i} src={star} alt="" className="w-2.5 h-2.5" />)}</div>
              <span className="font-accent text-xs">4.6 · 140 reseñas</span>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};
export default BookingSection;
