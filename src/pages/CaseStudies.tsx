
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesFilter from '@/components/case-studies/CaseStudiesFilter';
import CaseStudyGrid from '@/components/case-studies/CaseStudyGrid';
import CaseStudyCta from '@/components/case-studies/CaseStudyCta';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudyGrid />
      <CaseStudyCta />
      <Footer />
    </div>
  );
};

export default CaseStudies;
