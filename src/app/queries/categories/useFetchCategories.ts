import { getCategories } from '@app/services/expenses/categoriesService';
import { useQuery } from '@tanstack/react-query';
import { Pagination } from '../Pagination';
import { categoriesKeys } from './categoriesKeys';

export const useFetchCategories = (baseKey: string, params: Pagination) => {
  const { data, error, dataUpdatedAt, status } = useQuery({
    queryKey: categoriesKeys.paginate(baseKey, params),
    queryFn: () => getCategories(params),
    retry: false,
  });

  return {
    data: data?.data,
    error,
    dataUpdatedAt,
    status,
  };
};
