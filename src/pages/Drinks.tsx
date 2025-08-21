import React from "react";
import { drinks } from "../data/Drinks";
import FoodCard from "../commponents/FoodCart";

export default function Drinks() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-lg font-bold mb-4 text-right">نوشیدنی‌ها</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {drinks.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
