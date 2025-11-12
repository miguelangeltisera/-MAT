
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-slate-900/70 border-y border-cyan-500/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-wide">Nuestra Esencia Hypermedia</h2>
          <div className="mt-4 w-24 h-1 mx-auto bg-cyan-500 rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center">
           <p className="text-lg md:text-xl text-slate-300/90 mb-6 animate-fade-in-up">
            No solo creamos contenido; diseñamos universos. CINE & TV MAT HYPERMEDIA nació de la convicción de que cada historia merece ser contada de la manera más impactante posible. Somos un colectivo de artistas digitales, narradores visionarios y tecnólogos creativos dedicados a empujar los límites de la producción audiovisual.
          </p>
          <p className="text-lg md:text-xl text-slate-300/90 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Nuestra filosofía se basa en la 'Hypermedia', la sinergia entre el arte cinematográfico clásico y las tecnologías emergentes. Desde la concepción de la idea hasta la post-producción final, cada proyecto es un lienzo para la innovación, donde la Realidad Virtual, los VFX fotorrealistas y las narrativas interactivas convergen para crear experiencias inolvidables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
