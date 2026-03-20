import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import google from "@/assets/google.png";
import star from "@/assets/star.svg";
import iconPin from "@/assets/icon-pin.svg";
import iconClock from "@/assets/icon-clock.svg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
      <img src={heroBg} alt="Salon" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 flex flex-col justify-center">
        <p className="font-accent text-xs tracking-[5px] uppercase text-white/60 mb-4" style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
          Bonpland 1427 · Palermo · Buenos Aires
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-[84px] font-bold text-white leading-[1.05] mb-6" style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.4s" }}>
          Salí tal cual<br /><span className="italic font-light">como querías.</span>
        </h1>

        <p className="font-body text-base md:text-lg text-white/75 max-w-[540px] leading-relaxed mb-10" style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.6s" }}>
          En Afra, los mismos expertos — Rodrigo en corte y Eugenia en color — llevan años escuchando exactamente lo que pedís, y entregando exactamente eso.
        </p>

        <div className="flex flex-wrap gap-4 mb-12" style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.8s" }}>
          <a href="https://wa.me/5491147744011" target="_blank" rel="noopener noreferrer" className="px-10 py-3.5 bg-accent text-white font-body text-sm font-semibold tracking-[2px] uppercase hover:bg-accent/90 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
            Reservar turno
          </a>
          <a href="#servicios" className="px-10 py-3.5 border border-white/40 text-white font-body text-sm font-semibold tracking-[2px] uppercase hover:bg-white/10 hover:border-white/70 transition-all duration-300">
            Ver servicios
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6" style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 1s" }}>
          <div className="flex items-center gap-2">
            <img src={google} alt="Google" className="h-4 object-contain" />
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <img key={i} src={star} alt="" className="w-3 h-3" />)}</div>
            <span className="font-accent text-sm text-white/70">4.6 · 140 reseñas</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconPin} alt="" className="w-4 h-4" style={{ filter: "brightness(0) invert(1) opacity(0.6)" }} />
            <span className="font-accent text-sm text-white/60">Bonpland 1427, Palermo</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={iconClock} alt="" className="w-4 h-4" style={{ filter: "brightness(0) invert(1) opacity(0.6)" }} />
            <span className="font-accent text-sm text-white/60">Mar–Sáb · 8 a 20hs</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
