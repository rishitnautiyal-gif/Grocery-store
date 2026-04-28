import { categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function CategoryFilter() {
  const { selectedCategory, setSelectedCategory } = useCart();

  return (
    <div className="category-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="category-list">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-btn ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            <span className="cat-emoji">{cat.emoji}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
