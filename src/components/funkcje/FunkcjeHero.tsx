
import { Button } from "@/components/ui/button";

const FunkcjeHero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Wszystkie narzędzia AI w jednym arsenale. <span className="text-primary">Wybierz funkcję → działaj 10× szybciej.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Tekst, grafika, wideo, audio, social, produktywność – odpal dokładnie to, czego potrzebujesz i patrz, 
            jak Twój biznes rośnie w czasie, w którym inni dopiero logują się do kolejnego narzędzia.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-6 text-lg"
            onClick={() => document.getElementById('mapa-funkcji')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Zobacz moduły poniżej
          </Button>
        </div>
        
        <div className="lg:flex justify-end relative">
          <div className="relative w-full max-w-lg mx-auto lg:mx-0">
            {/* Main toolbox image */}
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80"
              alt="AI toolbox with multiple function icons"
              className="w-full h-auto rounded-xl shadow-2xl z-10 relative"
            />
            
            {/* Floating icons */}
            <div className="absolute -top-8 -right-8 bg-white rounded-full p-3 shadow-lg animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <div className="absolute top-1/4 -left-8 bg-white rounded-full p-3 shadow-lg animate-float-slow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute bottom-10 -right-8 bg-white rounded-full p-3 shadow-lg animate-float-fast">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div className="absolute bottom-1/3 -left-12 bg-white rounded-full p-3 shadow-lg animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>

            {/* Gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunkcjeHero;
