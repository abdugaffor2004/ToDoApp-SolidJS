/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';

import { App } from './App.tsx';
import { QueryClientProvider } from '@tanstack/solid-query';
import { QueryClient } from '@tanstack/query-core';

const queryClient = new QueryClient();
const root = document.getElementById('root');

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  ),
  root!
);
