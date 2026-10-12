export type CarCategory = 'econom' | 'comfort' | 'business';

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  transmission: string;
  fuel: string;
  engine: string;
  trim: string;
  category: CarCategory;
  pricePerDay: number;
  available: boolean;
  images: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  initials: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date: string;
}
