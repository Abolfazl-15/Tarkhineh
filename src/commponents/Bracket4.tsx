import React from "react";
import Branch from "../images/Aghdasieh.png";
import BranchInfo from "../images/branch info.png";

function Bracket() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-center text-black font-sans font-bold relative -top-6 md:text-xl">
        شعبه اقدسیه
      </h2>

      <img src={Branch} alt="Branch" className="w-full h-36 md:h-72" />
      <img
        src={BranchInfo}
        alt="Branch"
        className="w-80 md:w-[900px] md:h-36 h-24 relative -top-8"
      />
    </div>
  );
}

export default Bracket;
