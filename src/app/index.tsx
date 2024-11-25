import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRouter } from '@app/Router';
import '@app/app.css';
import '@patternfly/react-core/dist/styles/base.css';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FunctionComponent = () => (
  <Router>
    <AppLayout>
      <AppRouter />
    </AppLayout>
  </Router>
);

export default App;
