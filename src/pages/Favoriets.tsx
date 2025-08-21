import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import FoodCard from "../commponents/FoodCart";

export default function Favorites() {
  const { favorites, clearFavorites } = useFavorites();
  const list = Object.values(favorites);

  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">علاقه‌مندی‌ها</h2>
        {list.length > 0 && (
          <button
            onClick={clearFavorites}
            className="text-sm border px-3 py-1.5 rounded-lg"
          >
            پاک کردن همه
          </button>
        )}
      </div>
      {list.length === 0 ? (
        <p className="text-zinc-500">
          هنوز چیزی به علاقه‌مندی‌ها اضافه نکرده‌اید.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
