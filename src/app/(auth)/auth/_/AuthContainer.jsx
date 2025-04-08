"use client";

import { getOtpApi } from "@/services/authService";
import SendOTPForm from "./SendOTPForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

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
      <h2 className="text-lg mb-8 font-semibold lg:text-2xl lg:font-medium">
        ورود | ثبت‌نام
      </h2>
      <SendOTPForm
        onSubmit={handleSubmit(sendOTPHandler)}
        register={register}
        errors={errors}
        isSendingOtp={isSendingOtp}
      />
    </div>
  );
}
