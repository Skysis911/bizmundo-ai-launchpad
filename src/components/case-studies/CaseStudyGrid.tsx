
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface CaseStudy {
  id: string;
  industry: string;
  goal: string;
  result: string;
  description: string;
  featured: boolean;
}

interface CaseStudyGridProps {
  industryFilter: string;
  goalFilter: string;
}

const CaseStudyGrid: React.FC<CaseStudyGridProps> = ({ industryFilter, goalFilter }) => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'sklep-agd',
      industry: 'E-commerce',
      goal: 'Większa sprzedaż',
      result: '+28 % konwersji',
      description: 'AI Content Writer dla 200 opisów produktów.',
      featured: false
    },
    {
      id: 'kancelaria-prawna',
      industry: 'Usługi',
      goal: 'Więcej leadów',
      result: '+300 % leadów',
      description: 'AI Video Avatar + Podcast Voiceover.',
      featured: true
    },
    {
      id: 'kawiarnia',
      industry: 'Lokalny biznes',
      goal: 'Większa sprzedaż',
      result: 'Weekend wyprzedany',
      description: 'AI Social + Image: 4 reklamy IG.',
      featured: false
    },
    {
      id: 'edutech',
      industry: 'Edukacja',
      goal: 'Redukcja kosztów',
      result: '‑47 % CAC',
      description: 'Integracje + Brand Voice.',
      featured: false
    },
    {
      id: 'salon-kosmetyczny',
      industry: 'Lokalny biznes',
      goal: 'Więcej leadów',
      result: '+150% rezerwacji',
      description: 'AI Chat + Instagram Stories.',
      featured: false
    },
    {
      id: 'sklep-meblowy',
      industry: 'E-commerce',
      goal: 'Skalowanie treści',
      result: '500 opisów/tydzień',
      description: 'AI Content Generation + SEO.',
      featured: false
    },
    {
      id: 'szkola-jezykowa',
      industry: 'Edukacja',
      goal: 'Skalowanie treści',
      result: '+200% content output',
      description: 'AI Course Creator + Materiały.',
      featured: false
    },
    {
      id: 'biuro-podrozy',
      industry: 'Usługi',
      goal: 'Większa sprzedaż',
      result: '+45% sprzedaży',
      description: 'AI Copywriting + Social Media.',
      featured: true
    },
    {
      id: 'fryzjer',
      industry: 'Lokalny biznes',
      goal: 'Redukcja kosztów',
      result: '-60% marketing cost',
      description: 'AI Social Media Manager.',
      featured: false
    },
    {
      id: 'ksiegarnia',
      industry: 'E-commerce',
      goal: 'Więcej leadów',
      result: '+80% newsletter signup',
      description: 'AI Email Marketing.',
      featured: false
    },
    {
      id: 'stomatolog',
      industry: 'Usługi',
      goal: 'Skalowanie treści',
      result: '3x więcej contentu',
      description: 'AI Blog Writer + Social.',
      featured: false
    },
    {
      id: 'optyk',
      industry: 'Lokalny biznes',
      goal: 'Większa sprzedaż',
      result: '+40% foot traffic',
      description: 'AI Local Marketing.',
      featured: false
    },
    {
      id: 'producent-mebli',
      industry: 'E-commerce',
      goal: 'Redukcja kosztów',
      result: '-35% CAC',
      description: 'AI Product Descriptions.',
      featured: false
    },
    {
      id: 'szkola-tanca',
      industry: 'Edukacja',
      goal: 'Więcej leadów',
      result: '+90% zapisów',
      description: 'AI Video + Social Media.',
      featured: false
    },
    {
      id: 'klinika-med',
      industry: 'Usługi',
      goal: 'Skalowanie treści',
      result: '4x blog output',
      description: 'AI Content Strategy.',
      featured: true
    }
  ];

  const filteredStudies = caseStudies.filter(study => {
    const matchesIndustry = industryFilter === 'Wszystkie branże' || study.industry === industryFilter;
    const matchesGoal = goalFilter === 'Wszystkie cele' || study.goal === goalFilter;
    return matchesIndustry && matchesGoal;
  });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`}>
              <Card 
                className={`h-full transition-all duration-300 hover:shadow-md 
                  ${study.featured ? 'transform scale-[1.05] border-primary' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-sm text-muted-foreground">{study.industry} ⏤ {study.goal}</div>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary block">
                      {study.result}
                    </span>
                    {study.featured && (
                      <div className="absolute -top-2 -right-2">
                        <Badge variant="default" className="bg-primary">TOP RESULT</Badge>
                      </div>
                    )}
                  </div>
                  
                  <p className="mb-4 text-gray-700">{study.description}</p>
                  
                  <div className="flex items-center text-sm text-primary font-medium">
                    Czytaj →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyGrid;
