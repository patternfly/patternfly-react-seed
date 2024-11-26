import { Pagination } from './Pagination';

type ExpensesQuery = {
  from?: string;
  to?: string;
  name?: string;
  amount?: number;
  categories?: string[];
  pagination: Pagination;
};

export { ExpensesQuery };
