export const categories = [
  { id: "all", name: "All", emoji: "🛒" },
  { id: "fruits", name: "Fruits", emoji: "🍎" },
  { id: "vegetables", name: "Vegetables", emoji: "🥦" },
  { id: "dairy", name: "Dairy", emoji: "🥛" },
  { id: "bakery", name: "Bakery", emoji: "🍞" },
  { id: "snacks", name: "Snacks", emoji: "🍿" },
  { id: "beverages", name: "Beverages", emoji: "🧃" },
  { id: "meat", name: "Meat", emoji: "🥩" },
];

export const products = [
  { id: 1, name: "Organic Apples", category: "fruits", price: 120, unit: "per kg", image: "🍎", badge: "Organic", rating: 4.8, reviews: 234, discount: 10 },
  { id: 2, name: "Bananas", category: "fruits", price: 40, unit: "per dozen", image: "🍌", badge: "Fresh", rating: 4.5, reviews: 189 },
  { id: 3, name: "Strawberries", category: "fruits", price: 180, unit: "250g pack", image: "🍓", badge: "Premium", rating: 4.9, reviews: 312 },
  { id: 4, name: "Mangoes", category: "fruits", price: 200, unit: "per kg", image: "🥭", badge: "Seasonal", rating: 4.7, reviews: 421 },
  { id: 5, name: "Grapes", category: "fruits", price: 90, unit: "per kg", image: "🍇", badge: null, rating: 4.3, reviews: 156 },
  { id: 6, name: "Oranges", category: "fruits", price: 80, unit: "per kg", image: "🍊", badge: "Fresh", rating: 4.6, reviews: 203 },
  
  { id: 7, name: "Broccoli", category: "vegetables", price: 60, unit: "per head", image: "🥦", badge: "Organic", rating: 4.4, reviews: 98 },
  { id: 8, name: "Carrots", category: "vegetables", price: 35, unit: "per kg", image: "🥕", badge: null, rating: 4.2, reviews: 145 },
  { id: 9, name: "Tomatoes", category: "vegetables", price: 50, unit: "per kg", image: "🍅", badge: "Fresh", rating: 4.5, reviews: 278, discount: 15 },
  { id: 10, name: "Spinach", category: "vegetables", price: 30, unit: "per bunch", image: "🥬", badge: "Organic", rating: 4.6, reviews: 167 },
  { id: 11, name: "Bell Peppers", category: "vegetables", price: 80, unit: "per kg", image: "🫑", badge: null, rating: 4.3, reviews: 89 },
  { id: 12, name: "Potatoes", category: "vegetables", price: 30, unit: "per kg", image: "🥔", badge: null, rating: 4.1, reviews: 312 },

  { id: 13, name: "Full Cream Milk", category: "dairy", price: 65, unit: "per litre", image: "🥛", badge: "Fresh", rating: 4.7, reviews: 445 },
  { id: 14, name: "Greek Yogurt", category: "dairy", price: 120, unit: "400g", image: "🫙", badge: "Premium", rating: 4.8, reviews: 234 },
  { id: 15, name: "Cheddar Cheese", category: "dairy", price: 280, unit: "200g block", image: "🧀", badge: null, rating: 4.6, reviews: 178 },
  { id: 16, name: "Butter", category: "dairy", price: 55, unit: "100g", image: "🧈", badge: "Amul", rating: 4.9, reviews: 567, discount: 5 },

  { id: 17, name: "Whole Wheat Bread", category: "bakery", price: 45, unit: "per loaf", image: "🍞", badge: "Fresh Baked", rating: 4.5, reviews: 234 },
  { id: 18, name: "Croissants", category: "bakery", price: 120, unit: "pack of 4", image: "🥐", badge: "Artisan", rating: 4.7, reviews: 145 },
  { id: 19, name: "Bagels", category: "bakery", price: 90, unit: "pack of 6", image: "🥯", badge: null, rating: 4.4, reviews: 89 },

  { id: 20, name: "Potato Chips", category: "snacks", price: 30, unit: "per pack", image: "🍿", badge: "Lays", rating: 4.3, reviews: 678 },
  { id: 21, name: "Mixed Nuts", category: "snacks", price: 250, unit: "250g", image: "🥜", badge: "Premium", rating: 4.7, reviews: 234, discount: 20 },
  { id: 22, name: "Dark Chocolate", category: "snacks", price: 180, unit: "100g bar", image: "🍫", badge: "70% Cocoa", rating: 4.8, reviews: 345 },

  { id: 23, name: "Orange Juice", category: "beverages", price: 95, unit: "1L carton", image: "🧃", badge: "No Sugar", rating: 4.6, reviews: 234 },
  { id: 24, name: "Green Tea", category: "beverages", price: 150, unit: "25 bags", image: "🍵", badge: "Organic", rating: 4.7, reviews: 189 },
  { id: 25, name: "Sparkling Water", category: "beverages", price: 60, unit: "500ml", image: "💧", badge: null, rating: 4.2, reviews: 123 },

  { id: 26, name: "Chicken Breast", category: "meat", price: 280, unit: "per kg", image: "🍗", badge: "Farm Fresh", rating: 4.6, reviews: 234 },
  { id: 27, name: "Salmon Fillet", category: "meat", price: 450, unit: "per kg", image: "🐟", badge: "Premium", rating: 4.8, reviews: 167, discount: 10 },
  { id: 28, name: "Eggs", category: "meat", price: 80, unit: "dozen", image: "🥚", badge: "Free Range", rating: 4.9, reviews: 567 },
];

export const offers = [
  { id: 1, title: "Fresh Fruits Festival", subtitle: "Up to 30% off on all seasonal fruits", color: "#ff6b35", bg: "#fff5f0", emoji: "🍎🍊🍋" },
  { id: 2, title: "Dairy Deals", subtitle: "Buy 2 get 1 free on all dairy products", color: "#4ecdc4", bg: "#f0fffe", emoji: "🥛🧀🥚" },
  { id: 3, title: "Organic Week", subtitle: "Extra 15% on all organic items", color: "#45b7d1", bg: "#f0faff", emoji: "🥦🥕🥬" },
];
