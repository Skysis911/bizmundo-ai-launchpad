
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CaseChallenge = ({ caseStudy }) => {
  return (
    <section id="wyzwanie" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Wyzwanie</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-lg">{caseStudy.challenge}</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default CaseChallenge;
