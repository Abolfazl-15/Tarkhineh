import React, { useState } from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Privacy from "../images/Harim.png";
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
      question: "حریم شخصی",
      answer:
        "ترخینه متعهد به حفظ حریم خصوصی کاربران خود است. ما اطلاعات شخصی شما را با دقت و مطابق با قوانین جمهوری اسلامی ایران و استانداردهای بین‌المللی حفاظت از داده‌ها مدیریت می‌کنیم. اطلاعات شما تنها برای اهداف مشخص شده و بهبود خدمات ما استفاده خواهد شد.",
    },
    {
      id: 2,
      question: "چه اطلاعاتی گردآوری می‌کنیم؟",
      answer:
        "ما اطلاعاتی مانند نام، آدرس، شماره تلفن، آدرس ایمیل و ترجیحات غذایی شما را جمع‌آوری می‌کنیم. همچنین اطلاعات مربوط به سفارشات و تاریخچه خرید شما نیز ذخیره می‌شود تا بتوانیم خدمات بهتری ارائه دهیم. هیچ اطلاعات حساس مالی مانند شماره کارت بانکی در سرورهای ما ذخیره نمی‌شود.",
    },
    {
      id: 3,
      question: "چگونه اطلاعات را گردآوری می‌کنیم؟",
      answer:
        "اطلاعات شما از طریق فرم‌های ثبت‌نام، سفارش آنلاین، نظرسنجی‌ها و تعاملات شما با پشتیبانی مشتریان جمع‌آوری می‌شود. همچنین ممکن است از طریق فناوری‌هایی مانند کوکی‌ها و لاگ‌های سرور، اطلاعات مربوط به نحوه استفاده شما از وب‌سایت را جمع‌آوری کنیم.",
    },
    {
      id: 4,
      question: "چرا به شماره تلفن نیاز داریم؟",
      answer:
        "شماره تلفن برای تأیید هویت، ارسال اطلاع‌رسانی‌های مربوط به سفارش، پیگیری وضعیت تحویل و ارتباط با پشتیبانی مشتریان ضروری است. همچنین در موارد اضطراری مربوط به سفارش یا اطلاع‌رسانی‌های مهم از این طریق با شما در ارتباط خواهیم بود.",
    },
    {
      id: 5,
      question: "فعالیت‌های مرورگر شما در وب‌سایت ترخینه",
      answer:
        "ما اطلاعات مربوط به مرورگر، نوع دستگاه، آیپی آدرس و صفحاتی که بازدید می‌کنید را جمع‌آوری می‌کنیم. این اطلاعات به ما کمک می‌کند تا تجربه کاربری بهتری فراهم کرده و مشکلات فنی وب‌سایت را رفع کنیم. این داده‌ها به صورت ناشناس و جمعی تحلیل می‌شوند.",
    },
    {
      id: 6,
      question: "استفاده از کوکی‌ها و دستگاه‌های ذخیره‌سازی",
      answer:
        "ترخینه از کوکی‌ها و حافظه محلی مرورگر برای ذخیره ترجیحات کاربر، اطلاعات ورود به سیستم و بهبود عملکرد سایت استفاده می‌کند. شما می‌توانید تنظیمات مرورگر خود را برای مدیریت کوکی‌ها تغییر دهید، اما ممکن است این تغییرات بر برخی قابلیت‌های وب‌سایت تأثیر بگذارد.",
    },
    {
      id: 7,
      question: "اطلاعات بیشتر",
      answer:
        "اگر سؤالی درباره سیاست حریم خصوصی ما دارید یا می‌خواهید اطلاعات شخصی خود را به روزرسانی یا حذف کنید، لطفاً با پشتیبانی مشتریان از طریق تلفن یا ایمیل تماس بگیرید. تیم پشتیبانی ما آماده پاسخگویی به سؤالات و نگرانی‌های شما در این زمینه است.",
    },
    {
      id: 8,
      question: "تغییرات در سیاست حریم خصوصی",
      answer:
        "ترخینه ممکن است سیاست حریم خصوصی خود را به مرور زمان به روز کند. هر گونه تغییر در این صفحه منتشر خواهد شد و در صورت تغییرات اساسی، از طریق ایمیل یا پیامک به شما اطلاع‌رسانی می‌شود. ادامه استفاده از خدمات ما به منزله پذیرش این تغییرات خواهد بود.",
    },
  ];

  return (
    <div>
      <Header />
      <MobileNavbar />

      <div className="rtl-dir" dir="rtl">
        <div className="mt-5">
          <img
            src={Privacy}
            alt="حریم خصوصی"
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
