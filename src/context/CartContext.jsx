import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      toast.info(`${product.name} ya está en el carrito.`, { toastId: product.id });
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      toast.success(`${product.name} agregado al carrito.`, { toastId: product.id });
    }
  };

  const removeFromCart = (productId) => {
    const productToRemove = cart.find(item => item.id === productId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    if (productToRemove) {
      toast.error(`${productToRemove.name} eliminado del carrito.`);
    }
  };

  const clearCart = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.info("El carrito ha sido vaciado.");
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
