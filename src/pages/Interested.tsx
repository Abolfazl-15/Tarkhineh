import React from "react";
import { Interesteds } from "../data/Interesteds";
import FoodSlider from "../commponents/FoodSlider";

export default function Interested() {
  return (
    <div className="p-4 space-y-6 bg-[#315F41] mt-12" dir="rtl">
      <h2 className="text-xl font-bold text-right text-white">غذاهای محبوب</h2>

      <div>
        <FoodSlider items={Interesteds} />
      </div>
    </div>
  );
}
