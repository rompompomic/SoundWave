import { Clock, Mail } from "lucide-react";
import { SiTelegram, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-deep-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-accent-orange mb-4" data-testid="footer-logo">
              МузыкаНаЗаказ
            </div>
            <p className="text-soft-gray">
              Создаем уникальные музыкальные произведения, которые передают ваши эмоции и остаются в сердцах навсегда.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-soft-gray">
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-service-songs">
                  Песни на заказ
                </button>
              </li>
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-service-jingles">
                  Рекламные джинглы
                </button>
              </li>
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-service-canva">
                  Подписка Canva
                </button>
              </li>
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-service-recording">
                  Студийная запись
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-soft-gray">
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-category-birthday">
                  День рождения
                </button>
              </li>
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-category-march8">
                  8 марта
                </button>
              </li>
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-category-wedding">
                  Свадьбы
                </button>
              </li>
              <li>
                <button className="hover:text-accent-orange transition-colors text-left" data-testid="footer-category-corporate">
                  Корпоративы
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-soft-gray">
              <div className="flex items-center">
                <Clock className="text-accent-orange mr-3 w-4 h-4" />
                <span data-testid="footer-working-hours">10:00 - 22:00 МСК</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-accent-orange mr-3 w-4 h-4" />
                <span data-testid="footer-email">info@музыканазаказ.ru</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <button className="text-soft-gray hover:text-accent-orange transition-colors" data-testid="footer-telegram">
                  <SiTelegram className="w-5 h-5" />
                </button>
                <button className="text-soft-gray hover:text-accent-orange transition-colors" data-testid="footer-instagram">
                  <SiInstagram className="w-5 h-5" />
                </button>
                <button className="text-soft-gray hover:text-accent-orange transition-colors" data-testid="footer-whatsapp">
                  <SiWhatsapp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-deep-black mt-12 pt-8 text-center text-soft-gray">
          <p data-testid="footer-copyright">&copy; 2024 МузыкаНаЗаказ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
