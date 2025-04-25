
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutHero = () => {
  return (
    <section className="pt-28 pb-16 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Ludzie, technologia i misja, które uwalniają potencjał małego biznesu
            </h1>
            <p className="text-lg mb-8 text-white/90">
              BizMundo.ai to więcej niż platforma AI – to zespół ekspertów, który łączy najnowszą technologię ze zrozumieniem realiów mikro-i małych firm. Od pomysłu po sukces – wspieramy Cię na każdym kroku, byś mógł rosnąć szybciej niż kiedykolwiek.
            </p>
            <Button 
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Poznaj nas bliżej
            </Button>
          </div>
          <div className="hidden lg:block">
            <div className="w-full h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for team image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
