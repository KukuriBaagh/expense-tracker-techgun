import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ExpenseSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const Expense = mongoose.model("expense", ExpenseSchema);
Expense.createIndexes();

export default ExpenseSchema;
