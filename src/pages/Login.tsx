import Logo from "../images/Logo.png";
import { useState, useEffect } from "react";
import { supabase } from "../commponents/Login/SupabaseClient";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // بررسی سشن قبلی کاربر
  useEffect(() => {
    const checkSession = async () => {
      const isAdminLoggedIn = localStorage.getItem("isAdmin");
      if (isAdminLoggedIn === "true") {
        navigate("/admin-dashboard");
        return;
      }

      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/user-dashboard");
      }
    };

    checkSession();

    // گوش دادن به تغییرات سشن (بعد از رفرش یا ورود)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          navigate("/user-dashboard");
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [navigate]);

  // ورود کاربر
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ورود ادمین
      if (email === "admin1387@gmail.com" && password === "admin-1387") {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin-dashboard", { state: { isAdmin: true } });
        return;
      }

      // ورود کاربر عادی
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      navigate("/user-dashboard");
    } catch {
      setError("ایمیل یا رمز عبور نامعتبر است");
    } finally {
      setLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        {/* هدر فرم */}
        <div className="bg-white py-6 text-center">
          <img src={Logo} alt="Logo" className="ml-auto mr-auto" />
        </div>

        {/* بدنه فرم */}
        <div className="p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center justify-end">
              <span>{error}</span>
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-right">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ایمیل
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-right"
                placeholder="لطفاً آدرس ایمیل خود را وارد کنید"
                required
                dir="rtl"
              />
            </div>

            <div className="text-right">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                رمز عبور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-right"
                  placeholder="لطفاً رمز خود را وارد کنید"
                  required
                  dir="rtl"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute left-3 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition ${
                loading ? "opacity-50" : ""
              }`}
            >
              {loading ? "در حال ورود..." : "ورود"}
            </button>
          </form>

          {/* لینک ثبت نام */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              حساب کاربری ندارید؟
              <Link
                to="/signup"
                className="text-green-600 hover:text-green-800 font-medium"
              >
                ثبت نام کنید
              </Link>{" "}
            </p>
            <p className="font-sans w-80 relative top-3 text-center text-xs md:text-sm md:w-full">
              ورود و عضویت در ترخینه به منزله قبول
              <a className="text-green-600" href="/ghavanin">
                {" "}
                قوانین و مقررات{" "}
              </a>
              است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
