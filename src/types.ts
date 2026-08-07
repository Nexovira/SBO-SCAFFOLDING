export interface ServiceCard {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  idealFor: string;
  iconName: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  title: string;
  text: string;
  rating: number;
  date: string;
  verified: boolean;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'pricing' | 'permits' | 'emergency' | 'general';
}

export interface QuoteEstimate {
  propertyType: string;
  durationWeeks: number;
  needsPermit: boolean;
  sidesCount: number;
}
