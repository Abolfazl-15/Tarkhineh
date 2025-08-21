import React from "react";
import { SpecialFood } from "../data/Special";
import FoodSlider from "../commponents/FoodSlider";

export default function SpecialFoodPage() {
  return (
    <div className="p-4 space-y-6" dir="rtl">
      <h2 className="text-xl font-bold text-right text-zinc-800">
        پیشنهاد ویژه
      </h2>

      <div>
        <FoodSlider items={SpecialFood} />
      </div>
    </div>
  );
}
