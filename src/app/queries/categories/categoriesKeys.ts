import { Pagination } from '../Pagination';

const categoriesKeys = {
  all: ['categories'] as const,
  paginate: (baseKey: string, params: Pagination) => [baseKey, ...categoriesKeys.all, { ...params }] as const,
};

export { categoriesKeys };
