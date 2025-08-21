import { supabase } from "./SupabaseClient";

async function createAdminUser() {
  const email = "admin1387@gmail.com";
  const password = "Abolfazl-1387";

  // 1. ثبت نام کاربر
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("خطا در ایجاد ادمین:", error.message);
    return;
  }

  // 2. تنظیم نقش ادمین
  if (data.user) {
    const { error: dbError } = await supabase.from("users").upsert({
      id: data.user.id,
      email: data.user.email,
      role: "admin",
    });

    if (dbError) {
      console.error("خطا در تنظیم نقش:", dbError.message);
    } else {
      console.log("✅ حساب ادمین با موفقیت ایجاد شد!");
      console.log("ایمیل:", email);
      console.log("رمز عبور:", password);
    }
  }
}

createAdminUser();
