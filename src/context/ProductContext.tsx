import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';
import { products as initialProducts, categories } from '../data/products';

interface ProductContextType {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filteredProducts: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products] = useState<Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = React.useMemo(() => 
    selectedCategory === 'All' 
      ? products 
      : products.filter(p => p.category === selectedCategory),
    [products, selectedCategory]
  );

  const value = React.useMemo(() => ({
    products,
    categories,
    selectedCategory,
    setSelectedCategory,
    filteredProducts
  }), [products, selectedCategory, filteredProducts]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within a ProductProvider');
  return context;
};
