export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  placeholder,
  register,
  errors,
  required,
  validationSchema = {},
  ...rest
}) {
  const hasError = errors && errors[name];

  return (
    <div className="text-sm font-medium lg:text-base">
      <label className="mb-2 block text-neutral-700" htmlFor={name}>
        {label} {required && <span className="text-error-500">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        className={`textField__input ${hasError ? "textField--invalid" : ""} ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        name={name}
        id={name}
        dir={dir}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && (
        <span className="text-error-800 block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
