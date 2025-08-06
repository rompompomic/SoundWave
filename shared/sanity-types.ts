export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  siteName: string;
  mission: string;
  songsCreated: string;
  happyClients: string;
  contactInfo: {
    telegram: string;
    instagram: string;
    whatsapp: string;
    email: string;
  };
}

export interface PricingPlan {
  _id: string;
  _type: 'pricingPlan';
  name: string;
  price: number;
  features: string[];
  popular: boolean;
}

export interface PortfolioItem {
  _id: string;
  _type: 'portfolioItem';
  title: string;
  description: string;
  category: 'birthday' | 'march8' | 'commercial' | 'gender';
  audioUrl: string;
  duration: string;
  image: string;
}

export interface Testimonial {
  _id: string;
  _type: 'testimonial';
  type: 'video' | 'text';
  clientName: string;
  text?: string;
  description?: string;
  company?: string;
  rating?: number;
  videoUrl?: string;
  thumbnail?: string;
  photo?: string;
}

export interface Service {
  _id: string;
  _type: 'service';
  name: string;
  description: string;
  features: string[];
  price?: number;
  icon: string;
}

export interface Promotion {
  _id: string;
  _type: 'promotion';
  title: string;
  description: string;
  active: boolean;
  expiresAt: string;
}
