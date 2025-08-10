"use client";

import ReactQueryProvider from "./ReactQueryProvider";
import UserProvider from "./UserProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: AppProviderProps) {
  return (
    <ReactQueryProvider>
      <UserProvider>{children}</UserProvider>
    </ReactQueryProvider>
  );
}
