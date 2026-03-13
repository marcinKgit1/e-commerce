export interface Product {
  id: string;
  name: string;
  namePl: string;
  price: number;
  description: string;
  descriptionPl: string;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
