
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PricingFaq = () => {
  const faqItems = [
    {
      question: 'Co, jeśli skończą mi się kredyty?',
      answer: 'System poprosi o dokupienie pakietu (od 5 zł). Zero blokad, zero przerw.',
    },
    {
      question: 'Czy niewykorzystane kredyty przepadają?',
      answer: 'Nie. Przechodzą na kolejny miesiąc, dopóki utrzymujesz subskrypcję.',
    },
    {
      question: 'Czy mogę zmienić plan w dowolnym momencie?',
      answer: 'Tak. Zmiana w górę – natychmiast; w dół – od nowego cyklu.',
    },
    {
      question: 'Czy muszę podawać kartę przy trialu?',
      answer: 'Nie – dodasz ją, jeśli zdecydujesz się zostać.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Najczęstsze pytania o ceny i kredyty
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PricingFaq;
