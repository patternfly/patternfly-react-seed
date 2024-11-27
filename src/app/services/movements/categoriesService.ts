import { MovementList } from '@app/model/MovementList';
import { Pagination } from '@app/model/query/Pagination';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';

const getCategories = (queryParams: Pagination) =>
  apiRequest.get<MovementList>(`/categories/?${stringify(queryParams, { encode: false, indices: false })}`, {
    headers: {
      Accept: 'application/json',
    },
  });

export { getCategories };
