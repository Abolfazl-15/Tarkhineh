import { FoodItem } from "../types";
import Doogh from "../images/doogh2.webp";
import Cocca from "../images/CoccaCola.png";
import EnergyDrink from "../images/monster-black-energy-drink.jpg";
import Water from "../images/Water.png";
export const drinks: FoodItem[] = [
  {
    id: "dr-1",
    title: "دوغ آبعلی",
    image: Doogh,
    price: 45000,
    rating: 5.0,
    category: "drink",
    offer: "",
    description: "ماست ترش،آب سرد،نمک،یخ",
  },
  {
    id: "dr-2",
    title: "نوشابه کوکاکولا",
    image: Cocca,
    price: 40000,
    rating: 4.1,
    category: "drink",
    offer: "",
    description: "آب سرد،گاز دیاکسیدکربن،اسید فسفریک،طعم دهنده ها",
  },
  {
    id: "dr-3",
    title: "آب معدنی",
    image: Water,
    price: 20000,
    rating: 4.0,
    category: "drink",
    offer: "",
    description: "ماده های معدنی،آب سرد",
  },
  {
    id: "dr-4",
    title: "نوشابه انرژی زا مانستر ",
    badge: "پر فروش",
    image: EnergyDrink,
    discountPrice: 75000,
    price: 55000,
    rating: 4.8,
    category: "drink",
    offer: "%۲۶",
    description: "ماده های معدنی،آب سرد",
  },
];
