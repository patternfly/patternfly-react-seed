import { Movement } from '../Movement';
import { Pagination } from './Pagination';
import { Sorting } from './Sorting';

type MovementsQuery = {
  from?: string;
  to?: string;
  name?: string;
  amount?: number;
  categories?: string[];
  types?: Movement['type'][];
} & Pagination &
  Sorting;

export { MovementsQuery };
