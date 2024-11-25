import { ExpensesTable } from '@app/Expenses/List/ExpensesTable';
import { PageSection, Title } from '@patternfly/react-core';
import * as React from 'react';

const Dashboard: React.FunctionComponent = () => (
  <PageSection hasBodyWrapper={false}>
    <Title headingLevel="h1" size="lg">
      Dashboard
    </Title>
    <ExpensesTable />
  </PageSection>
);

export { Dashboard };
