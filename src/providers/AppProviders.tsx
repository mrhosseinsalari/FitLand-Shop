"use client";

import { FC } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import UserProvider from "./UserProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProviders: FC<AppProviderProps> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <UserProvider>{children}</UserProvider>
    </ReactQueryProvider>
  );
};

export default AppProviders;
