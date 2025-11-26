import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (dish) => {
    setWishlist(prev => {
      // Check if already in wishlist
      if (prev.find(item => item.id === dish.id)) {
        return prev;
      }
      return [...prev, dish];
    });
  };

  const removeFromWishlist = (dishId) => {
    setWishlist(prev => prev.filter(item => item.id !== dishId));
  };

  const isInWishlist = (dishId) => {
    return wishlist.some(item => item.id === dishId);
  };

  const toggleWishlist = (dish) => {
    if (isInWishlist(dish.id)) {
      removeFromWishlist(dish.id);
    } else {
      addToWishlist(dish);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
