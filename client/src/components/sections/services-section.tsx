import { useSanity } from "@/hooks/use-sanity";
import { Music, Palette, Check } from "lucide-react";

export default function ServicesSection() {
  const { data: services } = useSanity('services');

  return (
    <section id="services" className="py-20 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="services-title">Дополнительные услуги</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto" data-testid="services-description">
            Помимо создания песен, мы предлагаем комплексные решения для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-2xl p-8 border border-charcoal hover:border-accent-orange transition-all duration-300">
            <div className="text-4xl text-accent-orange mb-6">
              <Music className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="music-production-title">Музыкальное производство</h3>
            <ul className="space-y-3 text-soft-gray">
              <li className="flex items-start" data-testid="music-service-1">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Создание песен на заказ для любых событий</span>
              </li>
              <li className="flex items-start" data-testid="music-service-2">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Профессиональная студийная запись</span>
              </li>
              <li className="flex items-start" data-testid="music-service-3">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Сведение и мастеринг композиций</span>
              </li>
              <li className="flex items-start" data-testid="music-service-4">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Написание текстов и аранжировки</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-2xl p-8 border border-charcoal hover:border-accent-orange transition-all duration-300">
            <div className="text-4xl text-accent-orange mb-6">
              <Palette className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-4" data-testid="canva-service-title">Подписка Canva Pro</h3>
            <ul className="space-y-3 text-soft-gray">
              <li className="flex items-start" data-testid="canva-service-1">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Премиум доступ к Canva на выгодных условиях</span>
              </li>
              <li className="flex items-start" data-testid="canva-service-2">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Создание обложек для ваших композиций</span>
              </li>
              <li className="flex items-start" data-testid="canva-service-3">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Дизайн социальных сетей и рекламы</span>
              </li>
              <li className="flex items-start" data-testid="canva-service-4">
                <Check className="text-accent-orange mr-3 mt-1 w-5 h-5 flex-shrink-0" />
                <span>Консультации по визуальному оформлению</span>
              </li>
            </ul>
            <div className="mt-6">
              <span className="text-2xl font-bold text-accent-orange" data-testid="canva-price">990₽/мес</span>
              <span className="text-soft-gray line-through ml-2" data-testid="canva-old-price">1,500₽/мес</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
