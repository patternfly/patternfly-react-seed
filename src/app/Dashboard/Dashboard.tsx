import { ExpensesTable } from '@app/Expenses/List/ExpensesTable';
import { Expense } from '@app/model/Expense';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';
import { Pagination } from '@app/model/query/Pagination';
import { Sorting } from '@app/model/query/Sorting';
import { useFetchCategories } from '@app/queries/categories/useFetchCategories';
import { useFetchExpenses } from '@app/queries/expenses/useFetchExpenses';
import { usePatchExpenses } from '@app/queries/expenses/usePatchExpenses';
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
  const patchExpenses = usePatchExpenses('dashboard');

  return (
    <PageSection hasBodyWrapper={false}>
      <Title headingLevel="h1" size="lg">
        Dashboard
      </Title>
      <ExpensesTable
        expenses={fetchExpenses.data?.items}
        categories={fetchCategories.data?.items}
        total={fetchExpenses.data?.total}
        queryStatus={fetchExpenses.status}
        patchStatus={patchExpenses.status}
        expensesQuery={expensesQuery}
        queryChangeCallback={setExpensesQuery}
        patchExpenses={(expenses: Expense[]) => patchExpenses.mutate(expenses)}
      />
    </PageSection>
  );
};

export { Dashboard };
