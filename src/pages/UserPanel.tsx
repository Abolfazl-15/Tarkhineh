import { useEffect, useState } from "react";
import { supabase } from "../commponents/Login/SupabaseClient";
import Header from "../commponents/Header";
import { useNavigate } from "react-router-dom";
import Sidebar from "../commponents/Sidebar";
import Footer from "../commponents/Footer";
import Favorites from "./Favoriets";

interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  birth_date: string;
  role: string;
  addresses?: {
    id: string;
    address: string;
  }[];
  favorites?: {
    id: string;
    name: string;
    image: string;
  }[];
  orders?: {
    id: string;
    date: string;
    status: string;
    total: number;
  }[];
}

export default function UserDashboard() {
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    birth_date: "",
  });
  const [activeTab, setActiveTab] = useState("profile");
  const [newAddress, setNewAddress] = useState("");
  const [localAddresses, setLocalAddresses] = useState<
    { id: string; address: string }[]
  >([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error || !user) {
        navigate("/login");
        return;
      }
      setUser(user);

      const { data: profileData } = await supabase
        .from("users")
        .select(`*, addresses(*), favorites(*), orders(*)`)
        .eq("id", user.id)
        .single();

      if (profileData) {
        setUserProfile(profileData);
        setFormData({
          first_name: profileData.first_name || "",
          last_name: profileData.last_name || "",
          phone: profileData.phone || "",
          birth_date: profileData.birth_date || "",
        });
      }

      // آدرس‌های ذخیره شده در localStorage
      const storedAddresses = JSON.parse(
        localStorage.getItem("addresses") || "[]"
      );
      setLocalAddresses(storedAddresses);

      setLoading(false);
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("addresses"); // پاک کردن آدرس‌ها از localStorage
    navigate("/login");
  };

  const handleCart = async () => {
    navigate("/Cart");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    setLoading(true);

    const { error } = await supabase
      .from("users")
      .update(formData)
      .eq("id", user.id);

    if (!error) {
      setUserProfile((prev) => (prev ? { ...prev, ...formData } : null));
      setEditMode(false);
    }
    setLoading(false);
  };

  const handleAddAddress = async () => {
    if (!newAddress.trim() || !user) return;

    // ذخیره در Supabase
    const { error, data } = await supabase
      .from("addresses")
      .insert([{ address: newAddress, user_id: user.id }])
      .select("*")
      .single();

    // ساخت یک آدرس جدید
    const newAddr = {
      id: data?.id || Date.now().toString(), // اگه Supabase id نداد، یه id لوکال بساز
      address: newAddress,
    };

    // آپدیت استیت دیتابیس
    if (!error && data) {
      setUserProfile((prev) =>
        prev
          ? { ...prev, addresses: [...(prev.addresses || []), newAddr] }
          : prev
      );
    }

    // ذخیره در localStorage
    const updatedLocal = [...localAddresses, newAddr];
    setLocalAddresses(updatedLocal);
    localStorage.setItem("addresses", JSON.stringify(updatedLocal));

    // ریست کردن input
    setNewAddress("");
  };
  const displayUserName = () => {
    return (
      `${userProfile?.first_name || ""} ${
        userProfile?.last_name || ""
      }`.trim() || "کاربر ترخینه"
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-green-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      <Header />
      <Sidebar />

      <div className="container mx-auto p-4 mt-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* منوی کناری */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full md:w-1/3 h-fit">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-2xl md:text-3xl text-gray-600">
                  {displayUserName().charAt(0)}
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-bold">
                {displayUserName()}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {userProfile?.email}
              </p>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-right p-2 rounded-md ${
                  activeTab === "profile"
                    ? "bg-green-100 text-green-700"
                    : "hover:bg-gray-100"
                }`}
              >
                پروفایل کاربری
              </button>
              <button
                onClick={() => setActiveTab("favorites")}
                className={`w-full text-right p-2 rounded-md ${
                  activeTab === "favorites"
                    ? "bg-green-100 text-green-700"
                    : "hover:bg-gray-100"
                }`}
              >
                علاقه‌مندی‌ها
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-right p-2 rounded-md ${
                  activeTab === "orders"
                    ? "bg-green-100 text-green-700"
                    : "hover:bg-gray-100"
                }`}
              >
                پیگیری سفارشات
              </button>
              <button
                onClick={() => setActiveTab("address")}
                className={`w-full text-right p-2 rounded-md ${
                  activeTab === "address"
                    ? "bg-green-100 text-green-700"
                    : "hover:bg-gray-100"
                }`}
              >
                آدرس من
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-right p-2 rounded-md text-red-600 hover:bg-red-50"
              >
                خروج
              </button>
            </nav>
          </div>

          {/* محتوای اصلی */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 w-full md:w-2/3">
            {activeTab === "profile" && (
              <div>
                <div className="flex justify-between mb-4">
                  <h1 className="text-xl font-bold">اطلاعات شخصی</h1>
                  {editMode ? (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveProfile}
                        className="px-4 py-1 bg-green-600 text-white rounded-md"
                      >
                        ذخیره
                      </button>
                      <button
                        onClick={() => setEditMode(false)}
                        className="px-4 py-1 bg-gray-200 rounded-md"
                      >
                        انصراف
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditMode(true)}
                      className="px-4 py-1 bg-green-600 text-white rounded-md"
                    >
                      ویرایش
                    </button>
                  )}
                </div>

                {editMode ? (
                  <div className="space-y-3 ">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="نام"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md text-right direction-rtl"
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="نام خانوادگی"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md text-right direction-rtl"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="شماره تلفن"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md text-right direction-rtl"
                    />
                    <input
                      type="date"
                      name="birth_date"
                      value={formData.birth_date}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded-md text-right direction-rtl"
                    />
                  </div>
                ) : (
                  <div className="space-y-2 direction-rtl text-right">
                    <p>نام: {userProfile?.first_name || "تعیین نشده"}</p>
                    <p>
                      نام خانوادگی: {userProfile?.last_name || "تعیین نشده"}
                    </p>
                    <p>شماره تلفن: {userProfile?.phone || "تعیین نشده"}</p>
                    <p>تاریخ تولد: {userProfile?.birth_date || "تعیین نشده"}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "favorites" && <Favorites />}

            {activeTab === "orders" && (
              <div>
                <h2 className="text-center font-sans font-bold text-gray-400 mt-36 relative -top-11">
                  !شما درحال حاضر سفارشی ثبت نکرده‌اید
                </h2>
                <button
                  onClick={handleCart}
                  className="bg-green-600 p-4 shadow-xl rounded-lg text-white w-44 h-14 hover:bg-green-500 hover:shadow-2xl relative -right-[60px] md:-right-72"
                >
                  به سبد خرید برو
                </button>
              </div>
            )}

            {activeTab === "address" && (
              <div>
                <h1 className="text-xl font-bold text-center mb-3">
                  آدرس‌های شما
                </h1>

                {userProfile?.addresses?.length || localAddresses.length ? (
                  <>
                    {userProfile?.addresses?.map((addr) => (
                      <div
                        key={addr.id}
                        className="border text-center rtl rounded-md p-2 mb-2"
                      >
                        {addr.address}
                      </div>
                    ))}
                    {localAddresses.map((addr) => (
                      <div
                        key={addr.id}
                        className="border  text-center rtl text-emerald-600 rounded-md p-2 mb-2"
                      >
                        {addr.address}
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="text-gray-500 rtl">آدرسی ثبت نشده</p>
                )}

                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    placeholder="آدرس جدید"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    className="flex-1 p-2 border rounded-md text-right"
                  />
                  <button
                    onClick={handleAddAddress}
                    className="px-4 py-2 bg-green-600 text-white rounded-md"
                  >
                    افزودن
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
