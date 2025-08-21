import React from "react";
import { Link } from "react-router-dom";
import Vanak from "../images/Choose branch1.png";
import Aghdasieh from "../images/Choose branch.png";
import Chaloos from "../images/Choose branch2.png";
import Ekbatan from "../images/Choose branch3.png";

function TarkhinehGardi() {
  const branches = [
    {
      img: Vanak,
      title: "شعبه ونک",
      link: "/shobe/vanak",
    },
    {
      img: Aghdasieh,
      title: "شعبه اقدسیه",
      link: "/shobe/aghdasieh",
    },
    {
      img: Chaloos,
      title: "شعبه چالوس",
      link: "/shobe/chaloos",
    },
    {
      img: Ekbatan,
      title: "شعبه اکباتان",
      link: "/shobe/ekbatan",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 rtl -mt-96">
      <h2 className="font-bold text-2xl text-center mb-12">ترخینه گردی</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {branches.map((branch, index) => (
          <Link
            to={branch.link}
            key={index}
            className="block group transition-transform duration-200 hover:scale-[1.03]"
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={branch.img}
                alt={branch.title}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TarkhinehGardi;
