
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">BizMundo<span className="text-secondary-foreground">.ai</span></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Strona Główna
            </Link>
            <Link to="/uslugi" className="text-sm font-medium hover:text-primary transition-colors">
              Usługi
            </Link>
            <Link to="/funkcje" className="text-sm font-medium hover:text-primary transition-colors">
              Funkcje
            </Link>
            <Link to="/cennik" className="text-sm font-medium hover:text-primary transition-colors">
              Cennik
            </Link>
            <Link to="/case-studies" className="text-sm font-medium hover:text-primary transition-colors">
              Case Studies
            </Link>
            <Link to="/zasoby" className="text-sm font-medium hover:text-primary transition-colors">
              Zasoby
            </Link>
            <Link to="/kontakt" className="text-sm font-medium hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-primary border border-primary hover:bg-primary/10">
              Zarezerwuj demo
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Rozpocznij darmowy okres próbny
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-secondary-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
              >
                Strona Główna
              </Link>
              <Link
                to="/uslugi"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
              >
                Usługi
              </Link>
              <Link
                to="/funkcje"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
              >
                Funkcje
              </Link>
              <Link
                to="/cennik"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
              >
                Cennik
              </Link>
              <Link
                to="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
              >
                Case Studies
              </Link>
              <Link
                to="/zasoby"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
              >
                Zasoby
              </Link>
              <Link
                to="/kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium hover:bg-gray-50 rounded-md"
              >
                Kontakt
              </Link>
              <div className="pt-3 space-y-2">
                <Button
                  variant="outline"
                  className="w-full text-primary border border-primary hover:bg-primary/10"
                >
                  Zarezerwuj demo
                </Button>
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Rozpocznij darmowy okres próbny
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
