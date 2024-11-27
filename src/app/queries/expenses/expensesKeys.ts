import { Pagination } from '@app/model/query/Pagination';

const expensesKeys = {
  all: ['expenses'] as const,
  paginate: (baseKey: string, params: Pagination) => [baseKey, ...expensesKeys.all, { ...params }] as const,
};

export { expensesKeys };
