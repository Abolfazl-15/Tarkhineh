import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Footer from "../commponents/Footer";

export default function PaymentFailed() {
  return (
    <div>
      <Header />
      <MobileNavbar />
      <div className="flex flex-col items-center justify-center h-screen bg-red-50">
        <XCircle className="w-20 h-20 text-red-600 mb-4" />
        <h1 className="text-2xl font-bold mb-2">پرداخت ناموفق</h1>
        <p className="text-gray-600 mb-6">اطلاعات کارت یا رمز نادرست است.</p>
        <Link
          to="/payment"
          className="px-6 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
        >
          تلاش مجدد
        </Link>
      </div>
      <Footer />
    </div>
  );
}
