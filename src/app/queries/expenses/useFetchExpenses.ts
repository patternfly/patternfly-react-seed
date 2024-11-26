import { useQuery } from '@tanstack/react-query';
import { expensesKeys } from './expensesKeys';
import { PaginationType } from '../PaginationType';
import { getExpenses } from '@app/services/expenses/expensesService';

export const useFetchExpenses = (baseKey: string, params: PaginationType) => {
  const { data, error, dataUpdatedAt, status } = useQuery({
    queryKey: expensesKeys.paginate(baseKey, params),
    queryFn: () => getExpenses(params),
    retry: false,
  });

  return {
    data: data?.data,
    error,
    dataUpdatedAt,
    status,
  };
};
