
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const SpecialOfferHero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the date we're counting down to (current date + 7 days)
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(futureDate.getDate() + 7);

    const countDown = () => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = futureDate.getTime() - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // If the count down is finished, stop the countdown
      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    };

    // Call once immediately
    countDown();

    // Update the count down every 1 second
    const interval = setInterval(countDown, 1000);

    // Clean up
    return () => clearInterval(interval);
  }, []);

  // Format the future date for display
  const formattedDate = new Date();
  formattedDate.setDate(formattedDate.getDate() + 7);
  const day = formattedDate.getDate();
  const month = formattedDate.toLocaleString('pl-PL', { month: 'long' });

  return (
    <section id="hero" className="pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-offer text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              BizMundo<span className="text-primary-light">.ai</span>
            </div>
          </Link>
          <a href="#" className="text-sm text-white/80 hover:text-white">Centrum Pomocy</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <div className="inline-block bg-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Limitowana oferta specjalna!
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Tylko do {day} {month} – Odbierz 30% zniżki na plan Grow i odblokuj pełną moc BizMundo.ai
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Oszczędzasz 968 zł rocznie, zyskujesz nielimitowane moduły AI.
            </p>

            {/* Countdown timer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="text-center mb-2">
                <div className="text-sm uppercase tracking-wider text-white/70">Oferta wygasa za:</div>
              </div>
              <div className="flex justify-center gap-4 text-center">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold">{days.toString().padStart(2, '0')}</div>
                  <div className="text-xs uppercase text-white/70">dni</div>
                </div>
                <div className="text-3xl font-bold">:</div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold">{hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs uppercase text-white/70">godz</div>
                </div>
                <div className="text-3xl font-bold">:</div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold">{minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs uppercase text-white/70">min</div>
                </div>
                <div className="text-3xl font-bold">:</div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold">{seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs uppercase text-white/70">sek</div>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-6 text-lg w-full sm:w-auto">
              Aktywuj zniżkę
            </Button>
            <p className="text-sm text-white/70 mt-4">
              Kod promocyjny GROW30 zostanie automatycznie dodany do Twojego konta.
            </p>
          </div>
          
          <div className="lg:flex justify-center relative hidden">
            <div className="relative">
              {/* Main image with rocket launching */}
              <div className="relative">
                <div className="flex items-end justify-center space-x-4">
                  {/* Left card (dimmer) */}
                  <div className="w-32 h-56 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-xl flex flex-col items-center justify-center p-4 opacity-60">
                    <div className="text-sm font-bold mb-1">Start</div>
                    <div className="text-xl font-bold mb-2">119 zł</div>
                    <div className="text-xs text-center text-white/70">30k kredytów</div>
                  </div>
                  
                  {/* Middle card (highlighted) */}
                  <div className="w-40 h-64 bg-white/20 rounded-lg backdrop-blur-sm border border-primary shadow-xl shadow-primary/20 flex flex-col items-center justify-center p-4 relative z-10">
                    <div className="absolute -top-3 left-0 right-0 mx-auto bg-primary text-white text-xs font-bold py-1 px-2 rounded text-center w-28">
                      NAJPOPULARNIEJSZY
                    </div>
                    <div className="text-sm font-bold mb-1">Grow</div>
                    <div className="flex items-center justify-center mb-1">
                      <div className="text-sm line-through text-white/70 mr-2">269 zł</div>
                      <div className="text-2xl font-bold">188 zł</div>
                    </div>
                    <div className="text-xs text-center text-white/70 mb-1">180k kredytów</div>
                    <div className="bg-primary text-white text-xs py-0.5 px-2 rounded-full mt-1">-30%</div>
                    {/* Rocket animation */}
                    <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-float">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Right card (dimmer) */}
                  <div className="w-32 h-56 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 shadow-xl flex flex-col items-center justify-center p-4 opacity-60">
                    <div className="text-sm font-bold mb-1">Scale</div>
                    <div className="text-xl font-bold mb-2">629 zł</div>
                    <div className="text-xs text-center text-white/70">600k kredytów</div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect under middle card */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-primary/30 blur-xl rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky bottom bar for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-secondary-foreground border-t border-white/20 py-3 px-4 md:hidden z-50 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="bg-primary text-white text-xs font-bold py-1 px-2 rounded mr-3">
              -30%
            </span>
            <div className="text-xs">
              <span className="block">{days}d {hours}h {minutes}m {seconds}s</span>
              <span className="block text-white/70">do końca</span>
            </div>
          </div>
          <a href="#checkout" className="bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 text-sm rounded">
            Aktywuj zniżkę
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferHero;
