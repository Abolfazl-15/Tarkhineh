import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import Slide1 from "../images/Slider.png";
import Slide2 from "../images/Slider1.png";
import Slide3 from "../images/Slider2.png";

const ResponsiveSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: Slide1,
      alt: "اسلاید اول",
    },
    {
      id: 2,
      image: Slide2,
      alt: "اسلاید دوم",
    },
    {
      id: 3,
      image: Slide3,
      alt: "اسلاید سوم",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full mx-auto my-4 overflow-hidden">
      {/* Container با ابعاد دقیق برای موبایل و دسکتاپ */}
      <div className="w-full h-[176px] sm:h-[300px] md:h-[400px] lg:h-[300px] lg:mt-8 sm:mt-6">
        {/* اسلایدر اصلی */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            >
              <Link to="/menu">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                    console.error(`Error loading image: ${slide.image}`);
                  }}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* دکمه‌های کنترل */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-all z-10"
          aria-label="اسلاید قبلی"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-all z-10"
          aria-label="اسلاید بعدی"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* نقاط راهنما */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-[#4E9968] scale-125"
                  : "bg-white/70"
              }`}
              aria-label={`رفتن به اسلاید ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
