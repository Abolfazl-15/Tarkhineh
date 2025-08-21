import React from "react";
import { internationalFoods } from "../data/International";
import FoodSlider from "../commponents/FoodSlider";
import { useNavigate } from "react-router-dom";

export default function International2() {
  const navigate = useNavigate();

  const handdleMenu = async () => {
    navigate("/Menu");
  };
  return (
    <div className="p-4 space-y-6 mt-16" dir="rtl">
      <h2 className="text-xl font-bold text-right text-zinc-800">
        غذاهای غیر ایرانی
      </h2>

      <div>
        <FoodSlider items={internationalFoods} />
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handdleMenu}
          className="bg-white text-green-600 rounded-md h-11 w-36 border-2 hover:bg-green-600 hover:transition-[250ms] hover:text-white border-green-600"
        >
          مشاهده منوی کامل
        </button>
      </div>
    </div>
  );
}
