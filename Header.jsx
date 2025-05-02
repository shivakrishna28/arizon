import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MiniCart from './MiniCart';

const Header = () => {
  const { cartItems } = useCart();
  const [showMiniCart, setShowMiniCart] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold">MyShop</Link>
        <div className="relative">
          <button onClick={() => setShowMiniCart(!showMiniCart)} className="relative">
            🛒
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              {cartItems.length}
            </span>
          </button>
          {showMiniCart && <MiniCart />}
        </div>
      </div>
    </header>
  );
};

export default Header;
