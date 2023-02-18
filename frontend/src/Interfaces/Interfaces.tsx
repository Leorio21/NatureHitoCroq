export interface EventInterface {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  info: string;
  location: string;
  illustration: string;
  Lien: string;
}

export interface ProductInterface {
  id: number;
  brand: string;
  type: string;
  category: string;
  name: string;
  image: string;
  weigth: string;
  composition: string;
}

export interface ProductState extends Location {
  product: ProductInterface;
}
