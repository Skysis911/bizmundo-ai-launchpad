
import React from 'react';
import { Button } from '@/components/ui/button';

const CennikHero = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Wybierz plan, zgarnij kredyty AI i rób marketing 10× szybciej niż konkurencja
          </h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Jeden jasny cel: dać Ci więcej efektu w mniej czasu. Dlatego płacisz tylko za kredyty, które naprawdę wykorzystujesz, a nie za funkcje widmo. Wypróbuj dowolny plan bez ryzyka – anulujesz jednym kliknięciem.
          </p>
          <Button onClick={scrollToPlans} size="lg" className="font-medium">
            Rozpocznij 14-dniowy trial
          </Button>
        </div>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
          <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Trzy karty cenowe, środkowa najjaśniejsza" 
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

export default CennikHero;
