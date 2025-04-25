
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FunkcjeHero from '@/components/funkcje/FunkcjeHero';
import MapaFunkcji from '@/components/funkcje/MapaFunkcji';
import KorzyściEkosystemu from '@/components/funkcje/KorzyściEkosystemu';
import CtaSection from '@/components/home/CtaSection';
import CookieConsent from '@/components/common/CookieConsent';

const Funkcje = () => {
  useEffect(() => {
    // Update meta title
    document.title = "Funkcje – Wszystkie narzędzia AI BizMundo";
    
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
        <FunkcjeHero />
        <MapaFunkcji />
        <KorzyściEkosystemu />
        <CtaSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Funkcje;
