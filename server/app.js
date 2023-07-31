import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import("./db/conn.js");
import ExpenseSchema from "./schema/expensesSchema.js";

dotenv.config({ path: "../server/.env" });

// Middleware

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post("/postexpense", async (req, res) => {
  try {
    const { date, title, amount } = req.body;

    if (!title || !amount) {
      return res
        .status(403)
        .json({ message: "Expense Details are incomplete !" });
    } else {
      const newExpense = new ExpenseSchema({ date, title, amount });

      await newExpense.save();
      res.status(201).json({ message: "New Expense Added." });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is Listening on ${PORT}`);
});
