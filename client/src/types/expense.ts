// cleint/src/types/expense.ts
export const CATEGORIES = [
  "Food",
  "Transport",
  "Housing",
  "Utilities",
  "Entertainment",
  "Health",
  "Shopping",
  "Other",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Expense {
  _id: string;
  title: string;
  amount: number;
  category: Category;
  date: string;
  note?: string;
  createdAt: string;
  updatedAt: string;
}

export type ExpenseInput = Pick<Expense, "title" | "amount" | "category"> &
  Partial<Pick<Expense, "date" | "note">>;
