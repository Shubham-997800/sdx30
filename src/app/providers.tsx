'use client';

import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { useState, useEffect, type ReactNode } from 'react';
import { CustomCursor } from '@/components/interaction/CustomCursor';
import { PageLoader } from '@/components/interaction/PageLoader';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 2,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  }
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const queryClient = useState(getQueryClient)[0];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent theme flash
    const root = document.documentElement;
    root.classList.add('no-transition');

    // Page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable transitions after a frame
      requestAnimationFrame(() => {
        root.classList.remove('no-transition');
      });
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <QueryClientProvider client={queryClient}>
        <CustomCursor />
        <PageLoader isLoading={isLoading} />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'var(--card)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
            },
          }}
          richColors
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
