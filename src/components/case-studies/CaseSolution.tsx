
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CaseSolution = ({ caseStudy }) => {
  return (
    <section id="rozwiazanie" className="py-8">
      <h2 className="text-2xl font-bold mb-4">Rozwiązanie</h2>
      <div className="bg-white rounded-lg overflow-hidden shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">Krok</TableHead>
              <TableHead>Funkcja BizMundo</TableHead>
              <TableHead>Co zrobiliśmy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {caseStudy.solution.map((step) => (
              <TableRow key={step.step}>
                <TableCell className="font-medium">{step.step}</TableCell>
                <TableCell className="text-primary">{step.feature}</TableCell>
                <TableCell>{step.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default CaseSolution;
