import React from 'react';

interface HeroProps {
  onInteractClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInteractClick }) => {
  return (
    <div className="relative text-green-900 text-center py-20 md:py-32 lg:py-40 px-4 flex flex-col items-center justify-center min-h-[40vh] overflow-hidden">
      <div className="absolute inset-0 bg-grid-green-500/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight animate-fade-in-up" style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
        Creamos el <span className="text-green-600" style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.5)' }}>Futuro</span>. <br/> Cuadro por Cuadro.
      </h2>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-green-800/90 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Fusionamos tecnología de vanguardia y narrativa audaz para producir contenido audiovisual que redefine los límites de la imaginación.
      </p>
      <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <button 
          onClick={onInteractClick}
          className="bg-green-600 text-sky-50 font-bold tracking-wider uppercase py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-1 transform"
        >
          Interactuar con IA
        </button>
      </div>
    </div>
  );
};

export default Hero;
