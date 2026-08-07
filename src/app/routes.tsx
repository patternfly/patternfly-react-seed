import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '@app/Dashboard/Dashboard';
import { Support } from '@app/Support/Support';
import { GeneralSettings } from '@app/Settings/General/GeneralSettings';
import { ProfileSettings } from '@app/Settings/Profile/ProfileSettings';
import { NotFound } from '@app/NotFound/NotFound';

const RhdsDemo = React.lazy(() =>
  import('@app/RhdsDemo/RhdsDemo').then(({ RhdsDemo: Page }) => ({ default: Page })),
);

const RhdsDemoRoute = (
  <React.Suspense fallback={null}>
    <RhdsDemo />
  </React.Suspense>
);

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  element: React.ReactElement;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    element: <Dashboard />,
    exact: true,
    label: 'Dashboard',
    path: '/',
    title: 'PatternFly Seed | Main Dashboard',
  },
  {
    element: <Support />,
    exact: true,
    label: 'Support',
    path: '/support',
    title: 'PatternFly Seed | Support Page',
  },
  {
    element: RhdsDemoRoute,
    exact: true,
    label: 'RHDS',
    path: '/rhds',
    title: 'PatternFly Seed | RHDS Demo',
  },
  {
    label: 'Settings',
    routes: [
      {
        element: <GeneralSettings />,
        exact: true,
        label: 'General',
        path: '/settings/general',
        title: 'PatternFly Seed | General Settings',
      },
      {
        element: <ProfileSettings />,
        exact: true,
        label: 'Profile',
        path: '/settings/profile',
        title: 'PatternFly Seed | Profile Settings',
      },
    ],
  },
];

const flattenedRoutes: IAppRoute[] = routes.reduce(
  (flattened, route) => [...flattened, ...(route.routes ? route.routes : [route])],
  [] as IAppRoute[],
);

const AppRoutes = (): React.ReactElement => (
  <Routes>
    {flattenedRoutes.map(({ path, element }, idx) => (
      <Route path={path} element={element} key={idx} />
    ))}
    <Route element={<NotFound />} />
  </Routes>
);

export { AppRoutes, routes };
