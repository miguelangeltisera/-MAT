
import React from 'react';

interface HeroProps {
  onInteractClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInteractClick }) => {
  return (
    <div className="relative text-slate-100 text-center py-20 md:py-32 lg:py-40 px-4 flex flex-col items-center justify-center min-h-[40vh] overflow-hidden">
      <div className="absolute inset-0 bg-grid-cyan-500/10 mask-gradient"></div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight animate-fade-in-up" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.3)' }}>
        Creamos el <span className="text-cyan-400" style={{ textShadow: '0 0 15px rgba(34, 211, 238, 0.5)' }}>Futuro</span>. <br/> Cuadro por Cuadro.
      </h2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-300/90 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Fusionamos tecnología de vanguardia y narrativa audaz para producir contenido audiovisual que redefine los límites de la imaginación.
      </p>
      <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <button 
          onClick={onInteractClick}
          className="bg-cyan-500 text-slate-900 font-bold tracking-wider uppercase py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/40 hover:-translate-y-1 transform"
        >
          Interactuar con IA
        </button>
      </div>
    </div>
  );
};

export default Hero;