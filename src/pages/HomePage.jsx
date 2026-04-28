import { useMemo } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import HeroBanner from "../components/HeroBanner";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { selectedCategory, searchQuery } = useCart();

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = selectedCategory === "all" || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const topDeals = useMemo(() => products.filter(p => p.discount), []);

  return (
    <main className="main-content">
      {!searchQuery && <HeroBanner />}

      <CategoryFilter />

      {!searchQuery && selectedCategory === "all" && (
        <section className="products-section">
          <div className="section-header">
            <h2 className="section-title">🔥 Top Deals</h2>
            <span className="section-sub">Limited time offers</span>
          </div>
          <div className="product-grid">
            {topDeals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}

      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">
            {searchQuery ? `Results for "${searchQuery}"` : selectedCategory === "all" ? "🛒 All Products" : `Products`}
          </h2>
          <span className="section-sub">{filtered.length} items</span>
        </div>
        {filtered.length === 0 ? (
          <div className="no-results">
            <div>🔍</div>
            <p>No products found</p>
            <span>Try a different search or category</span>
          </div>
        ) : (
          <div className="product-grid">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </main>
  );
}
