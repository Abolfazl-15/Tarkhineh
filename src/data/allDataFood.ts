import { FoodItem } from "../types";
import Falloodeh from "../images/Faloodeh.jpg";
import Bastani from "../images/Zaferoon.png";
import Halva from "../images/Halva.png";
import Rice from "../images/ricepng.parspng.com-8.png";
import Doogh from "../images/doogh2.webp";
import Cocca from "../images/CoccaCola.png";
import EnergyDrink from "../images/monster-black-energy-drink.jpg";
import Water from "../images/Water.png";
import Pasta from "../images/PastaSabzijat.png";
import Pasta2 from "../images/PastaBlunz.png";
import Ratatooee from "../images/Ratatuee.png";
import Lazania from "../images/Lazania.png";
import Sushi from "../images/Sushi.png";
import Pacoora from "../images/Pacora.png";
import Kalzooneh from "../images/Kalzooneh.png";
import Palak from "../images/Palak.png";
import Badenjan from "../images/Bademjan.png";
import Dolmeh from "../images/Dolmeh.png";
import Cocoo from "../images/Cocoo.png";
import Cophteh from "../images/Coofteh.png";
import Felafel from "../images/Felafel.png";
import MirzaGhasemi from "../images/MirzaGhasemi.png";
import Doolmeh2 from "../images/doolmeh2.png";
import Coocoo2 from "../images/Coocoo2.png";
import Baghali from "../images/Baghaleghatoogh.png";
import kaleh from "../images/KallehJoosh.png";
import Bademjan2 from "../images/Bademjan2.png";
import Boorani from "../images/Boorani.png";
import PizzaRocola from "../images/PizzaRocola.png";
import PizzaBademjan from "../images/PizzaBademjan.png";
import PizzaSabzi from "../images/PizzaSabzijat.png";
import PizzaGharch from "../images/PizzaGharch.png";
import PizzaPeperooni from "../images/PizzaPeperooni.png";
import PizzaEsphenach from "../images/PizzaEsphenach.png";
import PizzaCheese from "../images/PizzaCheese.png";
import PizzaMargaritta from "../images/PizzaMargarita.png";
export const Alldata: FoodItem[] = [
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
    id: "ir-2",
    title: " کوفته برنجی",
    image: Cophteh,
    price: 145000,
    offer: "",
    rating: 4.5,
    category: "iranian",
    description: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
  },
  {
    id: "ir-3",
    title: "  باقلاقاتوق ",
    image: Baghali,
    price: 205000,
    discountPrice: 180000,
    offer: "%۳۰",
    rating: 4.8,
    badge: "ویژه",
    category: "iranian",
    description: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ",
  },
  {
    id: "ir-4",
    title: " میرزا قاسمی",
    image: MirzaGhasemi,
    price: 300000,
    discountPrice: 270000,
    rating: 4.6,
    offer: "%۱۰",
    category: "iranian",
    description: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
  },

  {
    id: "ir-5",
    title: "کله‌جوش",
    image: kaleh,
    price: 210000,
    discountPrice: 203000,
    rating: 4.1,
    offer: "%۵",
    category: "iranian",
    description: "کشک، گردو، پیاز، نعناع خشک",
  },
  {
    id: "ir-6",
    title: "فلافل ",
    image: Felafel,
    price: 80000,
    offer: "",
    rating: 5.0,
    category: "iranian",
    description: " نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی",
  },
  {
    id: "ir-7",
    title: "بادمجان شکم پر ",
    image: Bademjan2,
    price: 150000,
    discountPrice: 136000,
    offer: "%۱۸",
    rating: 3.5,
    category: "iranian",
    description: "بادمجان، پیاز، گوجه فرنگی	، سبزی خشک ",
  },
  {
    id: "ir-8",
    title: "  بورانی بادمجان ",
    image: Boorani,
    price: 170000,
    discountPrice: 148000,
    offer: "%۲۲",
    rating: 4.1,
    category: "iranian",
    description: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو",
  },
  {
    id: "ir-9",
    title: " دلمه برگ مو ",
    image: Dolmeh,
    price: 195000,
    offer: "",
    rating: 2.7,
    category: "iranian",
    description: "پیاز، برنج، لپه، سبزی دلمه، سرکه",
  },
  {
    id: "ir-10",
    title: "  دلمه برگ کلم  ",
    image: Doolmeh2,
    price: 220000,
    discountPrice: 209000,
    offer: "%۸",
    rating: 4.7,
    category: "iranian",
    description: "کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر،رب ",
  },
  {
    id: "ir-11",
    title: "کوکو سیب‌زمینی و عدس",
    image: Coocoo2,
    price: 135000,
    discountPrice: 105000,
    offer: "%۲۰",
    rating: 1.0,
    category: "iranian",
    description: "عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری ",
  },
  {
    id: "ir-12",
    title: "کوکو سبزی   ",
    image: Cocoo,
    price: 300000,
    discountPrice: 270000,
    offer: "%۱۰",
    rating: 5.0,
    category: "iranian",
    description: "تخم مرغ، گردو، سیر، آرد، روغن مایع،سبزی کوکویی",
  },
];
