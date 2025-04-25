
import React from 'react';

const questions = [
  {
    id: 1,
    question: 'Czy zarządzanie wieloma narzędziami AI zajmuje Ci zbyt dużo czasu?',
    answer: 'BizMundo.ai integruje wszystkie potrzebne narzędzia w jednym intuicyjnym dashboardzie, oszczędzając nawet 15 godzin tygodniowo.',
  },
  {
    id: 2,
    question: 'Czy wysokie koszty wielu subskrypcji AI nadwyrężają Twój budżet?',
    answer: 'Nasza pojedyncza subskrypcja obejmuje wszystkie moduły AI w jednej przystępnej cenie - oszczędzasz nawet 70% kosztów miesięcznie.',
  },
  {
    id: 3,
    question: 'Czy tworzenie profesjonalnych treści marketingowych jest dla Ciebie wyzwaniem?',
    answer: 'Writer AI i Content Wizard tworzą profesjonalne teksty, grafiki i wideo dostosowane do Twojej branży i odbiorców.',
  },
  {
    id: 4,
    question: 'Czy brakuje Ci wsparcia technicznego w języku polskim?',
    answer: 'Zapewniamy kompleksowe wsparcie w języku polskim, w tym onboarding, szkolenia i indywidualną pomoc od ekspertów AI.',
  },
  {
    id: 5,
    question: 'Czy trudno Ci wyróżnić się na tle konkurencji?',
    answer: 'Nasze narzędzia AI analizują trendy w Twojej branży i pomagają tworzyć unikalne treści zwiększające zaangażowanie odbiorców.',
  },
];

const WhySection = () => {
  return (
    <section id="why" className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Dlaczego małe firmy wybierają BizMundo.ai?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Odpowiadamy na realne problemy i wyzwania, z którymi mierzą się polskie małe biznesy.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {questions.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center text-primary font-bold">
                    {item.id}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-secondary-foreground mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
