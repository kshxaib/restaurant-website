import { useNavigate } from 'react-router-dom';
import { dishes, testimonials } from '../data/dishData';
import DishCard from '../components/DishCard';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();

  const exclusiveCollection = dishes.filter(dish => dish.featured);
  const bestSellers = dishes.filter(dish => dish.bestseller).slice(0, 4);
  const allTimeFavorites = [dishes[0], dishes[1], dishes[5]]; // Sample favorites

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-deepRed via-deepRed-light to-gold overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-biryani.png"
            alt="Premium Biryani Collection"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-shadow">
              Authentic Indian<br />
              <span className="text-gold">Biryani & Rice Dishes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream">
              Experience the rich flavors of traditional biryani, pulao, and curries delivered fresh to your doorstep
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => navigate('/menu')} variant="primary">
                Order Now
              </Button>
              <Button onClick={() => navigate('/menu')} variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-deepRed">
                View Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFF8E7"/>
          </svg>
        </div>
      </section>

      {/* Exclusive Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="section-heading">Exclusive Collection</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our signature dishes crafted with authentic spices and traditional cooking methods
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exclusiveCollection.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream to-cream-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">Best Sellers</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our most popular dishes loved by thousands of customers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* All-Time Favourites */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="section-heading">All-Time Favourites</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Customer favorites that keep them coming back for more
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allTimeFavorites.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gold-light to-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Real reviews from real food lovers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-deepRed to-deepRed-light">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Authentic Flavors?
          </h2>
          <p className="text-xl mb-8 text-cream">
            Order now and get your favorite biryani delivered hot and fresh to your doorstep
          </p>
          <Button 
            onClick={() => navigate('/menu')} 
            variant="primary"
            className="!bg-white !text-deepRed hover:!bg-cream"
          >
            Start Ordering
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
