import { PaginationType } from '../PaginationType';

const expensesKeys = {
  all: ['expenses'] as const,
  paginate: (baseKey: string, params: PaginationType) => [baseKey, ...expensesKeys.all, { ...params }] as const,
};

export { expensesKeys };
