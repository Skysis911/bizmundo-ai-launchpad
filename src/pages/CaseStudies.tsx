
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesFilter from '@/components/case-studies/CaseStudiesFilter';
import CaseStudyGrid from '@/components/case-studies/CaseStudyGrid';
import CaseStudyCta from '@/components/case-studies/CaseStudyCta';

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <CaseStudiesHero />
      <CaseStudiesFilter />
      <CaseStudyGrid />
      <CaseStudyCta />
    </div>
  );
};

export default CaseStudies;
