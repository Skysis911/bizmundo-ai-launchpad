
import React, { useState } from 'react';

const faqItems = [
  {
    id: 1,
    question: 'Czy mogę anulować subskrypcję w dowolnym momencie?',
    answer: 'Tak, możesz anulować subskrypcję w dowolnym momencie bez żadnych dodatkowych opłat. Wystarczy przejść do ustawień konta i wybrać opcję anulowania. Będziesz mógł korzystać z serwisu do końca opłaconego okresu.',
  },
  {
    id: 2,
    question: 'Co jeśli zabraknie mi kredytów AI?',
    answer: 'Nie ma powodu do obaw! W planie Grow możesz dokupić dodatkowe pakiety kredytów w atrakcyjnych cenach (25% taniej niż w planie podstawowym). Kredyty są naliczane automatycznie po wykorzystaniu poprzedniego pakietu, bez przerw w pracy.',
  },
  {
    id: 3,
    question: 'Czy muszę podać dane karty kredytowej przy rejestracji?',
    answer: 'Nie, przy rejestracji na 14-dniowy okres próbny nie wymagamy podania danych karty kredytowej. Dopiero po zakończeniu okresu próbnego, jeśli zdecydujesz się kontynuować korzystanie z naszego serwisu, zostaniesz poproszony o wybór metody płatności.',
  },
  {
    id: 4,
    question: 'Czy oferta specjalna wróci w przyszłości?',
    answer: 'Nie, ta oferta specjalna jest jednorazowa i nie planujemy jej powtarzać. Zniżka 30% na plan Grow jest limitowana czasowo i dostępna tylko do podanej daty. Jeśli jesteś zainteresowany, radzimy skorzystać z niej teraz, ponieważ nie będzie dostępna w przyszłości.',
  },
];

const FaqSection = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najczęściej zadawane pytania
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Masz wątpliwości? Znajdź odpowiedzi na najczęstsze pytania
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none"
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${
                    openItemId === item.id ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ${
                  openItemId === item.id
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-gray-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
