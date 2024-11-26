import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000, // default is 0 milliseconds
      refetchOnMount: 'always', // RQ default is true
      refetchInterval: false, // default is false
      refetchOnWindowFocus: true, // default is true,
    },
  },
});
