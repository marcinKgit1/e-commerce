import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { lang, t, formatPrice, translateCategory } = useLanguage();

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('productNotFound')}</h2>
        <button 
          onClick={() => navigate('/')}
          className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> {t('backToStore')}
        </button>
      </div>
    );
  }

  const name = lang === 'pl' ? product.namePl : product.name;
  const description = lang === 'pl' ? product.descriptionPl : product.description;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/" className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> {t('backToProducts')}
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-12">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900">
            <img 
              src={product.image} 
              alt={name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2 block">
                {translateCategory(product.category)}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {name}
              </h1>
              <p className="text-3xl font-light text-gray-900 dark:text-gray-100">
                {formatPrice(product.price)}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Truck className="w-5 h-5 text-green-500" />
                <span>{t('freeShipping')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span>{t('warranty')}</span>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product)}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors font-medium text-lg shadow-sm shadow-indigo-200 dark:shadow-none"
            >
              <ShoppingCart className="w-5 h-5" />
              {t('addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
