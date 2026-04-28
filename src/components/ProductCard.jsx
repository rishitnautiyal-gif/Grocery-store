import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, getItemQty, updateQty, toggleWishlist, wishlist } = useCart();
  const qty = getItemQty(product.id);
  const isWishlisted = wishlist.includes(product.id);
  const discountedPrice = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;

  return (
    <div className="product-card">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      {product.discount && <span className="discount-tag">-{product.discount}%</span>}
      
      <button
        className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
        onClick={() => toggleWishlist(product.id)}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>

      <div className="product-emoji">{product.image}</div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-unit">{product.unit}</p>

        <div className="product-rating">
          <span className="stars">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</span>
          <span className="rating-num">{product.rating}</span>
          <span className="reviews">({product.reviews})</span>
        </div>

        <div className="product-bottom">
          <div className="price-block">
            <span className="price">₹{discountedPrice}</span>
            {product.discount && <span className="old-price">₹{product.price}</span>}
          </div>

          {qty === 0 ? (
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add +
            </button>
          ) : (
            <div className="qty-control">
              <button onClick={() => updateQty(product.id, qty - 1)}>−</button>
              <span>{qty}</span>
              <button onClick={() => updateQty(product.id, qty + 1)}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
