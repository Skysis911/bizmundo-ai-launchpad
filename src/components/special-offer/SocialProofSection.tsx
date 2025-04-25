
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Marek Kowalski',
    role: 'Właściciel, Studio Graficzne KreArt',
    quote: 'Plan Grow to najlepsza inwestycja w mój biznes. Generuję treści i grafiki 5x szybciej, a jakość przewyższa to, co wcześniej tworzyłem manualnie przez godziny.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    company: 'KreArt',
  },
  {
    id: 2,
    name: 'Aleksandra Nowak',
    role: 'Marketing Manager, EkoZakupy.pl',
    quote: 'Dzięki planowi Grow odkryłam nowe możliwości marketingowe. Nasze newslettery mają o 38% wyższy współczynnik otwarć, a treści w mediach społecznościowych generują 3x więcej zaangażowania.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    company: 'EkoZakupy.pl',
  },
  {
    id: 3,
    name: 'Tomasz Wiśniewski',
    role: 'CEO, Wiśniewski Consulting',
    quote: 'Jako mała firma konsultingowa nie mogliśmy sobie pozwolić na dział marketingu. BizMundo.ai plan Grow zastąpił co najmniej 3 etaty i pozwolił nam konkurować z dużo większymi podmiotami na rynku.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    company: 'Wiśniewski Consulting',
  },
];

const SocialProofSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="social-proof" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Opinie naszych klientów
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Sprawdź, co mówią klienci korzystający z planu Grow
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
            <div className="h-full bg-primary transition-all duration-8000 ease-linear" style={{ width: '100%', animation: 'countdown 8s linear infinite' }}></div>
          </div>
          
          {/* Carousel */}
          <div className="py-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute top-0 translate-x-full'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <blockquote className="text-xl italic text-gray-700 mb-8">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="ml-4">
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Przejdź do opinii ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
