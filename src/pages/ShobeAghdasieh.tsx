import React from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import ResponsiveSlider from "../commponents/Slider";
import SpecialFoodPage from "./Specials";
import Footer from "../commponents/Footer";
import Interested from "./Interested";
import International2 from "./International2";
import Bracket4 from "../commponents/Bracket4";
import CommentsPage from "../commponents/Comments";

function ShobeAghdasieh() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <ResponsiveSlider />
      <Interested />
      <SpecialFoodPage />
      <International2 />
      <Bracket4 />
      <CommentsPage />
      <Footer />
    </div>
  );
}

export default ShobeAghdasieh;
