import React from 'react';
import { Testimonial } from '../types';

const testimonial: Testimonial = {
    quote: "Trabajar con CINE & TV MAT HYPERMEDIA fue una revelación. Su dominio de la IA y su enfoque creativo llevaron nuestro proyecto a un nivel completamente nuevo, superando todas las expectativas. Son el futuro de la producción audiovisual.",
    name: "Donald Myerston",
    title: "Productor Ejecutivo",
    company: "KLICK"
};

const SocialProof: React.FC = () => {
  return (
    <section id="social-proof" className="py-16 md:py-24 px-4 bg-sky-950">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Con la confianza de líderes innovadores</h3>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-4 text-slate-300/80">
                <p className="text-xl font-semibold tracking-wider">Universidad Alejandro de Humboldt</p>
                <p className="text-xl font-semibold tracking-wider">CNAC</p>
                <p className="text-xl font-semibold tracking-wider">KLICK</p>
            </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center bg-slate-800/40 border border-cyan-500/20 rounded-lg p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-cyan-500/30">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746-2.491.392-4.396 2.547-4.604 4.853zm-10 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746-2.491.392-4.396 2.547-4.604 4.853z"/></svg>
            </div>
            <blockquote className="text-xl md:text-2xl text-slate-200 italic">
                "{testimonial.quote}"
            </blockquote>
            <footer className="mt-6">
                <p className="text-lg font-bold text-cyan-300">{testimonial.name}</p>
                <p className="text-slate-400">{testimonial.title}, {testimonial.company}</p>
            </footer>
        </div>

        <div className="mt-16 text-center">
            <a 
                href="https://miguelangel3.gumroad.com/l/vjgrpkh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500/10 border border-cyan-400/50 text-cyan-200 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500/20 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/20"
            >
                Aquí puede comprar nuestro largometraje documental "VESTIGIOS DE CONOCIMIENTOS ANCESTRALES",<br/> selección oficial en 12 festivales internacionales.
            </a>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;