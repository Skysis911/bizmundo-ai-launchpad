
import React from 'react';

const ResourcesHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Praktyczna baza wiedzy: od pierwszego kroku po zaawansowane hacki z AI
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Nie trać czasu na maila z pytaniem, na które już dziś znamy dobrą odpowiedź. 
              Przeszukaj ponad 200 artykułów, tutoriali i webinarów on-demand, a jeśli czegoś 
              brakuje – daj znać, uzupełnimy w 24 h.
            </p>
          </div>
          <div className="hidden lg:block h-96 bg-white/10 rounded-lg border border-white/20 animate-float">
            {/* This would be replaced with the actual hero image */}
            <div className="h-full flex items-center justify-center text-center p-8">
              <p className="text-sm">Tutaj znajdzie się grafika "Illustration of a laptop with flying knowledge-base cards"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
