import { checkOtpApi } from "@/services/authService";
import CustomOtpInput from "@/ui/CustomOtpInput";
import Loading from "@/ui/Loading";
import MoveBackBtn from "@/ui/MoveBackBtn";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CheckOTPForm({ phoneNumber, onBack, children }) {
  const [otp, setOtp] = useState("");

  const { isPending, mutateAsync: checkOtp } = useMutation({
    mutationFn: checkOtpApi,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message } = await checkOtp({ phoneNumber, otp });
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h2 className="authForm__title">کد تایید را وارد کنید</h2>
      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <CustomOtpInput value={otp} onChange={setOtp} />
        {children}
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full text-lg">
            ثبت
          </button>
        )}
      </form>
      <div className="mt-6">
        <MoveBackBtn
          size={24}
          color="var(--color-neutral-800)"
          onClick={onBack}
        >
          <span className="font-semibold text-neutral-800">مرحله قبلی</span>
        </MoveBackBtn>
      </div>
    </div>
  );
}
