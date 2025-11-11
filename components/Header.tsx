
import React from 'react';
import { PhoneIcon, MailIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 p-4 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-400/20">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-widest text-cyan-300 uppercase text-center" style={{ textShadow: '0 0 5px #22d3ee, 0 0 10px #22d3ee' }}>
          CINE & TV MAT HYPERMEDIA
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 text-sm text-cyan-200/90">
          <a href="tel:04169110641" className="flex items-center gap-2 hover:text-cyan-100 transition-colors">
            <PhoneIcon className="w-4 h-4" />
            <span>0416 9110641</span>
          </a>
          <a href="mailto:cineytv.mat@gmail.com" className="flex items-center gap-2 hover:text-cyan-100 transition-colors">
            <MailIcon className="w-4 h-4" />
            <span>cineytv.mat@gmail.com</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;