import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../commponents/Header";
import MobileNavbar from "../commponents/Sidebar";
import Footer from "../commponents/Footer";
import Logo from "../images/Logo.png";
export default function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const { clearCart } = useCart();
  const [cvv2, setCvv2] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptchaCode(code);
  };

  const formatCardNumber = (value: string) => {
    // Remove all non-digit characters
    const v = value.replace(/\D/g, "").substring(0, 16);
    // Add a space after every 4 digits
    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substring(i, i + 4));
    }
    return parts.join(" ");
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Remove all non-digit characters
    const numericValue = input.replace(/\D/g, "");
    // Format the card number with spaces
    const formattedValue = formatCardNumber(numericValue);
    setCardNumber(formattedValue);
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Remove spaces from card number for validation
    const cleanedCardNumber = cardNumber.replace(/\s/g, "");
    if (
      cleanedCardNumber === "6037112345678900" &&
      cvv2 === "211" &&
      password === "1234" &&
      captchaInput === captchaCode
    ) {
      navigate("/payment-success");
      clearCart();
    } else {
      navigate("/payment-failed");
    }
  };

  return (
    <div>
      <Header />
      <MobileNavbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handlePayment}
          className="bg-white p-6 rounded-xl shadow-lg w-96 space-y-4"
        >
          <img src={Logo} alt="Logo" className="ml-auto mr-auto" />
          <h4 className="text-center direction-rtl font-sans font-bold">
            درگاه پرداخت ترخینه
          </h4>
          <div>
            <label className="block text-sm mb-1">شماره کارت</label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full border rounded p-2 direction-ltr text-right"
              placeholder="شماره کارت خود را وارد کنید"
              maxLength={19} // 16 digits + 3 spaces
            />
          </div>

          <div>
            <label className="block text-sm mb-1">CVV2</label>
            <input
              type="text"
              value={cvv2}
              onChange={(e) => setCvv2(e.target.value.replace(/\D/g, ""))}
              className="w-full border rounded p-2 direction-ltr text-right"
              placeholder="CVV2 را وارد کنید"
              maxLength={4}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">رمز دوم / پویا</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(/\D/g, ""))}
              className="w-full border rounded p-2 direction-ltr text-right"
              placeholder="رمز دوم یا پویای خود را وارد کنید "
              maxLength={6}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">کد امنیتی</label>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="bg-gray-200 px-4 py-2 rounded font-bold text-lg">
                {captchaCode}
              </span>
              <button
                type="button"
                onClick={generateCaptcha}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                🔄
              </button>
            </div>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="w-full border rounded p-2 mt-2 direction-ltr text-right"
              placeholder="کد امنیتی را وارد کنید"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            پرداخت
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
