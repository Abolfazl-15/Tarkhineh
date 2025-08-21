import React from "react";
import { FoodItem } from "../types";
import RatingStars from "./RatingStar";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Heart } from "lucide-react";

type Props = { item: FoodItem };

export default function FoodCardShobe({ item }: Props) {
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
      className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition flex flex-col w-[160px] sm:w-[200px] h-[320px] sm:h-[340px]"
      dir="rtl"
    >
      {/* تصویر بالا */}
      <div className="relative w-full h-32 sm:h-40 flex-shrink-0">
        {item.badge && (
          <span className="absolute top-1 right-1 bg-green-600 text-white text-[10px] px-1 py-0.5 rounded">
            {item.badge}
          </span>
        )}
        {hasDiscount && (
          <span className="absolute top-1 left-1 bg-red-600 text-white text-[10px] px-1 py-0.5 rounded">
            {item.offer}٪ تخفیف
          </span>
        )}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-t-lg"
          loading="lazy"
        />
      </div>

      {/* متن پایین */}
      <div className="flex flex-col justify-between flex-1 p-2 gap-1">
        <div className="space-y-1 flex-1">
          <h3 className="font-medium text-zinc-800 text-sm sm:text-base text-right line-clamp-1">
            {item.title}
          </h3>
          <p className="text-[10px] sm:text-xs text-zinc-600 text-right line-clamp-2">
            {item.description}
          </p>
          <div className="flex justify-end mt-auto">
            <RatingStars value={item.rating} />
          </div>
          <div className="flex items-baseline gap-1 justify-end">
            {hasDiscount && (
              <span className="line-through text-[10px] text-zinc-400">
                {item.price.toLocaleString("fa-IR")} تومان
              </span>
            )}
            <span className="font-bold text-green-700 text-sm">
              {price.toLocaleString("fa-IR")} تومان
            </span>
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => addToCart(item)}
            className="flex-1 h-8 rounded-md bg-green-600 hover:bg-green-700 text-white text-xs"
          >
            افزودن به سبد خرید
          </button>
          <button
            onClick={handleFavoriteClick}
            className="flex-none"
            aria-label="افزودن به علاقه‌مندی‌ها"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
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
