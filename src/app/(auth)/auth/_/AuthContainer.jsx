"use client";

import { getOtpApi } from "@/services/authService";
import SendOTPForm from "./SendOTPForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import CheckOTPForm from "./CheckOTPForm";
import MoveBackBtn from "@/ui/MoveBackBtn";

const phoneRegExp = /^[0][9][0-9][0-9]{8,8}$/;

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "لطفا شماره همراه خود را به صورت صحیح وارد نمایید"),
  })
  .required();

export default function AuthContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtpApi,
  });

  const sendOTPHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full border-2 border-neutral-200 py-8 px-6 lg:px-8 rounded-lg">
      {/* <SendOTPForm
        onSubmit={handleSubmit(sendOTPHandler)}
        register={register}
        errors={errors}
        isSendingOtp={isSendingOtp}
      /> */}
      <CheckOTPForm />
      <div className="hidden lg:block mt-6">
        <MoveBackBtn size={24} color="var(--color-neutral-800)">
          <span className="font-semibold text-neutral-800">صفحه قبلی</span>
        </MoveBackBtn>
      </div>
    </div>
  );
}
