import { ExpensesTable } from '@app/Expenses/List/ExpensesTable';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';
import { useFetchExpenses } from '@app/queries/expenses/useFetchExpenses';
import { PageSection, Title } from '@patternfly/react-core';
import * as React from 'react';

const Dashboard: React.FunctionComponent = () => {
  const [expensesQuery, setExpensesQuery] = React.useState<ExpensesQuery>({
    pagination: {
      page: 1,
      size: 20,
      order: 'asc',
    },
  });

  const fetchExpenses = useFetchExpenses('dashboard', expensesQuery);

  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        Dashboard
      </Title>
      <ExpensesTable
        expenses={fetchExpenses.data?.items}
        total={fetchExpenses.data?.total}
        status={fetchExpenses.status}
        query={expensesQuery}
        queryChangeCallback={setExpensesQuery}
      />
    </PageSection>
  );
};

export { Dashboard };
