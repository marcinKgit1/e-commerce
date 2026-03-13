/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ProductProvider>
          <CartProvider>
            <Router basename="/e-commerce/">
              <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
                <Navbar />
                <CartDrawer />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                  </Routes>
                </main>
              </div>
            </Router>
          </CartProvider>
        </ProductProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
