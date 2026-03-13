import { Product } from '../types';

export const products: Product[] = [
  // Accessories
  {
    id: '1',
    name: 'Minimalist Watch',
    namePl: 'Zegarek Minimalistyczny',
    price: 129.99,
    description: 'A sleek, minimalist watch for everyday wear. Features a genuine leather strap and a scratch-resistant sapphire crystal face.',
    descriptionPl: 'Elegancki, minimalistyczny zegarek na co dzień. Posiada pasek z prawdziwej skóry i odporne na zarysowania szafirowe szkło.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Leather Wallet',
    namePl: 'Skórzany Portfel',
    price: 49.99,
    description: 'Genuine leather wallet with multiple card slots, an ID window, and a spacious bill compartment.',
    descriptionPl: 'Portfel z prawdziwej skóry z wieloma miejscami na karty, okienkiem na dowód i pojemną przegrodą na banknoty.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Classic Sunglasses',
    namePl: 'Klasyczne Okulary Przeciwsłoneczne',
    price: 89.99,
    description: 'Timeless sunglasses with polarized lenses and UV400 protection. Perfect for sunny days and driving.',
    descriptionPl: 'Ponadczasowe okulary z polaryzacją i filtrem UV400. Idealne na słoneczne dni i do prowadzenia samochodu.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    name: 'Canvas Backpack',
    namePl: 'Płócienny Plecak',
    price: 75.00,
    description: 'Durable canvas backpack with a padded laptop sleeve and multiple organizational pockets for daily commute.',
    descriptionPl: 'Wytrzymały płócienny plecak z wyściełaną przegrodą na laptopa i wieloma kieszeniami na codzienne dojazdy.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '14',
    name: 'Luxury Perfume',
    namePl: 'Luksusowe Perfumy',
    price: 110.00,
    description: 'An elegant fragrance featuring notes of bergamot, vanilla, and sandalwood. Long-lasting and sophisticated.',
    descriptionPl: 'Elegancki zapach z nutami bergamotki, wanilii i drzewa sandałowego. Długotrwały i wyrafinowany.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80'
  },

  // Electronics
  {
    id: '2',
    name: 'Wireless Headphones',
    namePl: 'Słuchawki Bezprzewodowe',
    price: 199.99,
    description: 'High-quality wireless headphones with active noise cancellation and up to 30 hours of battery life.',
    descriptionPl: 'Wysokiej jakości słuchawki bezprzewodowe z aktywną redukcją szumów i baterią trzymającą do 30 godzin.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Smart Home Speaker',
    namePl: 'Inteligentny Głośnik',
    price: 149.99,
    description: 'Control all your smart devices from one central hub. Compatible with major voice assistants and features premium sound.',
    descriptionPl: 'Steruj wszystkimi inteligentnymi urządzeniami z jednego miejsca. Kompatybilny z asystentami głosowymi, oferuje dźwięk premium.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    name: 'Pro Laptop',
    namePl: 'Laptop Pro',
    price: 1299.99,
    description: 'Powerful laptop for professionals. Features a stunning retina display, fast processor, and all-day battery life.',
    descriptionPl: 'Potężny laptop dla profesjonalistów. Posiada niesamowity wyświetlacz retina, szybki procesor i baterię na cały dzień.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    name: 'Digital Camera',
    namePl: 'Aparat Cyfrowy',
    price: 850.00,
    description: 'Mirrorless digital camera with 4K video capabilities and interchangeable lenses. Capture life in stunning detail.',
    descriptionPl: 'Bezlusterkowy aparat cyfrowy z możliwością nagrywania w 4K i wymiennymi obiektywami. Uchwyć życie w niesamowitych detalach.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '13',
    name: 'Mechanical Keyboard',
    namePl: 'Klawiatura Mechaniczna',
    price: 135.00,
    description: 'Premium mechanical keyboard with tactile switches and customizable RGB backlighting for the ultimate typing experience.',
    descriptionPl: 'Klawiatura mechaniczna premium z przełącznikami taktylnymi i konfigurowalnym podświetleniem RGB dla najlepszych wrażeń z pisania.',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80'
  },

  // Clothing
  {
    id: '3',
    name: 'Cotton T-Shirt',
    namePl: 'Bawełniana Koszulka',
    price: 24.99,
    description: 'Comfortable 100% organic cotton t-shirt. Perfect for casual everyday wear. Available in multiple sizes.',
    descriptionPl: 'Wygodna koszulka ze 100% bawełny organicznej. Idealna na co dzień. Dostępna w wielu rozmiarach.',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'Denim Jacket',
    namePl: 'Kurtka Dżinsowa',
    price: 89.99,
    description: 'Classic denim jacket, perfect for any season. Features a comfortable fit and durable construction.',
    descriptionPl: 'Klasyczna kurtka dżinsowa, idealna na każdą porę roku. Wygodny krój i trwała konstrukcja.',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    name: 'Running Sneakers',
    namePl: 'Buty do Biegania',
    price: 119.99,
    description: 'Lightweight running sneakers with responsive cushioning and breathable mesh upper for maximum comfort.',
    descriptionPl: 'Lekkie buty do biegania z responsywną amortyzacją i oddychającą siateczką dla maksymalnego komfortu.',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    name: 'Summer Dress',
    namePl: 'Letnia Sukienka',
    price: 55.00,
    description: 'Light and breezy summer dress with a floral pattern. Perfect for warm days and casual outings.',
    descriptionPl: 'Lekka i przewiewna letnia sukienka w kwiatowy wzór. Idealna na ciepłe dni i codzienne wyjścia.',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '15',
    name: 'Cozy Hoodie',
    namePl: 'Wygodna Bluza',
    price: 65.00,
    description: 'Ultra-soft fleece hoodie with a relaxed fit. Your new go-to for chilly evenings and lazy weekends.',
    descriptionPl: 'Niezwykle miękka bluza polarowa o luźnym kroju. Twój nowy wybór na chłodne wieczory i leniwe weekendy.',
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80'
  }
];

export const categories = ['All', 'Electronics', 'Clothing', 'Accessories'];
