import { MovementList } from '@app/model/MovementList';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';
import { MovementsQuery } from '@app/model/query/MovementsQuery';
import { Movement } from '@app/model/Movement';

const getMovements = (queryParams: MovementsQuery) => {
  const { categories, ...rest } = queryParams;
  const categoriesFilter = categories?.length ? { categories: categories?.join(',') } : {};
  return apiRequest.get<MovementList>(
    `/movements?${stringify({ ...categoriesFilter, ...rest }, { encode: false, indices: false })}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
};

const patchMovements = (movements: Movement[]) => apiRequest.patch<{ status: number }>('/movements', movements);

export { getMovements, patchMovements };
