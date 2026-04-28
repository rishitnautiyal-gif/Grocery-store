# 🌿 FreshBasket — Grocery Delivery App

A React-based grocery delivery web app with cart management, real-time active user count, manager approval system for orders, and a clean modern UI — designed to demonstrate real-world application flow.

---

## 🚀 Features

- **Product Catalog** — 28+ products across 7 categories (Fruits, Vegetables, Dairy, Bakery, Snacks, Beverages, Meat)
- **Smart Search** — Live search with instant filtering across all products
- **Category Filters** — Filter by category with smooth UI feedback
- **Cart Management** — Add, remove, update quantities with persistent state
- **Discount System** — Products display original price, discount %, and discounted price
- **Wishlist** — Save favourite items with heart toggle
- **Live User Counter** — Real-time simulation of active users browsing the app *(Extra Feature)*
- **Order Placement** — Checkout with GST calculation and free delivery threshold
- **Order History** — View past orders with expandable details and reorder button
- **Offer Carousel** — Auto-rotating hero banners with promotional deals
- **Toast Notifications** — Feedback on cart actions and order placement
- **Responsive Design** — Works on mobile, tablet, and desktop

---

## 🗂️ Project Structure

```
grocery-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation with search & cart
│   │   ├── HeroBanner.jsx      # Hero section + offers carousel
│   │   ├── CategoryFilter.jsx  # Category tabs
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── CartSidebar.jsx     # Slide-in cart panel
│   │   └── Toast.jsx           # Toast notification
│   ├── context/
│   │   └── CartContext.jsx     # Global state (cart, wishlist, users)
│   ├── data/
│   │   └── products.js         # All product and category data
│   ├── pages/
│   │   ├── HomePage.jsx        # Main shopping page
│   │   └── OrdersPage.jsx      # Order history page
│   ├── style/
│   │   └── global.css          # All global styles
│   ├── App.jsx                 # Root component
│   └── main.jsx                # Entry point
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Context API + useReducer | State management |
| CSS Variables | Theming |
| Google Fonts (Fraunces + DM Sans) | Typography |

---

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/YourUsername/Grocery-Store.git

# Navigate into the project
cd Grocery-Store

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔁 GitHub Pipeline

This project uses Git for version control. Here's the workflow:

```bash
# Stage changes
git add .

# Commit with a meaningful message
git commit -m "feat: add category filter component"

# Push to GitHub
git push origin main
```

---

## 💡 What Makes This App Different?

| Feature | FreshBasket | Typical Demo Apps |
|--------|-------------|-------------------|
| Live active user count | ✅ Realtime simulation | ❌ |
| Discount + original price display | ✅ | ❌ |
| GST + free delivery logic | ✅ | ❌ |
| Animated offer carousel | ✅ | ❌ |
| Wishlist system | ✅ | ❌ |
| Order history with expand | ✅ | ❌ |
| Fraunces serif typography | ✅ | ❌ |
| Toast notification system | ✅ | ❌ |
| Mobile responsive | ✅ | Sometimes |

---

## 📸 Pages

- **Home** — Hero banner, category filters, deals section, full product grid
- **Orders** — Past order history with expandable items and reorder option

---

## 👨‍💻 Author

Built by **NormieCodes** as a frontend project demonstrating real-world React application architecture.

---

## 📄 License

MIT License
