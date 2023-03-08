import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import { QueryClientProvider, QueryClient } from 'react-query';
import JobsProvider from './contexts/Jobs';
import CityProvider from './contexts/City';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JobsProvider>
        <CityProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </CityProvider>
      </JobsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
