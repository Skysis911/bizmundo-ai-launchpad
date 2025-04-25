
import React from 'react';

const CaseQuote = ({ caseStudy }) => {
  return (
    <section className="py-8">
      <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
        "{caseStudy.quote.text}"
        <footer className="mt-2 text-sm text-muted-foreground">
          — {caseStudy.quote.author}
        </footer>
      </blockquote>
    </section>
  );
};

export default CaseQuote;
