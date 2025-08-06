import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import PricingSection from "@/components/sections/pricing-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import ServicesSection from "@/components/sections/services-section";
import PromoSection from "@/components/sections/promo-section";
import ReviewsSection from "@/components/sections/reviews-section";
import ContactSection from "@/components/sections/contact-section";
import { Music } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-black text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <PortfolioSection />
        <ServicesSection />
        <PromoSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          className="bg-accent-orange hover:bg-orange-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-float"
          data-testid="floating-order-button"
        >
          <Music className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
