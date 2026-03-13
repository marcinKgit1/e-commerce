import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const { lang, t, formatPrice, translateCategory } = useLanguage();

  const name = lang === 'pl' ? product.namePl : product.name;
  const description = lang === 'pl' ? product.descriptionPl : product.description;

  return (
    <div className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img 
          src={product.image} 
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{translateCategory(product.category)}</p>
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                {name}
              </h3>
            </Link>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">{formatPrice(product.price)}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 flex-grow">
          {description}
        </p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-indigo-600 text-white py-2.5 rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors font-medium"
        >
          <ShoppingCart className="w-4 h-4" />
          {t('addToCart')}
        </button>
      </div>
    </div>
  );
};
