
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ValueSection from '@/components/home/ValueSection';
import WhySection from '@/components/home/WhySection';
import FeaturesOverviewSection from '@/components/home/FeaturesOverviewSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';
import CookieConsent from '@/components/common/CookieConsent';

const Index = () => {
  useEffect(() => {
    // Update meta title
    document.title = "BizMundo.ai – Jedyna subskrypcja AI dla małego biznesu";
    
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
        <HeroSection />
        <ValueSection />
        <WhySection />
        <FeaturesOverviewSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
