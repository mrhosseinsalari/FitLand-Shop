"use client";

import { getOtpApi } from "@/services/authService";
import SendOTPForm from "./SendOTPForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import CheckOTPForm from "./CheckOTPForm";
import { useState } from "react";
import ResendOTPTimer from "./ResendOTPTimer";

const phoneRegExp = /^[0][9][0-9][0-9]{8,8}$/;

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "لطفا شماره همراه خود را به صورت صحیح وارد نمایید"),
  })
  .required();

export default function AuthContainer() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    isPending: isSendingOtp,
    mutateAsync: getOtp,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtpApi,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await getOtp(data);
      toast.success(message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
            errors={errors}
            isSendingOtp={isSendingOtp}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
          >
            <ResendOTPTimer
              otpResponse={otpResponse}
              onReSendOtp={sendOtpHandler}
            />
          </CheckOTPForm>
        );
      default:
        return null;
    }
  };

  return renderSteps();
}
