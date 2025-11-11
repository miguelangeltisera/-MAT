
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 p-4 bg-sky-200/80 backdrop-blur-xl border-b border-green-500/20">
      <div className="container mx-auto flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-green-800 uppercase" style={{ textShadow: '0 0 5px #10b981, 0 0 10px #10b981' }}>
          CINE & TV MAT HYPERMEDIA
        </h1>
      </div>
    </header>
  );
};

export default Header;
