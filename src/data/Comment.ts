import User1 from "../images/User1.png";
import User2 from "../images/User22.png";
import User3 from "../images/Choose branch1.png";
import User4 from "../images/Choose branch2.png";
import User5 from "../images/Choose branch3.png";
import User6 from "../images/Choose branch.png";

export interface Comment {
  id: string;
  name: string;
  family: string;
  avatar: string;
  date: string;
  text: string;
}

export const CommentsData: Comment[] = [
  {
    id: "c1",
    name: "علی",
    family: "رضایی",
    avatar: User1,
    date: "2025/08/19",
    text: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
  },
  {
    id: "c2",
    name: "سارا",
    family: "محمدی",
    avatar: User2,
    date: "2025/08/18",
    text: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
  },
  {
    id: "c3",
    name: "امیر",
    family: "کاظمی",
    avatar: User3,
    date: "2025/08/17",
    text: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
  },
  {
    id: "c4",
    name: "لیلا",
    family: "نجفی",
    avatar: User4,
    date: "2025/08/16",
    text: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
  },
  {
    id: "c5",
    name: "حسین",
    family: "کریمی",
    avatar: User5,
    date: "2025/08/15",
    text: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
  },
  {
    id: "c6",
    name: "مریم",
    family: "اسدی",
    avatar: User6,
    date: "2025/08/14",
    text: "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم.",
  },
];
