
import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Anna Kowalska',
    role: 'CEO, Kowalski Design Studio',
    quote: 'Dzięki BizMundo.ai zaoszczędzamy 20 godzin tygodniowo na tworzeniu treści marketingowych. Nasza obecność w mediach społecznościowych nigdy nie była tak konsekwentna i profesjonalna.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marek Nowak',
    role: 'Właściciel, Nowak & Partnerzy',
    quote: 'Narzędzia AI od BizMundo pomogły nam zwiększyć konwersję o 35% i zaoszczędzić tysiące złotych miesięcznie. Jako mała kancelaria prawna nie moglibyśmy sobie pozwolić na tradycyjny marketing.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Karolina Wiśniewska',
    role: 'Marketing Manager, Eko Farma',
    quote: 'Jako firma z branży ekologicznej, potrzebowaliśmy narzędzia, które pomoże nam tworzyć angażujące treści edukacyjne. BizMundo.ai spełnił wszystkie nasze oczekiwania - od tworzenia tekstów po profesjonalne grafiki.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Co mówią nasi klienci?
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Poznaj historie sukcesu małych firm, które zrewolucjonizowały swój biznes dzięki BizMundo.ai
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col">
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            
            <blockquote className="text-gray-700 italic flex-grow">"{testimonial.quote}"</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
