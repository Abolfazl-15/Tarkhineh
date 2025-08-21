import React, { useState, useMemo } from "react";
import { Search, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Alldata } from "../data/allDataFood";
import FoodCard from "../commponents/FoodCart";

export default function Topbar() {
  const [query, setQuery] = useState("");

  // فقط فیلتر بر اساس title
  const filteredData = useMemo(() => {
    if (!query.trim()) return [];
    return Alldata.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="w-full relative -top-4">
      {/* منو بالا */}
      <div className="w-full bg-gray-100 shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-row-reverse items-center justify-between px-4 md:px-6 py-2">
          <div className="flex flex-row-reverse items-center gap-6 text-gray-500 font-medium">
            <Link to="/menu/irani">
              <button className="relative pb-1 hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
                غذای اصلی
              </button>
            </Link>
            <Link to="/menu/International">
              <button className="relative pb-1 hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
                پیش‌غذا
              </button>
            </Link>
            <Link to="/menu/Desserts">
              <button className="relative pb-1 hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
                دسر
              </button>
            </Link>
            <Link to="/menu/noshidani">
              <button className="relative pb-1 hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
                نوشیدنی
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* سرچ */}
      <div className="relative w-full md:w-[400px] py-3 px-4 md:px-8 -top-1">
        <input
          type="text"
          placeholder="جستجو غذا   ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-gray-300 pr-10 pl-3 py-2 text-sm text-right focus:outline-none focus:ring-2 focus:ring-green-500"
          dir="rtl"
        />
        <Search className="absolute right-7 md:right-11 top-5 w-5 h-5 text-gray-500" />
      </div>

      <div className="flex flex-row-reverse gap-3 text-gray-500 overflow-x-auto px-4 pb-2 md:overflow-visible md:relative md:-top-12">
        <Link to="/menu/irani">
          <button className="flex items-center whitespace-nowrap bg-gray-100 rounded-xl px-2 py-1">
            <ChevronLeft className="ml-1" /> غذا های ایرانی
          </button>
        </Link>
        <Link to="/menu/International">
          <button className="flex items-center whitespace-nowrap bg-gray-100 rounded-xl px-2 py-1">
            <ChevronLeft className="ml-1" /> پیش غذا ها
          </button>
        </Link>
        <Link to="/menu/Desserts">
          <button className="flex items-center whitespace-nowrap bg-gray-100 rounded-xl px-2 py-1">
            <ChevronLeft className="ml-1" /> دسر ها
          </button>
        </Link>
        <Link to="/menu/noshidani">
          <button className="flex items-center whitespace-nowrap bg-gray-100 rounded-xl px-2 py-1">
            <ChevronLeft className="ml-1" /> نوشیدنی ها
          </button>
        </Link>
        <Link to="/menu/BestSeller">
          <button className="flex items-center whitespace-nowrap bg-gray-100 rounded-xl px-2 py-1">
            <ChevronLeft className="ml-1" /> پر فروش ترین ها
          </button>
        </Link>
        <Link to="/menu/Cheaps">
          <button className="flex items-center whitespace-nowrap bg-gray-100 rounded-xl px-2 py-1">
            <ChevronLeft className="ml-1" /> اقتصادی ترین ها
          </button>
        </Link>
      </div>

      {query.trim() && (
        <div className="w-full max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {filteredData.length > 0 ? (
            filteredData.map((item) => <FoodCard key={item.id} item={item} />)
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              هیچ غذایی با این نام پیدا نشد 😔
            </p>
          )}
        </div>
      )}

      <div className="px-4 md:px-28 flex justify-center relative md:top-16 top-3 md:justify-start">
        <Link to="/Cart" className="w-full md:w-auto">
          <button className="w-full md:w-36 h-11 bg-white border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50">
            تکمیل سبد خرید
          </button>
        </Link>
      </div>
    </div>
  );
}
