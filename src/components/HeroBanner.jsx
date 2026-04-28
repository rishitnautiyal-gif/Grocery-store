import { useState, useEffect } from "react";
import { offers } from "../data/products";
import { useCart } from "../context/CartContext";

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const { activeUsers } = useCart();

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % offers.length), 3500);
    return () => clearInterval(t);
  }, []);

  const offer = offers[active];

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-tag">
          <span className="live-dot"></span> {activeUsers} people shopping right now
        </div>
        <h1 className="hero-title">
          Fresh Groceries<br />
          <span className="hero-accent">Delivered in 30 Min</span>
        </h1>
        <p className="hero-desc">
          Farm-fresh produce, quality dairy, artisan bakery items — 
          delivered straight to your doorstep.
        </p>
        <div className="hero-features">
          <div className="feature-pill">⚡ 30-min delivery</div>
          <div className="feature-pill">🌿 100% Fresh</div>
          <div className="feature-pill">🚚 Free above ₹500</div>
          <div className="feature-pill">↩️ Easy returns</div>
        </div>
      </div>

      <div className="hero-right">
        <div className="offer-card" style={{ background: offer.bg, borderColor: offer.color }}>
          <div className="offer-emoji">{offer.emoji}</div>
          <h3 style={{ color: offer.color }}>{offer.title}</h3>
          <p>{offer.subtitle}</p>
          <div className="offer-dots">
            {offers.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === active ? "active" : ""}`}
                style={{ background: i === active ? offer.color : "#ddd" }}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <span className="stat-num">2000+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">50k+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">4.9⭐</span>
            <span className="stat-label">App Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
