import { useSanity } from "@/hooks/use-sanity";
import { Music } from "lucide-react";

export default function AboutSection() {
  const { data: siteSettings } = useSanity('siteSettings');

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-charcoal to-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="about-title">Кто мы и что делаем</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-accent-orange mb-4" data-testid="about-mission-title">
              Наша миссия
            </h3>
            <p className="text-lg text-soft-gray leading-relaxed" data-testid="about-mission-text">
              {siteSettings?.mission || 'Мы создаем персональные музыкальные произведения, которые передают ваши чувства и эмоции. Каждая песня — это уникальная история, написанная специально для вас.'}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2" data-testid="stats-songs-created">
                  {siteSettings?.songsCreated || '500+'}
                </div>
                <div className="text-soft-gray">Созданных песен</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-orange mb-2" data-testid="stats-happy-clients">
                  {siteSettings?.happyClients || '300+'}
                </div>
                <div className="text-soft-gray">Довольных клиентов</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Команда музыкантов в студии" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="about-team-image"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent-orange text-white p-4 rounded-full">
              <Music className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
