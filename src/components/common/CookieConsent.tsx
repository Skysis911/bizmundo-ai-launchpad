
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie-consent');
    if (!consentGiven) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700 flex-grow">
          <p>
            Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie. 
            Kontynuując korzystanie z serwisu, zgadzasz się na użycie plików cookie zgodnie z 
            naszą <a href="#" className="text-primary underline">polityką prywatności</a>.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 underline">
            Ustawienia
          </a>
          <Button
            onClick={acceptCookies}
            className="shrink-0 bg-primary hover:bg-primary-dark text-white"
          >
            Akceptuję
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
