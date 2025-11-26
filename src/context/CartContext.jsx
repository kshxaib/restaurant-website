import { createContext, useContext, useState, useEffect } from 'react';
import { promoCodes } from '../data/dishData';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [promoCode, setPromoCode] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (dish, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === dish.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...dish, quantity }];
    });
  };

  const removeFromCart = (dishId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== dishId));
  };

  const updateQuantity = (dishId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === dishId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setPromoCode(null);
  };

  const applyPromoCode = (code) => {
    const promo = promoCodes.find(p => p.code.toUpperCase() === code.toUpperCase());
    if (promo && getSubtotal() >= promo.minOrder) {
      setPromoCode(promo);
      return { success: true, message: `Promo code applied! You saved ₹${getDiscount(promo)}` };
    } else if (promo) {
      return { success: false, message: `Minimum order of ₹${promo.minOrder} required` };
    }
    return { success: false, message: 'Invalid promo code' };
  };

  const removePromoCode = () => {
    setPromoCode(null);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDiscount = (promo = promoCode) => {
    if (!promo) return 0;
    if (promo.type === 'percentage') {
      return Math.floor((getSubtotal() * promo.discount) / 100);
    }
    return promo.discount;
  };

  const getTotal = () => {
    return Math.max(0, getSubtotal() - getDiscount());
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyPromoCode,
    removePromoCode,
    promoCode,
    getSubtotal,
    getDiscount,
    getTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
