// components/AdminDashboard.tsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "../commponents/Login/SupabaseClient";
import Header from "../commponents/Header";
import Sidebar from "../commponents/Sidebar";
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
};

type Order = {
  id: number;
  product_id: number;
  quantity: number;
  total_price: number;
  created_at: string;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalSales: 0,
    todaySales: 0,
    availableProducts: 0,
    outOfStock: 0,
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = () => {
      if (!location.state?.isAdmin) {
        navigate("/login");
      }
    };

    const fetchData = async () => {
      try {
        // دریافت محصولات
        const { data: productsData } = await supabase
          .from("products")
          .select("*");

        // دریافت سفارشات
        const { data: ordersData } = await supabase
          .from("orders")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5);

        // محاسبه آمار
        setStats({
          totalSales: ordersData?.length || 0,
          todaySales:
            ordersData?.filter(
              (o) =>
                new Date(o.created_at).toDateString() ===
                new Date().toDateString()
            ).length || 0,
          availableProducts:
            productsData?.filter((p) => p.available).length || 0,
          outOfStock: productsData?.filter((p) => !p.available).length || 0,
        });

        setProducts(productsData || []);
        setOrders(ordersData || []);
      } catch (error) {
        console.error("خطا در دریافت داده:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
    fetchData();
  }, [navigate, location]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const toggleAvailability = async (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const { error } = await supabase
      .from("products")
      .update({ available: !product.available })
      .eq("id", productId);

    if (!error) {
      setProducts(
        products.map((p) =>
          p.id === productId ? { ...p, available: !p.available } : p
        )
      );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* نوار بالایی */}

      <div className="">
        <Header />
        <Sidebar />
      </div>

      {/* محتوای اصلی */}
      <main className="container mx-auto px-4 py-8">
        {/* کارت‌های آماری */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="فروش کل"
            value={stats.totalSales}
            color="bg-green-100"
          />
          <StatCard
            title="فروش امروز"
            value={stats.todaySales}
            color="bg-blue-100"
          />
          <StatCard
            title="محصولات موجود"
            value={stats.availableProducts}
            color="bg-yellow-100"
          />
          <StatCard
            title="ناموجود"
            value={stats.outOfStock}
            color="bg-red-100"
          />
        </div>

        {/* آخرین سفارشات */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">آخرین سفارشات</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">شماره سفارش</th>
                  <th className="py-2 px-4">محصول</th>
                  <th className="py-2 px-4">تعداد</th>
                  <th className="py-2 px-4">مبلغ</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const product = products.find(
                    (p) => p.id === order.product_id
                  );
                  return (
                    <tr key={order.id} className="border-b">
                      <td className="py-2 px-4">{order.id}</td>
                      <td className="py-2 px-4">{product?.name || "نامشخص"}</td>
                      <td className="py-2 px-4">{order.quantity}</td>
                      <td className="py-2 px-4">
                        {order.total_price.toLocaleString()} تومان
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* مدیریت محصولات */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">مدیریت محصولات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="my-2">{product.price.toLocaleString()} تومان</p>
                <button
                  onClick={() => toggleAvailability(product.id)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    product.available
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.available ? "موجود" : "ناموجود"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// کامپوننت کارت آماری
function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className={`${color} p-6 rounded-lg`}>
      <h3 className="text-gray-600">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
