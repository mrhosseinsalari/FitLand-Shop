"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

type ReactQueryProviderProps = {
  children: React.ReactNode;
};

// Create a client
const queryClient = new QueryClient();

const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
