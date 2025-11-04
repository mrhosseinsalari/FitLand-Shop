"use client";

import { completeProfileApi } from "@/services/authService";
import Loading from "@/ui/Loading";
import MoveBackBtn from "@/ui/MoveBackBtn";
import RHFTextField from "@/ui/RHFTextField";
import { handleError } from "@/utils/handleError";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

type FormInputs = { name: string; email: string };

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است")
      .max(30)
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
  })
  .required();

const CompleteProfileForm: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const { isPending, mutateAsync: completeProfile } = useMutation({
    mutationFn: completeProfileApi,
  });

  const onSubmit = async (data: FormInputs) => {
    try {
      const { message } = await completeProfile(data);
      toast.success(message);
      router.push("/");
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div>
      <h2 className="authForm__title">تکمیل اطلاعات</h2>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          placeholder="نام خود را به فارسی وارد کنید"
          register={register}
          errors={errors}
          required
        />
        <RHFTextField
          label="ایمیل"
          name="email"
          placeholder="Example@gmail.com"
          register={register}
          errors={errors}
          required
        />
        {isPending ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </form>
      <div className="mt-6 hidden lg:block">
        <MoveBackBtn>
          <span className="font-semibold text-neutral-800">صفحه قبلی</span>
        </MoveBackBtn>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
