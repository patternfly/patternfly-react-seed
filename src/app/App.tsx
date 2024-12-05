import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRouter } from '@app/Router';
import '@app/app.css';
import { Auth0Provider } from '@auth0/auth0-react';
import '@patternfly/react-core/dist/styles/base.css';
import { QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { queryClient } from './queryClient';
import { config } from 'src/config';

const App: React.FunctionComponent = () => {
  React.useEffect(() => config.dateConfig(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain="dev-5qtc1u8vxnkci4p2.us.auth0.com"
        clientId="skHrwdIjywQZSeYtkxbo8Mb1uzGJPBoB"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Router>
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </Router>
      </Auth0Provider>
    </QueryClientProvider>
  );
};

export default App;
