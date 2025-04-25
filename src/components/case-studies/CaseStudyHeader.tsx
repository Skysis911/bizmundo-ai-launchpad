
import React from 'react';

const CaseStudyHeader = ({ caseStudy }) => {
  return (
    <header className="py-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
        {caseStudy.title}
      </h1>
      <div className="mt-6 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">
          Hero image showing before/after comparison for the case study
        </p>
      </div>
    </header>
  );
};

export default CaseStudyHeader;
