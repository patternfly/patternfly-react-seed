import { ExpenseList } from '@app/model/ExpenseList';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';

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

export { getExpenses };
