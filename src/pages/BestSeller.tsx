import React from "react";
import { BestSeller } from "../data/BestSeller";
import FoodCard from "../commponents/FoodCart";

export default function BestSellers() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-lg font-bold mb-4 text-right">پرفروش ها</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {BestSeller.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
