
import React from 'react';
import { Button } from '@/components/ui/button';

const CaseStudiesHero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Zobacz, jak mikro- i małe firmy wyciskają 300% więcej z marketingu dzięki BizMundo.ai
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Mówimy wprost: liczby nie kłamią. Dlatego zamiast kolejnych obietnic pokazujemy twarde dane – 
              wzrost konwersji, spadek kosztów, eksplozję zasięgów. Przekonaj się, co może stać się z Twoją firmą, 
              gdy AI pracuje 24/7, a Ty skupiasz się na sprzedaży.
            </p>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-primary font-medium"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({behavior: 'smooth'})}
            >
              Chcę podobny wynik
            </Button>
          </div>
          <div className="hidden lg:block h-96 bg-white/10 rounded-lg border border-white/20 animate-float">
            {/* This would be replaced with the actual hero image */}
            <div className="h-full flex items-center justify-center text-center p-8">
              <p className="text-sm">Tutaj znajdzie się grafika "Collage of before-and-after marketing metrics dashboards with upward arrows"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
