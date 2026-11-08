// src/app.js
import express from "express";
import expenseRoutes from "./routes/expenseRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Expense tracker api is running");
});

app.use("/api/expenses", expenseRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;