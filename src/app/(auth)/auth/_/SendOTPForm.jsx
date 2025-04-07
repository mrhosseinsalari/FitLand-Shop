import RHFTextField from "@/ui/RHFTextField";

export default function SendOTPForm({ phoneNumber, onChange }) {
  return (
    <form className="space-y-8">
      <RHFTextField
        label="لطفا شماره موبایل خود را وارد کنید"
        name="phoneNumber"
        placeholder="********۰۹"
        register={() => {}}
      />
      <button type="submit" className="btn btn--primary w-full">
        ادامه
      </button>
    </form>
  );
}
