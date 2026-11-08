import { Router } from "express";
import { getExpenses, getExpenseById, createExpense, updateExpense, deleteExpense } from "../controllers/expenseController.js";

const router = Router();

router.route("/").get(getExpenses).post(createExpense);

router.route("/:id").get(getExpenseById).patch(updateExpense).delete(deleteExpense);

export default router;
