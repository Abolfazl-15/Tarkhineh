import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from "react";
import { CartLine, FoodItem } from "../types";

type CartContextType = {
  lines: CartLine[];
  addToCart: (item: FoodItem) => void;
  removeFromCart: (id: string) => void;
  changeQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Initialize cart from localStorage or empty array
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return [];
    }
  });

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(lines));
  }, [lines]);

  const addToCart = (item: FoodItem) => {
    setLines((prev) => {
      const existingLineIndex = prev.findIndex((l) => l.item.id === item.id);

      if (existingLineIndex >= 0) {
        // Item exists in cart, increment quantity
        return prev.map((line, index) =>
          index === existingLineIndex ? { ...line, qty: line.qty + 1 } : line
        );
      }

      // Item not in cart, add new line
      return [...prev, { item, qty: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setLines((prev) => prev.filter((l) => l.item.id !== id));
  };

  const changeQty = (id: string, qty: number) => {
    setLines((prev) =>
      prev.map((l) =>
        l.item.id === id
          ? { ...l, qty: Math.max(1, qty) } // Ensure quantity is at least 1
          : l
      )
    );
  };

  const clearCart = () => {
    setLines([]);
  };

  // Calculate total price
  const total = useMemo(
    () =>
      lines.reduce((sum, l) => {
        const price = l.item.discountPrice ?? l.item.price;
        return sum + price * l.qty;
      }, 0),
    [lines]
  );

  // Calculate total number of items
  const totalItems = useMemo(
    () => lines.reduce((n, l) => n + l.qty, 0),
    [lines]
  );

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      lines,
      addToCart,
      removeFromCart,
      changeQty,
      clearCart,
      total,
      totalItems,
    }),
    [lines, total, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
