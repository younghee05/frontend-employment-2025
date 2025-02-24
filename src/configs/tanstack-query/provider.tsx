'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// QueryClient 생성
const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export function TanstackQueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
