
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CompanyContext = ({ caseStudy }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">O firmie</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-lg mb-2">{caseStudy.company.size}</p>
          <p className="text-lg">
            <span className="font-medium">Cel:</span> {caseStudy.company.goal}.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default CompanyContext;
