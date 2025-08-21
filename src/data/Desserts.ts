import { FoodItem } from "../types";
import Falloodeh from "../images/Faloodeh.jpg";
import Bastani from "../images/Zaferoon.png";
import Halva from "../images/Halva.png";
import Rice from "../images/ricepng.parspng.com-8.png";
export const desserts: FoodItem[] = [
  {
    id: "de-1",
    title: "فالوده شیرازی",
    image: Falloodeh,
    price: 120000,
    rating: 4.8,
    category: "dessert",
    offer: "",
  },
  {
    id: "de-2",
    title: "بستنی زعفرانی",
    image: Bastani,
    price: 135000,
    discountPrice: 110000,
    rating: 4.7,
    category: "dessert",
    offer: "%۱۸",
  },
  {
    id: "de-3",
    title: "شیر برنج",
    image: Rice,
    price: 90000,
    rating: 4.2,
    category: "dessert",
    offer: "",
  },
  {
    id: "de-4",
    title: "حلوا",
    image: Halva,
    price: 85000,
    rating: 4.0,
    category: "dessert",
    offer: "",
  },
];
