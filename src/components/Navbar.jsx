import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount, setCartOpen, cartOpen, activeUsers, searchQuery, setSearchQuery, setPage, page } = useCart();

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => setPage("home")}>
          <span className="logo-icon">🌿</span>
          <div className="logo-text">
            <span className="logo-main">FreshBasket</span>
            <span className="logo-sub">Grocery Delivery</span>
          </div>
        </div>

        <div className="nav-search">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search fresh groceries..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery("")}>✕</button>
          )}
        </div>

        <div className="nav-actions">
          <div className="live-users">
            <span className="live-dot"></span>
            <span>{activeUsers} shopping now</span>
          </div>
          <button className={`nav-btn ${page === "orders" ? "active" : ""}`} onClick={() => setPage("orders")}>
            📦 Orders
          </button>
          <button className="cart-btn" onClick={() => setCartOpen(!cartOpen)}>
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
