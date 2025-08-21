import Logo from "../images/Logo.png";
import User from "../images/User.png";
import Shop from "../images/Shop.png";
import Search from "../images/Search.png";
import Shop2 from "../images/Shop2.png";
import Login2 from "../images/User2.png";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

type DropdownItem = {
  title: string;
  path: string;
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isBranchOpen, setIsBranchOpen] = useState<boolean>(false);
  const location = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);
  const branchRef = useRef<HTMLDivElement>(null);

  const menuItems: DropdownItem[] = [
    { title: "غذای ایرانی", path: "/menu/irani" },
    { title: "دسر ", path: "/menu/Desserts" },
    { title: "نوشیدنی ", path: "/menu/noshidani" },
    { title: "پیش غذا ", path: "/menu/International" },
  ];

  const branchItems: DropdownItem[] = [
    { title: "شعبه اکباتان", path: "/shobe/ekbatan" },
    { title: "شعبه چالوس", path: "/shobe/chaloos" },
    { title: "شعبه اقدسیه", path: "/shobe/aghdasieh" },
    { title: "شعبه ونک", path: "/shobe/vanak" },
  ];

  // مسیرهایی که در آنها آیکون کاربر باید تغییر کند
  const userActivePaths = ["/user-dashboard", "/login", "/signin"];
  const isUserActive = userActivePaths.includes(location.pathname);

  // مسیرهایی که در آنها آیکون سبد خرید باید تغییر کند
  const shopActivePaths = [
    "/cart",
    "/payment",
    "/payment-success",
    "/failed-payment",
  ];
  const isShopActive = shopActivePaths.includes(location.pathname);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
      if (
        branchRef.current &&
        !branchRef.current.contains(event.target as Node)
      ) {
        setIsBranchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleBranch = () => setIsBranchOpen(!isBranchOpen);

  return (
    <div className="font-sans shadow-lg md:h-28 h-20">
      <Link to="/">
        <img
          className="md:ml-auto md:mr-16 ml-auto mr-auto md:relative md:top-8 relative top-4 left-5"
          src={Logo}
          alt="Logo"
        />
      </Link>

      <ul className="hidden md:flex md:justify-center md:gap-8">
        <Link to="/contract">
          <li className="font-bold hover:text-[#4E9968]">تماس با ما</li>
        </Link>

        <Link to="/aboutus">
          <li className="font-bold hover:text-[#4E9968]">درباره ما</li>
        </Link>

        <Link to="/namayandegi">
          <li className="font-bold hover:text-[#4E9968]">اعطای نمایندگی</li>
        </Link>

        <div
          className="relative"
          ref={menuRef}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleMenu}
          >
            <Link to="/Menu">
              <span className="font-bold hover:text-[#4E9968]">منو</span>
            </Link>
            {isMenuOpen ? (
              <ChevronUp size={16} className="text-[#4E9968]" />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>

          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50 border border-gray-100">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-[#4E9968]/10 hover:text-[#4E9968] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div
          className="relative"
          ref={branchRef}
          onMouseEnter={() => setIsBranchOpen(true)}
          onMouseLeave={() => setIsBranchOpen(false)}
        >
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={toggleBranch}
          >
            <span className="font-bold hover:text-[#4E9968]">شعبه</span>

            {isBranchOpen ? (
              <ChevronUp size={16} className="text-[#4E9968]" />
            ) : (
              <ChevronDown size={16} />
            )}
          </div>

          {isBranchOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50 border border-gray-100">
              {branchItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-[#4E9968]/10 hover:text-[#4E9968] transition"
                  onClick={() => setIsBranchOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/">
          <li className="font-bold hover:text-[#4E9968]">صفحه اصلی</li>
        </Link>
      </ul>

      <div className="flex justify-start -mt-8 ml-2 md:ml-11 md:-mt-7 gap-3">
        <Link to="/login">
          <img src={isUserActive ? Login2 : User} alt="UserIcon" />
        </Link>
        <Link to="/cart">
          <img src={isShopActive ? Shop2 : Shop} alt="ShopIcon" />
        </Link>
        <Link to="/search">
          <img className="hidden md:flex" src={Search} alt="SearchIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
