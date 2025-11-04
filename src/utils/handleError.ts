import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const handleError = (error: unknown) => {
  const err = error as AxiosError<{ message?: string }>;

  const message =
    err.response?.data?.message || err?.message || "خطایی رخ داده است";

  toast.error(message);
};
