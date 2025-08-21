import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FoodCardShobe from "./FoodCartShobe";
import { FoodItem } from "../types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { items: FoodItem[] };

export default function FoodSlider({ items }: Props) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <div className="relative group py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={6}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletClass: "custom-bullet",
          bulletActiveClass: "custom-bullet-active",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={setSwiperInstance}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 4, spaceBetween: 16 },
          768: { slidesPerView: 5, spaceBetween: 18 },
          1024: { slidesPerView: 6, spaceBetween: 20 },
        }}
        className="w-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="hover:scale-105 transition-transform duration-200">
              <FoodCardShobe item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* دکمه‌های سفارشی */}
      <div className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-green-800 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronLeft className="w-5 h-5 text-white" />
      </div>
      <div className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-700 w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-green-800 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight className="w-5 h-5 text-white" />
      </div>

      {/* نقاط ناوبری (پاگینیشن) */}
      <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>

      <style>{`
        .custom-bullet {
          width: 12px;
          height: 12px;
          background-color: #d1fae5;
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 4px;
        }
        
        .custom-bullet-active {
          background-color: #065f46;
          transform: scale(1.3);
        }
        
        .custom-bullet:hover {
          background-color: #34d399;
        }
        
        .swiper-pagination-bullet {
          background: #d1fae5 !important;
          opacity: 1 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #065f46 !important;
        }
      `}</style>
    </div>
  );
}
