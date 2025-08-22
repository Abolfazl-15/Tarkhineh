import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const InfoBox: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="md:w-[800px] w-72 h-28 md:h-36 border-2 border-green-500 rounded-lg p-6 bg-white flex flex-col gap-6">
        {/* آیکون‌ها */}
        <div className="flex justify-between text-green-600 -mt-3">
          <div className="flex flex-col items-center relative -right-6 md:-right-28">
            <MapPin size={32} />
          </div>
          <div className="flex flex-col items-center relative -right-1">
            <Phone size={32} />
          </div>
          <div className="flex flex-col items-center">
            <Clock size={32} className="relative right-4  md:right-20" />
          </div>
        </div>

        {/* توضیحات زیر آیکون‌ها */}
        <div className="flex justify-between text-center text-gray-700 font-sans text-[9px] md:text-lg gap-2 ">
          <p>آدرس:اقدسیه، میدان خیام،پلاک ۸</p>

          <p>تلفن: ۰۲۱-۵۴۸۹۱۲۵۴-۵۱</p>

          <p>ساعت کاری: ۹ صبح تا ۵ عصر</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
