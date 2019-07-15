import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Alert, PageSection } from '@patternfly/react-core';
import { DynamicImport } from '@app/DynamicImport';
import { accessibleRouteChangeHandler } from '@app/utils/utils';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { NotFound } from '@app/NotFound/NotFound';
import DocumentTitle from 'react-document-title';

const getSupportModuleAsync = () => {
  return () => import(/* webpackChunkName: 'support' */ '@app/Support/Support');
};

const Support = (routeProps: RouteComponentProps) => {
  return (
    <DynamicImport load={getSupportModuleAsync()}>
      {(Component: any) => {
          let loadedComponent: any;
          if (Component === null) {
            loadedComponent = (
              <PageSection aria-label="Loading Content Container">
                <div className="pf-l-bullseye">
                  <Alert title="Loading" className="pf-l-bullseye__item" />
                </div>
              </PageSection>
            );
          } else {
            loadedComponent = <Component.Support {...routeProps} />;
          }
          return loadedComponent
      }}
    </DynamicImport>
  );
};

const RouteWithTitleUpdates = ({
  component: Component,
  isAsync = false,
  title,
  ...rest
}) => {
  function routeWithTitle(routeProps: RouteComponentProps) {
    return (
      <DocumentTitle title={title}>
        <Component {...routeProps} />
      </DocumentTitle>
    )
  }

  React.useEffect(() => {
    if (!isAsync) {
      accessibleRouteChangeHandler()
    }
  }, []);

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
  isAsync?: boolean;
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
    isAsync: true,
    label: 'Support',
    path: '/support',
    title: 'Support Page Title'
  }
];

const AppRoutes = () => (
  <Switch>
    {routes.map(({ path, exact, component, title, isAsync }, idx) => (
      <RouteWithTitleUpdates
        path={path}
        exact={exact}
        component={component}
        key={idx}
        title={title}
        isAsync={isAsync} />
    ))}
    <Redirect exact={true} from="/" to="/dashboard" />
    <RouteWithTitleUpdates component={NotFound} title={'404 Page Not Found'} />
  </Switch>
);

export { AppRoutes, routes };
