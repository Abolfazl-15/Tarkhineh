import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import AdminDashboard from "./pages/AdminPanel";
import UserDashboard from "./pages/UserPanel";
import Iranian from "./pages/Iranian";
import International from "./pages/International";
import Pizzas from "./pages/Pizzas";
import BestSellers from "./pages/BestSeller";
import Cheaps from "./pages/Cheaps";
import Drinks from "./pages/Drinks";
import Favorites from "./pages/Favoriets";
import Cart from "./pages/Cart";
import Desserts from "./pages/Desserts";
import PaymentSuccess from "./commponents/PaymentSuccess";
import Payment from "./pages/Payment";
import FoodListWithSearch from "./pages/FoodSearch";
import PaymentFailed from "./commponents/PaymentFailed";
import MenuRestaurantPage from "./pages/MenuRestaurantPage";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import RefreshLoadingScreen from "./commponents/Loading";
import ShobeEkbatan from "./pages/ShobeEkbatan";
import ShobeVanak from "./pages/ShobeVanak";
import ShobeChaloos from "./pages/ShobeChaloos";
import ShobeAghdasieh from "./pages/ShobeAghdasieh";
import EtayeNamayandegi from "./pages/EtayeNamayandegi";
import AboutUs from "./pages/AboutUs";
import ContractUs from "./pages/ContractUs";
import Quastion from "./pages/Quastion";
import Ghavanin from "./pages/Ghavanin";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Router>
          <RefreshLoadingScreen />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/menu/irani" element={<Iranian />} />
            <Route path="/menu/pizzas" element={<Pizzas />} />
            <Route path="/menu/international" element={<International />} />
            <Route path="/menu/Desserts" element={<Desserts />} />
            <Route path="/menu/noshidani" element={<Drinks />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/menu" element={<MenuRestaurantPage />} />
            <Route path="/payment-failed" element={<PaymentFailed />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/menu/BestSeller" element={<BestSellers />} />
            <Route path="/menu/Cheaps" element={<Cheaps />} />
            <Route path="/Search" element={<FoodListWithSearch />} />
            <Route path="/shobe/ekbatan" element={<ShobeEkbatan />} />
            <Route path="/shobe/vanak" element={<ShobeVanak />} />
            <Route path="/shobe/chaloos" element={<ShobeChaloos />} />
            <Route path="/shobe/aghdasieh" element={<ShobeAghdasieh />} />
            <Route path="/namayandegi" element={<EtayeNamayandegi />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contract" element={<ContractUs />} />
            <Route path="/Quastion" element={<Quastion />} />
            <Route path="/Rules" element={<Ghavanin />} />
            <Route path="/Privacy" element={<Privacy />} />
          </Routes>
        </Router>
      </CartProvider>
    </FavoritesProvider>
  );
}

export default App;
