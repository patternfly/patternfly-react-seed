import { ExpensesTable } from '@app/Expenses/List/ExpensesTable';
import { useFetchExpenses } from '@app/queries/expenses/useFetchExpenses';
import { PaginationType } from '@app/queries/PaginationType';
import { PageSection, Title } from '@patternfly/react-core';
import * as React from 'react';

const Dashboard: React.FunctionComponent = () => {
  const [expensesPagination, setExpensesPagination] = React.useState<PaginationType>({
    page: 1,
    size: 20,
    order: 'asc',
  });

  const fetchExpenses = useFetchExpenses('dashboard', expensesPagination);

  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        Dashboard
      </Title>
      <ExpensesTable
        expenses={fetchExpenses.data?.items}
        total={fetchExpenses.data?.total}
        status={fetchExpenses.status}
        pagination={expensesPagination}
        paginaChangeCallback={setExpensesPagination}
      />
    </PageSection>
  );
};

export { Dashboard };
