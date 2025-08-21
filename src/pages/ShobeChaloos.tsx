import React from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import ResponsiveSlider from "../commponents/Slider";
import SpecialFoodPage from "./Specials";
import Footer from "../commponents/Footer";
import Interested from "./Interested";
import International2 from "./International2";
import Bracket3 from "../commponents/Bracket3";
import CommentsPage from "../commponents/Comments";

function ShobeChaloos() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <ResponsiveSlider />
      <SpecialFoodPage />
      <International2 />
      <Interested />
      <Bracket3 />
      <CommentsPage />
      <Footer />
    </div>
  );
}

export default ShobeChaloos;
