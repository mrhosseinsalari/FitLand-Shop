import { checkOtpApi } from "@/services/authService";
import CustomOtpInput from "@/ui/CustomOtpInput";
import Loading from "@/ui/Loading";
import MoveBackBtn from "@/ui/MoveBackBtn";
import { handleError } from "@/utils/handleError";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC, FormEvent, MouseEventHandler, ReactNode, useState } from "react";
import toast from "react-hot-toast";

type CheckOTPFormProps = {
  phoneNumber: string;
  onBack: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const CheckOTPForm: FC<CheckOTPFormProps> = ({
  phoneNumber,
  onBack,
  children,
}) => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const { isPending, mutateAsync: checkOtp } = useMutation({
    mutationFn: checkOtpApi,
  });

  const checkOtpHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { message, user } = await checkOtp({ phoneNumber, otp });
      toast.success(message);

      if (user.isActive) {
        router.push("/");
      } else {
        router.push("/complete-profile");
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div>
      <h2 className="authForm__title">کد تایید را وارد کنید</h2>
      <form className="space-y-6" onSubmit={checkOtpHandler}>
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
        <MoveBackBtn onClick={onBack}>
          <span className="font-semibold text-neutral-800">مرحله قبلی</span>
        </MoveBackBtn>
      </div>
    </div>
  );
};

export default CheckOTPForm;
