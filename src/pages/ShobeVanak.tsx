import React from "react";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import ResponsiveSlider from "../commponents/Slider";
import SpecialFoodPage from "./Specials";
import Footer from "../commponents/Footer";
import Interested from "./Interested";
import International2 from "./International2";
import Bracket2 from "../commponents/Bracket2";
import CommentsPage from "../commponents/Comments";

function ShobeVanak() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <ResponsiveSlider />
      <International2 />
      <Interested />
      <SpecialFoodPage />
      <Bracket2 />
      <CommentsPage />
      <Footer />
    </div>
  );
}

export default ShobeVanak;
