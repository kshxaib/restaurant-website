import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, applyPromoCode, removePromoCode, promoCode, getSubtotal, getDiscount, getTotal } = useCart();
  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState('');

  const handleApplyPromo = () => {
    const result = applyPromoCode(promoInput);
    setPromoMessage(result.message);
    if (result.success) {
      setPromoInput('');
      setTimeout(() => setPromoMessage(''), 3000);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center">
          <svg className="w-32 h-32 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="font-playfair text-4xl font-bold text-deepRed mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any delicious dishes yet!</p>
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
        <h1 className="font-playfair text-4xl font-bold text-deepRed mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200 last:border-0">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                    onClick={() => navigate(`/item/${item.id}`)}
                  />

                  {/* Details */}
                  <div className="flex-1">
                    <h3
                      className="font-playfair text-xl font-bold text-deepRed mb-2 cursor-pointer hover:text-gold transition"
                      onClick={() => navigate(`/item/${item.id}`)}
                    >
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{item.portion}</p>
                    <div className="flex items-center space-x-2 mb-3">
                      {item.isVeg ? (
                        <span className="badge-veg text-xs">🌿 Veg</span>
                      ) : (
                        <span className="badge-nonveg text-xs">🍖 Non-Veg</span>
                      )}
                    </div>
                    <p className="text-2xl font-bold text-deepRed">₹{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-deepRed hover:text-red-700 transition"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>

                    <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-white hover:bg-gold hover:text-white transition font-bold"
                      >
                        -
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white hover:bg-gold hover:text-white transition font-bold"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-lg font-bold">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="font-playfair text-2xl font-bold text-deepRed mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Promo Code</label>
                {promoCode ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-500 rounded-lg p-3">
                    <div>
                      <p className="font-bold text-green-700">{promoCode.code}</p>
                      <p className="text-sm text-green-600">-₹{getDiscount()} discount applied</p>
                    </div>
                    <button
                      onClick={removePromoCode}
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                      placeholder="Enter code"
                      className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-lg font-semibold transition whitespace-nowrap"
                    >
                      Apply
                    </button>
                  </div>
                )}
                {promoMessage && (
                  <p className={`text-sm mt-2 ${promoMessage.includes('applied') ? 'text-green-600' : 'text-red-600'}`}>
                    {promoMessage}
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{getSubtotal()}</span>
                </div>
                {getDiscount() > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-semibold">-₹{getDiscount()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-2xl text-deepRed">₹{getTotal()}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={() => navigate('/checkout')}
                variant="primary"
                className="w-full"
              >
                Proceed to Checkout
              </Button>

              {/* Continue Shopping */}
              <button
                onClick={() => navigate('/menu')}
                className="w-full mt-4 text-gold hover:text-gold-dark font-semibold transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
