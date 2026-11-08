// client/src/components/ExpenseItem.tsx
import type { Expense } from "../types/expense";
import { formatCurrency, formatDate } from "../utils/format";

interface ExpenseItemProps {
  expense: Expense;
}

function ExpenseItem({ expense }: ExpenseItemProps) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div>
        <p className="font-medium text-gray-900">{expense.title}</p>
        <p className="text-sm text-gray-500">
          {expense.category} · {formatDate(expense.date)}
        </p>
      </div>
      <p className="font-semibold text-gray-900">
        {formatCurrency(expense.amount)}
      </p>
    </li>
  );
}

export default ExpenseItem;
