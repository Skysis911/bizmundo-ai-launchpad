
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12" id="misja">Nasza misja, wizja i cel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary">Misja</h3>
            <p>Wprowadzamy moc sztucznej inteligencji do każdej małej firmy, sprawiając, że tworzenie treści i marketing stają się proste, szybkie i opłacalne.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary">Wizja</h3>
            <p>Świat, w którym właściciel jednoosobowej działalności korzysta z tego samego zaawansowania technologicznego, co globalne korporacje – bez barier kosztowych i technicznych.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-primary">Cel 2025→2027</h3>
            <p>Wsparcie > 100 000 polskich firm w efektywnym wdrożeniu AI oraz redukcja ich kosztów marketingu o min. 30%.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12" id="historia">Nasza historia</h2>
        <div className="relative mx-auto mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          <div className="grid grid-cols-1 gap-12">
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-1/2 pr-12 text-right">
                <h3 className="font-bold text-xl mb-2">2023</h3>
              </div>
              <div className="w-1/2 pl-12">
                <p>Pomysł „jednego abonamentu AI" rodzi się w coworku w Warszawie.</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-1/2 pr-12 text-right">
                <h3 className="font-bold text-xl mb-2">2024</h3>
              </div>
              <div className="w-1/2 pl-12">
                <p>MVP trafia do 30 beta‑użytkowników; +250% wzrost efektywności tworzenia treści.</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-1/2 pr-12 text-right">
                <h3 className="font-bold text-xl mb-2">2025 Q1</h3>
              </div>
              <div className="w-1/2 pl-12">
                <p>Premiera BizMundo.ai – pierwsza polska platforma AI all‑in‑one dla MŚP.</p>
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary"></div>
              <div className="w-1/2 pr-12 text-right">
                <h3 className="font-bold text-xl mb-2">2025 Q3</h3>
              </div>
              <div className="w-1/2 pl-12">
                <p>10 000+ aktywnych użytkowników, partnerstwa z czołowymi akceleratorami biznesu.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Zespół liderów</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 className="font-bold text-lg">Mateusz Strzałkowski</h3>
            <p className="text-gray-600 mb-2">CEO & Co-Founder</p>
            <p className="text-sm text-center">15 lat w Marketingu, pasjonat skalowania mikrobiznesu; Właściciel Agencji WorkFlow Media</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 className="font-bold text-lg">Jan Braatz</h3>
            <p className="text-gray-600 mb-2">CTO & Co-Founder</p>
            <p className="text-sm text-center">Business Expert, Właściciel BizPlanner</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 className="font-bold text-lg">Anna Nowak</h3>
            <p className="text-gray-600 mb-2">CMO</p>
            <p className="text-sm text-center">Ekspertka marketingu cyfrowego z 10-letnim doświadczeniem w prowadzeniu kampanii digital</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 className="font-bold text-lg">Piotr Kowalski</h3>
            <p className="text-gray-600 mb-2">Head of AI</p>
            <p className="text-sm text-center">Doktor nauk technicznych, 8 lat w zakresie badań nad sztuczną inteligencją i machine learning</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Nasze wartości</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-primary">Klient > Feature</h3>
            <p>Najpierw rozwiązujemy problem, potem budujemy funkcję.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-primary">Prostota</h3>
            <p>Technologia ma pomagać, nie komplikować.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-primary">Szczerość</h3>
            <p>Transparentne ceny, zero małego druku.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-primary">Współodpowiedzialność</h3>
            <p>Sukces Twojej firmy = nasz sukces.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3 text-primary">Rozwój non-stop</h3>
            <p>Codziennie uczymy się i ulepszamy platformę.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Technologia & bezpieczeństwo</h2>
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <ul className="list-disc pl-6 space-y-3">
            <li>Serwery w UE (certyfikaty ISO 27001, SOC 2).</li>
            <li>Szyfrowanie danych end-to-end (TLS 1.3).</li>
            <li>Zgodność z RODO; pliki przechowujemy wyłącznie na czas niezbędny do realizacji usługi.</li>
            <li>Silnik AI trenowany na certyfikowanych, licencjonowanych zbiorach danych.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Partnerzy & integracje</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div 
              key={idx} 
              className="h-20 bg-gray-100 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all"
            >
              <div className="font-bold text-gray-400">Partner {idx + 1}</div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Społeczna odpowiedzialność (CSR)</h2>
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <p className="text-lg mb-6">
            1% przychodu przeznaczamy na program AI4Schools – bezpłatne warsztaty AI dla uczniów szkół średnich w małych miejscowościach. Wspieramy też Fundację Digital Poland w walce z wykluczeniem technologicznym.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Liczby, które mówią wszystko</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">≤ 60 sek</div>
            <p>średni czas potrzebny, by wygenerować pierwszy post z BizMundo</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">30%</div>
            <p>średnia redukcja kosztów marketingu naszych klientów w 90 dni</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">97%</div>
            <p>wskaźnik zadowolenia użytkowników (NPS)</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-primary mb-2">99,99%</div>
            <p>dostępność platformy w 2024 r.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Nagrody & media</h2>
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <ul className="list-disc pl-6 space-y-3">
            <li>AI Rising Star 2024 – konkurs TechWorld PL</li>
            <li>Wystąpienie na Infoshare 2025 („AI dla MŚP bez mistycyzmu")</li>
            <li>Publikacje: Puls Biznesu, MyCompany, Marketing i Biznes</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-center mb-12">Kariera</h2>
        <div className="text-center mb-6">
          <p className="text-xl mb-8">Chcesz budować przyszłość małego biznesu? Dołącz do nas!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">Front-End Developer (React)</h3>
            <button className="mt-4 text-primary underline">Zobacz szczegóły</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">AI Prompt Engineer</h3>
            <button className="mt-4 text-primary underline">Zobacz szczegóły</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl mb-3">Customer Success Specialist</h3>
            <button className="mt-4 text-primary underline">Zobacz szczegóły</button>
          </div>
        </div>

        <div className="bg-primary text-white p-12 rounded-lg text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Jesteśmy gotowi, by rozwijać Twój biznes – a Ty?</h2>
          <p className="text-lg mb-8">Dołącz do BizMundo.ai i korzystaj z mocy AI wspieranej przez ludzi, którym zależy.</p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-bold animate-pulse">
            Rozpocznij darmowy okres próbny
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
