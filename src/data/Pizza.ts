import { FoodItem } from "../types";
import PizzaRocola from "../images/PizzaRocola.png";
import PizzaBademjan from "../images/PizzaBademjan.png";
import PizzaSabzi from "../images/PizzaSabzijat.png";
import PizzaGharch from "../images/PizzaGharch.png";
import PizzaPeperooni from "../images/PizzaPeperooni.png";
import PizzaEsphenach from "../images/PizzaEsphenach.png";
import PizzaCheese from "../images/PizzaCheese.png";
import PizzaMargaritta from "../images/PizzaMargarita.png";
export const pizzas: FoodItem[] = [
  {
    id: "pz-1",
    title: "پیتزا بادمجان و زیتون",
    offer: "",
    image: PizzaBademjan,
    price: 150000,
    rating: 4.6,
    category: "pizza",
    description:
      "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی",
  },
  {
    id: "pz-2",
    title: "پیتزا روکولا",
    image: PizzaRocola,
    discountPrice: 195000,
    price: 188000,
    rating: 5.0,
    category: "pizza",
    offer: "%۱۲",
    description:
      "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ",
  },
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
    id: "pz-4",
    title: "پیتزا سبزیجات و خامه",
    image: PizzaSabzi,
    discountPrice: 21000,
    price: 185000,
    rating: 4.2,
    category: "pizza",
    offer: "%۲۱",
    description:
      "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده",
  },
  {
    id: "pz-5",
    title: "پیتزا اسفناچ",
    image: PizzaEsphenach,
    price: 260000,
    rating: 4.1,
    category: "pizza",
    offer: "",
    description: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ",
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
    id: "pz-7",
    title: "پیتزا مرغ و بیکن",
    image: PizzaCheese,
    discountPrice: 125000,
    price: 105000,
    rating: 3.5,
    category: "pizza",
    offer: "%۱۶",
    description:
      "نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون",
  },
  {
    id: "pz-8",
    title: "پیتزا مارگاریتا ",
    image: PizzaMargaritta,
    price: 147000,
    rating: 4.5,
    category: "pizza",
    offer: "",
    description: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا",
  },
];
