import { useSanity } from "@/hooks/use-sanity";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const { data: pricingPlans } = useSanity('pricingPlans');

  const defaultPlans = [
    {
      _id: '1',
      name: 'Базовый',
      price: 15000,
      features: ['Песня до 3 минут', 'Профессиональная аранжировка', 'Текст песни в подарок'],
      popular: false
    },
    {
      _id: '2',
      name: 'Стандарт',
      price: 25000,
      features: ['Песня до 4 минут', 'Вокальная партия', 'Мастеринг высокого качества', '2 варианта аранжировки'],
      popular: true
    },
    {
      _id: '3',
      name: 'Премиум',
      price: 45000,
      features: ['Песня любой длительности', 'Живые инструменты', 'Видеоклип в подарок', 'Неограниченные правки'],
      popular: false
    }
  ];

  const plans = pricingPlans || defaultPlans;

  return (
    <section id="pricing" className="py-20 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="pricing-title">Наши тарифы</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto" data-testid="pricing-description">
            Выберите подходящий план для создания вашей уникальной песни
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan: any, index: number) => (
            <div 
              key={plan._id}
              className={`bg-charcoal rounded-2xl p-8 relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border ${
                plan.popular 
                  ? 'border-accent-orange bg-gradient-to-br from-accent-orange/20 to-charcoal scale-105' 
                  : 'border-transparent hover:border-accent-orange'
              }`}
              data-testid={`pricing-plan-${index}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-orange text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              )}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent-orange/10 rounded-full -mr-10 -mt-10"></div>
              <div className={`relative z-10 ${plan.popular ? 'pt-4' : ''}`}>
                <h3 className="text-2xl font-bold mb-4" data-testid={`plan-name-${index}`}>{plan.name}</h3>
                <div className="text-4xl font-bold text-accent-orange mb-6">
                  <span data-testid={`plan-price-${index}`}>{plan.price.toLocaleString()}</span>
                  <span className="text-lg text-soft-gray">₽</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center" data-testid={`plan-feature-${index}-${featureIndex}`}>
                      <Check className="text-accent-orange mr-3 w-5 h-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-accent-orange hover:bg-orange-600 py-3 rounded-full font-semibold transition-colors"
                  data-testid={`select-plan-${index}`}
                >
                  Выбрать план
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
