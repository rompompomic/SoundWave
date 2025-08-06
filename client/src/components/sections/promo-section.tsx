import { useSanity } from "@/hooks/use-sanity";
import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";

export default function PromoSection() {
  const { data: promotions } = useSanity('promotions');

  return (
    <section className="py-20 bg-gradient-to-r from-accent-orange to-orange-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="promo-title">
          Специальное предложение
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="promo-description">
          {promotions?.[0]?.description || 'Закажите песню до конца месяца и получите скидку 20% + бесплатная консультация по продвижению в соцсетях'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-white text-accent-orange hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-colors"
            data-testid="get-discount-button"
          >
            <Gift className="w-5 h-5 mr-2" />
            Получить скидку
          </Button>
          <div className="text-white font-semibold" data-testid="promo-countdown">
            <Clock className="w-5 h-5 mr-2 inline" />
            До конца акции: <span className="font-bold">7 дней</span>
          </div>
        </div>
      </div>
    </section>
  );
}
