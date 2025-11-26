import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-deepRed via-deepRed-dark to-deepRed py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="inline-block bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-pulse">
            EXCLUSIVE OFFER
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-cream text-lg md:text-xl mb-2">
            Get 20% off on your first order!
          </p>
          <p className="text-cream/80">
            Plus exclusive deals, new menu items, and more delivered to your inbox
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm border-2 border-gold rounded-2xl p-8 animate-scale-in">
            <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">Welcome Aboard!</h3>
            <p className="text-cream mb-4">Check your email for your exclusive 20% discount code</p>
            <p className="text-sm text-gold font-semibold">Code: WELCOME20</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-gray-800 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
            <p className="text-cream/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">5K+</div>
            <div className="text-cream text-sm">Happy Subscribers</div>
          </div>
          <div className="text-center border-x border-cream/20">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">20%</div>
            <div className="text-cream text-sm">Welcome Discount</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">24/7</div>
            <div className="text-cream text-sm">Exclusive Deals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
