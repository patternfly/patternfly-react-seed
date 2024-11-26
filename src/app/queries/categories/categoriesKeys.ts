import { PaginationType } from '../PaginationType';

const categoriesKeys = {
  all: ['categories'] as const,
  paginate: (baseKey: string, params: PaginationType) => [baseKey, ...categoriesKeys.all, { ...params }] as const,
};

export { categoriesKeys };
