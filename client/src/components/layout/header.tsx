import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-deep-black/90 backdrop-blur-sm z-50 border-b border-charcoal">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent-orange" data-testid="site-logo">
          МузыкаНаЗаказ
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-accent-orange transition-colors"
            data-testid="nav-about"
          >
            О нас
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="hover:text-accent-orange transition-colors"
            data-testid="nav-pricing"
          >
            Цены
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="hover:text-accent-orange transition-colors"
            data-testid="nav-portfolio"
          >
            Портфолио
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="hover:text-accent-orange transition-colors"
            data-testid="nav-services"
          >
            Услуги
          </button>
          <button 
            onClick={() => scrollToSection('reviews')} 
            className="hover:text-accent-orange transition-colors"
            data-testid="nav-reviews"
          >
            Отзывы
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-accent-orange transition-colors"
            data-testid="nav-contact"
          >
            Контакты
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-deep-black border-b border-charcoal md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left hover:text-accent-orange transition-colors"
                data-testid="mobile-nav-about"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="block w-full text-left hover:text-accent-orange transition-colors"
                data-testid="mobile-nav-pricing"
              >
                Цены
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="block w-full text-left hover:text-accent-orange transition-colors"
                data-testid="mobile-nav-portfolio"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block w-full text-left hover:text-accent-orange transition-colors"
                data-testid="mobile-nav-services"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="block w-full text-left hover:text-accent-orange transition-colors"
                data-testid="mobile-nav-reviews"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left hover:text-accent-orange transition-colors"
                data-testid="mobile-nav-contact"
              >
                Контакты
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
