import { ExpenseList } from '@app/model/ExpenseList';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';
import { Expense } from '@app/model/Expense';

const getExpenses = (queryParams: ExpensesQuery) => {
  const { categories, ...rest } = queryParams;
  const categoriesFilter = categories?.length ? { categories: categories?.join(',') } : {};
  return apiRequest.get<ExpenseList>(
    `/expenses?${stringify({ ...categoriesFilter, ...rest }, { encode: false, indices: false })}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
};

const patchExpenses = (expenses: Expense[]) => apiRequest.patch<{ status: number }>('/expenses', expenses);

export { getExpenses, patchExpenses };
