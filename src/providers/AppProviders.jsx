"use client";

import ReactQueryProvider from "./ReactQueryProvider";
import UserProvider from "./UserProvider";

export default function AppProviders({ children }) {
  return (
    <ReactQueryProvider>
      <UserProvider>{children}</UserProvider>
    </ReactQueryProvider>
  );
}
