import iconHaircut from "@/assets/icon-haircut.svg";
import iconComb from "@/assets/icon-comb.svg";
import iconHairstyle from "@/assets/icon-hairstyle.svg";
import iconScissors from "@/assets/icon-scissors.svg";
import { RevealSection, StaggerChildren } from "@/hooks/useScrollReveal";

const pillars = [
  { title: "Escuchan lo que pedís — y lo hacen.", text: "No interpretamos \"a nuestra manera.\" Tomamos el tiempo necesario para entender exactamente qué resultado buscás, y trabajamos para llegar ahí. Por eso nuestras reseñas dicen \"me cortaron respetando lo que pedí.\"" },
  { title: "Los mismos profesionales, siempre.", text: "Rodrigo para cortes. Eugenia para color. No rotamos. Cuando reservás, sabés exactamente quién te va a atender — y ellos saben cómo trabajar con tu cabello." },
  { title: "Puntualidad que respetamos.", text: "Tu tiempo importa. Los turnos se cumplen. Llegás, te atendemos, y salís a tiempo. Esto aparece en nuestras reseñas porque en Palermo no es tan común como debería ser." },
];

const services = [
  { icon: iconHaircut, title: "Corte", desc: "Para hombres, mujeres y niños. Reservá con Rodrigo o Martín." },
  { icon: iconHairstyle, title: "Color y Mechas", desc: "Coloración, mechas, balayage y correcciones. Reservá con Eugenia." },
  { icon: iconComb, title: "Tratamientos", desc: "Nutrición, keratina y cuidado capilar." },
  { icon: iconScissors, title: "Manos y Pies", desc: "Manicura y pedicura con Sole." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="w-full">
      {/* Three pillars */}
      <div className="bg-card py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-10" staggerDelay={0.15}>
            {pillars.map((p) => (
              <div key={p.title}>
                <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>

      {/* Services */}
      <div className="bg-background py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealSection direction="up" className="mb-12">
            <span className="font-accent text-xs tracking-[4px] uppercase text-muted-foreground">Nuestros Servicios</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mt-3">
              ¿Qué podés hacer <span className="italic font-light">en Afra?</span>
            </h2>
          </RevealSection>

          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
            {services.map((s) => (
              <div key={s.title} className="group">
                <img src={s.icon} alt="" className="w-10 h-10 mb-4 opacity-50 group-hover:opacity-80 transition-opacity" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </StaggerChildren>

          <a href="#servicios" className="inline-flex items-center mt-10 font-body text-sm font-semibold text-accent tracking-[1px] hover:underline">
            Ver todos los servicios y precios →
          </a>
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
