
import React, { useState } from 'react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const CaseStudiesFilter = () => {
  const [industryFilter, setIndustryFilter] = useState('Wszystkie branże');
  const [goalFilter, setGoalFilter] = useState('Wszystkie cele');
  
  const industries = [
    'Wszystkie branże',
    'E-commerce',
    'Usługi',
    'Edukacja',
    'Lokalny biznes'
  ];
  
  const goals = [
    'Wszystkie cele',
    'Więcej leadów',
    'Większa sprzedaż',
    'Redukcja kosztów',
    'Skalowanie treści'
  ];
  
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="w-full sm:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  {industryFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {industries.map((industry) => (
                  <DropdownMenuItem 
                    key={industry}
                    onClick={() => setIndustryFilter(industry)}
                  >
                    {industry}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="w-full sm:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  {goalFilter} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {goals.map((goal) => (
                  <DropdownMenuItem 
                    key={goal}
                    onClick={() => setGoalFilter(goal)}
                  >
                    {goal}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesFilter;
