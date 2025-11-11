
import React from 'react';

interface HeroProps {
  onInteractClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onInteractClick }) => {
  return (
    <div className="relative text-green-900 text-center py-20 md:py-32 lg:py-40 px-4 flex flex-col items-center justify-center min-h-[40vh] overflow-hidden">
      <div className="absolute inset-0 bg-grid-green-500/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-tight animate-fade-in-up" style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>
        Creamos el <span className="text-green-600" style={{ textShadow: '0 0 15px #10b