import React, { useState, useMemo } from "react";
import { useCart } from "../context/CartContext";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Footer from "../commponents/Footer";
import deliveryPrices from "../data/deliveryPrices";
import { useNavigate } from "react-router-dom";
import {
  Trash2,
  MapPin,
  Wallet,
  CreditCard,
  Truck,
  Receipt,
} from "lucide-react";

export default function Cart() {
  const { lines, changeQty, removeFromCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<"inPerson" | "online">(
    "inPerson"
  );

  // شهر/منطقه برای محاسبه ارسال
  const [city, setCity] = useState("تهران");
  const [district, setDistrict] = useState("");

  const [note, setNote] = useState("");
  const navigate = useNavigate();

  // محاسبه قیمت‌ها با در نظر گرفتن تخفیف
  const { subtotal, totalDiscount, originalSubtotal } = useMemo(() => {
    return lines.reduce(
      (acc, { item, qty }) => {
        const originalPrice = item.price;
        const discountedPrice = item.discountPrice ?? originalPrice;
        const itemOriginalTotal = originalPrice * qty;
        const itemDiscountedTotal = discountedPrice * qty;

        return {
          subtotal: acc.subtotal + itemDiscountedTotal,
          totalDiscount:
            acc.totalDiscount + (itemOriginalTotal - itemDiscountedTotal),
          originalSubtotal: acc.originalSubtotal + itemOriginalTotal,
        };
      },
      { subtotal: 0, totalDiscount: 0, originalSubtotal: 0 }
    );
  }, [lines]);

  // هزینه ارسال بر اساس دیتای deliveryPrices.ts
  const shippingCost = useMemo(() => {
    if (!city || !district) return 0;
    return deliveryPrices[city]?.[district] ?? 0;
  }, [city, district]);

  // جمع کل
  const total = subtotal + shippingCost;

  const handleMenu = () => {
    navigate("/Menu");
  };

  const handleGoToPayment = () => {
    navigate("/payment", { state: { total } });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      <MobileNavbar />

      <main className="flex-1 px-4 py-6 max-w-6xl mx-auto w-full">
        {lines.length === 0 ? (
          <div className="border border-emerald-200 bg-emerald-50 w-full h-64 md:h-96 flex flex-col justify-center items-center rounded-xl shadow-sm">
            <p className="text-emerald-700 text-center mb-4">
              شما درحال حاضر هیچ سفارشی ثبت نکرده‌اید!؟
            </p>
            <button
              onClick={handleMenu}
              className="w-36 h-11 bg-emerald-600 hover:bg-emerald-700 text-white shadow-md rounded-lg transition-all"
            >
              منوی رستوران
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* سمت چپ: سبد خرید با اسکرول + صورتحساب */}
            <div className="lg:w-1/3 flex flex-col space-y-3">
              {/* لیست محصولات با اسکرول */}
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar">
                {lines.map(({ item, qty }) => {
                  const originalPrice = item.price;
                  const price = item.discountPrice ?? originalPrice;
                  const hasDiscount =
                    item.discountPrice && item.discountPrice < originalPrice;

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-white rounded-xl border border-emerald-100 shadow-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover border border-emerald-200"
                      />
                      <div className="flex-1 mx-3">
                        <h3 className="font-semibold text-emerald-800">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {hasDiscount ? (
                            <>
                              <p className="text-sm text-emerald-600">
                                {price.toLocaleString("fa-IR")} تومان
                              </p>
                              <p className="text-sm text-gray-400 line-through">
                                {originalPrice.toLocaleString("fa-IR")}
                              </p>
                            </>
                          ) : (
                            <p className="text-sm text-emerald-600">
                              {price.toLocaleString("fa-IR")} تومان
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-1">
                          <button
                            className="px-2 bg-emerald-200 rounded"
                            onClick={() => changeQty(item.id, qty + 1)}
                          >
                            +
                          </button>
                          <span className="px-2">{qty}</span>
                          <button
                            className="px-2 bg-emerald-200 rounded"
                            onClick={() =>
                              qty > 1 ? changeQty(item.id, qty - 1) : null
                            }
                          >
                            -
                          </button>
                        </div>
                        <button
                          className="text-red-500 hover:text-red-600 mt-1"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* صورتحساب */}
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 shadow-md">
                <h4 className="font-bold text-emerald-700 mb-2 flex items-center gap-2">
                  <Receipt size={18} /> صورتحساب
                </h4>

                {totalDiscount > 0 && (
                  <div className="flex justify-between text-gray-500 text-sm">
                    <span>قیمت اصلی</span>
                    <span className="line-through">
                      {originalSubtotal.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                )}

                {totalDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 mt-1">
                    <span>تخفیف</span>
                    <span className="text-red-500">
                      -{totalDiscount.toLocaleString("fa-IR")} تومان
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-emerald-700 mt-2">
                  <span>جمع کل</span>
                  <span>{subtotal.toLocaleString("fa-IR")} تومان</span>
                </div>

                <div className="flex justify-between text-emerald-700 mt-1">
                  <span>
                    <Truck size={16} className="inline mr-1" />
                    هزینه ارسال
                  </span>
                  <span>
                    {shippingCost > 0
                      ? `${shippingCost.toLocaleString("fa-IR")} تومان`
                      : "—"}
                  </span>
                </div>

                <div className="flex justify-between font-extrabold text-emerald-900 mt-2 border-t pt-2">
                  <span>مجموع پرداختی</span>
                  <span>{total.toLocaleString("fa-IR")} تومان</span>
                </div>

                <button
                  onClick={handleGoToPayment}
                  className="mt-4 w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white py-2 shadow-md"
                >
                  پرداخت
                </button>
              </div>
            </div>

            {/* سمت راست: روش ارسال، آدرس (شهر/منطقه)، توضیحات */}
            <div className="lg:w-2/3 space-y-4">
              <div className="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">
                <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  <Wallet size={18} /> روش ارسال
                </h4>
                <div className="flex gap-4">
                  <button
                    className={`flex-1 py-2 rounded-lg border transition ${
                      deliveryMethod === "inPerson"
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-50 border-emerald-300 text-emerald-800"
                    }`}
                    onClick={() => setDeliveryMethod("inPerson")}
                  >
                    حضوری
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-lg border transition ${
                      deliveryMethod === "online"
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-50 border-emerald-300 text-emerald-800"
                    }`}
                    onClick={() => setDeliveryMethod("online")}
                  >
                    اینترنتی <CreditCard className="inline ml-2" size={16} />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">
                <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                  <MapPin size={18} /> آدرس
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <select
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      setDistrict("");
                    }}
                    className="w-full px-3 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  >
                    {Object.keys(deliveryPrices).map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none"
                  >
                    <option value="">انتخاب منطقه</option>
                    {city &&
                      Object.keys(deliveryPrices[city]).map((d) => (
                        <option key={d} value={d}>
                          {d} ({deliveryPrices[city][d].toLocaleString("fa-IR")}{" "}
                          تومان)
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-emerald-200 shadow-sm">
                <h4 className="font-bold text-emerald-800 mb-3">
                  توضیحات ارسال
                </h4>
                <textarea
                  placeholder="توضیحات خود را وارد کنید (اختیاری)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full h-24 px-3 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-400 outline-none resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
