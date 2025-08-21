import { Link } from "react-router-dom";
import footer from "../images/Footer1.png";
import SocialMedia from "../images/Social Media.png";

import "../App.css";
function Footer() {
  return (
    <div className="font-sans">
      <img src={footer} alt="footer" className="w-full md:h-[320px] h-44" />
      <div className="flex flex-col items-end relative right-11 text-white -top-40 md:-top-72 gap-3 md:gap-6 w96 h-0">
        <h2 className="md:text-xl text-sm font-bold">دسترسی آسان</h2>
        <a href="/Quastion" className="md:text-base text-xs">
          پرسش های متداول
        </a>
        <a href="/Rules" className="md:text-base text-xs">
          قوانین ترخینه
        </a>
        <a href="/Privacy" className="md:text-base text-xs">
          حریم خصوصی
        </a>
        <Link to="https://github.com/Abolfazl-15">
          <img
            className="md:w-36 md:h-11 w-32 h-4"
            src={SocialMedia}
            alt="SocialMedia"
          />
        </Link>
      </div>
      <div className="flex flex-col items-end relative right-56 md:right-96 text-white -top-40 md:-top-72 gap-3 md:gap-6 w96 h-0">
        <h2 className="md:text-xl text-sm font-bold"> شعبه های ترخینه</h2>
        <a href="/shobe/ekbatan" className="md:text-base text-xs">
          شعبه اکباتان
        </a>
        <a href="/shobe/chaloos" className="md:text-base text-xs">
          شعبه چالوس
        </a>
        <a href="/shobe/aghdasieh" className="md:text-base text-xs">
          شعبه اقدسیه
        </a>
        <a href="/shobe/vanak" className="md:text-base text-xs">
          شعبه ونک
        </a>
      </div>
      <div className="hidden md:flex text-white h-0 relative md:-top-8">
        <h2 className="md:text-xl text-sm font-bold relative -top-64 h-0 left-[450px]">
          {" "}
          پیام به ترخینه
        </h2>
        <input
          dir="rtl"
          type="text"
          placeholder="نام و نام خانوادگی"
          className="relative -top-52 left-52 h-11 bg-transparent border w-[244px] border-white text-white placeholder:text-white placeholder:opacity-80px px-4  py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-whitefocus:border-transparent transition-all duration-300 hover:border-opacity-80 hover:placeholder:opacity-100
  "
        />
        <input
          dir="rtl"
          type="text"
          placeholder=" شماره تلفن"
          className="relative -top-36 -left-[36px] h-11 bg-transparent border w-[244px] border-white text-white placeholder:text-white placeholder:opacity-80px px-4  py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-whitefocus:border-transparent transition-all duration-300 hover:border-opacity-80 hover:placeholder:opacity-100
  "
        />
        <input
          dir="rtl"
          type="text"
          placeholder="  آدرس ایمیل(اختیاری)"
          className="relative -top-20 -left-[280px] h-11 bg-transparent border w-[244px] border-white text-white placeholder:text-white placeholder:opacity-80px px-4  py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-whitefocus:border-transparent transition-all duration-300 hover:border-opacity-80 hover:placeholder:opacity-100"
        />

        <input
          dir="rtl"
          type="text"
          placeholder="پیام شما"
          className="relative -top-[209px] right-[800px] h-36 w-[244px] bg-transparent border  border-white  text-white placeholder:text-white px-4 pb-24 rounded-xl focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 hover:border-opacity-80 "
        />
        <button
          className="font-sans border cursor-pointer border-white bg-transparent text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-black transition duration-200 relative -top-12 -left-[1040px] h-11 w-36   
"
        >
          ارسال پیام
        </button>
      </div>
      <p className="font-sans md:text-lg text-[7px] opacity-60 relative md:-top-12 -top-4 text-white h-0 text-center">
        برای رستوران ترخینه محفوظ می باشد
        <a
          className="text-[7px] md:text-lg text-[#1fe123]"
          href="https://github.com/Abolfazl-15"
        >
          Abolfazl-15
        </a>{" "}
        تمامی حقوق مادی و معنوی این وب سایت طراحی شده توسط
      </p>
    </div>
  );
}

export default Footer;
