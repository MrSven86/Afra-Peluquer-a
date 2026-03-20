import { useState, useRef } from "react";
import google from "@/assets/google.png";
import star from "@/assets/star.svg";
import { RevealSection } from "@/hooks/useScrollReveal";

const reviews = [
  { name: "Florencia Tablado", rating: 5, text: "Hace casi 20 años que nadie más me toca el pelo! Excelente, profesional, divertido, amable. Lo sigo a donde vaya!", date: "2023" },
  { name: "Tania Cañas", rating: 5, text: "Los sigo desde que estaban en otra Pelu! Euge es lo más haciendo color y Rodri cortando el pelo! Excelente atención de todos.", date: "2019" },
  { name: "Valeria Pedrozo", rating: 5, text: "Afra es lo más, la colorista Euge es la mejor!!! No solo es una profesional excelente, sino que su forma de ser haga que tu paso por Afra sea una experiencia agradable.", date: "2025" },
  { name: "Micaela Garcia", rating: 5, text: "Amamos a euge! pelo sano, hermoso color y todo el equipo super amable! y Rodri el mejor cortador de pelo de la galaxia", date: "2024" },
  { name: "María Clara León", rating: 5, text: "Me cortaron sin turno y respetando lo que pedí (no es poca cosa)!", date: "2023" },
  { name: "Gabriela Soucasse", rating: 5, text: "Excelente atención, muy profesionales Eugenia que está a cargo de color, como Rodrigo que me hizo el corte de pelo. Interpretan lo que quiere el cliente.", date: "2022" },
  { name: "N A", rating: 5, text: "Euge GRAN GRAN colorista!! Son muy profesionales, te recomiendan y hacen lo que necesitas. Siempre con una sonrisa! No los cambio x nada!!", date: "2023" },
  { name: "Josefina Marcos", rating: 5, text: "Increíble todo el personal en la peluquería. Euge, la colorista es una genia. Entiende lo que querés y el resultado es mejor de lo pensado.", date: "2018" },
  { name: "Laura Ferrioli", rating: 5, text: "La mejor peluquería lejos!!! Son excelentes al trato con el cliente, entienden tal cual lo que queres. Siempre buena onda!!", date: "2021" },
  { name: "Virginia Santos", rating: 5, text: "Es un lugar muy cálido y atendido por Rodrigo un excelente profesional. Todo es un disfrute!!!", date: "2023" },
  { name: "Cecilia Melano", rating: 5, text: "Excelente atención de TODOS!! Son todos muy profesionales y Rodrigo es el mejor peluquero del mundo!", date: "2018" },
  { name: "Debbie Salazar Perez", rating: 5, text: "Fui con mi novio, nos encantó! Nos detallaron el corte que le hacían todo el tiempo. La dueña/encargada MUY atenta conmigo personalmente.", date: "2023" },
  { name: "cecilia bisso", rating: 5, text: "Excelente, interpretan lo que querés. Atención muy cálida y cuidada. Precios razonables. Vuelvo seguro", date: "2023" },
  { name: "Nora Perez Vichich", rating: 5, text: "Profesionalismo, buena atención de todo el staff, calidez, buen gusto es lo que encuentro en Afra", date: "2021" },
  { name: "Betiana Vaninetti", rating: 5, text: "Rodrigo entiende perfectamente lo que querés. Pedir turno porque se llena. Atención excelente, muy amables.", date: "2018" },
  { name: "Melania Andriani", rating: 5, text: "Excelente atención de Rodrigo. Lo recomiendo como peluquero. Sabe mucho y corta muy bien.", date: "2021" },
  { name: "Magalí Torres", rating: 5, text: "Excelente atención, todos muy amables. Muy buena relación precio calidad. Super recomendable!", date: "2024" },
  { name: "fernanda iñiguez", rating: 5, text: "EXCELENTES PROFESIONALES, ATENCIÓN PERSONALIZADA Y BUENOS PRECIOS!! Gracias por la buena onda de siempre!!", date: "2018" },
  { name: "Graciela Rey", rating: 5, text: "Me atendieron muy bien y me dejaron el pelo tal cual como queria. Sali muy contenta", date: "2019" },
  { name: "Marcelo Issetta", rating: 5, text: "Excelente peluquería. Rodrigo es un genio. Sacar turno antes de ir.", date: "2021" },
];

const colors = ["bg-rose-500", "bg-amber-600", "bg-teal-600", "bg-indigo-500", "bg-pink-500", "bg-emerald-600", "bg-violet-500", "bg-orange-500"];

const ReviewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section id="reseñas" className="w-full bg-primary py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealSection direction="up" className="mb-12">
          <span className="font-accent text-xs tracking-[4px] uppercase text-primary-foreground/50">Lo que dicen los que llevan años viniendo</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground leading-[1.1] mt-3">
            140 reseñas <span className="italic font-light">en Google</span>
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <img src={google} alt="Google" className="h-5" />
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <img key={i} src={star} alt="" className="w-4 h-4" />)}</div>
            <span className="font-accent text-sm text-primary-foreground/70">4.6 sobre 5</span>
          </div>
        </RevealSection>

        {/* Featured quote */}
        <RevealSection direction="up" delay={0.2} className="mb-12 max-w-[700px]">
          <p className="font-display text-2xl md:text-3xl italic text-primary-foreground/90 leading-relaxed">
            "Hace casi 20 años que nadie más me toca el pelo. Excelente, profesional, divertido, amable. Lo sigo a donde vaya."
          </p>
          <p className="font-body text-sm text-primary-foreground/50 mt-4">— Florencia Tablado, clienta de Afra</p>
        </RevealSection>

        {/* Scrollable cards */}
        <div className="relative">
          <button onClick={() => scroll("left")} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/10 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors text-lg">‹</button>
          <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
            {reviews.slice(1).map((r, i) => (
              <div key={r.name} className="flex-shrink-0 w-[300px] bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-full ${colors[i % colors.length]} flex items-center justify-center text-white font-body text-sm font-bold`}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-primary-foreground leading-tight">{r.name}</p>
                    <p className="font-accent text-[11px] text-primary-foreground/40">{r.date}</p>
                  </div>
                  <img src={google} alt="" className="w-4 h-4 ml-auto opacity-50" />
                </div>
                <div className="flex gap-0.5 mb-2">{[...Array(r.rating)].map((_, j) => <img key={j} src={star} alt="" className="w-3 h-3" />)}</div>
                <p className="font-body text-[13px] text-primary-foreground/70 leading-relaxed line-clamp-4">{r.text}</p>
              </div>
            ))}
          </div>
          <button onClick={() => scroll("right")} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/10 backdrop-blur flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors text-lg">›</button>
        </div>

        <a href="https://www.google.com/maps/place/Afra+Peluquería" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-8 font-body text-sm font-semibold text-primary-foreground/70 tracking-[1px] hover:text-primary-foreground transition-colors">
          Ver todas las reseñas en Google →
        </a>
      </div>
    </section>
  );
};
export default ReviewsSection;
