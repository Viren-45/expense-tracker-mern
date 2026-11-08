// client/src/App.tsx

import { useEffect, useState } from "react";
import type { Expense } from "./types/expense";
import { getExpenses } from "./api/expenses";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";

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

        <ExpenseForm
          onCreated={(expense) => setExpenses((prev) => [expense, ...prev])}
        />

        {isLoading && <p className="text-gray-500">Loading expenses...</p>}

        {error && <p className="text-red-600">Error: {error}</p>}

        {!isLoading && !error && <ExpenseList expenses={expenses} />}
      </div>
    </main>
  );
}

export default App;
