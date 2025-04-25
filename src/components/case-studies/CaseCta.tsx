
import React from 'react';
import { Button } from '@/components/ui/button';

const CaseCta = () => {
  return (
    <section className="py-8 fixed bottom-0 left-0 right-0 bg-white shadow-lg md:static md:shadow-none">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
          <div>
            <h3 className="text-lg font-bold">Chcę podobny wynik</h3>
            <p className="text-sm text-muted-foreground">Zarezerwuj demo, a pokażemy jak to zrobić</p>
          </div>
          <Button className="w-full sm:w-auto">Zarezerwuj demo</Button>
        </div>
      </div>
    </section>
  );
};

export default CaseCta;
