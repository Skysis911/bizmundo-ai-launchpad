
import { ShoppingCart, Scale, Coffee } from "lucide-react";

const PrzykladyUzycia = () => {
  const examples = [
    {
      icon: ShoppingCart,
      title: "E-commerce",
      result: "120 nowych opisów produktów w jeden weekend → +28% konwersji."
    },
    {
      icon: Scale,
      title: "Kancelaria prawna",
      result: "6-odcinkowy podcast wygenerowany w 3 dni → +300% leadów z LinkedIn."
    },
    {
      icon: Coffee,
      title: "Lokalna kawiarnia",
      result: "4 reklamy wideo na Instagramie w 2 godziny → wyprzedano weekendową ofertę."
    }
  ];

  return (
    <section id="przyklady-uzycia" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Przykłady użycia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-xl p-6 card-shadow border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <example.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{example.title}</h3>
              <p className="text-gray-700 text-center">
                {example.result.split('→')[0]}
                <span className="text-primary font-semibold block mt-2">
                  → {example.result.split('→')[1]}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrzykladyUzycia;
