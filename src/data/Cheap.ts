import { FoodItem } from "../types";
import Badenjan from "../images/Bademjan.png";
import Water from "../images/Water.png";
import Ratatooee from "../images/Ratatuee.png";
import PizzaPeperooni from "../images/PizzaPeperooni.png";
import Halva from "../images/Halva.png";
export const Cheap: FoodItem[] = [
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
    id: "int-4",
    title: " راتاتویی",
    image: Ratatooee,
    discountPrice: 180000,
    price: 95000,
    rating: 4.7,
    category: "international",
    offer: "%۴۵",
    description:
      "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
  },
  {
    id: "pz-6",
    title: "پیتزا پپرونی ",
    image: PizzaPeperooni,
    price: 100000,
    rating: 4.7,
    category: "pizza",
    offer: "",
    description:
      "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی ",
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
