import React from 'react';
import { Demo } from '../types';
import { RocketLaunchIcon, SparklesIcon, BriefcaseIcon } from './icons';

const demos: Demo[] = [
  {
    icon: RocketLaunchIcon,
    title: "Campaña Global de Video",
    problem: "¿Lanzamiento multilingüe? La producción tradicional es lenta y costosa.",
    solution: "Nuestra IA generó 5 anuncios de video localizados, con voces nativas y gráficos adaptados, en menos de una hora.",
    result: "Reducción del 90% en tiempo de producción y +40% en engagement global."
  },
  {
    icon: SparklesIcon,
    title: "Copy para E-commerce a Escala",
    problem: "Crear descripciones de producto únicas para miles de artículos es un cuello de botella.",
    solution: "La IA contextual analizó el catálogo y generó 10,000 descripciones persuasivas y optimizadas para SEO en un día.",
    result: "Aumento del 25% en la tasa de conversión y mejora del ranking en buscadores."
  },
  {
    icon: BriefcaseIcon,
    title: "Optimización de Contenido Corporativo",
    problem: "¿El contenido interno no conecta? Los manuales y formaciones son ignorados.",
    solution: "Transformamos 200 páginas de documentación en una serie de micro-videos interactivos y resúmenes personalizados por IA.",
    result: "Incremento del 300% en la finalización de cursos de formación internos."
  },
];

const DemoCard: React.FC<{ demo: Demo; index: number }> = ({ demo, index }) => {
  const Icon = demo.icon;
  return (
    <div 
      className="bg-slate-800/60 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-lg flex flex-col h-full animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-cyan-900/50 border border-cyan-500/50 rounded-lg">
            <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-100">{demo.title}</h3>
      </div>
      <div className="space-y-3 text-slate-300/90">
          <p><strong className="text-cyan-400/80">Problema:</strong> {demo.problem}</p>
          <p><strong className="text-cyan-400/80">Solución IA:</strong> {demo.solution}</p>
      </div>
      <div className="mt-auto pt-4">
         <p className="font-bold text-center text-lg text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-md py-2 px-3">
            Resultado: {demo.result}
         </p>
      </div>
    </div>
  );
};

const InteractiveDemos: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-wide">Visualiza el Impacto Real de la IA</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">No solo hablamos de tecnología, demostramos cómo resuelve tus problemas de negocio.</p>
          <div className="mt-6 w-24 h-1 mx-auto bg-cyan-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <DemoCard key={demo.title} demo={demo} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemos;
