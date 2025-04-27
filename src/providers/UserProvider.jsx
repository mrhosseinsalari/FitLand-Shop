"use client";

import ProgressBar from "@/ui/ProgressBar";
import useGetUser from "@/hooks/useGetUser";

export default function UserProvider({ children }) {
  const { isLoading } = useGetUser();

  return (
    <>
      <ProgressBar isLoading={isLoading} />
      {children}
    </>
  );
}
