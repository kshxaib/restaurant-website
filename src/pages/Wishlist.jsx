import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import DishCard from '../components/DishCard';
import Button from '../components/Button';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (dish) => {
    addToCart(dish, 1);
  };

  const handleAddAllToCart = () => {
    wishlist.forEach(dish => {
      addToCart(dish, 1);
    });
    navigate('/cart');
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gold-light to-gold rounded-full flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="font-playfair text-4xl font-bold text-deepRed mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8">Save your favorite dishes here for easy access later!</p>
          <Button onClick={() => navigate('/menu')} variant="primary">
            Explore Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-playfair text-4xl font-bold text-deepRed mb-2">My Favorites</h1>
            <p className="text-gray-600">{wishlist.length} {wishlist.length === 1 ? 'dish' : 'dishes'} saved</p>
          </div>
          <Button onClick={handleAddAllToCart} variant="primary">
            Add All to Cart
          </Button>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((dish, index) => (
            <div key={dish.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
              <DishCard dish={dish} />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-r from-gold-light to-cream-dark rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-2xl font-bold text-deepRed mb-3">
            Ready to Order?
          </h3>
          <p className="text-gray-700 mb-6">
            Add your favorites to cart and get them delivered fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleAddAllToCart} variant="primary">
              Order All Favorites
            </Button>
            <Button onClick={() => navigate('/menu')} variant="outline">
              Browse More Dishes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
