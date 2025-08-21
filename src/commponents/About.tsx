import React from "react";
import Aboutbg from "../images/about.png";
import { Link } from "react-router-dom";
import Features from "../images/features.png";
import { ChevronLeft } from "lucide-react";
function About() {
  return (
    <div dir="rtl">
      <img
        src={Aboutbg}
        alt="AboutBg"
        className="w-full h-[389px] md:w-[1440px] md:h-[390px]"
      />
      <h3 className="font-sans font-bold text-xl text-white text-right relative md:-top-80 -top-[360px] md:right-24 right-5 ">
        رستوران های زنجیره ای ترخینه
      </h3>
      <p
        dir="rtl"
        className="font-sans md:font bold text-sm md:text-xl text-white text-right relative md:-top-72 -top-[350px] right-4 md:right-24 md:w-[600px] md:h-[160px] w-[320px] h-[60px]"
      >
        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که
        بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های
        زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و
        طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان
        ارائه دهیم .
      </p>
      <Link to="/aboutus">
        <button
          className="font-sans border border-white bg-transparent text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-200 relative -top-[280px] md:-top-72 right-48 md:right-[470px] flex items-center gap-2      
"
        >
          اطلاعات بیشتر
          <ChevronLeft />
        </button>
      </Link>
      <img
        src={Features}
        alt="Features"
        className="relative -top-[275px] right-24 w-52 md:w-80 md:right-[900px]  md:-top-[530px]"
      />
    </div>
  );
}

export default About;
