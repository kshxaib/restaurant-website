import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { dishes } from '../data/dishData';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-deepRed mb-4">Dish not found</h2>
          <Button onClick={() => navigate('/menu')}>Back to Menu</Button>
        </div>
      </div>
    );
  }

  const images = [dish.image, dish.image, dish.image]; // Using same image for gallery

  const handleAddToCart = () => {
    addToCart(dish, quantity);
    navigate('/cart');
  };

  const handleBuyNow = () => {
    addToCart(dish, quantity);
    navigate('/checkout');
  };

  const renderSpiceLevel = () => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i < dish.spiceLevel ? 'bg-deepRed' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const sampleReviews = [
    { id: 1, name: "Amit S.", rating: 5, comment: "Absolutely delicious! The best biryani I've ever had.", date: "2 days ago" },
    { id: 2, name: "Priya K.", rating: 5, comment: "Perfect spice level and the portion is generous. Highly recommended!", date: "1 week ago" },
    { id: 3, name: "Rahul M.", rating: 4, comment: "Great taste! Delivery was quick and food was hot.", date: "2 weeks ago" },
  ];

  return (
    <div className="min-h-screen bg-cream py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/menu')}
          className="flex items-center space-x-2 text-deepRed hover:text-gold mb-6 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">Back to Menu</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-4">
              <img
                src={images[selectedImage]}
                alt={dish.name}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-4 transition-all ${
                    selectedImage === idx ? 'border-gold shadow-lg' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt={`${dish.name} ${idx + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-4">
              {dish.isVeg ? (
                <span className="badge-veg">🌿 Vegetarian</span>
              ) : (
                <span className="badge-nonveg">🍖 Non-Vegetarian</span>
              )}
              {dish.bestseller && (
                <span className="bg-gold text-white px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ Bestseller
                </span>
              )}
            </div>

            {/* Title and Rating */}
            <h1 className="font-playfair text-4xl font-bold text-deepRed mb-4">{dish.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gold fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xl font-bold">{dish.rating}</span>
              </div>
              <span className="text-gray-500">({dish.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-5xl font-bold text-deepRed">₹{dish.price}</span>
              <span className="text-gray-500 ml-2">{dish.portion}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{dish.description}</p>

            {/* Spice Level */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Spice Level</h3>
              <div className="flex items-center space-x-3">
                {renderSpiceLevel()}
                <span className="text-sm text-gray-500">({dish.spiceLevel}/5)</span>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-3">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {dish.ingredients.map((ingredient, idx) => (
                  <span key={idx} className="bg-white px-4 py-2 rounded-full text-sm shadow">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-700 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gold hover:text-white transition-colors font-bold text-xl"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gold hover:text-white transition-colors font-bold text-xl"
                >
                  +
                </button>
                <span className="text-gray-500 ml-4">Total: ₹{dish.price * quantity}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button onClick={handleAddToCart} variant="outline" className="flex-1">
                Add to Cart
              </Button>
              <Button onClick={handleBuyNow} variant="primary" className="flex-1">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-20">
          <h2 className="font-playfair text-3xl font-bold text-deepRed mb-8">Customer Reviews</h2>
          <div className="space-y-6">
            {sampleReviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
