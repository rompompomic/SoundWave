import { Music, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingNotes from "@/components/ui/floating-notes";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-charcoal to-deep-black"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Floating musical notes */}
      <FloatingNotes />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
          Создаем уникальные 
          <span className="text-accent-orange"> песни</span> 
          для ваших событий
        </h1>
        <p className="text-xl md:text-2xl text-soft-gray mb-8 max-w-2xl mx-auto" data-testid="hero-description">
          Профессиональные композиции на заказ: дни рождения, праздники, реклама. 
          Воплощаем ваши эмоции в музыку.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-accent-orange hover:bg-orange-600 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            data-testid="order-song-button"
          >
            <Music className="w-5 h-5 mr-2" />
            Заказать песню
          </Button>
          <Button 
            variant="outline"
            className="border border-white hover:bg-white hover:text-deep-black px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300"
            data-testid="listen-examples-button"
          >
            <Play className="w-5 h-5 mr-2" />
            Послушать примеры
          </Button>
        </div>
      </div>
    </section>
  );
}
