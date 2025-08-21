import React from "react";
import TopBar from "../commponents/TopBar";
import Pizzas from "./Pizzas";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import International from "./International";
import Iranian from "./Iranian";
import BestSeller from "../pages/BestSeller";
import Cheaps from "./Cheaps";
import Footer from "../commponents/Footer";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import ResponsiveSlider from "../commponents/Slider";
function MenuRestaurantPage() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <ResponsiveSlider />
      <TopBar />
      <Iranian />
      <Desserts />
      <Pizzas />
      <International />
      <Drinks />
      <BestSeller />
      <Cheaps />
      <Footer />
    </div>
  );
}

export default MenuRestaurantPage;
