
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check } from 'lucide-react';

const DetailedComparison = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    { name: 'AI Chat', start: true, grow: true, scale: true },
    { name: 'Writer + Wizard', start: 'limit 10 art./m-c', grow: 'bez limitu', scale: true },
    { name: 'AI Image', start: '40 grafik', grow: '200', scale: true },
    { name: 'AI Video Avatar', start: false, grow: '30 min', scale: true },
    { name: 'AI Social Calendar', start: false, grow: true, scale: true },
    { name: 'Brand Voice Builder', start: false, grow: true, scale: true },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-8">
          <Button 
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2"
          >
            <span>Masz wątpliwości? Sprawdź, co zyskujesz w Grow</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path
                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
        
        {isExpanded && (
          <div className="mt-8 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Funkcja</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead className="font-bold text-primary">Grow</TableHead>
                  <TableHead>Scale</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => (
                  <TableRow key={feature.name}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell>
                      {typeof feature.start === 'boolean' ? 
                        (feature.start ? <Check className="h-4 w-4 text-primary" /> : '—') : 
                        feature.start
                      }
                    </TableCell>
                    <TableCell className="font-bold">
                      {typeof feature.grow === 'boolean' ? 
                        (feature.grow ? <Check className="h-4 w-4 text-primary" /> : '—') : 
                        feature.grow
                      }
                    </TableCell>
                    <TableCell>
                      {typeof feature.scale === 'boolean' ? 
                        (feature.scale ? <Check className="h-4 w-4 text-primary" /> : '—') : 
                        feature.scale
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        
        <div className="mt-16 bg-gradient-to-r from-primary-light to-primary p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Wybierz plan Grow i dostarczaj marketing, jakiego Twoi konkurenci nie są w stanie skopiować.
          </h3>
          <p className="mb-6">Masz 14 dni na test – bez karty, bez zobowiązań.</p>
          <Button size="lg" variant="secondary" className="text-primary font-medium">
            Chcę plan Grow
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailedComparison;
