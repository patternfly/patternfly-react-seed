import * as React from 'react';
import { useDocumentTitle, useBreadcrumb, useA11yRouteContainer } from '@app/utils';
import { DashboardSimple } from '@app/components';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const a11yContainerProps = useA11yRouteContainer();
  useDocumentTitle('Dashboard - Simple');
  const getBreadcrumb = React.useCallback(() => (
    <Breadcrumb>
      <BreadcrumbItem><Link to='/dashboard'>Dashboard</Link></BreadcrumbItem>
      <BreadcrumbItem isActive={true}>
        Simple
      </BreadcrumbItem>
    </Breadcrumb>
  ), []);
  useBreadcrumb(getBreadcrumb);
  return (
    <DashboardSimple {...a11yContainerProps} />
  );
}
