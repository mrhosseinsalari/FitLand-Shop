import TextField from "@/ui/TextField";

export default function SendOTPForm({ phoneNumber, onChange }) {
  return (
    <form className="space-y-8">
      <TextField
        label="لطفا شماره موبایل خود را وارد کنید"
        name="phoneNumber"
        placeholder="********۰۹"
        value={phoneNumber}
        onChange={onChange}
      />
      <button type="submit" className="btn btn--primary w-full">
        ادامه
      </button>
    </form>
  );
}
