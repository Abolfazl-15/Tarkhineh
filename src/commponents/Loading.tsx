import React, { useEffect, useState } from "react";
import Logo from "../images/App Logo.png";

const RefreshLoadingScreen: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // نمایش لودینگ به مدت 3 ثانیه در هر بار رفرش
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) return null;

  return (
    <div className="md:hidden fixed -mt-14 inset-0 z-[9999] flex flex-col items-center justify-center bg-[#4E9968]">
      {/* لوگوی ترخینه با انیمیشن */}
      <img
        src={Logo}
        alt="ترخینه"
        className="w-32 h-32 md:w-40 md:h-40 animate-pulse"
      />
      <h2 className="font-sans font-bold text-white "></h2>

      {/* اسپینر لودینگ */}
      <div className="mt-8">
        <div className="w-10 h-10  md:w-12 md:h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* متن اختیاری */}
      <p className="mt-6 text-white text-lg font-medium">
        {" "}
        ترخینه|سفارش آنلاین غذا
      </p>
    </div>
  );
};

export default RefreshLoadingScreen;
