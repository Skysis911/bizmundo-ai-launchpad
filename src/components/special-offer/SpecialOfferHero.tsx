
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";

const SpecialOfferHero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate end date (current date + 7 days)
  const calculateEndDate = () => {
    const now = new Date();
    const endDate = new Date(now);
    endDate.setDate(endDate.getDate() + 7);
    return endDate;
  };

  const [endDate] = useState(calculateEndDate());

  // Format date for display
  const formattedEndDate = new Intl.DateTimeFormat('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(endDate);

  // Calculate time left
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        // Timer expired
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <section className="bg-gradient-offer text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Tylko do {formattedEndDate} – Odbierz 30% zniżki na plan Grow i odblokuj pełną moc BizMundo.ai
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Oszczędzasz 968 zł rocznie, zyskujesz nielimitowane moduły AI.
            </p>

            {/* Countdown timer */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs text-white/70">DNI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs text-white/70">GODZIN</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs text-white/70">MINUT</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs text-white/70">SEKUND</div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-7 text-lg"
              onClick={() => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Aktywuj zniżkę
            </Button>
            <p className="mt-4 text-white/60 text-sm">
              Oferta ograniczona czasowo. Nie wymaga karty kredytowej.
            </p>
          </div>
          
          <div className="lg:flex justify-end">
            <div className="relative">
              {/* Rocket launch image */}
              <img
                src="https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&q=80"
                alt="Rocket launching from price cards"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#16213e]/80 via-transparent to-transparent rounded-xl"></div>
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-xl animate-pulse-light"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferHero;
