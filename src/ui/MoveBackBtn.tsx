"use client";

import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRight } from "iconsax-react";
import { ComponentProps } from "react";

type MoveBackBtnProps = {
  size?: number;
  color?: string;
} & ComponentProps<"button">;

export default function MoveBackBtn({
  size = 24,
  color = "var(--color-neutral-800)",
  children,
  onClick,
}: MoveBackBtnProps) {
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
}
