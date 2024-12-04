import { useQuery } from '@tanstack/react-query';
import { movementsKeys } from './movementsKeys';
import { getMovements } from '@app/services/movements/movementsService';
import { MovementsQuery } from '@app/model/query/MovementsQuery';
import { queryClient } from '@app/queryClient';

export const refetchMovements = (baseKey: string) => {
  queryClient.invalidateQueries({ queryKey: movementsKeys.paginate(baseKey) });
};

export const useFetchMovements = (baseKey: string, query: MovementsQuery) => {
  const { data, error, dataUpdatedAt, status, refetch } = useQuery({
    queryKey: movementsKeys.paginate(baseKey, query),
    queryFn: () => getMovements(query),
    retry: false,
  });

  return {
    data: data?.data,
    error,
    dataUpdatedAt,
    status,
    refetch,
  };
};
