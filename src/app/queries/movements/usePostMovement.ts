import { Movement } from '@app/model/Movement';
import { postMovement } from '@app/services/movements/movementsService';
import { useMutation } from '@tanstack/react-query';
import { movementsKeys } from './movementsKeys';
import { refetchMovements } from './useFetchMovements';

export const usePostMovement = (baseKey: string) => {
  const { mutate, data, error, status } = useMutation({
    mutationKey: movementsKeys.post(baseKey),
    mutationFn: async (movement: Partial<Movement>) => await postMovement(movement),
    onSuccess: () => refetchMovements(baseKey),
  });

  return {
    mutate,
    data,
    status,
    error,
  };
};
