import { useState } from "react";
import { useSanity } from "@/hooks/use-sanity";
import { Button } from "@/components/ui/button";
import AudioPlayer from "@/components/ui/audio-player";
import { FolderOpen } from "lucide-react";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { data: portfolioItems } = useSanity('portfolioItems');

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'birthday', name: 'День рождения' },
    { id: 'march8', name: '8 марта' },
    { id: 'commercial', name: 'Реклама' },
    { id: 'gender', name: 'Гендер пути' }
  ];

  const defaultItems = [
    {
      _id: '1',
      title: 'Песня для Марии',
      description: 'Нежная композиция для празднования 25-летия с личными воспоминаниями',
      category: 'birthday',
      audioUrl: '',
      duration: '2:43',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200'
    },
    {
      _id: '2',
      title: 'Весенний подарок',
      description: 'Романтическая композиция для любимой женщины с акцентом на нежность',
      category: 'march8',
      audioUrl: '',
      duration: '3:12',
      image: 'https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200'
    },
    {
      _id: '3',
      title: 'Джингл для IT-компании',
      description: 'Современный и запоминающийся джингл для технологической компании',
      category: 'commercial',
      audioUrl: '',
      duration: '0:30',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200'
    }
  ];

  const items = portfolioItems || defaultItems;
  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter((item: any) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-charcoal to-deep-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="portfolio-title">Наше портфолио</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto" data-testid="portfolio-description">
            Послушайте примеры наших работ в различных категориях
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'bg-accent-orange text-white'
                  : 'bg-charcoal text-white hover:bg-accent-orange'
              }`}
              data-testid={`category-filter-${category.id}`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredItems.map((item: any, index: number) => (
            <div 
              key={item._id}
              className="bg-charcoal rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              data-testid={`portfolio-item-${index}`}
            >
              <div className="h-48 bg-gradient-to-br from-accent-orange/20 to-charcoal relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3" data-testid={`item-title-${index}`}>{item.title}</h3>
                <p className="text-soft-gray mb-4" data-testid={`item-description-${index}`}>{item.description}</p>
                
                <AudioPlayer 
                  audioUrl={item.audioUrl}
                  duration={item.duration}
                  title={item.title}
                />
                
                <Button 
                  className="w-full bg-accent-orange hover:bg-orange-600 py-2 rounded-lg text-white font-semibold transition-colors mt-4"
                  data-testid={`listen-full-${index}`}
                >
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Послушать полную версию
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            className="bg-accent-orange hover:bg-orange-600 px-8 py-4 rounded-full text-white font-semibold text-lg transition-colors"
            data-testid="view-all-portfolio"
          >
            <FolderOpen className="w-5 h-5 mr-2" />
            Посмотреть все работы
          </Button>
        </div>
      </div>
    </section>
  );
}
