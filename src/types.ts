export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string; // Dynamic icon rendering helper
  features: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'roofing' | 'siding' | 'gutters' | 'emergency';
  beforeUrl: string;
  afterUrl: string;
  location: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'Facebook' | 'BBB';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'roof' | 'siding' | 'general' | 'emergency';
}
