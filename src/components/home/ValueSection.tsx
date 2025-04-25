
import React from 'react';

const valueCards = [
  {
    id: 1,
    title: 'Wszystko w jednym',
    description: 'Koniec z zarządzaniem różnymi narzędziami. Zyskaj dostęp do wszystkich potrzebnych funkcji AI w jednym miejscu.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Oszczędność Czasu',
    description: 'Automatyzuj żmudne zadania i skup się na strategii. Oszczędzaj nawet 15 godzin tygodniowo dzięki naszym rozwiązaniom AI.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Niższe Koszty',
    description: 'Jedna subskrypcja zamiast wielu. Płać mniej za więcej funkcji i zaoszczędź nawet 70% w porównaniu do korzystania z oddzielnych narzędzi.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Prostota + Wsparcie',
    description: 'Intuicyjny interfejs i dedykowane wsparcie. Uzyskaj pomoc w języku polskim od zespołu, który rozumie Twoje potrzeby.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 9.5c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3z" />
      </svg>
    ),
  },
];

const ValueSection = () => {
  return (
    <section id="value" className="section-padding bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Wartość, której nie znajdziesz nigdzie indziej
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Poznaj korzyści, które sprawiają, że BizMundo.ai to najlepszy wybór
          dla małych biznesów szukających przewagi konkurencyjnej.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valueCards.map((card) => (
          <div key={card.id} className="value-card group">
            <div className="text-primary mb-5 transition-transform duration-300 group-hover:scale-110">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueSection;
