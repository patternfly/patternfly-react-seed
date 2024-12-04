import { deleteMovement } from '@app/services/movements/movementsService';
import { useMutation } from '@tanstack/react-query';
import { movementsKeys } from './movementsKeys';
import { refetchMovements } from './useFetchMovements';

export const useDeleteMovement = (baseKey: string) => {
  const { mutate, data, error, status } = useMutation({
    mutationKey: movementsKeys.delete(baseKey),
    mutationFn: async (id: string) => await deleteMovement(id),
    onSuccess: () => refetchMovements(baseKey),
  });

  return {
    mutate,
    data,
    status,
    error,
  };
};
