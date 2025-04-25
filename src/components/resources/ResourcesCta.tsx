
import React from 'react';
import { Button } from '@/components/ui/button';

const ResourcesCta = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          Zostań mistrzem BizMundo
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Dołącz do bezpłatnej Akademii BizMundo – cotygodniowe mikro-lekcje e-mail, 
          dzięki którym w 30 dni opanujesz 100% funkcji.
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="text-primary font-medium"
        >
          Zapisz się na Akademię
        </Button>
      </div>
    </section>
  );
};

export default ResourcesCta;
