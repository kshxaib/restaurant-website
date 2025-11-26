import { useState } from 'react';
import { dishes, categories } from '../data/dishData';
import DishCard from '../components/DishCard';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    isVeg: null,
    spiceLevel: null,
    priceRange: null,
  });

  // Filter dishes based on selection
  const filteredDishes = dishes.filter(dish => {
    // Category filter
    if (selectedCategory !== 'all' && dish.category !== selectedCategory) {
      return false;
    }

    // Search filter
    if (searchQuery && !dish.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Veg/Non-veg filter
    if (selectedFilters.isVeg !== null && dish.isVeg !== selectedFilters.isVeg) {
      return false;
    }

    // Spice level filter
    if (selectedFilters.spiceLevel !== null && dish.spiceLevel > selectedFilters.spiceLevel) {
      return false;
    }

    // Price range filter
    if (selectedFilters.priceRange) {
      const [min, max] = selectedFilters.priceRange;
      if (dish.price < min || dish.price > max) {
        return false;
      }
    }

    return true;
  });

  const toggleFilter = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType] === value ? null : value,
    }));
  };

  return (
    <div className="min-h-screen bg-cream py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-deepRed mb-4">Our Menu</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our delicious collection of biryanis, pulaos, curries, and more
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-gold focus:outline-none focus:border-gold-dark shadow-lg"
            />
            <svg className="w-6 h-6 text-gold absolute right-6 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-gold to-gold-dark text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gold hover:text-white shadow'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <h3 className="font-playfair text-xl font-bold text-deepRed mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Type Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
              <div className="flex gap-3">
                <button
                  onClick={() => toggleFilter('isVeg', true)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedFilters.isVeg === true
                      ? 'bg-forestGreen text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-forestGreen hover:text-white'
                  }`}
                >
                  🌿 Veg
                </button>
                <button
                  onClick={() => toggleFilter('isVeg', false)}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedFilters.isVeg === false
                      ? 'bg-deepRed text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-deepRed hover:text-white'
                  }`}
                >
                  🍖 Non-Veg
                </button>
              </div>
            </div>

            {/* Spice Level Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Max Spice Level</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(level => (
                  <button
                    key={level}
                    onClick={() => toggleFilter('spiceLevel', level)}
                    className={`flex-1 px-3 py-2 rounded-lg font-semibold transition-all ${
                      selectedFilters.spiceLevel === level
                        ? 'bg-deepRed text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-deepRed-light hover:text-white'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => toggleFilter('priceRange', [0, 200])}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedFilters.priceRange?.[0] === 0 && selectedFilters.priceRange?.[1] === 200
                      ? 'bg-gold text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gold hover:text-white'
                  }`}
                >
                  Under ₹200
                </button>
                <button
                  onClick={() => toggleFilter('priceRange', [200, 300])}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedFilters.priceRange?.[0] === 200 && selectedFilters.priceRange?.[1] === 300
                      ? 'bg-gold text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gold hover:text-white'
                  }`}
                >
                  ₹200 - ₹300
                </button>
                <button
                  onClick={() => toggleFilter('priceRange', [300, 1000])}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedFilters.priceRange?.[0] === 300
                      ? 'bg-gold text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gold hover:text-white'
                  }`}
                >
                  Above ₹300
                </button>
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          {(selectedFilters.isVeg !== null || selectedFilters.spiceLevel !== null || selectedFilters.priceRange !== null) && (
            <button
              onClick={() => setSelectedFilters({ isVeg: null, spiceLevel: null, priceRange: null })}
              className="mt-4 text-deepRed font-semibold hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-bold text-deepRed">{filteredDishes.length}</span> dishes
          </p>
        </div>

        {/* Dishes Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
