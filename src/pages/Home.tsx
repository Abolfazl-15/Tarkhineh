import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Slider from "../commponents/Slider";
import MenuRestaurant from "../commponents/MenuRestaurant";
import About from "../commponents/About";
import TarkhinehGardi from "../commponents/TarkhinehGardi";
import Footer from "../commponents/Footer";
function HomeApp() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <Slider />
      <MenuRestaurant />
      <About />
      <TarkhinehGardi />
      <Footer />
    </div>
  );
}

export default HomeApp;
