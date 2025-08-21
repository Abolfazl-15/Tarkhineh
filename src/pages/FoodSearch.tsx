import React, { useState, useMemo } from "react";
import { Alldata } from "../data/allDataFood"; // همون دیتایی که دادی
import FoodCard from "../commponents/FoodCart";
import { Search } from "lucide-react";

export default function FoodListWithSearch() {
  const [query, setQuery] = useState("");

  // فیلتر کردن داده‌ها بر اساس سرچ
  const filteredData = useMemo(() => {
    if (!query.trim()) return Alldata;
    return Alldata.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-6 space-y-6" dir="rtl">
      {/* سرچ اینپوت */}
      <div className="relative w-full max-w-md mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجوی غذا..."
          className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* لیست غذاها */}
      {filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {filteredData.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">هیچ غذایی پیدا نشد 😔</p>
      )}
    </div>
  );
}
