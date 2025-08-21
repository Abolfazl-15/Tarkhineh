import React from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import ResponsiveSlider from "../commponents/Slider";
import SpecialFoodPage from "./Specials";
import Footer from "../commponents/Footer";
import Interested from "./Interested";
import International2 from "./International2";
import Bracket from "../commponents/Bracket";
import CommentsPage from "../commponents/Comments";

function ShobeEkbatan() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <ResponsiveSlider />
      <SpecialFoodPage />
      <Interested />
      <International2 />
      <Bracket />
      <CommentsPage />
      <Footer />
    </div>
  );
}

export default ShobeEkbatan;
