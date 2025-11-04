"use client";

import ProgressBar from "@/ui/ProgressBar";
import useGetUser from "@/hooks/useGetUser";
import { FC } from "react";

type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const { isLoading } = useGetUser();

  return (
    <>
      <ProgressBar isLoading={isLoading} />
      {children}
    </>
  );
};

export default UserProvider;
