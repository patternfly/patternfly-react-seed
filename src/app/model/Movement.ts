import { Category } from './Category';

type Movement = {
  id: string;
  date: number;
  name: string;
  description?: string;
  amount: number;
  category: Category;
  type: 'income' | 'expense';
};

export { Movement };
