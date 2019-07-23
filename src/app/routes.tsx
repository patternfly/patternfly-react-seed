import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { DynamicImport } from '@app/DynamicImport';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { NotFound } from '@app/NotFound/NotFound';

const getSupportModuleAsync = () => {
  return () => import(/* webpackChunkName: 'support' */ '@app/Support/Support');
};
const Support = () => {
  return (
    <DynamicImport load={getSupportModuleAsync()}>
      {(Component: any) => {
        return Component === null ? <p>loading</p> : <Component.Support />;
      }}
    </DynamicImport>
  );
};

export interface IAppRoute {
  label: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  icon: any;
  exact?: boolean;
  path: string;
}

const routes: IAppRoute[] = [
  {
    component: Dashboard,
    exact: true,
    icon: null,
    label: 'Dashboard',
    path: '/dashboard'
  },
  {
    component: Support,
    exact: true,
    icon: null,
    label: 'Support',
    path: '/support'
  }
];

const AppRoutes = () => (
  <Switch>
    {routes.map(({ path, exact, component }, idx) => (
      <Route path={path} exact={exact} component={component} key={idx} />
    ))}
    <Redirect exact={true} from="/" to="/dashboard" />
    <Route component={NotFound} />
  </Switch>
);

export { AppRoutes, routes };
