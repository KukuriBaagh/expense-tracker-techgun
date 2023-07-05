import Expenses from "./components/ExpenseItem/Expenses"
import React, { useState } from "react"
import NewExpense from "./components/ExpenseItem/NewExpenses/NewExpense"

let dummy_expense = [
  {
    id: 'e1',
    title: 'School Fee',
    amount: 300,
    date: new Date(2023, 3, 18)
  },
  {
    id: 'e2',
    title: 'House Rent',
    amount: 700,
    date: new Date(2023, 5, 8)
  },
  {
    id: 'e3',
    title: 'Car Insurence',
    amount: 200,
    date: new Date(2023, 4, 28)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 500,
    date: new Date(2023, 6, 11)
  },
]

const App = () => {

  const [ expenses, setExpenses ] = useState(dummy_expense)

  const addExpenseHandler = (expense) => {
    const updatedExpense = [ expense, ...expenses ]
    setExpenses(updatedExpense)
    console.log(updatedExpense)
  }

  return (
    <>
      <NewExpense onAddExpense={ addExpenseHandler } />
      <Expenses item={expenses} />
    </>
  )
}

export default App
