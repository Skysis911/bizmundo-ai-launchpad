
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "Czy naprawdę zastąpię wszystkie inne narzędzia?",
      answer: "Tak – od tekstu przez grafikę po wideo i audio. Jeden login, jedna faktura, zero bałaganu."
    },
    {
      question: "Czy muszę znać się na AI?",
      answer: "Nie. Interfejs jest po polsku, a uczymy Cię wszystkiego w tutorialach i webinariach."
    },
    {
      question: "Co z danymi i bezpieczeństwem?",
      answer: "Twoje dane są szyfrowane, a serwery spełniają normy ISO 27001 oraz RODO."
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Najczęstsze pytania
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-6">
          <a href="/zasoby/faq" className="text-primary hover:underline">
            Zobacz pełną bazę pytań →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
