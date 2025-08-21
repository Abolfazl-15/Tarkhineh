import { FoodItem } from "../types";
import PizzaGharch from "../images/PizzaGharch.png";
import Badenjan from "../images/Bademjan.png";
import EnergyDrink from "../images/monster-black-energy-drink.jpg";
export const BestSeller: FoodItem[] = [
  {
    id: "pz-3",
    title: "پیتزا قارچ ",
    image: PizzaGharch,
    discountPrice: 175000,
    price: 215000,
    rating: 4.7,
    badge: "پرفروش",
    category: "pizza",
    offer: "%۲۵",
    description:
      "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی",
  },
  {
    id: "ir-1",
    title: "کشک بادمجان",
    image: Badenjan,
    price: 95000,
    rating: 4.7,
    offer: "",
    badge: "پرفروش",
    category: "iranian",
    description: "بادمجان،کشک،نعناع خشک،مغز گردو،سیر،پیاز",
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
