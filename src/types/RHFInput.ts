import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type RHFInputProps<TFieldValues extends FieldValues> = {
  type?: string;
  label: string;
  name: Path<TFieldValues>;
  dir?: "rtl" | "ltr";
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  isRequired?: boolean;
  validationSchema?: RegisterOptions<TFieldValues>;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
