
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section id="cta-trial" className="bg-gradient-hero text-white">
      <div className="section-padding text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wyprzedź konkurencję dzięki AI już dziś!
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Dołącz do tysięcy polskich firm, które już korzystają z mocy sztucznej inteligencji. 
            Rozpocznij 14-dniowy darmowy okres próbny - bez zobowiązań, bez karty kredytowej.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="default" 
              className="bg-white hover:bg-gray-100 text-primary font-medium px-8 py-6 text-lg animate-pulse"
              onClick={() => window.location.href = 'https://app.bizmundo.ai/register'}
            >
              Rozpocznij darmowy okres próbny
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
              onClick={() => window.location.href = 'https://app.bizmundo.ai/register'}
            >
              Zarezerwuj demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            Masz pytania? Skontaktuj się z nami: <a href="mailto:kontakt@bizmundo.ai" className="underline">kontakt@bizmundo.ai</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
