
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/common/CookieConsent';
import CennikHero from '@/components/cennik/CennikHero';
import PlanSelector from '@/components/cennik/PlanSelector';
import PricingTable from '@/components/cennik/PricingTable';
import CreditExplanation from '@/components/cennik/CreditExplanation';
import PricingFaq from '@/components/cennik/PricingFaq';
import DetailedComparison from '@/components/cennik/DetailedComparison';
import CtaSection from '@/components/home/CtaSection';

const Cennik = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  useEffect(() => {
    // Update meta title
    document.title = "Cennik – Kredyty AI & Plany";
    
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
      <Navbar />
      <main className="flex-grow pt-16">
        <CennikHero />
        <PlanSelector isYearly={isYearly} setIsYearly={setIsYearly} />
        <PricingTable isYearly={isYearly} />
        <CreditExplanation />
        <PricingFaq />
        <DetailedComparison />
        <CtaSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Cennik;
