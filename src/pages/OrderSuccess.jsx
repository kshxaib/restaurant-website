import { useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();

  const orderData = location.state?.orderData;
  const total = location.state?.total;
  
  // Generate order number only once using useMemo
  const orderNumber = useMemo(() => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substr(2, 5).toUpperCase();
    return `ORD${timestamp}${random}`;
  }, []); // Empty dependency array ensures this runs only once
  
  const estimatedDelivery = useMemo(() => {
    return new Date(Date.now() + 45 * 60000).toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }, []);

  useEffect(() => {
    // Clear cart after successful order
    clearCart();
  }, [clearCart]);

  if (!orderData) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-gold-light py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-scale-in">
          <h1 className="font-playfair text-5xl font-bold text-deepRed mb-4">Order Confirmed!</h1>
          <p className="text-2xl text-gray-700 mb-2">Your biryani is on the way! 🍛</p>
          <p className="text-gray-600">Thank you for ordering from Restaurant's name</p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6 animate-slide-up">
          {/* Order Number */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-600">Order Number</p>
                <p className="text-2xl font-bold text-deepRed">{orderNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="text-xl font-bold text-forestGreen">{estimatedDelivery}</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-500 rounded-lg p-4">
              <p className="text-green-700 font-semibold text-center">
                ⏱️ Your order will be delivered in approximately 45 minutes
              </p>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="mb-6">
            <h3 className="font-playfair text-xl font-bold text-deepRed mb-4">Delivery Address</h3>
            <div className="bg-cream rounded-lg p-4">
              <p className="font-semibold text-lg">{orderData.name}</p>
              <p className="text-gray-700">{orderData.address}</p>
              <p className="text-gray-700">{orderData.city}, {orderData.zipCode}</p>
              <div className="mt-3 space-y-1">
                <p className="text-gray-600">📧 {orderData.email}</p>
                <p className="text-gray-600">📞 {orderData.phone}</p>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mb-6">
            <h3 className="font-playfair text-xl font-bold text-deepRed mb-4">Payment Details</h3>
            <div className="flex justify-between items-center bg-cream rounded-lg p-4">
              <div>
                <p className="text-sm text-gray-600">Payment Method</p>
                <p className="font-semibold text-lg">
                  {orderData.paymentMethod === 'cod' ? '💵 Cash on Delivery' : '💳 Online Payment'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-3xl font-bold text-deepRed">₹{total}</p>
              </div>
            </div>
          </div>

          {/* Order Status Timeline */}
          <div className="mb-6">
            <h3 className="font-playfair text-xl font-bold text-deepRed mb-4">Order Status</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Order Confirmed</p>
                  <p className="text-sm text-gray-600">Your order has been received</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Preparing Your Order</p>
                  <p className="text-sm text-gray-600">Our chefs are cooking your delicious meal</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-500">Out for Delivery</p>
                  <p className="text-sm text-gray-400">On the way to you</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="flex-1"
          >
            Return to Home
          </Button>
          <Button
            onClick={() => navigate('/menu')}
            variant="primary"
            className="flex-1"
          >
            Order Again
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need help? Contact us at{' '}
            <a href="tel:1800123456" className="text-gold font-semibold hover:underline">
              1800-123-456
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
