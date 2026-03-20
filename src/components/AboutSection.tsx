import owners from "@/assets/owners.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import iconScissorComb from "@/assets/icon-scissor-comb.svg";
import { RevealSection } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  return (
    <section id="el-equipo" className="w-full bg-background overflow-hidden">
      {/* Bridge section */}
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-20">
        <RevealSection direction="up">
          <p className="font-accent text-xs tracking-[4px] uppercase text-muted-foreground mb-4 text-center">¿Esto es para vos?</p>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-[1.9] text-center">
            Si alguna vez saliste de una peluquería con el pelo distinto a lo que pediste — demasiado corto, un color que no era el que mostrabas en la foto, una persona diferente al que reservaste — entonces sabés exactamente por qué este lugar tiene clientes que llevan 20 años sin ir a otro lado.
          </p>
          <p className="font-body text-base md:text-lg text-foreground leading-[1.9] text-center mt-4 font-medium">
            En Afra no cambiamos de profesionales. Los que te atienden hoy son los mismos que te van a atender el año que viene.
          </p>
        </RevealSection>
      </div>

      {/* Team section */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <RevealSection direction="up" className="text-center mb-12">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <img src={iconScissorComb} alt="" className="w-8 h-8 opacity-50" />
            <span className="font-accent text-xs tracking-[4px] uppercase text-muted-foreground">Los profesionales que vas a encontrar</span>
          </div>
          <p className="font-body text-base text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
            En un Palermo donde los mejores peluqueros cambian de salón cada temporada, Rodrigo y Eugenia llevan años construyendo algo distinto: confianza, visita a visita.
          </p>
        </RevealSection>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          <RevealSection direction="left" className="flex-1">
            <img src={owners} alt="Rodrigo y Eugenia" className="w-full h-[500px] object-cover object-top mb-6" />
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">Rodrigo</h3>
                <p className="font-accent text-xs tracking-[2px] uppercase text-accent mb-3">Especialista en Corte</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Decenas de clientes llevan años viniendo específicamente a que Rodrigo les corte el pelo — algunos desde hace casi dos décadas. Su especialidad: entender el tipo de cabello, la rutina diaria y el resultado que el cliente quiere, y hacer coincidir los tres.
                </p>
                <p className="font-display text-sm italic text-foreground/70 mt-3 border-l-2 border-accent pl-3">"Rodrigo entiende perfectamente lo que querés." — reseña de Google</p>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">Eugenia</h3>
                <p className="font-accent text-xs tracking-[2px] uppercase text-accent mb-3">Colorista</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Euge es la razón por la que las clientas buscan Afra para trabajos de color. Con años de experiencia en coloración, tintes y tratamientos, su nombre aparece más veces en nuestras reseñas que cualquier otra palabra. El resultado siempre supera lo que la foto prometía.
                </p>
                <p className="font-display text-sm italic text-foreground/70 mt-3 border-l-2 border-accent pl-3">"El resultado es mejor de lo pensado." — reseña de Google</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
