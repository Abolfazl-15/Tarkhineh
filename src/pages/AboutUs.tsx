import React from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import HeaderImage from "../images/aboutslider.png";
import Tittle from "../images/aboutimage.png";
import Features3 from "../images/features3.png";
import Footer from "../commponents/Footer";

function AboutUs() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <div className="mt-8">
        <img
          src={HeaderImage}
          alt="headerImage"
          className="w-full h-40 md:h-72 object-cover"
        />
      </div>

      <div className="mt-12 md:mt-24 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* متن درباره ما */}
          <div className="flex-1 text-right">
            <h2 className="font-bold font-sans text-black text-xl md:text-2xl mb-6">
              درباره ما
            </h2>
            <p
              className="text-zinc-500 text-justify leading-7 md:leading-8 text-sm md:text-base"
              dir="rtl"
            >
              رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
              این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع
              در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها
              اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش
              بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه
              داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را
              ثابت نگه داشته است. ترخینه شعبات خود را افتتاح کرده که بسیار شیک و
              مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز
              توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو
              طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و
              سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند. چشم انداز: در
              آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری
              جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه
              ایرانیان سالم و سلامت باشند
            </p>
          </div>

          {/* عکس Tittle */}
          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src={Tittle}
              alt="Tittle"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mt-11">
        <img
          src={Features3}
          alt="features"
          className="w-full h-20 md:h-36  mx-auto rounded-lg"
        />
      </div>
      <div className="mt-0">
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
