// src/controllers/expenseController.js

import Expense from "../models/Expense.js";

// GET /api/expenses
export const getExpenses = async (req, res) => {
    const expenses = await Expense.find().sort({ date: -1 })
    res.json(expenses);
};

// GET /api/expenses/:id
export const getExpenseById = async (req, res) => {
    const id = req.params.id;
    const expense = await Expense.findById(id);

    if(!expense) {
        return res.status(404).json({ message: "Expense not found" });
    }

    res.json(expense);
};

// POST /api/expenses
export const createExpense = async (req,res) => {
    const { title, amount, category, date, note } = req.body;

    const expense = await Expense.create({ title, amount, category, date, note });

    res.status(201).json(expense);
};

// PATCH /api/expenses/:id
export const updateExpense = async (req, res) => {
    const { title, amount, category, date, note } = req.body;

    const expense = await Expense.findByIdAndUpdate(
        req.params.id,
        { title, amount, category, date, note },
        { new: true, runValidators: true }
    );

    if(!expense) {
        return res.status(404).json({ message: "Expense not found" });
    }

    res.json(expense);
};

// DELETE /api/expenses/:id
export const deleteExpense = async (req, res) => {
    const expense = await Expense.findByIdAndDelete(req.params.id);

    if(!expense) {
        return res.status(404).json({ message: "Expense not found" });
    }

    res.status(204).send();
}