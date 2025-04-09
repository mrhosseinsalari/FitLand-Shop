"use client";

import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRight } from "iconsax-react";

export default function MoveBackBtn({ size, color, children }) {
  const moveBack = useMoveBack();

  return (
    <button onClick={moveBack} className="flex items-center gap-x-2 py-2">
      <ArrowRight size={size} color={color} />
      {children}
    </button>
  );
}
