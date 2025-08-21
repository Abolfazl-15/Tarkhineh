import React, { useState, useRef, useEffect } from "react";
import Back from "../images/top Frame.png";
import { Link } from "react-router-dom";
import {
  X,
  Menu,
  ChevronDown,
  ChevronUp,
  Home,
  Utensils,
  MapPin,
  Phone,
  Handshake,
  User2Icon,
} from "lucide-react";

interface NavItem {
  title: string;
  path: string;
  icon?: React.ReactNode;
  subItems?: {
    title: string;
    path: string;
  }[];
}

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      title: "صفحه اصلی",
      path: "/",
      icon: <Home size={20} />,
    },
    {
      title: "منو",
      path: "/menu",
      icon: <Utensils size={20} />,
      subItems: [
        { title: "غذای ایرانی", path: "/menu/irani" },
        { title: "دسر", path: "/menu/Desserts" },
        { title: "نوشیدنی", path: "/menu/noshidani" },
        { title: "پیش غذا", path: "/menu/International" },
      ],
    },
    {
      title: "شعبه",
      path: "/shobe",
      icon: <MapPin size={20} />,
      subItems: [
        { title: "شعبه اکباتان", path: "/shobe/ekbatan" },
        { title: "شعبه چالوس", path: "/shobe/chaloos" },
        { title: "شعبه اقدسیه", path: "/shobe/aghdasieh" },
        { title: "شعبه ونک", path: "/shobe/vanak" },
      ],
    },
    {
      title: "اعطای نمایندگی",
      path: "/namayandegi",
      icon: <Handshake size={20} />,
    },
    {
      title: "تماس با ما",
      path: "/contract",
      icon: <Phone size={20} />,
    },
    {
      title: "درباره ما",
      path: "/aboutus",
      icon: <User2Icon size={20} />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubMenu = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  return (
    <div className="md:hidden relative -top-6" dir="rtl">
      {/* دکمه همبرگر */}
      <div className="flex justify-start relative -left-8 -top-7 w-11">
        <button onClick={() => setIsOpen(true)} className="text-gray-700">
          <Menu size={24} />
        </button>
      </div>

      {/* منوی سایدبار */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => {
              setIsOpen(false);
              setOpenSubMenu(null);
            }}
          />

          <div
            ref={sidebarRef}
            className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl"
            dir="rtl"
          >
            {/* هدر منو */}
            <div className="relative h-40 bg-gray-800">
              <img
                src={Back}
                alt="Menu Header"
                className="w-full h-full object-cover opacity-70"
              />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setOpenSubMenu(null);
                }}
                className="absolute top-4 left-6 text-white p-1 rounded-full bg-black bg-opacity-30"
              >
                <X size={24} />
              </button>
            </div>

            {/* محتوای منو */}
            <div className="overflow-y-auto h-[calc(100%-10rem)]">
              {navItems.map((item) => (
                <div key={item.path} className="border-b border-gray-100">
                  {item.subItems ? (
                    <>
                      <div
                        className="flex items-center justify-between p-4 cursor-pointer"
                        onClick={() => toggleSubMenu(item.title)}
                      >
                        <div className="flex items-center">
                          {item.icon && (
                            <span className="ml-2">{item.icon}</span>
                          )}
                          <span className="font-medium">{item.title}</span>
                        </div>
                        {openSubMenu === item.title ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </div>

                      {openSubMenu === item.title && (
                        <div className="bg-gray-50">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block py-3 pr-12 pl-4 hover:bg-[#4E9968]/10 transition text-right"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenSubMenu(null);
                              }}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="flex items-center p-4 hover:bg-[#4E9968]/10 transition text-right"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && <span className="ml-2">{item.icon}</span>}
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileNavbar;
