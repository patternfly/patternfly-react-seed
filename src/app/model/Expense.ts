import { Category } from './Category';

type Expense = {
  id: string;
  date: number;
  name: string;
  description?: string;
  amount: number;
  category: Category;
};

export { Expense };
