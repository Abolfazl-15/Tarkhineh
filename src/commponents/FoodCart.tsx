import React from "react";
import { FoodItem } from "../types";
import RatingStars from "./RatingStar";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Heart } from "lucide-react";

type Props = { item: FoodItem };

export default function FoodCard({ item }: Props) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const price = item.discountPrice ?? item.price;
  const hasDiscount = !!item.discountPrice;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(item);
  };

  return (
    <div
      className="bg-white border border-gray-300 cursor-pointer rounded-lg shadow hover:shadow-md transition p-2 flex flex-row gap-2 w-full max-w-xs sm:max-w-none"
      dir="rtl"
    >
      {/* تصویر غذا */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
        {item.badge && (
          <span className="absolute top-0.5 right-0.5 bg-green-600 text-white text-[9px] px-1 py-0.5 rounded">
            {item.badge}
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-0.5 left-0.5 bg-red-600 text-white text-[9px] px-1 py-0.5 rounded">
            {item.offer} تخفیف
          </span>
        )}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>

      {/* متن و دکمه‌ها */}
      <div className="flex flex-col justify-between flex-1 gap-1">
        <div className="space-y-0.5">
          <h3 className="font-medium text-zinc-800 text-xs sm:text-[13px] text-right line-clamp-1">
            {item.title}
          </h3>
          <p className="text-[9px] sm:text-[10px] text-zinc-600 text-right line-clamp-2">
            {item.description}
          </p>
          <div className="flex justify-end">
            <RatingStars value={item.rating} />
          </div>
          <div className="flex items-baseline gap-1 justify-end">
            {hasDiscount && (
              <span className="line-through text-[9px] text-zinc-400">
                {item.price.toLocaleString("fa-IR")} تومان
              </span>
            )}
            <span className="font-bold text-green-700 text-[11px] sm:text-xs">
              {price.toLocaleString("fa-IR")} تومان
            </span>
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="flex items-center gap-1 mt-0 sm:mt-1">
          <button
            onClick={() => addToCart(item)}
            className="flex-1 h-7 sm:h-8 rounded-md bg-green-600 hover:bg-green-700 text-white text-[11px] sm:text-xs px-1"
          >
            افزودن به سبد خرید
          </button>
          <button
            onClick={handleFavoriteClick}
            className="flex-none"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                isFavorite(item.id)
                  ? "fill-red-600 text-red-600"
                  : "text-gray-400"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
