import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/index';
import { Auth0Provider } from '@auth0/auth0-react';

if (process.env.NODE_ENV !== 'production') {
  const config = {
    rules: [
      {
        id: 'color-contrast',
        enabled: false,
      },
    ],
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000, config);
}

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <Auth0Provider
    domain="dev-5qtc1u8vxnkci4p2.us.auth0.com"
    clientId="skHrwdIjywQZSeYtkxbo8Mb1uzGJPBoB"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
);
