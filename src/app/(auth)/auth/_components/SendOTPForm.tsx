import Loading from "@/ui/Loading";
import RHFTextField from "@/ui/RHFTextField";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormInputs } from "./AuthContainer";
import { FC } from "react";

type SendOTPFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
  isSendingOtp: boolean;
};

const SendOTPForm: FC<SendOTPFormProps> = ({
  onSubmit,
  register,
  errors,
  isSendingOtp,
}) => {
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
        {isSendingOtp ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
};

export default SendOTPForm;
