import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Servicios", "El Equipo", "Reseñas", "Contacto"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto h-20 flex items-center justify-between px-6">
        <a href="#" className="font-display text-2xl font-bold text-foreground tracking-wide">
          AFRA <span className="font-body text-xs tracking-[3px] text-muted-foreground block -mt-1">PELUQUERÍA · PALERMO</span>
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="font-body text-sm font-medium tracking-[2px] uppercase text-foreground/70 hover:text-foreground transition-colors relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="https://wa.me/5491147744011" target="_blank" rel="noopener noreferrer" className="ml-4 px-7 py-2.5 bg-primary text-primary-foreground font-body text-xs font-semibold tracking-[2px] uppercase hover:bg-primary/90 transition-all duration-300">
            Reservar Turno
          </a>
          <a href="tel:01147744011" className="font-body text-sm text-foreground/60 hover:text-foreground transition-colors">011 4774-4011</a>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border py-6 flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="font-body text-sm font-medium tracking-[2px] uppercase text-foreground" onClick={() => setOpen(false)}>{link}</a>
          ))}
          <a href="https://wa.me/5491147744011" className="px-7 py-2.5 bg-primary text-primary-foreground font-body text-xs font-semibold tracking-[2px] uppercase">Reservar Turno</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
