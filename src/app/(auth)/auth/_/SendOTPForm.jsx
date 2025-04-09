import Loading from "@/ui/Loading";
import RHFTextField from "@/ui/RHFTextField";

export default function SendOTPForm({
  onSubmit,
  register,
  errors,
  isSendingOtp,
}) {
  return (
    <div>
      <h2 className="authForm__title">ورود | ثبت‌نام</h2>
      <form className="space-y-8" onSubmit={onSubmit}>
        <RHFTextField
          label="لطفا شماره موبایل خود را وارد کنید"
          name="phoneNumber"
          placeholder="*********۰۹"
          register={register}
          errors={errors}
        />
        <div>
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
