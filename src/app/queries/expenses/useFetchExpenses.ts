import { useQuery } from '@tanstack/react-query';
import { expensesKeys } from './expensesKeys';
import { getExpenses } from '@app/services/expenses/expensesService';
import { ExpensesQuery } from '@app/model/query/ExpensesQuery';

export const useFetchExpenses = (baseKey: string, query: ExpensesQuery) => {
  const { data, error, dataUpdatedAt, status } = useQuery({
    queryKey: expensesKeys.paginate(baseKey, query),
    queryFn: () => getExpenses(query),
    retry: false,
  });

  return {
    data: data?.data,
    error,
    dataUpdatedAt,
    status,
  };
};
