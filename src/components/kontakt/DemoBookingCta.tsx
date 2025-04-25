
import React from 'react';
import { Button } from '@/components/ui/button';

const DemoBookingCta = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Gotowy, by zobaczyć, jak BizMundo odmieni Twój dzień pracy?
        </h2>
        <p className="text-lg mb-8 text-white/90">
          Zarezerwuj 20-minutowe demo – zero slajdów, 100% realnej platformy.
        </p>
        <Button variant="secondary" size="lg" className="text-primary font-medium">
          Zarezerwuj demo
        </Button>
        
        {/* This is where Calendly would be embedded in a real implementation */}
        <div className="mt-8 p-8 bg-white/10 rounded-lg border border-white/20">
          <p className="text-sm">Tutaj znajdzie się osadzony kalendarz Calendly do rezerwacji demo.</p>
        </div>
      </div>
    </section>
  );
};

export default DemoBookingCta;
