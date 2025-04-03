export const metadata = {
  title: "ورود / ثبت نام",
};

function AuthPage() {
  return (
    <div className="w-full">
      <h2 className="text-center text-xl mb-8 font-medium">ورود / ثبت‌نام</h2>

      <p className="text-center text-sm mb-4 text-gray-600">
        لطفا شماره موبایل یا ایمیل خود را وارد کنید
      </p>

      {/* Login Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="********** یا Example@gmail.com"
          className="w-full p-3 border border-gray-300 rounded-lg text-right"
          dir="rtl"
        />

        <button
          type="submit"
          className="w-full bg-[#FF5722] text-white py-3 rounded-lg font-medium"
        >
          ادامه
        </button>
      </form>

      {/* Terms and Conditions */}
      <p className="text-center text-xs text-gray-500 mt-4">
        ورود شما به معنای پذیرش شرایط فیت لند و قوانین حریم خصوصی ماست
      </p>
    </div>
  );
}

export default AuthPage;
