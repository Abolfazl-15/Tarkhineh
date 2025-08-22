import React from "react";
import Branch from "../images/Vanak.png";

import InfoBox3 from "./InfoBox3";

function Bracket2() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-center text-black font-sans font-bold relative -top-6 md:text-xl">
        شعبه ونک
      </h2>

      <img src={Branch} alt="Branch" className="w-full h-36 md:h-72" />
      <div className="relative -top-14">
        <InfoBox3 />
      </div>
    </div>
  );
}

export default Bracket2;
