
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SelfServiceSection = () => {
  const selfServiceOptions = [
    {
      icon: "📚",
      channel: "Centrum Pomocy",
      description: "200+ artykułów, tutoriale wideo, checklisty",
      responseTime: "natychmiast"
    },
    {
      icon: "🎥",
      channel: "Webinaria On-Demand",
      description: "Pełne nagrania szkoleń (AI Chat, Content, Video)",
      responseTime: "natychmiast"
    },
    {
      icon: "👥",
      channel: "Społeczność BizMundo",
      description: "Wymiana doświadczeń + case'y użytkowników",
      responseTime: "natychmiast"
    },
    {
      icon: "📡",
      channel: "Status Systemu",
      description: "Monitoring 99,99% SLA – sprawdź, czy coś się dzieje",
      responseTime: "natychmiast"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Samoobsługa 24/7
        </h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Kanał</TableHead>
                <TableHead>Co znajdziesz</TableHead>
                <TableHead>Czas odpowiedzi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selfServiceOptions.map((option) => (
                <TableRow key={option.channel} className="hover:bg-secondary/30 transition-colors cursor-pointer">
                  <TableCell className="text-2xl">{option.icon}</TableCell>
                  <TableCell className="font-medium">{option.channel}</TableCell>
                  <TableCell>{option.description}</TableCell>
                  <TableCell>{option.responseTime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 bg-secondary p-6 rounded-lg">
          <p className="font-medium">
            Tip: 80% zgłoszeń wsparcia technicznego rozwiązujesz w mniej niż 5 minut dzięki artykułom "Krok po kroku".
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelfServiceSection;
