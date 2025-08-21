import React from "react";
import Branch from "../images/Vanak.png";
import { PhoneCall, LocateIcon, Timer } from "lucide-react";

function Bracket2() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-center text-black font-sans font-bold relative -top-6 md:text-xl">
        شعبه ونک
      </h2>

      <img src={Branch} alt="Branch" className="w-full md:h-72" />
      <div className="w-[1200px] h-36 relative -top-28 mt-6 p-4 bg-white border-2 border-green-500 rounded-lg flex flex-row justify-between items-center space-x-4">
        <div className="flex flex-col items-center text-center">
          <Timer className="text-green-600 mb-2" />

          <h2 className="text-sm md:text-base">
            {" "}
            همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل
          </h2>
        </div>

        <div className="flex flex-col items-center text-center">
          <LocateIcon className="text-green-600 mb-2" />
          <h2 className="text-xs md:text-sm">
            میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک۲۶
          </h2>
        </div>

        <div className="flex flex-col items-center text-center">
          <PhoneCall className="text-green-600 mb-2" />
          <h2 className="text-sm md:text-base">۰۲۱-۵۴۸۹۱۲۵۴-۵۱</h2>
        </div>
      </div>
    </div>
  );
}

export default Bracket2;
