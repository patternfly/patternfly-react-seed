import * as React from 'react';
import { Link } from 'react-router-dom';
import { PageSection, Title, EmptyState, EmptyStateVariant, Button, EmptyStateSecondaryActions, Text, TextContent } from '@patternfly/react-core';

export const DashboardLayout: React.FunctionComponent<any> = ({ children, ...props }) => {
  return (
    <>
      <PageSection variant={'light'} {...props}>
        <TextContent>
          <Title headingLevel="h1" size="3xl">
            Dashboard
          </Title>
          <Text>This page shows how to implement nested routes.</Text>
        </TextContent>
      </PageSection>
      <PageSection>
        <EmptyState variant={EmptyStateVariant.full}>
          <Link to={'/dashboard/simple'}>
            <Button component={'div'} variant="primary">Simple nested route</Button>
          </Link>
          <EmptyStateSecondaryActions>
            <Link to={'/dashboard/params'}>
              <Button component={'div'} variant="link">Nested route with params: no params provided</Button>
            </Link>
            <Link to={'/dashboard/params/hello'}>
              <Button component={'div'} variant="link">Nested routee with params: some params provided</Button>
            </Link>
            <Link to={'/dashboard/does-not-exist'}>
              <Button component={'div'} variant="link">Broken link</Button>
            </Link>
          </EmptyStateSecondaryActions>
        </EmptyState>
        {children}
      </PageSection>
    </>
  );
}
