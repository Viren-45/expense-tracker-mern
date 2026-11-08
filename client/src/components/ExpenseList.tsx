// client/src/components/ExpenseList.tsx

import type { Expense } from "../types/expense";
import ExpenseItem from "./ExpenseItem";

interface ExpenseListProps {
  expenses: Expense[];
}

function ExpenseList({ expenses }: ExpenseListProps) {
  if (expenses.length === 0) {
    return <p className="text-gray-500">No expenses yet.</p>;
  }

  return (
    <ul className="space-y-3">
      {expenses.map((expense) => (
        <ExpenseItem key={expense._id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpenseList;
