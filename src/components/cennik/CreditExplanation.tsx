
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CreditExplanation = () => {
  const creditUsage = [
    { action: 'AI Chat – 750 znaków', credits: '1' },
    { action: 'AI Writer – 1 000 słów', credits: '10' },
    { action: 'AI Image – 1 wygenerowana grafika', credits: '10' },
    { action: 'AI Video – 1 min produkcji', credits: '50' },
    { action: 'AI Audio – 1 min lektora', credits: '5' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Kredyty = paliwo Twojej rakiety marketingowej
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Akcja</TableHead>
                  <TableHead className="text-right">Średni koszt kredytów*</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {creditUsage.map((item) => (
                  <TableRow key={item.action}>
                    <TableCell>{item.action}</TableCell>
                    <TableCell className="text-right font-medium">{item.credits}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground mt-2">
              *Podane wartości to uśrednione zużycie; szczegóły w panelu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-lg font-medium mb-4">
              Wyobraź sobie, że każdy kredyt to minuta pracy topowego specjalisty – tylko bez faktury za kilkaset złotych.
            </p>
            <p className="text-muted-foreground">
              Kupujesz pakiet i widzisz w dashboardzie, jak Twój wskaźnik rośnie, a nie maleje. Bez ukrytych kosztów, bez limitów miesięcznych – płacisz tylko za to, co faktycznie wykorzystasz w swoim biznesie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditExplanation;
