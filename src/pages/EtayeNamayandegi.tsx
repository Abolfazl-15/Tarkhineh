import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import HeaderImage from "../images/SliderN.png";
import Line from "../images/Line.png";
import Features2 from "../images/featuresN.png";
import Logo from "../images/Logo.png";
import { Eclipse } from "lucide-react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Footer from "../commponents/Footer";

function EtayeNamayandegi() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <Header />

      <MobileNavbar />

      <div className="rtl" dir="rtl">
        {/* بخش بالایی */}
        <div className="mt-8 relative">
          <img src={HeaderImage} className="w-full h-40 md:h-72 object-cover" />
          <img
            src={Features2}
            className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 md:w-[900px] h-auto opacity-80 -z-10"
          />
          <div className="mx-auto">
            <img
              src={Line}
              className="relative top-24 -left-11 md:-left-40 w-3/4 md:w-[900px] h-auto"
            />
          </div>
        </div>

        {/* متن مزایا */}
        <div className="mt-36 relative px-3 md:px-36">
          <h3 className="font-bold font-sans text-center text-black text-lg md:text-2xl">
            مزیت های دریافت نمایندگی
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-2 grid-rows-2 gap-3 md:gap-6 text-zinc-600 mt-6 md:mt-8 md:leading-loose relative">
            {/* نماد پس زمینه */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50">
              <img src={Logo} alt="Logo" className="w-72 h-36" />
            </div>

            {/* آیتم‌ها */}
            {[
              "استفاده از برند شناخته شده ترخینه",
              "به حداقل رساندن ریسک سرمایه گذاری",
              "تسریع روند بازگشت سرمایه",
              "مشاوره های تخصصی جهت مدیریت رستوران",
              "مشاوره در امور حقوقی، مالی و مالیاتی",
              "پشتیبانی بازاریابی و منابع انسانی",
              "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
              "طرح های تشویقی برای ارتقا فروش",
            ].map((text, i) => (
              <div
                key={i}
                className="relative bg-white bg-opacity-70 p-3 md:p-4 rounded-lg shadow-sm pr-6 md:pr-8 text-right"
              >
                <div className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 opacity-30">
                  <Eclipse className="text-green-600 w-4 h-4 md:w-6 md:h-6" />
                </div>
                <p className="text-xs md:text-base leading-tight md:leading-normal">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* بخش دریافت مشاوره */}
      <div className="mx-auto">
        <img
          src={Line}
          className="relative top-7 left-12 md:left-56 w-3/4 md:w-[900px] h-auto"
        />
      </div>
      <div className="mt-12 px-4">
        <h2 className="font-sans font-bold text-center text-black text-lg md:text-2xl">
          دریافت مشاوره
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-6 md:mt-10">
          <input
            className="border border-zinc-500 text-black rounded-md text-right w-full md:w-72 px-3 h-11 placeholder:text-right"
            placeholder="نام و نام خانوادگی"
            dir="rtl"
            type="text"
          />
          <input
            className="border border-zinc-500 text-black rounded-md text-right w-full md:w-72 px-3 h-11 placeholder:text-right"
            placeholder="شماره تماس"
            dir="rtl"
            type="number"
          />

          {/* DatePicker با استایل یکسان */}
          <div className="w-full md:w-72">
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              placeholder="زمان ایده آل"
              containerClassName="w-full"
              inputClass="border border-zinc-500 text-black rounded-md text-right w-full px-3 h-11 placeholder:text-right"
              style={{
                width: "100%",
                height: "44px",
                textAlign: "right",
                paddingRight: "12px",
              }}
            />
          </div>
        </div>
      </div>

      {/* فرم درخواست */}
      <div className="mx-auto mt-8">
        <img
          src={Line}
          className="relative top-7 left-12 md:left-56 w-3/4 md:w-[900px] h-auto"
        />
      </div>
      <div className="border border-zinc-400 mx-auto rounded-lg w-full max-w-5xl p-4 md:p-6 mt-12 md:mt-24">
        <h2 className="font-sans font-bold text-center text-black text-lg md:text-2xl">
          فرم درخواست نمایندگی
        </h2>

        {/* مشخصات فردی */}
        <h2 className="font-sans font-bold text-right mt-6 md:mt-8 text-black text-lg md:text-xl">
          مشخصات فردی متقاضی
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="نام و نام خانوادگی"
            dir="rtl"
            type="text"
          />
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="کد ملی"
            dir="rtl"
            type="number"
          />
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="شماره تماس"
            dir="rtl"
            type="number"
          />
        </div>

        {/* آدرس */}
        <h2 className="font-sans font-bold text-right mt-6 md:mt-8 text-black text-lg md:text-xl">
          آدرس ملک متقاضی
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="منطقه"
            dir="rtl"
            type="text"
          />
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="استان"
            dir="rtl"
            type="text"
          />
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="شهر"
            dir="rtl"
            type="text"
          />
          <textarea
            className="border border-zinc-500 text-black rounded-md text-right px-3 py-2 h-32 placeholder:text-right md:col-span-2"
            placeholder="آدرس دقیق"
            dir="rtl"
          />
        </div>

        {/* مشخصات ملک */}
        <h2 className="font-sans font-bold text-right mt-6 md:mt-8 text-black text-lg md:text-xl">
          مشخصات ملک متقاضی
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="سن بنا"
            dir="rtl"
            type="number"
          />
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="مساحت ملک (متر مربع)"
            dir="rtl"
            type="text"
          />
          <input
            className="border border-zinc-500 text-black rounded-md text-right px-3 h-11 placeholder:text-right"
            placeholder="نوع مالکیت"
            dir="rtl"
            type="text"
          />
        </div>

        {/* چک باکس‌ها */}
        <h2 className="font-sans font-bold text-right mt-6 md:mt-8 text-black text-lg md:text-xl">
          امکانات ملک
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6 px-2 md:px-4">
          {[
            "پروانه کسب دارد",
            "انباری دارد",
            "آشپزخانه دارد",
            "پارکینگ دارد",
          ].map((label, i) => (
            <label
              key={i}
              className="flex items-center justify-end gap-2 text-right text-zinc-600 text-sm md:text-base"
            >
              {label}
              <input type="checkbox" className="w-4 h-4 md:w-5 md:h-5" />
            </label>
          ))}
        </div>

        {/* آپلود عکس */}
        <div className="mt-6 md:mt-8 flex flex-col items-center gap-4">
          <h2 className="text-black text-lg md:text-xl">آپلود عکس ملک</h2>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border border-zinc-500 rounded-md p-2 w-full md:w-64 text-sm md:text-base"
          />
          {selectedFile && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className="w-48 h-32 md:w-64 md:h-40 object-cover rounded-md"
            />
          )}
          <button className="bg-green-500 rounded-lg text-white w-40 md:w-48 h-10 md:h-11 hover:bg-green-600 transition-colors">
            ثبت اطلاعات
          </button>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}

export default EtayeNamayandegi;
