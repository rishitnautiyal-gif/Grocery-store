import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";
import "./style/global.css";

function AppContent() {
  const { page, orderPlaced } = useCart();

  return (
    <div className="app">
      <Navbar />
      <CartSidebar />
      <Toast />

      {orderPlaced && (
        <div className="order-success-banner">
          🎉 Your order has been placed! Delivery in 30 minutes.
        </div>
      )}

      {page === "home" && <HomePage />}
      {page === "orders" && <OrdersPage />}

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">🌿 FreshBasket</span>
            <p>Fresh groceries delivered in 30 minutes.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">Returns</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 FreshBasket. All rights reserved. Made with 💚</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
