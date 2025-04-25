
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  HelpCircle, 
  PlayCircle, 
  FileText, 
  GanttChartSquare, 
  Code, 
  Bell 
} from 'lucide-react';

const ResourcesCategories = () => {
  const categories = [
    {
      icon: <HelpCircle className="h-8 w-8" />,
      name: 'FAQ',
      description: '120+ odpowiedzi na najczęstsze pytania',
      cta: 'Zobacz FAQ',
      link: '#faq'
    },
    {
      icon: <PlayCircle className="h-8 w-8" />,
      name: 'Webinaria On-Demand',
      description: 'Nagrania LIVE + Q&A',
      cta: 'Odtwórz',
      link: '#webinars'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      name: 'E-booki / PDF',
      description: 'Gotowe playbooki AI, checklisty',
      cta: 'Pobierz',
      link: '#ebooks'
    },
    {
      icon: <GanttChartSquare className="h-8 w-8" />,
      name: 'Tutoriale "Krok po kroku"',
      description: 'GIF-y + copy-paste promptów',
      cta: 'Przejdź',
      link: '#tutorials'
    },
    {
      icon: <Code className="h-8 w-8" />,
      name: 'API & Integracje Docs',
      description: 'End-pointy, przykłady kodu, limity',
      cta: 'Zobacz docs',
      link: '#api'
    },
    {
      icon: <Bell className="h-8 w-8" />,
      name: 'Aktualizacje produktu',
      description: 'Release notes, roadmap',
      cta: 'Sprawdź nowości',
      link: '#updates'
    }
  ];
  
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Sekcje Bazy wiedzy</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card key={index} className="h-full transition-all duration-300 hover:shadow-md hover:border-primary">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="text-primary mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{category.name}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{category.description}</p>
              <Button 
                variant="outline" 
                className="w-full justify-start hover:text-primary hover:border-primary"
                asChild
              >
                <a href={category.link}>{category.cta}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ResourcesCategories;
