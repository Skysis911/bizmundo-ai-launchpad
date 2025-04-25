
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if the mouse is leaving from the top of the page
      if (e.clientY <= 5 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full relative animate-fade-in">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Jeszcze się wahasz?</h3>
          <p className="text-gray-700">
            Zarezerwuj 10-minutowe demo z naszym ekspertem. Pokaże Ci, jak BizMundo.ai może pomóc Twojemu biznesowi.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => window.open('https://calendly.com', '_blank')}
            className="w-full bg-primary hover:bg-primary-dark text-white py-5"
          >
            Zobacz demo 10 min →
          </Button>
          <button
            onClick={() => setIsVisible(false)} 
            className="w-full text-gray-500 hover:text-gray-700 text-sm"
          >
            Nie, dziękuję. Wracam do oferty.
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
