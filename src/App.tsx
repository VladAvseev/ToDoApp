import React, { JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigator } from "./Navigator";

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};
