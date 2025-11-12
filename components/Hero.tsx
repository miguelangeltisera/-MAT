import React from 'react';

interface HeroProps {
  onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  return (
    <div className="relative text-slate-100 text-center py-20 md:py-32 lg:py-40 px-4 flex flex-col items-center justify-center min-h-[50vh] overflow-hidden">
      <div className="absolute inset-0 bg-grid-cyan-500/10 mask-gradient"></div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight animate-fade-in-up" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.3)' }}>
        Duplica tu producción de contenido. <br/> <span className="text-cyan-400" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}>No tu equipo.</span>
      </h2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-300/90 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Descubre cómo nuestra IA transforma tus desafíos de negocio en resultados medibles. Genera campañas personalizadas a escala, acelera la producción y optimiza tus presupuestos.
      </p>
      <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <button 
          onClick={onScheduleClick}
          className="bg-cyan-500 text-slate-900 font-bold tracking-wider uppercase py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/40 hover:-translate-y-1 transform"
        >
          Agendar Consultoría Gratuita
        </button>
      </div>
    </div>
  );
};

export default Hero;
