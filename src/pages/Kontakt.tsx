
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CookieConsent from '@/components/common/CookieConsent';
import KontaktHero from '@/components/kontakt/KontaktHero';
import SelfServiceSection from '@/components/kontakt/SelfServiceSection';
import BusinessInquiryForm from '@/components/kontakt/BusinessInquiryForm';
import DepartmentContacts from '@/components/kontakt/DepartmentContacts';
import CompanyAddress from '@/components/kontakt/CompanyAddress';
import DemoBookingCta from '@/components/kontakt/DemoBookingCta';

const Kontakt = () => {
  useEffect(() => {
    // Update meta title
    document.title = "Kontakt – BizMundo.ai";
    
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
        <KontaktHero />
        <div id="pomoc">
          <SelfServiceSection />
        </div>
        <div id="biznes">
          <BusinessInquiryForm />
        </div>
        <DepartmentContacts />
        <CompanyAddress />
        <DemoBookingCta />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Kontakt;
