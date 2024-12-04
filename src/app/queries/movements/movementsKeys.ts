import { Pagination } from '@app/model/query/Pagination';

const movementsKeys = {
  all: ['movements'] as const,
  paginate: (baseKey: string, params?: Pagination) => [baseKey, ...movementsKeys.all, { ...params }] as const,
  patch: (baseKey: string) => [baseKey, ...movementsKeys.all, 'patch'] as const,
  post: (baseKey: string) => [baseKey, ...movementsKeys.all, 'post'] as const,
  delete: (baseKey: string) => [baseKey, ...movementsKeys.all, 'delete'] as const,
  bulk: (baseKey: string) => [baseKey, ...movementsKeys.all, 'bulk'] as const,
};

export { movementsKeys };
