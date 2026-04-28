import { useState } from "react";

const sampleOrders = [
  {
    id: "ORD-2025-001",
    date: "April 25, 2026",
    status: "Delivered",
    items: [
      { name: "Organic Apples", qty: 2, price: 108, image: "🍎" },
      { name: "Full Cream Milk", qty: 1, price: 65, image: "🥛" },
      { name: "Whole Wheat Bread", qty: 1, price: 45, image: "🍞" },
    ],
    total: 258,
    address: "12, Green Park Colony, Dehradun",
  },
  {
    id: "ORD-2025-002",
    date: "April 22, 2026",
    status: "Delivered",
    items: [
      { name: "Mixed Nuts", qty: 1, price: 200, image: "🥜" },
      { name: "Greek Yogurt", qty: 2, price: 120, image: "🫙" },
    ],
    total: 440,
    address: "12, Green Park Colony, Dehradun",
  },
];

const statusColor = { Delivered: "#22c55e", Processing: "#f59e0b", Cancelled: "#ef4444" };

export default function OrdersPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <main className="main-content">
      <section className="orders-section">
        <h2 className="section-title">📦 Your Orders</h2>

        {sampleOrders.length === 0 ? (
          <div className="no-results">
            <div>📦</div>
            <p>No orders yet</p>
            <span>Start shopping to see your orders here</span>
          </div>
        ) : (
          <div className="orders-list">
            {sampleOrders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header" onClick={() => setExpanded(expanded === order.id ? null : order.id)}>
                  <div className="order-meta">
                    <span className="order-id">{order.id}</span>
                    <span className="order-date">{order.date}</span>
                  </div>
                  <div className="order-right">
                    <span className="order-status" style={{ color: statusColor[order.status] }}>
                      ● {order.status}
                    </span>
                    <span className="order-total">₹{order.total}</span>
                    <span className="order-toggle">{expanded === order.id ? "▲" : "▼"}</span>
                  </div>
                </div>

                {expanded === order.id && (
                  <div className="order-details">
                    <div className="order-items">
                      {order.items.map((item, i) => (
                        <div key={i} className="order-item">
                          <span className="order-item-emoji">{item.image}</span>
                          <span className="order-item-name">{item.name}</span>
                          <span className="order-item-qty">×{item.qty}</span>
                          <span className="order-item-price">₹{item.price * item.qty}</span>
                        </div>
                      ))}
                    </div>
                    <div className="order-address">
                      <span>📍</span> {order.address}
                    </div>
                    {order.status === "Delivered" && (
                      <button className="reorder-btn">🔄 Reorder</button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
