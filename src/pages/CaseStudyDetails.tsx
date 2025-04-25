
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import CaseStudyHeader from '@/components/case-studies/CaseStudyHeader';
import CompanyContext from '@/components/case-studies/CompanyContext';
import CaseChallenge from '@/components/case-studies/CaseChallenge';
import CaseSolution from '@/components/case-studies/CaseSolution';
import CaseResults from '@/components/case-studies/CaseResults';
import CaseQuote from '@/components/case-studies/CaseQuote';
import CaseCta from '@/components/case-studies/CaseCta';

const CaseStudyDetails = () => {
  const { slug } = useParams();
  
  // This would be replaced with actual data fetching in a real implementation
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return <div className="p-12 text-center">Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Strona Główna</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/case-studies">Case Studies</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{caseStudy.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <nav className="sticky top-0 bg-white z-10 py-4 border-b my-4">
          <ul className="flex space-x-4 text-sm">
            <li><a href="#wyzwanie" className="text-muted-foreground hover:text-primary">Wyzwanie</a></li>
            <li><a href="#rozwiazanie" className="text-muted-foreground hover:text-primary">Rozwiązanie</a></li>
            <li><a href="#wyniki" className="text-muted-foreground hover:text-primary">Wyniki</a></li>
          </ul>
        </nav>
        
        <CaseStudyHeader caseStudy={caseStudy} />
        <CompanyContext caseStudy={caseStudy} />
        <CaseChallenge caseStudy={caseStudy} />
        <CaseSolution caseStudy={caseStudy} />
        <CaseResults caseStudy={caseStudy} />
        <CaseQuote caseStudy={caseStudy} />
        <CaseCta />
      </div>
    </div>
  );
};

// Mock function to simulate fetching case study data
function getCaseStudyBySlug(slug) {
  const caseStudies = {
    'sklep-agd': {
      title: '+28 % konwersji w 30 dni – Sklep AGD X & BizMundo.ai',
      company: {
        name: 'Sklep AGD X',
        size: 'Mikro-firma, 3 osoby, 1200 SKU online',
        goal: 'zwiększyć sprzedaż bez zatrudniania kolejnego copywritera'
      },
      challenge: '200 opisów produktów do przepisywania. Stagnacja SEO, copy-paste producenta → duplikaty, niska konwersja.',
      solution: [
        { step: 1, feature: 'AI Content Writer', description: 'Generacja 200 opisów z Brand Voice' },
        { step: 2, feature: 'Smart Editor', description: 'Optymalizacja EEAT + meta-tagi' },
        { step: 3, feature: 'AI Image', description: 'Grafiki lifestyle 1080×1080' }
      ],
      results: [
        '+28 % CR (A/B vs stare opisy)',
        '+42 % organic traffic / 90 dni',
        'Zwrot kosztu subskrypcji w 11 dni'
      ],
      quote: {
        text: 'To, co robiła agencja w miesiąc, BizMundo i ja zrobiliśmy w weekend.',
        author: 'Jan Kowalski, właściciel'
      },
      category: 'E-commerce',
      goal: 'Większa sprzedaż',
      featured: false
    },
    'kancelaria-prawna': {
      title: '+300 % leadów – Kancelaria prawna & BizMundo.ai',
      company: {
        name: 'Kancelaria Prawna ABC',
        size: 'Mała firma, 5 prawników',
        goal: 'zwiększyć liczbę leadów z LinkedIn'
      },
      challenge: 'Niska rozpoznawalność marki, brak contentu eksperckiego, wysokie koszty produkcji treści.',
      solution: [
        { step: 1, feature: 'AI Video Avatar', description: 'Stworzenie serii wywiadów eksperckich' },
        { step: 2, feature: 'Podcast Voiceover', description: 'Konwersja wideo na podcast' },
        { step: 3, feature: 'AI Content Writer', description: 'Transkrypcje i artykuły pochodne' }
      ],
      results: [
        '+300 % leadów z LinkedIn',
        '6-odcinkowy podcast wygenerowany w 3 dni',
        '15 nowych klientów w pierwszym miesiącu'
      ],
      quote: {
        text: 'Z dnia na dzień staliśmy się topowym źródłem wiedzy w naszej niszy, bez zatrudniania specjalistów od contentu.',
        author: 'Anna Nowak, partner zarządzający'
      },
      category: 'Usługi',
      goal: 'Więcej leadów',
      featured: true
    },
    'kawiarnia': {
      title: 'Weekend wyprzedany – Kawiarnia Lokalna & BizMundo.ai',
      company: {
        name: 'Kawiarnia Lokalna',
        size: 'Mikro-biznes, 4 osoby',
        goal: 'zwiększyć sprzedaż w weekendy'
      },
      challenge: 'Brak budżetu na marketing, słaba obecność w social media, brak profesjonalnych grafik.',
      solution: [
        { step: 1, feature: 'AI Image', description: 'Generacja atrakcyjnych wizualizacji produktów' },
        { step: 2, feature: 'AI Social', description: 'Przygotowanie kampanii dla Instagrama' },
        { step: 3, feature: 'AI Video', description: 'Krótkie animacje produktów' }
      ],
      results: [
        'Weekendowa oferta całkowicie wyprzedana',
        '4 reklamy wideo stworzone w 2 godziny',
        '+120% zasięgu postów organicznych'
      ],
      quote: {
        text: 'Nasze kawy i desery nigdy nie wyglądały tak dobrze na zdjęciach. Klienci przychodzą z telefonami pokazując nasze posty.',
        author: 'Marek Wiśniewski, właściciel'
      },
      category: 'Lokalny biznes',
      goal: 'Większa sprzedaż',
      featured: false
    },
    'edutech': {
      title: '-47 % CAC – EduTech SaaS & BizMundo.ai',
      company: {
        name: 'EduTech SaaS',
        size: 'Startup, 12 osób',
        goal: 'obniżyć koszt pozyskania klienta (CAC)'
      },
      challenge: 'Wysokie koszty marketingu, niespójny przekaz marki, ograniczone zasoby działu marketingu.',
      solution: [
        { step: 1, feature: 'Brand Voice Builder', description: 'Stworzenie spójnego tonu komunikacji' },
        { step: 2, feature: 'AI Content Writer', description: 'Automatyzacja produkcji treści' },
        { step: 3, feature: 'Integracje API', description: 'Połączenie z systemami CRM i marketingowymi' }
      ],
      results: [
        '-47% koszt pozyskania klienta (CAC)',
        '+35% współczynnik konwersji landing page',
        'Oszczędność 40 h/miesiąc na produkcji treści'
      ],
      quote: {
        text: 'BizMundo.ai stał się dodatkowym członkiem naszego zespołu marketingu, pracującym 24/7 bez urlopów i nadgodzin.',
        author: 'Katarzyna Zielińska, CMO'
      },
      category: 'EduTech SaaS',
      goal: 'Redukcja kosztów',
      featured: false
    }
  };
  
  return caseStudies[slug];
}

export default CaseStudyDetails;
