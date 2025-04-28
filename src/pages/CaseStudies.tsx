
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesFilter from '@/components/case-studies/CaseStudiesFilter';
import CaseStudyGrid from '@/components/case-studies/CaseStudyGrid';
import CaseStudyCta from '@/components/case-studies/CaseStudyCta';

const CaseStudies = () => {
  const [industryFilter, setIndustryFilter] = useState('Wszystkie branże');
  const [goalFilter, setGoalFilter] = useState('Wszystkie cele');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <CaseStudiesHero />
        <CaseStudiesFilter 
          selectedIndustry={industryFilter}
          selectedGoal={goalFilter}
          onIndustryChange={setIndustryFilter}
          onGoalChange={setGoalFilter}
        />
        <CaseStudyGrid 
          industryFilter={industryFilter}
          goalFilter={goalFilter}
        />
        <CaseStudyCta />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
