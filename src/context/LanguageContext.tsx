import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  formatPrice: (price: number) => string;
  translateCategory: (category: string) => string;
}

const translations = {
  en: {
    storeName: 'TwójSklep',
    ourProducts: 'Our Products',
    discover: 'Discover our latest collection',
    addToCart: 'Add to Cart',
    yourCart: 'Your Cart',
    emptyCart: 'Your cart is empty',
    continueShopping: 'Continue Shopping',
    subtotal: 'Subtotal',
    checkout: 'Checkout',
    noProducts: 'No products found in this category.',
    backToStore: 'Back to store',
    backToProducts: 'Back to products',
    freeShipping: 'Free shipping on orders over $100',
    warranty: '2-year extended warranty',
    productNotFound: 'Product not found',
    switchToLightMode: 'Switch to light mode',
    switchToDarkMode: 'Switch to dark mode',
    openCart: 'Open cart',
    closeCart: 'Close cart',
    increaseQuantity: 'Increase quantity',
    decreaseQuantity: 'Decrease quantity',
    removeProduct: 'Remove product',
  },
  pl: {
    storeName: 'TwójSklep',
    ourProducts: 'Nasze Produkty',
    discover: 'Odkryj naszą najnowszą kolekcję',
    addToCart: 'Dodaj do koszyka',
    yourCart: 'Twój Koszyk',
    emptyCart: 'Twój koszyk jest pusty',
    continueShopping: 'Kontynuuj Zakupy',
    subtotal: 'Suma',
    checkout: 'Kupuję',
    noProducts: 'Brak produktów w tej kategorii.',
    backToStore: 'Wróć do sklepu',
    backToProducts: 'Wróć do produktów',
    freeShipping: 'Darmowa dostawa dla zamówień powyżej 400 PLN',
    warranty: '2 lata rozszerzonej gwarancji',
    productNotFound: 'Nie znaleziono produktu',
    switchToLightMode: 'Przełącz na tryb jasny',
    switchToDarkMode: 'Przełącz na tryb ciemny',
    openCart: 'Otwórz koszyk',
    closeCart: 'Zamknij koszyk',
    increaseQuantity: 'Zwiększ ilość',
    decreaseQuantity: 'Zmniejsz ilość',
    removeProduct: 'Usuń produkt',
  }
};

const categoryTranslations = {
  en: {
    'All': 'All',
    'Electronics': 'Electronics',
    'Clothing': 'Clothing',
    'Accessories': 'Accessories'
  },
  pl: {
    'All': 'Wszystkie',
    'Electronics': 'Elektronika',
    'Clothing': 'Odzież',
    'Accessories': 'Akcesoria'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('pl');

  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['en']] || key;
  };

  const translateCategory = (category: string) => {
    return categoryTranslations[lang][category as keyof typeof categoryTranslations['en']] || category;
  };

  const formatPrice = (price: number) => {
    if (lang === 'pl') {
      return `${(price * 4).toFixed(2)} PLN`;
    }
    return `$${price.toFixed(2)}`;
  };

  const value = React.useMemo(() => ({
    lang, setLang, t, formatPrice, translateCategory
  }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
