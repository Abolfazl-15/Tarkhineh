import React from "react";
import Branch from "../images/Aghdasieh.png";
import InfoBox from "./InfoBox";

function Bracket() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-center text-black font-sans font-bold relative -top-6 md:text-xl">
        شعبه اقدسیه
      </h2>

      <img src={Branch} alt="Branch" className="w-full h-36 md:h-72" />
      <div className="relative -top-14">
        <InfoBox />
      </div>
    </div>
  );
}

export default Bracket;
