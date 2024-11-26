import { ExpenseList } from '@app/model/ExpenseList';
import { PaginationType } from '@app/queries/PaginationType';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';

const getExpenses = (queryParams: PaginationType) =>
  apiRequest.get<ExpenseList>(`/expenses/?${stringify(queryParams, { encode: false, indices: false })}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export { getExpenses };
