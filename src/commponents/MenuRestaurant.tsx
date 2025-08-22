import React from "react";
import { Link } from "react-router-dom";
import Drink from "../images/drink1.png";
import Dessert from "../images/dessert.png";
import Starter from "../images/starter.png";
import MainCurses from "../images/main course.png";

function MenuRestaurant() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="font-sans font-bold text-2xl text-center mb-8">
        منوی رستوران
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex justify-center md:col-span-1">
          <Link to="/menu/noshidani">
            <img
              src={Drink}
              alt="Drink"
<<<<<<< HEAD
              className="w-full h-auto object-contain max-h-[240px] md:max-h-[300px] relative md:-top-[52px] -top-[47px]"
=======
              className="w-full h-auto object-contain max-h-[240px] md:max-h-[300px] relative md:-top-[52px] -top-[43px]"
>>>>>>> 4f81c6a3ff3dd58033dce959229904ba6aa10a04
            />
          </Link>
        </div>

        <div className="flex justify-center">
          <Link to="/menu/Desserts">
            <img
              src={Dessert}
              alt="Desserts"
              className="w-full h-auto object-contain max-h-[200px] md:max-h-[250px]"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/menu/International">
            <img
              src={Starter}
              alt="Starter"
              className="w-full h-auto object-contain max-h-[200px] md:max-h-[250px]"
            />
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/menu/Irani">
            <img
              src={MainCurses}
              alt="MainCurses"
              className="w-full h-auto object-contain max-h-[200px] md:max-h-[250px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuRestaurant;
