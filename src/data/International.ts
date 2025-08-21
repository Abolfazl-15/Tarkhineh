import { FoodItem } from "../types";
import Pasta from "../images/PastaSabzijat.png";
import Pasta2 from "../images/PastaBlunz.png";
import Ratatooee from "../images/Ratatuee.png";
import Lazania from "../images/Lazania.png";
import Sushi from "../images/Sushi.png";
import Pacoora from "../images/Pacora.png";
import Kalzooneh from "../images/Kalzooneh.png";
import Palak from "../images/Palak.png";
export const internationalFoods: FoodItem[] = [
  {
    id: "int-1",
    title: "پاستا بلونز ",
    image: Pasta2,
    price: 170000,
    discountPrice: 160000,
    rating: 4.2,
    category: "international",
    offer: "%۱۲",
    description:
      "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون",
  },
  {
    id: "int-2",
    title: "پاستا سبزیجات",
    image: Pasta,
    price: 175000,
    discountPrice: 140000,
    rating: 4.4,
    category: "international",
    offer: "%۲۰",
    description: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
  },
  {
    id: "int-3",
    title: " لازانیا",
    image: Lazania,
    price: 150000,
    rating: 4.5,
    category: "international",
    offer: "",
    description:
      "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
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
    id: "int-5",
    title: "پاکورا سبزیجات ",
    image: Pacoora,
    price: 125000,
    discountPrice: 110000,
    rating: 4.2,
    category: "international",
    offer: "%۸",
    description: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
  },
  {
    id: "int-6",
    title: "سوشی ",
    image: Sushi,
    price: 100000,
    discountPrice: 85000,
    rating: 4.2,
    category: "international",
    offer: "%۱۵",
    description:
      "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
  },
  {
    id: "int-7",
    title: "پالاک پنیر  ",
    image: Palak,
    price: 290000,
    discountPrice: 77000,
    rating: 4.2,
    category: "international",
    offer: "%۱۵",
    description: "پنیر، اسفناج، گوجه، پیاز، سیر ",
  },
  {
    id: "int-8",
    title: "کالزونه اسفناج ",
    image: Kalzooneh,
    price: 190000,
    discountPrice: 77000,
    rating: 4.2,
    category: "international",
    offer: "%۱۷",
    description:
      "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
  },
];
