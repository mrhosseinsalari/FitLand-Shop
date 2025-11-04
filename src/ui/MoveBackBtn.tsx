"use client";

import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRight } from "iconsax-react";
import { ComponentProps, FC } from "react";

type MoveBackBtnProps = {
  size?: number;
  color?: string;
} & ComponentProps<"button">;

const MoveBackBtn: FC<MoveBackBtnProps> = ({
  size = 24,
  color = "var(--color-neutral-800)",
  children,
  onClick,
}) => {
  const moveBack = useMoveBack();

  return (
    <button
      onClick={onClick || moveBack}
      className="flex items-center gap-x-2 py-2"
    >
      <ArrowRight size={size} color={color} />
      {children}
    </button>
  );
};

export default MoveBackBtn;
