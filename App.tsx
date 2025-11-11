
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleInteractClick = () => {
    chatContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
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
          <Hero onInteractClick={handleInteractClick} />
          <Services />
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