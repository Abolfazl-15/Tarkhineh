export type FoodItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  offer: string;
  discountPrice?: number;
  rating: number;
  badge?: string;
  category: "iranian" | "dessert" | "drink" | "international" | "pizza";
  description?: string;
};

export type CartLine = {
  item: FoodItem;
  qty: number;
};
