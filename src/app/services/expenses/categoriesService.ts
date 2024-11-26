import { ExpenseList } from '@app/model/ExpenseList';
import { Pagination } from '@app/queries/Pagination';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';

const getCategories = (queryParams: Pagination) =>
  apiRequest.get<ExpenseList>(`/categories/?${stringify(queryParams, { encode: false, indices: false })}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export { getCategories };
