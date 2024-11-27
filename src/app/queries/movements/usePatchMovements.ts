import { Movement } from '@app/model/Movement';
import { patchMovements } from '@app/services/movements/movementsService';
import { useMutation } from '@tanstack/react-query';
import { movementsKeys } from './movementsKeys';
import { refetchMovements } from './useFetchMovements';

export const usePatchMovements = (baseKey: string) => {
  const { mutate, data, error, status } = useMutation({
    mutationKey: movementsKeys.patch(baseKey),
    mutationFn: async (movements: Movement[]) => await patchMovements(movements),
    onSuccess: () => refetchMovements(baseKey),
  });

  return {
    mutate,
    data,
    status,
    error,
  };
};
