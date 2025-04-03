"use client";

import useMoveBack from "@/hooks/useMoveBack";
import { ArrowRight } from "iconsax-react";

export default function MoveBack() {
  const moveBack = useMoveBack();

  return (
    <button
      onClick={moveBack}
      className="flex items-center justify-center py-2"
    >
      <ArrowRight size={32} color="#717171" />
    </button>
  );
}
