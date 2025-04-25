
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const QuickStartPaths = () => {
  return (
    <section className="py-12 bg-gray-50 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Ścieżki szybkiego startu</h2>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Masz 20 min? Uruchom pierwszą kampanię:</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-4 rounded-lg bg-secondary relative">
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <h4 className="font-bold mb-2">„Rejestracja i kredyty"</h4>
                <p className="text-sm text-muted-foreground">(5 min wideo)</p>
              </div>
              <div className="flex items-center justify-center text-gray-400">→</div>
              <div className="flex-1 p-4 rounded-lg bg-secondary relative">
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <h4 className="font-bold mb-2">„Pierwszy artykuł SEO"</h4>
                <p className="text-sm text-muted-foreground">(8 min)</p>
              </div>
              <div className="flex items-center justify-center text-gray-400">→</div>
              <div className="flex-1 p-4 rounded-lg bg-secondary relative">
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <h4 className="font-bold mb-2">„Publikacja w social"</h4>
                <p className="text-sm text-muted-foreground">(7 min)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Masz 60 min? Zrób mini-rebranding:</h3>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 p-4 rounded-lg bg-secondary relative">
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <h4 className="font-bold mb-2">Brand Voice Builder</h4>
              </div>
              <div className="flex items-center justify-center text-gray-400">→</div>
              <div className="flex-1 p-4 rounded-lg bg-secondary relative">
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <h4 className="font-bold mb-2">AI Image mock-up</h4>
              </div>
              <div className="flex items-center justify-center text-gray-400">→</div>
              <div className="flex-1 p-4 rounded-lg bg-secondary relative">
                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <h4 className="font-bold mb-2">AI Video Avatar intro</h4>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuickStartPaths;
