import { ExpenseList } from '@app/model/ExpenseList';
import { PaginationType } from '@app/queries/PaginationType';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';

const getCategories = (queryParams: PaginationType) =>
  apiRequest.get<ExpenseList>(`/categories/?${stringify(queryParams, { encode: false, indices: false })}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export { getCategories };
