
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingTableProps {
  isYearly: boolean;
}

const PricingTable = ({ isYearly }: PricingTableProps) => {
  const calculateYearlyPrice = (price: number) => {
    return Math.round(price * 12 * 0.8);
  };

  const plans = [
    {
      name: "Start",
      price: 119,
      credits: "30 000",
      modules: "Chat, Content Basic, Image Lite",
      users: "1 użytk.",
      prioritySupport: false,
      training: false,
      extraCredits: "9 zł / 10 k",
      ctaText: "Wybieram Start",
      ctaVariant: "outline" as const,
    },
    {
      name: "Grow",
      price: 269,
      credits: "180 000",
      modules: "Wszystkie moduły (pełne limity)",
      users: "3 użytk.",
      prioritySupport: true,
      training: "Webinar live 60 min",
      extraCredits: "7 zł / 10 k",
      ctaText: "Biorę Grow – NAJPOPULARNIEJSZY",
      ctaVariant: "default" as const,
      popular: true,
    },
    {
      name: "Scale",
      price: 629,
      credits: "600 000",
      modules: "Wszystkie + API + White-Label",
      users: "10 użytk.",
      prioritySupport: true,
      priorityManager: true,
      training: "Warsztat 3 h dla zespołu",
      extraCredits: "5 zł / 10 k",
      ctaText: "Idę w Scale",
      ctaVariant: "outline" as const,
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative overflow-hidden rounded-xl border ${
                plan.popular ? 'border-primary shadow-lg scale-105 z-10' : 'border-gray-200'
              } bg-white transition-all hover:shadow-md p-6`}
            >
              {plan.popular && (
                <div className="absolute -right-12 top-8 bg-primary text-white py-1 px-12 transform rotate-45 text-sm font-medium">
                  NAJPOPULARNIEJSZY
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">
                    {isYearly ? calculateYearlyPrice(plan.price) : plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">zł {isYearly ? '/rok' : '/mies.'}</span>
                </div>
                {isYearly && (
                  <p className="text-sm text-primary mt-1">
                    Oszczędzasz {Math.round(plan.price * 12 * 0.2)} zł rocznie
                  </p>
                )}
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm font-medium">Kredyty AI / m-c</p>
                  <p className="font-semibold">{plan.credits}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Dostępne moduły</p>
                  <p>{plan.modules}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Współdzielenie</p>
                  <p>{plan.users}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Priority Support</p>
                  {plan.prioritySupport ? (
                    <div className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>Tak{plan.priorityManager ? " + dedykowany opiekun" : ""}</span>
                    </div>
                  ) : (
                    <span>–</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">Szkolenie na start</p>
                  <p>{plan.training || "–"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Nadmiarowe kredyty</p>
                  <p>{plan.extraCredits}</p>
                </div>
              </div>
              <Button variant={plan.ctaVariant} className="w-full mt-auto" size="lg">
                {plan.ctaText}
              </Button>
              {plan.popular && (
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Cena za 1k kredytów: 1,49 zł
                </p>
              )}
              {!plan.popular && plan.name === "Start" && (
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Cena za 1k kredytów: 3,97 zł
                </p>
              )}
              {!plan.popular && plan.name === "Scale" && (
                <p className="text-xs text-center mt-2 text-muted-foreground">
                  Cena za 1k kredytów: 1,05 zł
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
