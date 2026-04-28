import { createContext, useContext, useReducer, useState, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(i => i.id === action.payload.id);
      if (existing) {
        return { ...state, items: state.items.map(i => i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i) };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case "UPDATE_QTY": {
      if (action.payload.qty === 0) {
        return { ...state, items: state.items.filter(i => i.id !== action.payload.id) };
      }
      return { ...state, items: state.items.map(i => i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i) };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [wishlist, setWishlist] = useState([]);
  const [activeUsers, setActiveUsers] = useState(Math.floor(Math.random() * 30) + 45);
  const [page, setPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Simulate live user count
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(30, Math.min(120, prev + delta));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
    showToast(`${product.name} added to cart! 🛒`);
  };

  const removeFromCart = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const getItemQty = (id) => {
    const item = state.items.find(i => i.id === id);
    return item ? item.qty : 0;
  };

  const cartTotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = state.items.reduce((sum, i) => sum + i.qty, 0);

  const placeOrder = () => {
    setOrderPlaced(true);
    clearCart();
    setCartOpen(false);
    showToast("Order placed successfully! 🎉", "success");
    setTimeout(() => setOrderPlaced(false), 4000);
  };

  return (
    <CartContext.Provider value={{
      items: state.items, wishlist, activeUsers, page, setPage,
      selectedCategory, setSelectedCategory, searchQuery, setSearchQuery,
      cartOpen, setCartOpen, toast, orderPlaced,
      addToCart, removeFromCart, updateQty, clearCart,
      toggleWishlist, getItemQty, cartTotal, cartCount, placeOrder, showToast
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
