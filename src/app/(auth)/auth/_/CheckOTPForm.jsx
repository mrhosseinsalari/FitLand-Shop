import { useState } from "react";
import OTPInput from "react-otp-input";

export default function CheckOTPForm() {
  const [otp, setOtp] = useState("");

  return (
    <div>
      <h2 className="authForm__title">کد تایید را وارد کنید</h2>
      <form className="space-y-8">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input type="number" {...props} />}
          shouldAutoFocus
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "100%",
            maxWidth: "2.8rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid var(--color-neutral-600)",
            borderRadius: "0.5rem",
            fontSize: "1.125rem",
            color: "var(--color-secondary-850)",
          }}
        />
        <div className="flex justify-between items-center font-medium text-sm text-neutral-700">
          <p>کد برای شما ارسال شد</p>
          <div className="flex items-center gap-x-2">
            <button className="text-neutral-400">ارسال مجدد</button>
            <span>01:30</span>
          </div>
        </div>
        <button type="submit" className="btn btn--primary w-full text-lg">
          ثبت
        </button>
      </form>
    </div>
  );
}
