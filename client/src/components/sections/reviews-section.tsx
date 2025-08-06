import { useSanity } from "@/hooks/use-sanity";
import { Play, Star } from "lucide-react";

export default function ReviewsSection() {
  const { data: testimonials } = useSanity('testimonials');

  const defaultVideoTestimonials = [
    {
      _id: '1',
      clientName: 'Анна Петрова',
      description: 'Песня для свадьбы',
      videoUrl: '',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200'
    },
    {
      _id: '2',
      clientName: 'Михаил Кузнецов',
      description: 'Рекламный джингл',
      videoUrl: '',
      thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200'
    }
  ];

  const defaultTextTestimonials = [
    {
      _id: '1',
      text: 'Заказывали песню для юбилея компании. Результат превзошел все ожидания! Команда учла все наши пожелания и создала настоящий шедевр. Рекомендуем!',
      clientName: 'Ольга Романова',
      company: 'ООО "Инновации"',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50'
    },
    {
      _id: '2',
      text: 'Потрясающая работа! Создали трогательную песню для нашей свадьбы. Гости до сих пор под впечатлением. Профессионализм на высшем уровне!',
      clientName: 'Дмитрий и Анна',
      company: 'Молодожены',
      rating: 5,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50'
    }
  ];

  const videoTestimonials = testimonials?.filter((t: any) => t.type === 'video') || defaultVideoTestimonials;
  const textTestimonials = testimonials?.filter((t: any) => t.type === 'text') || defaultTextTestimonials;

  return (
    <section id="reviews" className="py-20 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="reviews-title">Отзывы наших клиентов</h2>
          <div className="w-24 h-1 bg-accent-orange mx-auto mb-8"></div>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto" data-testid="reviews-description">
            Посмотрите, что говорят о нашей работе довольные клиенты
          </p>
        </div>

        {/* Video Reviews Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center" data-testid="video-reviews-title">Видео-отзывы</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="flex overflow-x-auto space-x-6 pb-4" id="video-carousel">
              {videoTestimonials.map((video: any, index: number) => (
                <div key={video._id} className="flex-none w-80" data-testid={`video-testimonial-${index}`}>
                  <div className="bg-deep-black rounded-2xl overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-accent-orange/20 to-deep-black">
                      <img 
                        src={video.thumbnail}
                        alt={`Видео-отзыв ${video.clientName}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <button className="bg-white/20 backdrop-blur-sm text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                          <Play className="w-6 h-6 ml-1" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2" data-testid={`video-client-name-${index}`}>{video.clientName}</h4>
                      <p className="text-sm text-soft-gray" data-testid={`video-description-${index}`}>{video.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text Reviews */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center" data-testid="text-reviews-title">Письменные отзывы</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {textTestimonials.map((review: any, index: number) => (
              <div key={review._id} className="bg-deep-black rounded-2xl p-6 border border-charcoal" data-testid={`text-testimonial-${index}`}>
                <div className="flex items-center mb-4">
                  <div className="flex text-accent-orange text-sm">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-soft-gray mb-4 leading-relaxed" data-testid={`review-text-${index}`}>
                  "{review.text}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={review.photo}
                    alt={`Фото ${review.clientName}`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold" data-testid={`review-client-name-${index}`}>{review.clientName}</div>
                    <div className="text-sm text-soft-gray" data-testid={`review-company-${index}`}>{review.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
