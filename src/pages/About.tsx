
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import MissionSection from '@/components/about/MissionSection';
import TimelineSection from '@/components/about/TimelineSection';
import LeadershipSection from '@/components/about/LeadershipSection';
import ValuesSection from '@/components/about/ValuesSection';
import TechSection from '@/components/about/TechSection';
import PartnersSection from '@/components/about/PartnersSection';
import CsrSection from '@/components/about/CsrSection';
import StatsSection from '@/components/about/StatsSection';
import AwardsSection from '@/components/about/AwardsSection';
import CareersSection from '@/components/about/CareersSection';
import AboutCta from '@/components/about/AboutCta';
import { Navbar } from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <LeadershipSection />
      <ValuesSection />
      <TechSection />
      <PartnersSection />
      <CsrSection />
      <StatsSection />
      <AwardsSection />
      <CareersSection />
      <AboutCta />
      <Footer />
    </div>
  );
};

export default About;
