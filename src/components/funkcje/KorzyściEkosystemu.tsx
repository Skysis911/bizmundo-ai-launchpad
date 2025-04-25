
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const KorzyściEkosystemu = () => {
  const benefits = [
    {
      title: "Zero chaosu",
      description: "Logujesz się raz, masz wszystko."
    },
    {
      title: "Spójność marki",
      description: "Brand Voice i centralny dashboard."
    },
    {
      title: "Skalowanie bez pracowników",
      description: "AI = Twój wirtualny zespół."
    }
  ];

  return (
    <section id="korzysci" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Korzyści z ekosystemu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-3">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-6 text-lg">
            Rozpocznij darmowy test
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KorzyściEkosystemu;
