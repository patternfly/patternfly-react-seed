import { ExpenseList } from '@app/model/ExpenseList';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';

const getExpenses = (queryParams: ExpensesQuery) => {
  const { pagination, ...rest } = queryParams;
  return apiRequest.get<ExpenseList>(
    `/expenses?${stringify({ ...rest, ...pagination }, { encode: false, indices: false })}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
};

export { getExpenses };
