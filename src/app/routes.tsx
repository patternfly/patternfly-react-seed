import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { DynamicImport } from '@app/DynamicImport';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { NotFound } from '@app/NotFound/NotFound';
import DocumentTitle from 'react-document-title';

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

const RouteWithTitleUpdates = ({
  component: Component,
  title,
  ...rest
}) => {
  function routeWithTitle(routeProps) {
    return (
      <DocumentTitle title={title}>
        <Component {...routeProps} />
      </DocumentTitle>
    )
  }
  return (
    <Route {...rest} render={routeWithTitle} />
  );
}

export interface IAppRoute {
  label: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  icon: any;
  exact?: boolean;
  path: string;
  title: string;
}

const routes: IAppRoute[] = [
  {
    component: Dashboard,
    exact: true,
    icon: null,
    label: 'Dashboard',
    path: '/dashboard',
    title: 'Main Dashboard Title'
  },
  {
    component: Support,
    exact: true,
    icon: null,
    label: 'Support',
    path: '/support',
    title: 'Support Page Title'
  }
];

const AppRoutes = () => (
  <Switch>
    {routes.map(({ path, exact, component, title }, idx) => (
      <RouteWithTitleUpdates
        path={path}
        exact={exact}
        component={component}
        key={idx}
        title={title} />
    ))}
    <Redirect exact={true} from="/" to="/dashboard" />
    <RouteWithTitleUpdates component={NotFound} title={'404 Page Not Found'} />
  </Switch>
);

export { AppRoutes, routes };
