import { useEffect, useState } from "react";

const RESEND_TIME = 90;

export default function ResendOTPTimer({ otpResponse, onReSendOtp }) {
  const [time, setTime] = useState(RESEND_TIME);

  const isTimePositive = time > 0;
  const timeMinutes = String(Math.trunc(time / 60)).padStart(2, 0);
  const timeSecond = String(Math.trunc(time % 60)).padStart(2, 0);

  useEffect(() => {
    const timer =
      isTimePositive && setInterval(() => setTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const handleClick = () => {
    onReSendOtp({ phoneNumber: otpResponse?.phoneNumber });
    setTime(RESEND_TIME);
  };

  return (
    <div
      className={`flex flex-col gap-y-2 font-medium text-sm 
      ${isTimePositive ? "text-neutral-700" : "text-neutral-400"}`}
    >
      {otpResponse && <p>{otpResponse?.message}</p>}
      <div className="flex items-center gap-x-2">
        <button
          onClick={handleClick}
          disabled={isTimePositive}
          className={`py-2 ${
            isTimePositive ? "text-neutral-400" : "text-primary-main"
          }`}
        >
          ارسال مجدد
        </button>
        <span>
          {timeMinutes}:{timeSecond}
        </span>
      </div>
    </div>
  );
}
