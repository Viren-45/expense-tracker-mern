import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
            maxLength: [100, "Title cannot exceed 100 characters"]
        },
        amount: {
            type: Number,
            required: [true, "Amount is required"],
            min: [0, "Amount cannot be negative"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
            enum: {
                values: ["Food", "Transport", "Housing", "Utilities", "Entertainment", "Health", "Shopping", "Other"],
                message: "{VALUE} is not a valid category"
            },
        },
        date: {
            type: Date,
            default: Date.now(),
        },
        note: {
            type: String,
            trim: true,
            maxLength: [500, "Note cannot exceed 500 characters"]
        },
    },
    {timestamps: true}
);

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;