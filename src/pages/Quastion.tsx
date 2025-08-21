import React, { useState } from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import QuizImage from "../images/Soalat.png";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../commponents/Footer";

// تعریف نوع برای آیتم‌های سوالات متداول
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

function Quastion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "ترخینه چه امکانات متفاوتی دارد؟",
      answer:
        "ترخینه با ارائه منوی متنوع از غذاهای ایرانی و بین‌المللی، امکان سفارش آنلاین و تحویل سریع، سیستم رزرو آنلاین میز، برنامه وفاداری با امتیازدهی و تخفیف‌های ویژه، و همچنین محیطی دلنشین و سنتی برای مهمانی‌ها و مراسم خاص، تجربه‌ای منحصر به فرد برای مشتریان فراهم می‌کند.",
    },
    {
      id: 2,
      question: "چطور میتونیم در ترخینه حساب باز کنیم؟",
      answer:
        "برای ایجاد حساب کاربری در ترخینه، روی گزینه 'ثبت نام' در بالای صفحه کلیک کنید. سپس شماره تلفن همراه خود را وارد کرده و کد تایید ارسال شده را وارد نمایید. پس از تکمیل اطلاعات پروفایل، حساب شما فعال خواهد شد و می‌توانید از تمامی امکانات ترخینه استفاده کنید.",
    },
    {
      id: 3,
      question: "سابقه و لیست خرید های قبلی رو از کجا ببینم؟",
      answer:
        "پس از ورود به حساب کاربری خود، از منوی پروفایل گزینه 'تاریخچه سفارشات' را انتخاب کنید. در این بخش می‌توانید تمامی سفارشات قبلی خود به همراه جزئیات کامل هر سفارش، وضعیت تحویل و مبلغ پرداختی را مشاهده نمایید.",
    },
    {
      id: 4,
      question: "چه راه های پرداختی داریم؟",
      answer:
        "ترخینه از多种 روش پرداخت پشتیبانی می‌کند: پرداخت آنلاین با کارت‌های عضو شتاب، پرداخت در محل به صورت نقدی، پرداخت با کارت‌خوان سیار، کیف پول الکترونیکی ترخینه و همچنین پرداخت از طریق اپلیکیشن‌های پرداخت معتبر.",
    },
    {
      id: 5,
      question:
        "آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟",
      answer:
        "بله، قیمت‌های درج شده در وبسایت ترخینه کاملاً با منوی شعبات یکسان است. البته ممکن است برخی از شعبات به دلیل موقعیت جغرافیایی یا ویژگی‌های خاص، قیمت‌های متفاوتی داشته باشند که در این صورت به طور شفاف اطلاع‌رسانی می‌شود.",
    },
    {
      id: 6,
      question: "چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟",
      answer:
        "پس از افزودن items به سبد خرید، در صفحه تسویه حساب می‌توانید کد تخفیف یا کارت هدیه خود را در قسمت 'اعمال کد تخفیف/کارت هدیه' وارد کنید. سیستم به طور خودکار اعتبار را محاسبه و از مبلغ کل سفارش شما کسر خواهد کرد.",
    },
  ];

  return (
    <div>
      <Header />
      <MobileNavbar />

      <div className="rtl-dir" dir="rtl">
        <div className="mt-5">
          <img
            src={QuizImage}
            alt="سوالات متداول"
            className="w-full h-40 md:h-72 object-cover"
          />
        </div>
        <div className="w-full bg-gray-100 shadow-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-4 md:px-6 py-2">
            <div className="flex flex-row items-center gap-6 text-gray-500 font-medium">
              <Link to="/Quastion">
                <button className="relative pb-1 hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
                  سوالات متداول
                </button>
              </Link>
              <Link to="/Rules">
                <button className="relative pb-1 hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
                  قوانین ترخینه
                </button>
              </Link>
              <Link to="/Privacy">
                <button className="relative pb-1 hover:text-green-600 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full">
                  حریم خصوصی
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* بخش سوالات متداول */}
        <div className="max-w-4xl mx-auto py-8 px-4 md:px-0">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="flex flex-row-reverse justify-between items-center w-full p-4 md:p-6 bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={activeIndex === item.id}
                >
                  {/* تغییر جایگاه: متن سوال در سمت راست و آیکون در سمت چپ */}
                  <span className="font-medium text-gray-800 text-right flex-1">
                    {item.question}
                  </span>
                  {activeIndex === item.id ? (
                    <ChevronUp
                      className="text-green-600 flex-shrink-0 ml-2"
                      size={20}
                    />
                  ) : (
                    <ChevronDown
                      className="text-green-600 flex-shrink-0 ml-2"
                      size={20}
                    />
                  )}
                </button>

                {activeIndex === item.id && (
                  <div className="p-4 md:p-6 bg-gray-50 border-t border-gray-200 text-right">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Quastion;
