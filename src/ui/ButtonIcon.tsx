import { ComponentProps } from "react";

const btnType = {
  primary:
    "bg-primary-main text-neutral-white stroke-neutral-white hover:bg-primary-600",
  neutral:
    "bg-neutral-white text-neutral-800 stroke-neutral-800 hover:bg-neutral-100",
};

type ButtonIconProps = {
  variant: "primary" | "neutral";
} & ComponentProps<"button">;

function ButtonIcon({
  children,
  className,
  variant,
  ...rest
}: ButtonIconProps) {
  return (
    <button
      className={`${btnType[variant]} ${className} flex items-center justify-center 
      transition-all duration-300 ease-out gap-x-2 rounded-xl p-2 sm:p-3 text-sm lg:text-base
      [&>svg:first-child]:w-6 [&>svg:first-child]:h-6 [&>svg:first-child]:stroke-inherit`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
