import { ExpensesTable } from '@app/Expenses/List/ExpensesTable';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';
import { Pagination } from '@app/model/query/Pagination';
import { Sorting } from '@app/model/query/Sorting';
import { useFetchCategories } from '@app/queries/categories/useFetchCategories';
import { useFetchExpenses } from '@app/queries/expenses/useFetchExpenses';
import { PageSection, Title } from '@patternfly/react-core';
import * as React from 'react';

const Dashboard: React.FunctionComponent = () => {
  const [expensesQuery, setExpensesQuery] = React.useState<ExpensesQuery>({
    page: 1,
    size: 20,
    direction: 'asc',
  });

  const [categoriesQuery] = React.useState<Pagination & Sorting>({
    page: 1,
    size: 100,
    direction: 'asc',
  });

  const fetchExpenses = useFetchExpenses('dashboard', expensesQuery);
  const fetchCategories = useFetchCategories('dashboard', categoriesQuery);

  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        Dashboard
      </Title>
      <ExpensesTable
        expenses={fetchExpenses.data?.items}
        categories={fetchCategories.data?.items}
        total={fetchExpenses.data?.total}
        status={fetchExpenses.status}
        expensesQuery={expensesQuery}
        queryChangeCallback={setExpensesQuery}
      />
    </PageSection>
  );
};

export { Dashboard };
