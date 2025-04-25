
import { ArrowRight } from "lucide-react";

const JakToDziala = () => {
  const steps = [
    {
      number: 1,
      title: "Wybierasz moduł",
      description: "Klikasz potrzebną usługę (np. AI Writer)."
    },
    {
      number: 2,
      title: "Podajesz krótkie wytyczne",
      description: "Kilka zdań i gotowe."
    },
    {
      number: 3,
      title: "Otrzymujesz efekt premium",
      description: "Tekst, grafika lub wideo gotowe do publikacji."
    }
  ];

  return (
    <section id="jak-to-dziala" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Jak to działa? – 3 kroki do przewagi konkurencyjnej
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>

              {/* Arrow pointing to next step (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-lg font-medium">
          Zero skomplikowanych formularzy, zero "learning curve".
        </p>
      </div>
    </section>
  );
};

export default JakToDziala;
