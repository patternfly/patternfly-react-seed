import * as React from 'react';
import { DashboardLayout } from '@app/components';
import { useDocumentTitle, SwitchWith404, useA11yRouteContainer } from '@app/utils';
import { useRouteMatch, Route } from 'react-router';
import DashboardSimplePage from './DashboardSimplePage';
import DashboardParamsPage from './DashboardParamsPage';

export default function DashboardPage() {
  const { path } = useRouteMatch()!;
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Dashboard');
  return (
    <DashboardLayout {...a11yContainerProps}>
      <SwitchWith404>
        <Route
          path={`${path}/simple`}
        >
          <DashboardSimplePage />
        </Route>
        <Route
          path={`${path}/params/:sample?`}
        >
          <DashboardParamsPage />
        </Route>
      </SwitchWith404>
    </DashboardLayout>
  );
}
