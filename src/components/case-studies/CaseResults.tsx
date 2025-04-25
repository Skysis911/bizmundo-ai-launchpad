
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CaseResults = ({ caseStudy }) => {
  return (
    <section id="wyniki" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Rezultat</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {caseStudy.results.map((result, index) => (
          <Card key={index} className="bg-primary text-white">
            <CardContent className="p-6 text-center">
              <p className="text-xl font-bold">{result}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CaseResults;
