// Mock data for dishes
export const dishes = [
    {
        id: 1,
        name: "Chicken Dum Biryani",
        category: "Biryani",
        description: "Aromatic basmati rice layered with succulent chicken pieces, slow-cooked in a sealed pot with fragrant spices and saffron",
        price: 299,
        image: "/images/hero-biryani.png",
        isVeg: false,
        spiceLevel: 3,
        ingredients: ["Basmati Rice", "Chicken", "Saffron", "Yogurt", "Fried Onions", "Mint", "Biryani Masala"],
        portion: "Serves 1-2",
        rating: 4.8,
        reviews: 245,
        bestseller: true,
        featured: true
    },
    {
        id: 2,
        name: "Mutton Biryani",
        category: "Biryani",
        description: "Premium mutton pieces marinated in aromatic spices, layered with fragrant rice and slow-cooked to perfection",
        price: 349,
        image: "/images/mutton-biryani.png",
        isVeg: false,
        spiceLevel: 3,
        ingredients: ["Basmati Rice", "Mutton", "Saffron", "Yogurt", "Fried Onions", "Mint", "Whole Spices"],
        portion: "Serves 1-2",
        rating: 4.9,
        reviews: 189,
        bestseller: true,
        featured: false
    },
    {
        id: 3,
        name: "Hyderabadi Dum Biryani",
        category: "Biryani",
        description: "Authentic Hyderabadi-style biryani with tender meat and perfectly cooked rice infused with saffron and aromatic spices",
        price: 329,
        image: "/images/hyderabadi-biryani.png",
        isVeg: false,
        spiceLevel: 4,
        ingredients: ["Basmati Rice", "Chicken/Mutton", "Saffron", "Yogurt", "Fried Onions", "Mint", "Hyderabadi Masala"],
        portion: "Serves 1-2",
        rating: 4.9,
        reviews: 312,
        bestseller: true,
        featured: true
    },
    {
        id: 4,
        name: "Vegetable Pulao",
        category: "Pulao",
        description: "Fragrant basmati rice cooked with seasonal vegetables, whole spices, and garnished with cashews and raisins",
        price: 189,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=600&fit=crop",
        isVeg: true,
        spiceLevel: 1,
        ingredients: ["Basmati Rice", "Mixed Vegetables", "Cashews", "Raisins", "Whole Spices", "Ghee"],
        portion: "Serves 1-2",
        rating: 4.6,
        reviews: 156,
        bestseller: false,
        featured: false
    },
    {
        id: 5,
        name: "Chicken Curry",
        category: "Curries",
        description: "Rich and flavorful chicken curry with tender pieces in a thick, aromatic gravy",
        price: 249,
        image: "/images/chicken-curry.png",
        isVeg: false,
        spiceLevel: 3,
        ingredients: ["Chicken", "Onions", "Tomatoes", "Ginger-Garlic", "Curry Spices", "Cream"],
        portion: "Serves 2-3",
        rating: 4.7,
        reviews: 198,
        bestseller: true,
        featured: false
    },
    {
        id: 6,
        name: "Chicken 65",
        category: "Starters",
        description: "Spicy deep-fried chicken appetizer with a crispy coating and aromatic curry leaves",
        price: 199,
        image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&h=600&fit=crop",
        isVeg: false,
        spiceLevel: 4,
        ingredients: ["Chicken", "Red Chili", "Curry Leaves", "Ginger-Garlic", "Lemon", "Special Spices"],
        portion: "Serves 2-3",
        rating: 4.8,
        reviews: 267,
        bestseller: true,
        featured: true
    },
    {
        id: 7,
        name: "Paneer Tikka",
        category: "Starters",
        description: "Grilled cottage cheese cubes marinated in tandoori spices with bell peppers and onions",
        price: 219,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop",
        isVeg: true,
        spiceLevel: 2,
        ingredients: ["Paneer", "Bell Peppers", "Onions", "Tandoori Masala", "Yogurt", "Mint Chutney"],
        portion: "Serves 2",
        rating: 4.7,
        reviews: 143,
        bestseller: false,
        featured: false
    },
    {
        id: 8,
        name: "Egg Biryani",
        category: "Biryani",
        description: "Flavorful biryani with boiled eggs layered with aromatic rice and traditional spices",
        price: 229,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop",
        isVeg: false,
        spiceLevel: 2,
        ingredients: ["Basmati Rice", "Eggs", "Saffron", "Yogurt", "Fried Onions", "Mint", "Biryani Masala"],
        portion: "Serves 1",
        rating: 4.5,
        reviews: 89,
        bestseller: false,
        featured: false
    },
    {
        id: 9,
        name: "Dal Tadka",
        category: "Sides",
        description: "Yellow lentils tempered with aromatic spices and garnished with fresh coriander",
        price: 149,
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=800&h=600&fit=crop",
        isVeg: true,
        spiceLevel: 1,
        ingredients: ["Toor Dal", "Cumin", "Garlic", "Tomatoes", "Green Chili", "Ghee"],
        portion: "Serves 2-3",
        rating: 4.6,
        reviews: 112,
        bestseller: false,
        featured: false
    },
    {
        id: 10,
        name: "Raita",
        category: "Sides",
        description: "Cooling yogurt-based side dish with cucumbers, tomatoes, and aromatic spices",
        price: 79,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop",
        isVeg: true,
        spiceLevel: 0,
        ingredients: ["Yogurt", "Cucumber", "Tomatoes", "Onions", "Mint", "Cumin Powder"],
        portion: "Serves 2",
        rating: 4.4,
        reviews: 67,
        bestseller: false,
        featured: false
    }
];

// Categories
export const categories = [
    { id: "all", name: "All Dishes", count: dishes.length },
    { id: "Biryani", name: "Biryani", count: dishes.filter(d => d.category === "Biryani").length },
    { id: "Pulao", name: "Pulao", count: dishes.filter(d => d.category === "Pulao").length },
    { id: "Starters", name: "Starters", count: dishes.filter(d => d.category === "Starters").length },
    { id: "Curries", name: "Curries", count: dishes.filter(d => d.category === "Curries").length },
    { id: "Sides", name: "Sides", count: dishes.filter(d => d.category === "Sides").length },
];

// Testimonials
export const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        image: "https://i.pravatar.cc/150?img=47",
        rating: 5,
        text: "The best biryani I've ever had! The flavors are authentic and the portion sizes are generous. Their Chicken Dum Biryani is absolutely divine!",
        location: "Mumbai"
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        image: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        text: "Amazing food and quick delivery! The Mutton Biryani was cooked to perfection. I'm a regular customer now and always recommend this place to my friends.",
        location: "Bangalore"
    },
    {
        id: 3,
        name: "Anjali & Vikram",
        image: "https://i.pravatar.cc/150?img=32",
        rating: 5,
        text: "Our go-to place for special occasions! The quality is consistent and the taste is outstanding. The Chicken 65 is incredibly flavorful!",
        location: "Hyderabad"
    }
];

// Promo codes
export const promoCodes = [
    { code: "FIRST20", discount: 20, type: "percentage", minOrder: 299 },
    { code: "BIRYANI50", discount: 50, type: "fixed", minOrder: 499 },
    { code: "WELCOME100", discount: 100, type: "fixed", minOrder: 799 },
];
