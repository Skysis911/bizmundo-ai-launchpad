
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpecialOfferHero from '@/components/special-offer/SpecialOfferHero';
import BenefitsSection from '@/components/special-offer/BenefitsSection';
import StackSection from '@/components/special-offer/StackSection';
import SocialProofSection from '@/components/special-offer/SocialProofSection';
import FaqSection from '@/components/special-offer/FaqSection';
import CheckoutSection from '@/components/special-offer/CheckoutSection';
import ExitIntentPopup from '@/components/special-offer/ExitIntentPopup';
import CookieConsent from '@/components/common/CookieConsent';

const SpecialOffer = () => {
  useEffect(() => {
    // Update meta title
    document.title = "Oferta Specjalna – BizMundo Grow -30%";
    
    // Google Tag Manager
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PLGFHF29');
    `;
    document.head.appendChild(script);

    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <SpecialOfferHero />
        <BenefitsSection />
        <StackSection />
        <SocialProofSection />
        <FaqSection />
        <CheckoutSection />
      </main>
      <footer className="bg-secondary-foreground text-white p-6 text-center">
        <div className="max-w-lg mx-auto text-sm">
          <p className="mb-2">© {new Date().getFullYear()} BizMundo.ai. Wszelkie prawa zastrzeżone.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white/70 hover:text-white">Polityka prywatności</a>
            <a href="#" className="text-white/70 hover:text-white">Warunki korzystania</a>
          </div>
        </div>
      </footer>
      <CookieConsent />
      <ExitIntentPopup />
    </div>
  );
};

export default SpecialOffer;
