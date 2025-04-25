
import React from 'react';

const CompanyAddress = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Biuro & korespondencja</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="font-medium">BizMundo Sp. z o.o.</p>
          <p>ul. Przykładowa 12, 00-000 Warszawa, Polska</p>
          <p className="text-sm text-muted-foreground mt-2">NIP 123-456-78-90, KRS 000xxxxxx</p>
          
          <div className="mt-4 p-3 bg-secondary/50 rounded text-sm">
            <p>(Biuro nie obsługuje wizyt bez umówienia spotkania – umów demo online poniżej.)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAddress;
