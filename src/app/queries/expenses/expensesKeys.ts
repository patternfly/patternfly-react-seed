import { Pagination } from '../Pagination';

const expensesKeys = {
  all: ['expenses'] as const,
  paginate: (baseKey: string, params: Pagination) => [baseKey, ...expensesKeys.all, { ...params }] as const,
};

export { expensesKeys };
