"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";

export default function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="w-full border-2 border-neutral-200 py-8 px-6 lg:px-8 rounded-lg">
      <h2 className="text-lg mb-8 font-semibold lg:text-2xl lg:font-medium">
        ورود | ثبت‌نام
      </h2>
      <SendOTPForm phoneNumber={phoneNumber} onChange={phoneNumberHandler} />
    </div>
  );
}
