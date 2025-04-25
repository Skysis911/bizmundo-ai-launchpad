
import React from 'react';
import { Button } from '@/components/ui/button';

const KontaktHero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Najpierw sprawdź, czy odpowiedź nie czeka już na Ciebie – potem napisz do nas
          </h1>
          <p className="text-lg mb-8 text-muted-foreground">
            99% pytań rozwiązujemy natychmiast w centrum pomocy. Dzięki temu nasi specjaliści mogą poświęcić 100% uwagi zapytaniom biznesowym i Twoim konkretnym celom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('pomoc')} 
              variant="outline" 
              size="lg" 
              className="font-medium"
            >
              Centrum Pomocy
            </Button>
            <Button 
              onClick={() => scrollToSection('biznes')} 
              size="lg" 
              className="font-medium"
            >
              Zapytanie Biznesowe
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
          <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Centrum pomocy oraz zapytania biznesowe" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default KontaktHero;
