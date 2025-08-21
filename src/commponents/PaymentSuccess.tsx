import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Footer from "../commponents/Footer";

export default function PaymentSuccess() {
  return (
    <div>
      <Header />
      <MobileNavbar />

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">پرداخت با موفقیت انجام شد</h1>
        <p className="text-gray-600 mb-6">سفارش شما ثبت گردید.</p>
        <Link
          to="/"
          className="px-6 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
      <Footer />
    </div>
  );
}
