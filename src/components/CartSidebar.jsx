import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const { items, cartOpen, setCartOpen, cartTotal, updateQty, removeFromCart, placeOrder } = useCart();
  const delivery = cartTotal > 500 ? 0 : 40;
  const gst = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + delivery + gst;

  return (
    <>
      <div className={`cart-overlay ${cartOpen ? "open" : ""}`} onClick={() => setCartOpen(false)} />
      <aside className={`cart-sidebar ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>🛒 Your Cart</h2>
          <button className="cart-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-emoji">🛍️</div>
            <p>Your cart is empty</p>
            <span>Add some fresh groceries!</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className="cart-item">
                  <span className="cart-item-emoji">{item.image}</span>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">₹{item.price} × {item.qty}</p>
                  </div>
                  <div className="cart-item-qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <span className="cart-item-total">₹{item.price * item.qty}</span>
                  <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              {delivery === 0 && (
                <div className="free-delivery-tag">🎉 Free delivery applied!</div>
              )}
              {delivery > 0 && (
                <div className="delivery-hint">Add ₹{500 - cartTotal} more for free delivery</div>
              )}
              <div className="summary-row">
                <span>Subtotal</span><span>₹{cartTotal}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span className={delivery === 0 ? "free" : ""}>
                  {delivery === 0 ? "FREE" : `₹${delivery}`}
                </span>
              </div>
              <div className="summary-row">
                <span>GST (5%)</span><span>₹{gst}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span><span>₹{grandTotal}</span>
              </div>
              <button className="checkout-btn" onClick={placeOrder}>
                Place Order · ₹{grandTotal}
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
