import { Pagination } from './Pagination';
import { Sorting } from './Sorting';

type ExpensesQuery = {
  from?: string;
  to?: string;
  name?: string;
  amount?: number;
  categories?: string[];
} & Pagination &
  Sorting;

export { ExpensesQuery };
