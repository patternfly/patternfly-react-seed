import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { Redirect, useHistory } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import { AppLayout, LazyRoute, SwitchWith404 } from '@app/utils';
import '@app/app.css';

export const App: React.FunctionComponent = () => {
  const history = useHistory();
  return (
    <AppLayout
      logo={'Patternfly Seed'}
      logoProps={{
        onClick: () => history.push('/')
      }}
      navVariant={'vertical'}
      navItems={[
        {
          title: 'Dashboard',
          to: '/dashboard',
          items: [
            { to: '/dashboard/simple', title: 'Simple' },
            {},
            { to: '/dashboard/params', title: 'Params: empty', exact: true },
            { to: '/dashboard/params/hello', title: 'Params: hello', exact: true },
          ],
        },
        { to: '/support', title: 'Support' },
        {},
        { to: '/broken', title: 'Broken link' },
      ]}
      navGroupsStyle={'expandable'}
    >
      <LastLocationProvider>
        <SwitchWith404>
          <Redirect from={'/'} to={'/dashboard'} exact={true} />
          <LazyRoute
            path='/dashboard'
            getComponent={() => import(/* webpackChunkName: 'dashboard-page' */ '@app/pages/DashboardPage')}
          >
            {({ component: DashboardPage }) =>
              <DashboardPage />
            }
          </LazyRoute>
          <LazyRoute
            path='/support'
            getComponent={() => import(/* webpackChunkName: 'support-page' */ '@app/pages/SupportPage')}
          >
            {({ component: SupportPage }) =>
              <SupportPage />
            }
          </LazyRoute>
        </SwitchWith404>
      </LastLocationProvider>
    </AppLayout>
  );
};
