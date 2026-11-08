// client/src/App.tsx

import { useEffect, useState } from "react";
import type { Expense } from "./types/expense";
import { getExpenses } from "./api/expenses";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getExpenses()
      .then(setExpenses)
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Expense Tracker
        </h1>

        {isLoading && <p className="text-gray-500">Loading expenses...</p>}

        {error && <p className="text-red-600">Error: {error}</p>}

        {!isLoading && !error && expenses.length === 0 && (
          <p className="text-gray-500">No expenses yet.</p>
        )}

        <ul className="space-y-3">
          {expenses.map((expense) => (
            <li
              key={expense._id}
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow=sm"
            >
              <div>
                <p className="font-medium text-gray-900">{expense.title}</p>
                <p className="text-sm text-gray-500">{expense.category}</p>
              </div>
              <p className="font-semibold text-gray-900">
                ${expense.amount.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
