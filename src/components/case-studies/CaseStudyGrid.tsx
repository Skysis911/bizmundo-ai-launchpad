
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CaseStudyGrid = () => {
  const caseStudies = [
    {
      id: 'sklep-agd',
      industry: 'E-commerce ⏤ sklep AGD',
      result: '+28 % konwersji',
      description: 'AI Content Writer dla 200 opisów produktów.',
      featured: false
    },
    {
      id: 'kancelaria-prawna',
      industry: 'Usługi ⏤ kancelaria prawna',
      result: '+300 % leadów',
      description: 'AI Video Avatar + Podcast Voiceover.',
      featured: true
    },
    {
      id: 'kawiarnia',
      industry: 'Lokalny biznes ⏤ kawiarnia',
      result: 'Weekend wyprzedany',
      description: 'AI Social + Image: 4 reklamy IG.',
      featured: false
    },
    {
      id: 'edutech',
      industry: 'EduTech SaaS',
      result: '‑47 % CAC',
      description: 'Integracje + Brand Voice.',
      featured: false
    }
  ];
  
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <Link key={study.id} to={`/case-studies/${study.id}`}>
              <Card 
                className={`h-full transition-all duration-300 hover:shadow-md 
                  ${study.featured ? 'transform scale-[1.05] border-primary' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 text-sm text-muted-foreground">{study.industry}</div>
                  
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
