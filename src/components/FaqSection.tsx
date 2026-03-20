import { useState } from "react";
import { RevealSection } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "¿Tengo que sacar turno o puedo ir sin cita?", a: "Recomendamos sacar turno, especialmente para color — la agenda se llena bastante rápido. Dicho eso, si llegás sin turno y hay lugar, con gusto te atendemos. Podés llamarnos al 011 4774-4011 para consultar disponibilidad." },
  { q: "¿Voy a atenderme con el mismo profesional siempre?", a: "Sí. Al sacar turno podés especificar si querés Rodrigo para corte o Eugenia para color. Trabajamos con agenda personal para que siempre sepas con quién te vas a atender." },
  { q: "¿Qué pasa si el color no sale como lo imaginaba?", a: "Antes de empezar cualquier trabajo de color, Eugenia hace una consulta para entender exactamente qué resultado buscás — tono, técnica, cuidado del cabello. Si algo no cuadra, te lo explicamos antes, no después." },
  { q: "¿Tienen descuentos?", a: "Sí, ofrecemos descuento por pago en efectivo. Consultá al momento de la reserva." },
  { q: "¿Atienden niños?", a: "Sí, cortamos el pelo para toda la familia — adultos y niños." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="w-full bg-card py-20">
      <div className="max-w-[720px] mx-auto px-6">
        <RevealSection direction="up" className="text-center mb-12">
          <span className="font-accent text-xs tracking-[4px] uppercase text-muted-foreground">Preguntas frecuentes</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">Lo que más <span className="italic font-light">nos preguntan</span></h2>
        </RevealSection>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-background border border-border overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-body font-semibold text-foreground pr-4">{faq.q}</span>
                <span className={`text-accent text-2xl flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {openIndex === i && <div className="px-5 pb-5"><p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
