import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FoodItem } from "../types";

type FavoritesContextType = {
  favorites: Record<string, FoodItem>; // by id
  toggleFavorite: (item: FoodItem) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Record<string, FoodItem>>(() => {
    const raw = localStorage.getItem("favorites");
    return raw ? JSON.parse(raw) : {};
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (item: FoodItem) => {
    setFavorites((prev) => {
      const copy = { ...prev };
      if (copy[item.id]) delete copy[item.id];
      else copy[item.id] = item;
      return copy;
    });
  };

  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite: (id: string) => !!favorites[id],
      clearFavorites: () => setFavorites({}),
    }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};
