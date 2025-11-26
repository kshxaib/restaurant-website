import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const DishCard = ({ dish, showQuickAdd = true }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(dish.id);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(dish);
  };

  const handleCardClick = () => {
    navigate(`/item/${dish.id}`);
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    toggleWishlist(dish);
  };

  const renderSpiceLevel = () => {
    return (
      <div className="spice-indicator">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`spice-dot ${
              i < dish.spiceLevel ? 'bg-deepRed' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer group relative transition-all duration-300 hover:shadow-2xl"
    >
      {/* Wishlist Heart Button */}
      <button
        onClick={handleToggleWishlist}
        className={`absolute top-3 right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isFavorite
            ? 'bg-deepRed text-white scale-110'
            : 'bg-white/90 backdrop-blur-sm text-gray-400 hover:text-deepRed hover:scale-110'
        } shadow-lg hover:shadow-xl`}
        aria-label={isFavorite ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        <svg
          className={`w-6 h-6 transition-transform ${
            isFavorite ? 'scale-110' : ''
          }`}
          fill={isFavorite ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {dish.bestseller && (
          <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
            ⭐ Bestseller
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          {dish.isVeg ? (
            <span className="badge-veg">🌿 Veg</span>
          ) : (
            <span className="badge-nonveg">🍖 Non-Veg</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-playfair text-xl font-bold text-deepRed group-hover:text-gold transition-colors line-clamp-1">
            {dish.name}
          </h3>
          <div className="flex items-center space-x-1 text-sm">
            <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="font-semibold">{dish.rating}</span>
            <span className="text-gray-500">({dish.reviews})</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{dish.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs text-gray-500 mb-1">Spice Level</p>
            {renderSpiceLevel()}
          </div>
          <p className="text-sm text-gray-500">{dish.portion}</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div>
            <span className="text-2xl font-bold text-deepRed">₹{dish.price}</span>
          </div>
          {showQuickAdd && (
            <button
              onClick={handleAddToCart}
              className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
