import RHFTextField from "@/ui/RHFTextField";

export default function SendOTPForm({ onSubmit, register, errors }) {
  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <RHFTextField
        label="لطفا شماره موبایل خود را وارد کنید"
        name="phoneNumber"
        placeholder="********۰۹"
        register={register}
        errors={errors}
      />
      <button type="submit" className="btn btn--primary w-full">
        ارسال کد تایید
      </button>
    </form>
  );
}
