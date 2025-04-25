
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Search, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SupportSection = () => {
  const { toast } = useToast();
  
  const handleChatButtonClick = () => {
    toast({
      title: "Zaloguj się, aby rozmawiać",
      description: "Dostęp do czatu z ekspertem wymaga zalogowania.",
      duration: 3000,
    });
  };
  
  return (
    <section className="py-12 bg-gray-50 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Nie znalazłeś odpowiedzi?</h2>
        
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Spróbuj jeszcze raz – użyj innych słów kluczowych.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Zerknij na Status Systemu – rzadko, ale możliwe, że to globalna rzecz.</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2"
                    asChild
                  >
                    <a href="#" className="flex items-center gap-2">
                      Status systemu <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">
                    Nadal potrzebujesz pomocy? Skontaktuj się z nami na czacie w aplikacji – odpowiedź w średnio 6 min.
                  </p>
                  <Button 
                    className="mt-2"
                    onClick={handleChatButtonClick}
                  >
                    Otwórz czat z ekspertem
                  </Button>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SupportSection;
