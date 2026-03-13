import React from 'react';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { categories, selectedCategory, setSelectedCategory, filteredProducts } = useProducts();
  const { t, translateCategory } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t('ourProducts')}</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{t('discover')}</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <Filter className="w-5 h-5 text-gray-400 dark:text-gray-500 mr-2 shrink-0" />
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 dark:bg-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {translateCategory(category)}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.map(product => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            key={product.id}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 dark:text-gray-400">{t('noProducts')}</p>
        </div>
      )}
    </div>
  );
};
