"use client";

import ProgressBar from "@/ui/ProgressBar";
import useGetUser from "@/hooks/useGetUser";

type UserProviderProps = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
  const { isLoading } = useGetUser();

  return (
    <>
      <ProgressBar isLoading={isLoading} />
      {children}
    </>
  );
}
