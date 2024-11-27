import { Expense } from '@app/model/Expense';
import { patchExpenses } from '@app/services/expenses/expensesService';
import { useMutation } from '@tanstack/react-query';
import { expensesKeys } from './expensesKeys';
import { refetchExpenses } from './useFetchExpenses';

export const usePatchExpenses = (baseKey: string) => {
  const { mutate, data, error, status } = useMutation({
    mutationKey: expensesKeys.patch(baseKey),
    mutationFn: async (expenses: Expense[]) => await patchExpenses(expenses),
    onSuccess: () => refetchExpenses(baseKey),
  });

  return {
    mutate,
    data,
    status,
    error,
  };
};
