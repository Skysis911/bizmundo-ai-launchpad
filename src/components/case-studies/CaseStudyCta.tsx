
import React from 'react';
import { Button } from '@/components/ui/button';

const CaseStudyCta = () => {
  return (
    <section id="kontakt" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">
          Twoja firma + BizMundo.ai = case study, o którym będzie głośno.
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Wypełnij krótką ankietę, a pokażemy, jak w 90 dni podkręcić Twoje liczby.
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="text-primary font-medium"
        >
          Zacznij ankietę
        </Button>
        
        {/* This is where Typeform would be embedded in a real implementation */}
        <div className="mt-8 p-8 bg-white/10 rounded-lg border border-white/20">
          <p className="text-sm">Tutaj znajdzie się osadzony formularz Typeform.</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCta;
