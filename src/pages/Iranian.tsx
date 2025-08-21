import React from "react";
import { iranianFoods } from "../data/Iranian";
import FoodCard from "../commponents/FoodCart";

export default function Iranian() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-lg text-right font-bold mb-4">غذاهای ایرانی</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {iranianFoods.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
