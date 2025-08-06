import { useState } from "react";
import { useSanity } from "@/hooks/use-sanity";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, ArrowRight } from "lucide-react";
import { SiTelegram, SiInstagram, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { data: contactInfo } = useSanity('contactInfo');
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">Свяжитесь с нами</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto" data-testid="contact-description">
            Готовы создать вашу уникальную песню? Выберите удобный способ связи
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-charcoal rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6" data-testid="contact-form-title">Оставить заявку</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="bg-deep-black border-soft-gray focus:border-accent-orange"
                    placeholder="Введите ваше имя"
                    data-testid="contact-form-name"
                  />
                </div>
                <div>
                  <Label htmlFor="contact" className="block text-sm font-medium mb-2">Телефон или Email</Label>
                  <Input
                    id="contact"
                    type="text"
                    required
                    className="bg-deep-black border-soft-gray focus:border-accent-orange"
                    placeholder="Способ связи с вами"
                    data-testid="contact-form-contact"
                  />
                </div>
                <div>
                  <Label htmlFor="songType" className="block text-sm font-medium mb-2">Тип песни</Label>
                  <Select required>
                    <SelectTrigger className="bg-deep-black border-soft-gray focus:border-accent-orange" data-testid="contact-form-song-type">
                      <SelectValue placeholder="Выберите тип песни" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birthday">День рождения</SelectItem>
                      <SelectItem value="march8">8 марта</SelectItem>
                      <SelectItem value="commercial">Реклама</SelectItem>
                      <SelectItem value="gender">Гендер пути</SelectItem>
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="description" className="block text-sm font-medium mb-2">Описание заказа</Label>
                  <Textarea
                    id="description"
                    required
                    className="bg-deep-black border-soft-gray focus:border-accent-orange h-32 resize-none"
                    placeholder="Расскажите подробнее о вашей задаче..."
                    data-testid="contact-form-description"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent-orange hover:bg-orange-600 py-3 rounded-lg font-semibold transition-colors"
                  disabled={isSubmitting}
                  data-testid="contact-form-submit"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
                </Button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-8" data-testid="contact-methods-title">Или напишите нам напрямую</h3>
              </div>

              {/* Social Media Buttons */}
              <div className="space-y-4">
                <a 
                  href={contactInfo?.telegram || "#"} 
                  className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                  data-testid="contact-telegram"
                >
                  <SiTelegram className="text-2xl text-white mr-4" />
                  <div className="flex-1">
                    <div className="font-semibold text-white">Telegram</div>
                    <div className="text-blue-100 text-sm">Быстрые ответы и обсуждение деталей</div>
                  </div>
                  <ArrowRight className="text-white w-5 h-5" />
                </a>

                <a 
                  href={contactInfo?.instagram || "#"} 
                  className="flex items-center bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                  data-testid="contact-instagram"
                >
                  <SiInstagram className="text-2xl text-white mr-4" />
                  <div className="flex-1">
                    <div className="font-semibold text-white">Instagram</div>
                    <div className="text-pink-100 text-sm">Смотрите наши работы и пишите в Direct</div>
                  </div>
                  <ArrowRight className="text-white w-5 h-5" />
                </a>

                <a 
                  href={contactInfo?.whatsapp || "#"} 
                  className="flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                  data-testid="contact-whatsapp"
                >
                  <SiWhatsapp className="text-2xl text-white mr-4" />
                  <div className="flex-1">
                    <div className="font-semibold text-white">WhatsApp</div>
                    <div className="text-green-100 text-sm">Голосовые сообщения и файлы</div>
                  </div>
                  <ArrowRight className="text-white w-5 h-5" />
                </a>

                <a 
                  href={`mailto:${contactInfo?.email || 'info@музыканазаказ.ru'}`} 
                  className="flex items-center bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 p-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                  data-testid="contact-email"
                >
                  <Send className="text-2xl text-white mr-4" />
                  <div className="flex-1">
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300 text-sm">Подробные технические задания</div>
                  </div>
                  <ArrowRight className="text-white w-5 h-5" />
                </a>
              </div>

              <div className="bg-charcoal rounded-2xl p-6 mt-8">
                <h4 className="font-semibold mb-4 text-center" data-testid="response-time-title">Время ответа</h4>
                <div className="space-y-3 text-sm text-soft-gray">
                  <div className="flex justify-between">
                    <span>Telegram/WhatsApp:</span>
                    <span className="text-green-400" data-testid="response-time-instant">В течение часа</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instagram/Email:</span>
                    <span className="text-yellow-400" data-testid="response-time-email">В течение 3 часов</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Рабочие часы:</span>
                    <span className="text-white" data-testid="working-hours">10:00 - 22:00 МСК</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
