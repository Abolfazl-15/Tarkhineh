import React, { useState } from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Rules from "../images/ghavanin.png";
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
      question: "حداقل سفارش",
      answer:
        "حداقل سفارش در ترخینه ۵۰,۰۰۰ تومان می باشد. این مبلغ بسته به شعبه و منطقه ممکن است متفاوت باشد.",
    },
    {
      id: 2,
      question: "فاصله تحویل",
      answer:
        "ترخینه در محدوده شعاع ۸ کیلومتری هر شعبه اقدام به ارسال سفارشات می نماید. برای اطلاعات دقیق از محدوده تحت پوشش، می توانید با شعبه مورد نظر تماس بگیرید.",
    },
    {
      id: 3,
      question: "زمان تحویل",
      answer:
        "زمان تحویل سفارشات معمولاً بین ۳۰ تا ۶۰ دقیقه می باشد. این زمان ممکن است در ساعات شلوغی و روزهای تعطیل کمی بیشتر شود.",
    },
    {
      id: 4,
      question: "روش های پرداخت",
      answer:
        "شما می توانید از روش های مختلف پرداخت شامل پرداخت آنلاین، پرداخت نقدی در محل، پرداخت با کارت خوان سیار و کیف پول ترخینه استفاده نمایید.",
    },
    {
      id: 5,
      question: "دقت سفارش",
      answer:
        "ترخینه با دقت کامل سفارشات شما را آماده و تحویل می دهد. در صورت بروز هرگونه اشتباه در سفارش، می توانید با پشتیبانی تماس گرفته و مشکل را گزارش دهید.",
    },
    {
      id: 6,
      question: "شرایط لغو سفارش",
      answer:
        "امکان لغو سفارش تا قبل از آماده سازی آن وجود دارد. پس از آماده سازی سفارش، امکان لغو وجود نخواهد داشت.",
    },
    {
      id: 7,
      question: "تخفیفات",
      answer:
        "ترخینه در مناسبت های مختلف تخفیفات ویژه ای ارائه می دهد. همچنین برای کاربران وفادار خود برنامه های وفاداری و تخفیف های دائمی در نظر گرفته است.",
    },
    {
      id: 8,
      question: "شرایط استفاده از تخفیف",
      answer:
        "تخفیف ها معمولاً برای سفارشات بالای ۱۰۰,۰۰۰ تومان قابل استفاده هستند و امکان ترکیب چند تخفیف با هم وجود ندارد.",
    },
  ];

  return (
    <div>
      <Header />
      <MobileNavbar />
      <div className="rtl-dir" dir="rtl">
        <div className="mt-5">
          <img
            src={Rules}
            alt="قوانین "
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
