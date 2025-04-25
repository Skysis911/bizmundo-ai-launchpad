
import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: 'AI Chat',
    description: 'Interaktywny asystent dla Twojego biznesu, dostępny 24/7.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    link: '/funkcje/ai-chat',
  },
  {
    id: 2,
    title: 'AI Content Writer',
    description: 'Generuj profesjonalne treści marketingowe w kilku kliknięciach.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    link: '/funkcje/ai-content-writer',
  },
  {
    id: 3,
    title: 'AI Image',
    description: 'Twórz przyciągające wzrok grafiki i obrazy dopasowane do Twojej marki.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    link: '/funkcje/ai-image',
  },
  {
    id: 4,
    title: 'AI Video',
    description: 'Produkcja profesjonalnych filmów bez potrzeby zatrudniania montażysty.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    link: '/funkcje/ai-video-studio',
  },
  {
    id: 5,
    title: 'AI Audio',
    description: 'Profesjonalne nagrania lektorskie i transkrypcje audio w kilka minut.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    link: '/funkcje/ai-audio-voiceover',
  },
  {
    id: 6,
    title: 'Smart Editor',
    description: 'Zaawansowany edytor treści z inteligentną korektą i sugestiami ulepszeń.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    link: '/funkcje/smart-editor',
  },
  {
    id: 7,
    title: 'AI Social Media',
    description: 'Automatyczne planowanie i tworzenie angażujących postów w mediach społecznościowych.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: '/funkcje/ai-social-media',
  },
  {
    id: 8,
    title: 'Brand Voice Builder',
    description: 'Twórz i utrzymuj spójny głos marki we wszystkich kanałach komunikacji.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    link: '/funkcje/brand-voice-builder',
  },
  {
    id: 9,
    title: 'AI Code',
    description: 'Generowanie i optymalizacja kodu dla stron internetowych i aplikacji.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    link: '/funkcje/ai-code',
  },
];

const FeaturesOverviewSection = () => {
  return (
    <section id="features-overview" className="section-padding bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Wszystkie narzędzia AI w jednym miejscu
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Odkryj pełen zestaw funkcji, które pomogą Ci rozwinąć Twój biznes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link 
            key={feature.id}
            to={feature.link}
            className="feature-card flex flex-col transition-all duration-300 hover:translate-y-[-5px]"
          >
            <div className="text-primary mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-700 mb-4">{feature.description}</p>
            <div className="text-primary font-medium mt-auto flex items-center">
              Dowiedz się więcej
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/funkcje" className="btn-primary inline-flex items-center">
          Zobacz wszystkie funkcje
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
