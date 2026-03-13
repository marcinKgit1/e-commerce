import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice } = useCart();
  const { lang, t, formatPrice, translateCategory } = useLanguage();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl z-50 flex flex-col transition-colors duration-300"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                {t('yourCart')}
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                aria-label={t('closeCart')}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 space-y-4">
                  <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600" />
                  <p className="text-lg">{t('emptyCart')}</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                  >
                    {t('continueShopping')}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => {
                    const name = lang === 'pl' ? item.namePl : item.name;
                    return (
                      <div key={item.id} className="flex gap-4">
                        <img 
                          src={item.image} 
                          alt={name} 
                          className="w-20 h-20 object-cover rounded-xl bg-gray-100 dark:bg-gray-800"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-gray-900 dark:text-white line-clamp-1">{name}</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{translateCategory(item.category)}</p>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              aria-label={t('removeProduct')}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                aria-label={t('decreaseQuantity')}
                                className="p-1 hover:bg-white dark:hover:bg-gray-700 dark:text-white rounded-md transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium w-4 text-center dark:text-white">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                aria-label={t('increaseQuantity')}
                                className="p-1 hover:bg-white dark:hover:bg-gray-700 dark:text-white rounded-md transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 dark:text-gray-300">{t('subtotal')}</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{formatPrice(totalPrice)}</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200 dark:shadow-none">
                  {t('checkout')}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
