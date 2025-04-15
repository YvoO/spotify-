import { QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';

import client from '@/services/queryClient';

import { SessionProvider } from './ctx';

export default function RootLayout() {
  return (
    <QueryClientProvider client={client}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </QueryClientProvider>
  );}
