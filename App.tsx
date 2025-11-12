import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InteractiveDemos from './components/Services'; // Renamed internally to InteractiveDemos
import SocialProof from './components/About'; // Renamed internally to SocialProof
import Chatbot from './components/Chatbot';

// ContactForm Component defined within App.tsx for simplicity
const ContactForm: React.FC<{ formRef: React.RefObject<HTMLDivElement> }> = ({ formRef }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
  };

  if (submitted) {
    return (
      <section ref={formRef} id="contact" className="py-16 md:py-24 px-4 scroll-mt-20">
        <div className="container mx-auto max-w-2xl text-center">
            <div className="bg-slate-800/60 backdrop-blur-sm border border-green-500/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-2">¡Gracias!</h3>
              <p className="text-slate-300">Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en breve para agendar tu consultoría estratégica de IA.</p>
            </div>
        </div>
      </section>
    );
  }

  return (
     <section ref={formRef} id="contact" className="py-16 md:py-24 px-4 bg-slate-900/70 border-y border-cyan-500/20 scroll-mt-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-wide">Agenda tu Consultoría Gratuita</h2>
          <p className="mt-4 text-lg text-slate-400">Da el primer paso para transformar tu negocio con IA. Hablemos de tus objetivos.</p>
          <div className="mt-6 w-24 h-1 mx-auto bg-cyan-500 rounded-full"></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">Nombre Completo</label>
              <input type="text" id="name" required className="w-full bg-slate-800/50 border border-cyan-600/50 rounded-md py-3 px-4 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">Email de Trabajo</label>
              <input type="email" id="email" required className="w-full bg-slate-800/50 border border-cyan-600/50 rounded-md py-3 px-4 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition" />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-cyan-300 mb-2">Empresa</label>
            <input type="text" id="company" className="w-full bg-slate-800/50 border border-cyan-600/50 rounded-md py-3 px-4 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 text-slate-900 font-bold tracking-wider uppercase py-4 px-8 rounded-full transition-all duration-300 ease-in-out hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/40 hover:-translate-y-1 transform disabled:bg-slate-600 disabled:cursor-not-allowed">
              {isSubmitting ? "Enviando..." : "Solicitar mi consultoría"}
            </button>
          </div>
        </form>
      </div>
     </section>
  );
};


const App: React.FC = () => {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleScheduleClick = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2306b6d4\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        ></div>
      </div>

      <style>
        {`
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
          .bg-grid-cyan-500\\/10 {
            background-image: linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
          }
          .mask-gradient {
            -webkit-mask-image: linear-gradient(to bottom, white, transparent);
            mask-image: linear-gradient(to bottom, white, transparent);
          }
        `}
      </style>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero onScheduleClick={handleScheduleClick} />
          <SocialProof />
          <InteractiveDemos />
          <ContactForm formRef={contactFormRef} />
          <Chatbot chatContainerRef={chatContainerRef} />
        </main>

        <footer className="py-8 text-center text-slate-400/80 border-t border-cyan-500/20">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} CINE & TV MAT HYPERMEDIA. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
