import React from 'react';
import { ShoppingBag, Store, Sun, Moon, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-40 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
            <Store className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span>{t('storeName')}</span>
          </Link>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}
              aria-label={lang === 'pl' ? 'Switch to English' : 'Zmień na polski'}
              className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>

            <button
              onClick={toggleTheme}
              aria-label={isDark ? t('switchToLightMode') || 'Switch to Light Mode' : t('switchToDarkMode') || 'Switch to Dark Mode'}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              aria-label={t('openCart') || 'Open cart'}
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-indigo-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
