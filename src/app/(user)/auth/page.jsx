export const metadata = {
  title: "ورود / ثبت نام",
};

function AuthPage() {
  return (
    <div className="w-full border-2 border-neutral-200 py-8 px-6 lg:px-8 rounded-lg">
      <h2 className="text-lg mb-8 font-semibold lg:text-2xl lg:font-medium">
        ورود | ثبت‌نام
      </h2>
      <form className="space-y-8">
        <div className="text-sm font-medium lg:text-base">
          <label className="mb-2 block text-neutral-700">
            لطفا شماره موبایل خود را وارد کنید
          </label>
          <input
            type="text"
            placeholder="********۰۹"
            className="textField__input"
          />
        </div>
        <button type="submit" className="btn btn--primary w-full">
          ادامه
        </button>
      </form>
    </div>
  );
}

export default AuthPage;
