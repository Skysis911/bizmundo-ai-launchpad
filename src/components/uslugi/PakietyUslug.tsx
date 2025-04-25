
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PakietyUslug = () => {
  const packages = [
    {
      id: "start",
      name: "Start",
      forWho: "Solo-przedsiębiorca",
      features: ["AI Chat", "AI Content Basic", "AI Image Lite"],
      bonus: "5 szablonów kampanii e-mail"
    },
    {
      id: "growth",
      name: "Growth",
      forWho: "Mikro-firma 2-10 osób",
      features: ["Wszystkie moduły", "AI Video Basic", "AI Audio Basic"],
      bonus: "Audyt treści marki (wartość 1000 zł)",
      isPopular: true
    },
    {
      id: "scale",
      name: "Scale",
      forWho: "Mała firma 10-50 osób",
      features: ["Pełen dostęp", "Limity PRO", "Integracje API", "Priority Support"],
      bonus: "Warsztat AI dla zespołu (3 h na żywo)"
    }
  ];

  return (
    <section id="pakiety-uslug" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/60">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Pakiety usług – dopasuj moc AI do swoich celów
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden transition-all hover:shadow-xl ${
                pkg.isPopular ? 'border-primary/70 shadow-lg scale-105 z-10' : 'border-gray-200'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -right-12 top-8 bg-primary text-white py-1 px-12 transform rotate-45 text-sm font-medium">
                  Bestseller
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.forWho}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-primary/5 p-3 rounded-lg">
                  <p className="text-sm font-medium">Bonus:</p>
                  <p className="text-primary font-semibold">{pkg.bonus}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={pkg.isPopular ? "default" : "outline"}>
                  <Link to="/cennik">Zobacz szczegóły</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PakietyUslug;
