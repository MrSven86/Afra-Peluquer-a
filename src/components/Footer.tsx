import iconScissorComb from "@/assets/icon-scissor-comb.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={iconScissorComb} alt="" className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} />
              <span className="font-display text-lg font-bold text-white">AFRA</span>
            </div>
            <p className="font-body text-sm text-white/40">Peluquería · Palermo · Buenos Aires</p>
          </div>
          <div className="font-body text-sm text-white/45 space-y-1">
            <p>Bonpland 1427, Palermo</p>
            <p>Buenos Aires, Argentina</p>
            <p><a href="tel:01147744011" className="hover:text-white/70 transition-colors">011 4774-4011</a></p>
            <p>Mar–Sáb 8:00–20:00</p>
          </div>
          <div className="font-body text-sm text-white/45 space-y-1">
            {["Servicios", "El Equipo", "Reseñas", "Contacto"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} className="block hover:text-white/70 transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="font-accent text-xs text-white/25 text-center">© 2026 Afra Peluquería. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
