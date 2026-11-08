// client/src/api/expenses.ts

import type { Expense, ExpenseInput } from "../types/expense";

const BASE_URL = "/api/expenses";

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(
      error?.message ?? `Request failed with status ${response.status}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export const getExpenses = () => request<Expense[]>(BASE_URL);

export const getExpense = (id: string) => request<Expense>(`${BASE_URL}/${id}`);

export const createExpense = (data: ExpenseInput) =>
  request<Expense>(BASE_URL, {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateExpense = (id: string, data: Partial<ExpenseInput>) =>
  request<Expense>(`${BASE_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

export const deleteExpense = (id: string) =>
  request<void>(`${BASE_URL}/${id}`, { method: "DELETE" });
