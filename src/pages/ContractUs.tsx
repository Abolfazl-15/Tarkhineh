import React from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import HeaderImage from "../images/ContractSlider.png";
import Ekbatan from "../images/Ekbat.png";
import Chaloos from "../images/Chaloos.png";
import Aghdasieh from "../images/Aghdasieh.png";
import Vanak from "../images/Vanak.png";
import Footer from "../commponents/Footer";
import { Link } from "react-router-dom";

function ContractUs() {
  const branches = [
    {
      id: 1,
      name: "شعبه اکباتان",
      image: Ekbatan,
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      phone: "۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
      hours: "همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل",
      link: "/shobe/ekbatan",
    },
    {
      id: 2,
      name: "شعبه چالوس",
      image: Chaloos,
      address:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
      phone: "۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
      hours: "همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل",
      link: "/shobe/chaloos",
    },
    {
      id: 3,
      name: "شعبه اقدسیه",
      image: Aghdasieh,
      address: "خیابان اقدسیه، نرسیده به میدان خیام، پلاک ۸",
      phone: "۰۲۱-۵۴۸۹۱۲۵۴-۵۱",
      hours: "همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل",
      link: "/shobe/aghdasieh",
    },
    {
      id: 4,
      name: "شعبه ونک",
      image: Vanak,
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      phone: "۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
      hours: "همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل",
      link: "/shobe/vanak",
    },
  ];

  return (
    <div>
      <Header />
      <MobileNavbar />
      <div className="mt-8">
        <img
          src={HeaderImage}
          alt="HeaderImage"
          className="w-full h-40 md:h-72 object-cover"
        />
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {branches.map((branch) => (
            <Link key={branch.id} to={branch.link} className="block group">
              <div className="flex flex-col md:flex-row-reverse bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                {/* عکس شعبه - سمت راست در دسکتاپ */}
                <div className="md:w-1/2">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* اطلاعات شعبه - سمت چپ در دسکتاپ */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-right">
                  <h2 className="font-bold text-xl md:text-2xl text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                    {branch.name}
                  </h2>

                  <div className="space-y-3 text-gray-600">
                    <p className="flex items-start gap-2">
                      <span className="text-green-600">📍</span>
                      {branch.address}
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-green-600">📞</span>
                      {branch.phone}
                    </p>

                    <p className="flex items-center gap-2">
                      <span className="text-green-600">🕒</span>
                      {branch.hours}
                    </p>
                  </div>

                  {/* دکمه‌ها - فقط برای دسکتاپ نمایش داده می‌شوند */}
                  <div className="hidden md:flex gap-4 mt-6">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      دیدن نقشه
                    </button>
                    <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
                      صفحه شعبه
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default ContractUs;
