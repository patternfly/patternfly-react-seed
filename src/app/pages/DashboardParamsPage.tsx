import * as React from 'react';
import { useDocumentTitle, useBreadcrumb, useA11yRouteContainer } from '@app/utils';
import { DashboardParams } from '@app/components';
import { useParams } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const a11yContainerProps = useA11yRouteContainer();
  const { sample } = useParams<{ sample?: string }>();
  useDocumentTitle('Dashboard - Params');
  const getBreadcrumb = React.useCallback(() => (
    <Breadcrumb>
      <BreadcrumbItem><Link to='/dashboard'>Dashboard</Link></BreadcrumbItem>
      <BreadcrumbItem isActive={true}>
        Params
      </BreadcrumbItem>
    </Breadcrumb>
  ), []);
  useBreadcrumb(getBreadcrumb);
  return (
    <DashboardParams sample={sample || 'empty'} {...a11yContainerProps} />
  );
}
