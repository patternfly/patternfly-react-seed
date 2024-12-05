import { MovementList } from '@app/model/MovementList';
import { stringify } from 'qs';
import apiRequest from '../apiRequest';
import { MovementsQuery } from '@app/model/query/MovementsQuery';
import { Movement } from '@app/model/Movement';

const getMovements = (queryParams: MovementsQuery) => {
  const { categories, types, ...rest } = queryParams;
  const categoriesFilter = categories?.length ? { categories: categories?.join(',') } : {};
  const typesFilter = types?.length ? { types: types?.join(',') } : {};
  return apiRequest.get<MovementList>(
    `/movements?${stringify({ ...categoriesFilter, ...typesFilter, ...rest }, { encode: false, indices: false })}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
};

const postMovement = (movement: Partial<Movement>) => apiRequest.post<Movement>('/movements', movement);

const deleteMovement = (id: string) => apiRequest.delete(`/movements/${id}`);

const patchMovements = (movements: Movement[]) => apiRequest.patch<{ status: number }>('/movements', movements);

const bulkMovements = (movements: Movement[]) => apiRequest.post<MovementList>('/bulk/movements', movements);

export { getMovements, postMovement, deleteMovement, patchMovements, bulkMovements };
