/* eslint-disable @typescript-eslint/camelcase */
import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';
import { LocaleContext } from './LocaleContext';

const App: React.FunctionComponent = () => {
  const { locale } = React.useContext(LocaleContext);

  return (
    <>
      <div>Current locale: {locale}</div>
      <Router>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </Router>
    </>
  );
};

export { App };
