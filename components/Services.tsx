import React from 'react';
import { Service } from '../types';
import { FilmIcon, WandIcon, EditIcon, VrIcon } from './icons';

const services: Service[] = [
  {
    icon: FilmIcon,
    title: "Producción Cinematográfica",
    description: "Desarrollo y producción de largometrajes y cortometrajes con tecnología de punta y visión artística."
  },
  {
    icon: EditIcon,
    title: "Post-Producción Avanzada",
    description: "Edición, colorización y montaje de alta gama para dar vida a tu visión con la máxima calidad y detalle."
  },
  {
    icon: WandIcon,
    title: "Efectos Visuales (VFX)",
    description: "Creación de mundos imposibles e integración de elementos digitales fotorrealistas en cualquier producción."
  },
  {
    icon: VrIcon,
    title: "Realidad Virtual (VR) y XR",
    description: "Diseño de experiencias inmersivas e interactivas que rompen la barrera entre lo real y lo digital."
  }
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const Icon = service.icon;
  return (
    <div 
      className="bg-slate-800/60 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:-translate-y-2 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-cyan-900/50 border border-cyan-500/50 rounded-lg mb-4">
        <Icon className="w-6 h-6 text-cyan-400" />
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-2">{service.title}</h3>
      <p className="text-slate-300/90">{service.description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-wide">Nuestros Dominios Creativos</h2>
          <div className="mt-4 w-24 h-1 mx-auto bg-cyan-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;